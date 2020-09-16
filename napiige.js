// when you need to update this list, you can use randomize_order.html
// to generate new radnom order (or to have an ordered list making the
// finding of duplicates easier)
var napi_ige_quote_locations = ["Péld. 15,3", "1 Kor. 13,10-12"];

function napiIgeGetQuoteLocationForDay(date) {
  var base = new Date("1900-01-01");
  var millisecs_in_a_day = 1000 * 60 * 60 * 24;
  var days_since_base = Math.abs(
    Math.floor((date.getTime() - base.getTime()) / millisecs_in_a_day)
  );
  var index = days_since_base % napi_ige_quote_locations.length;
  return napi_ige_quote_locations[index];
}

function napiIge(
  targetElement,
  translation = "RUF",
  dateString = "today",
  defaultText = "Bízzad az Úrra a te dolgaidat; és a te gondolatid véghez mennek. (Péld. 16,3)",
  loadingText = "..."
) {
  document.getElementById(targetElement).innerHTML = loadingText;
  var quote_location = napiIgeGetQuoteLocationForDay(new Date());
  if (dateString !== "today") {
    quote_location = napiIgeGetQuoteLocationForDay(new Date(dateString));
  }
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (xhr.status < 200 || xhr.status >= 300) {
      document.getElementById(targetElement).innerHTML = defaultText;
    } else {
      // show the result
      var response = JSON.parse(xhr.responseText);
      var text = "";
      if ("valasz" in response && "versek" in response["valasz"]) {
        var versek = response["valasz"]["versek"];

        for (var i = 0; i < versek.length; i++) {
          if (i > 0) {
            text += " ";
          }
          if ("szoveg" in versek[i]) {
            text += versek[i]["szoveg"];
          } else {
            document.getElementById(targetElement).innerHTML = defaultText;
            return;
          }
        }
      } else {
        document.getElementById(targetElement).innerHTML = defaultText;
      }
      text += " (" + quote_location + ")";
      document.getElementById(targetElement).innerHTML = text;
    }
  };

  xhr.onerror = function () {
    document.getElementById(targetElement).innerHTML = defaultText;
  };
  xhr.open(
    "GET",
    "https://szentiras.hu/api/idezet/" + quote_location + "/" + translation
  );
  xhr.send();
}

var napi_ige_quote_locations = [
  "1 Kor 13,10-13",
  "1Kor13,10-11",
  "1Kor13,10",
  "1Kor13,10-12"
];

function napi_ige_get_quote_location_for_day(date) {
  var base = new Date("1900-01-01");
  var millisecs_in_a_day = 1000 * 60 * 60 * 24;
  var days_since_base = Math.abs(
    Math.floor((date.getTime() - base.getTime()) / millisecs_in_a_day)
  );
  var index = days_since_base % napi_ige_quote_locations.length;
  return napi_ige_quote_locations[index];
}

function napi_ige(
  targetElement,
  translation = "KG",
  dateString = "now",
  loadingText = "..."
) {
  document.getElementById(targetElement).innerHTML = loadingText;
  var quote_location = napi_ige_get_quote_location_for_day(new Date());
  if (dateString !== "now") {
    quote_location = napi_ige_get_quote_location_for_day(new Date(dateString));
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var response = JSON.parse(xhr.responseText);
      var text = "";
      console.log(response);
      if ("valasz" in response && "versek" in response["valasz"]) {
        var versek = response["valasz"]["versek"];

        for (var i = 0; i < versek.length; i++) {
          if (i > 0) {
            text += " ";
          }
          text += versek[i]["szoveg"];
        }
      }
      text += " (" + quote_location + ")";
      document.getElementById(targetElement).innerHTML = text;
    }
  };
  xhr.open(
    "GET",
    "https://szentiras.hu/api/idezet/" + quote_location + "/" + translation
  );
  xhr.send();
}

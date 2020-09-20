// when you need to update this list, you can use randomize_order.html
// to generate new radnom order (or to have an ordered list making the
// finding of duplicates easier)
// also you can test individual quotes using fetch_quote.html
var napi_ige_quote_locations = [
  "Ef. 5, 1-2",
  "Mt. 6, 24",
  "Mt. 6, 19-21",
  "Mt. 19, 24",
  "1 Kor. 1, 25",
  "2 Pét. 3, 9",
  "Ézs. 54, 10",
  "Kol. 3, 17",
  "Ján. 14, 4-6",
  "Luk. 7, 13-15",
  "Luk. 11, 9",
  "Mt. 9, 2",
  "1 Thessz. 2, 12",
  "Zsolt. 9, 11",
  "Ján. 3, 36",
  "Mal. 3, 16",
  "2 Móz. 19, 5",
  "Mt. 24, 42",
  "1 Kor. 2, 4-5",
  "1 Kor. 13, 13",
  "ApCsel. 5, 29",
  "Fil. 1, 21",
  "Mt. 19, 29",
  "Luk. 6, 35-36",
  "Mt. 5, 4",
  "Gal. 5, 24",
  "Ján. 17, 3",
  "Ézs. 43, 1",
  "Jak. 1, 5",
  "Zsid. 12, 14",
  "Luk. 9, 47-48",
  "Róm. 6, 12",
  "2 Móz. 23, 7",
  "Fil. 2, 13",
  "Luk. 6, 31",
  "Ef. 4, 29",
  "Zsolt. 121, 2",
  "Zsolt. 100, 3",
  "ApCsel. 17, 30-31",
  "Róm. 12, 1-2",
  "Mt. 18, 7",
  "Róm. 10, 11",
  "Mt. 8, 26",
  "Mt. 5, 43-45",
  "2 Krón. 2, 5",
  "Hós. 6, 6",
  "1 Ján. 2, 15",
  "Zsolt. 37, 4",
  "4 Móz. 32, 24",
  "Zsid. 6, 11-12",
  "Ef. 4, 28",
  "Zsolt. 124, 8",
  "Luk. 18, 22",
  "Mt. 5, 6",
  "2 Móz. 15, 2",
  "1 Kor. 10, 13",
  "ApCsel. 10, 42-43",
  "Mt. 10, 16",
  "Zsolt. 119, 25",
  "Gal. 5, 22-23",
  "Róm. 6, 6",
  "Zsolt. 56, 12",
  "2 Kir. 6, 16-17",
  "Mt. 11, 29-30",
  "Jak. 1, 26",
  "Luk. 4, 18-19",
  "2 Tim. 1, 7",
  "Mt. 18, 2-3",
  "Jel. 3, 8",
  "2 Tim. 2, 3",
  "Mt. 11, 28",
  "1 Kor. 4, 5",
  "2 Tim. 2, 19",
  "Mt. 9, 13",
  "Zsid. 4, 15-16",
  "1 Ján. 1, 8",
  "Róm. 14, 19",
  "Zsolt. 72, 12-13",
  "Péld. 22, 9",
  "2 Móz. 15, 18",
  "Mt. 5, 3",
  "1 Kor. 3, 10",
  "1 Ján. 4, 9",
  "Neh. 2, 4-5",
  "Zsolt. 23, 4",
  "Jak. 2, 13",
  "Zsolt. 37, 34",
  "1 Kor. 13, 3",
  "1 Tim. 2, 11",
  "Zsolt. 36, 10",
  "2 Móz. 14, 14",
  "Zsolt. 55, 23",
  "Ján. 10, 14-15",
  "Mt. 20, 25-27",
  "5 Móz. 4, 31",
  "Róm. 2, 3",
  "1 Krón. 16, 11-12",
  "1 Sám. 25, 6",
  "Ján. 13, 7",
  "Zsolt. 60, 13",
  "Jak. 1, 17",
  "3 Ján. 1, 11",
  "1 Pét. 4, 8",
  "Zsolt. 34, 9",
  "1 Ján. 2, 12",
  "ApCsel. 20, 28",
  "Kol. 3, 2",
  "2 Kir. 17, 39",
  "1 Kir. 9, 3",
  "Jób. 5, 8",
  "Zsolt. 105, 1",
  "Zsolt. 37, 3",
  "Jel. 3, 20",
  "1 Krón. 16, 8-9",
  "Róm. 12, 21",
  "3 Móz. 20, 7",
  "ApCsel. 16, 31",
  "2 Móz. 20, 12",
  "Zof. 1, 7",
  "Luk. 8, 39",
  "2 Kor. 4, 17-18",
  "ApCsel. 26, 18",
  "Zsolt. 51, 3",
  "Mt. 3, 8",
  "Józs. 1, 8",
  "1 Pét. 3, 9",
  "Péld. 31, 30",
  "Náh. 1, 7",
  "Zsolt. 103, 11-4",
  "Jób. 22, 21",
  "Zsid. 13, 5",
  "Zsolt. 37, 5-6",
  "1 Kor. 3, 12",
  "Ján. 1, 12",
  "Mt. 22, 36-37",
  "Ján. 3, 16",
  "Ézs. 51, 12",
  "Ef. 6, 6-8",
  "Ján. 8, 12",
  "Mt. 5, 27-28",
  "1 Ján. 4, 4",
  "Zsolt. 148, 12-13",
  "Róm. 14, 12-13",
  "Zsid. 4, 14",
  "Péld. 16, 22",
  "Jak. 4, 8",
  "Luk. 8, 49-50",
  "1 Tim. 6, 12",
  "Mt. 23, 12",
  "Luk. 21, 36",
  "Zsolt. 25, 10",
  "Zsolt. 7, 10",
  "Péld. 16, 3",
  "Mt. 25, 21",
  "ApCsel. 22, 14",
  "2 Krón. 29, 11",
  "5 Móz. 30, 19",
  "Péld. 3, 7",
  "Fil. 2, 7-8",
  "Róm. 14, 10",
  "Mk. 11, 24",
  "1 Kor. 13, 4-7",
  "Fil. 4, 8",
  "Péld. 15, 3",
  "Ján. 3, 31-32",
  "Zsolt. 62, 11",
  "1 Tim. 6, 6-7",
  "Ézs. 40, 31",
  "Jel. 21, 7",
  "1 Móz. 4, 7",
  "Fil. 2, 11",
  "Mk. 9, 24",
  "2 Kor. 6, 13-14",
  "1 Móz. 28, 15",
  "2 Kor. 5, 10",
  "1 Ján. 4, 20",
  "ApCsel. 3, 19-20",
  "Józs. 23, 11",
  "2 Kor. 12, 9",
  "1 Kir. 8, 18",
  "Józs. 1, 5",
  "Ez. 18, 32",
  "ApCsel. 13, 47",
  "Zsolt. 111, 10",
  "Mk. 11, 25-26",
  "1 Thessz. 5, 5-6",
  "1 Tim. 6, 17",
  "Kol. 2, 6-7",
  "5 Móz. 5, 32",
  "Zsid. 13, 16",
  "Zsolt. 37, 16-17",
  "1 Pét. 3, 15",
  "Mt. 5, 38-39",
  "Róm. 12, 9",
  "Jób. 37, 3-5",
  "Mt. 16, 24",
  "Péld. 5, 21",
  "ApCsel. 2, 38",
  "1 Kor. 4, 20",
  "Kol. 3, 23-24",
  "2 Krón. 19, 7",
  "1 Kir. 2, 2",
  "Jel. 3, 5",
  "Ján. 3, 18",
  "Mt. 26, 41",
  "1 Móz. 12, 2",
  "ApCsel. 22, 16",
  "Ján. 3, 30",
  "Luk. 14, 10-11",
  "2 Krón. 15, 7",
  "Péld. 13, 20",
  "Zsolt. 145, 18",
  "2 Móz. 20, 6",
  "Zsolt. 6, 3",
  "Ézs. 53, 5",
  "Zsolt. 103, 17",
  "1 Sám. 12, 21",
  "2 Móz. 23, 1",
  "3 Móz. 19, 18",
  "Jak. 5, 8",
  "Ján. 14, 1",
  "Józs. 23, 8",
  "Zsolt. 42, 12",
  "ApCsel. 1, 7",
  "2 Móz. 20, 8",
  "Fil. 2, 5",
  "Zsid. 2, 18",
  "Zsolt. 32, 11",
  "2 Tim. 2, 23",
  "Ézs. 43, 11",
  "1 Kor. 15, 33",
  "Jób. 5, 17-18",
  "Luk. 14, 26-27",
  "Jak. 1, 2-3",
  "2 Krón. 25, 8",
  "Zsolt. 11, 7",
  "2 Kor. 9, 7",
  "Mt. 6, 3-4",
  "1 Kor. 16, 14",
  "1 Ján. 4, 18",
  "Fil. 4, 4",
  "ApCsel. 20, 26-27",
  "Ján. 15, 7",
  "1 Kor. 15, 58",
  "ApCsel. 10, 34-35",
  "Zsolt. 94, 10-11",
  "ApCsel. 18, 9-10",
  "Gal. 5, 16",
  "2 Tim. 3, 16",
  "Zsolt. 25, 18",
  "Kol. 2, 14",
  "Kol. 2, 20-21",
  "Zsolt. 17, 7",
  "Mt. 4, 10",
  "Zsolt. 34, 19",
  "1 Kor. 6, 9-10",
  "Zsid. 11, 1",
  "Zsolt. 50, 15",
  "Kol. 1, 13-14",
  "Zsolt. 34, 14",
  "2 Móz. 33, 21",
  "Mt. 5, 5",
  "Jel. 19, 9",
  "Mt. 5, 16",
  "Ján. 13, 34",
  "Zsolt. 25, 20",
  "Luk. 6, 46",
  "Péld. 4, 23",
  "Jób. 37, 10-12",
  "Zsid. 12, 11",
  "Zsolt. 92, 13",
  "Mt. 22, 36-40",
  "Ján. 1, 9-11",
  "Mt. 21, 22",
  "1 Ján. 3, 18",
  "1 Kor. 6, 19-20",
  "Zsolt. 27, 10",
  "Róm. 5, 8",
  "Jsir. 3, 26",
  "Zsolt. 52, 10",
  "Zsid. 4, 12",
  "Zsolt. 27, 14",
  "1 Thessz. 4, 11",
  "Jel. 2, 2",
  "2 Tim. 2, 14",
  "Ján. 11, 25-26",
  "Péld. 10, 19",
  "Mik. 7, 19",
  "Róm. 2, 11-12",
  "Róm. 2, 1",
  "Zsolt. 103, 2",
  "Préd. 5, 4",
  "Zsolt. 146, 8",
  "Ján. 15, 12",
  "1 Kor. 1, 22-24",
  "1 Tim. 4, 11",
  "Zsolt. 32, 8",
  "Luk. 22, 40",
  "2 Thessz. 3, 3",
  "1 Pét. 1, 14-15",
  "Zsolt. 51, 19",
  "Mt. 14, 31-32",
  "1 Tim. 4, 16",
  "Zsolt. 41, 4",
  "Ef. 4, 25",
  "Péld. 15, 11",
  "Zsolt. 44, 21-22",
  "Zsolt. 58, 2",
  "Ef. 4, 4-6",
  "Luk. 16, 15",
  "Zsid. 11, 6",
  "1 Thessz. 4, 13",
  "Zsid. 10, 35",
  "ApCsel. 3, 26",
  "Jób. 15, 11",
  "Mt. 28, 19-20",
  "Luk. 12, 33-34",
  "ApCsel. 8, 22",
  "Zsid. 12, 1",
  "Zsolt. 33, 17-18",
  "1 Kor. 13, 2",
  "Ef. 2, 8-9",
  "Zsolt. 33, 10-11",
  "Péld. 3, 5",
  "Mk. 4, 39-41",
  "Ján. 13, 15",
  "Zsolt. 86, 11",
  "Zsolt. 25, 12-13",
  "Mt. 5, 11-12",
  "1 Ján. 1, 9",
  "1 Ján. 3, 5",
  "1 Kor. 1, 27-29",
  "5 Móz. 8, 6",
  "Luk. 21, 14-15",
  "1 Pét. 5, 7",
  "Ézs. 1, 17",
  "Jak. 4, 17",
  "Zsolt. 33, 22",
  "2 Tim. 4, 5-2",
  "2 Kor. 5, 6-7",
  "Róm. 8, 13",
  "Mk. 10, 45",
  "1 Pét. 2, 5",
  "Mt. 7, 21",
  "Mt. 5, 8",
  "Ézs. 45, 5",
  "Róm. 8, 38-39",
  "Zsolt. 18, 31",
  "Mk. 10, 27",
  "Jak. 5, 15",
  "Róm. 8, 33",
  "1 Thessz. 2, 4",
  "Zsolt. 39, 7-8",
  "1 Móz. 24, 49",
  "Jak. 4, 10",
  "1 Pét. 4, 9",
  "Mt. 6, 14-15",
  "2 Móz. 18, 19",
  "Jer. 2, 17",
  "Róm. 6, 23",
  "1 Kor. 13, 1",
  "Ján. 8, 36",
  "1 Kor. 1, 18",
  "Zsolt. 27, 13-14",
  "Zsid. 12, 28",
  "1 Kor. 9, 16",
  "Zsolt. 118, 17",
  "Luk. 6, 32",
  "1 Krón. 28, 9",
  "Zsolt. 25, 7",
  "Zsolt. 34, 15",
  "Péld. 21, 2",
  "Róm. 1, 16-17",
  "Jób. 19, 25-26",
  "Kol. 4, 5",
  "Róm. 2, 4",
  "1 Sám. 16, 7",
  "Zsolt. 90, 12",
  "Luk. 11, 34",
  "1 Kor. 10, 12",
  "1 Ján. 3, 14",
  "Jak. 1, 12",
  "Luk. 5, 20",
  "2 Tim. 4, 1-2",
  "Jel. 2, 3-4",
  "Mt. 6, 34",
  "Ján. 6, 37-38",
  "Ézs. 57, 12",
  "Luk. 6, 33",
  "1 Kor. 10, 31",
  "5 Móz. 3, 22",
  "ApCsel. 20, 34-35",
  "1 Tim. 4, 12",
  "Mt. 23, 28",
  "ApCsel. 4, 20",
  "Kol. 3, 12",
  "Róm. 5, 3-5",
  "Zsolt. 10, 13-14",
  "Róm. 12, 10-11",
  "1 Kor. 13, 8",
  "2 Sám. 22, 31",
  "2 Móz. 4, 12",
  "Róm. 2, 13",
  "Mt. 19, 23",
  "Ef. 4, 3",
  "Mt. 3, 2",
  "Zsid. 13, 14",
  "Dán. 12, 2",
  "Mt. 5, 7",
  "Ján. 3, 17",
  "Ef. 4, 31",
  "5 Móz. 30, 8-9",
  "Mt. 19, 30",
  "Zsolt. 25, 11",
  "Kol. 4, 2",
  "Ez. 36, 26",
  "Luk. 1, 28",
  "2 Ján. 1, 10-11",
  "Jak. 1, 22",
  "Zsolt. 103, 3-4",
  "2 Móz. 20, 3",
  "2 Tim. 2, 22",
  "Fil. 3, 20",
  "Fil. 2, 3",
  "Róm. 10, 9",
  "Róm. 12, 17",
  "2 Tim. 2, 24",
  "Mk. 8, 34",
  "Ján. 12, 26",
  "Ézs. 36, 5",
  "Jak. 1, 27",
  "Zsolt. 116, 8-9",
  "Jak. 1, 19-20",
  "5 Móz. 26, 10",
  "1 Kor. 1, 30-31",
  "Gal. 6, 9-10",
  "1 Kor. 3, 11",
  "Mt. 5, 9",
  "Ján. 15, 16",
  "Ján. 20, 29",
  "Kol. 4, 17",
  "Luk. 21, 34-35",
  "Zsolt. 25, 5",
  "Zsolt. 50, 23",
  "Józs. 4, 24",
  "Gal. 5, 25-26",
  "Péld. 20, 22",
  "Jel. 14, 7",
  "Mt. 19, 25-26",
  "Zsolt. 112, 4",
  "Mk. 8, 35",
  "Fil. 4, 13",
  "5 Móz. 5, 33",
  "Kol. 3, 16",
  "Jak. 5, 16",
  "1 Kor. 13, 12",
  "3 Móz. 19, 31",
  "Mt. 5, 10",
  "1 Pét. 2, 9",
  "Zsolt. 121, 5",
  "3 Móz. 19, 17",
  "Ézs. 40, 29",
  "Zsolt. 118, 8-9",
  "Ján. 14, 18",
  "Róm. 8, 28",
  "Péld. 15, 16",
  "1 Thessz. 5, 21-22",
  "Róm. 6, 13",
  "Ján. 15, 5",
  "Mt. 10, 32",
  "Kol. 3, 15",
  "Zsolt. 34, 5-6",
  "Mt. 9, 9",
  "Ján. 15, 20",
  "Ján. 6, 47",
  "Jer. 10, 23",
  "Mk. 8, 36-38",
  "1 Kor. 16, 13",
  "Péld. 28, 13",
  "Róm. 13, 13-14",
  "Ef. 2, 19",
  "Mt. 5, 14",
  "Fil. 4, 6",
  "Péld. 17, 22",
  "Péld. 21, 25-26",
  "2 Kor. 10, 17-18",
  "Ef. 4, 32",
  "Ján. 15, 9",
  "1 Pét. 5, 5"
];

function napiIgeGetQuoteLocationForDay(date) {
  var base = new Date("1900-01-01");
  var millisecs_in_a_day = 1000 * 60 * 60 * 24;
  var days_since_base = Math.abs(
    Math.floor((date.getTime() - base.getTime()) / millisecs_in_a_day)
  );
  var index = days_since_base % napi_ige_quote_locations.length;
  return napi_ige_quote_locations[index];
}

var napi_ige_default_params = {
  quoteTarget: "napi_ige_ref",
  locationTarget: undefined,
  translation: "RUF",
  dateString: "today",
  defaultQuote:
    "Bízzad az Úrra a te dolgaidat; és a te gondolatid véghez mennek.",
  defaultLocation: "Péld. 16,3",
  loadingText: "..."
};

function napiIge(params) {
  params = Object.assign({}, napi_ige_default_params, params);
  napiIgeSetQuote(params, params["loadingText"], params["loadingText"]);
  var quote_location = napiIgeGetQuoteLocationForDay(new Date());
  if (params["dateString"] !== "today") {
    quote_location = napiIgeGetQuoteLocationForDay(
      new Date(params["dateString"])
    );
  }
  console.log(quote_location);
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (xhr.status < 200 || xhr.status >= 300) {
      napiIgeSetQuote(
        params,
        params["defaultQuote"],
        params["defaultLocation"]
      );
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
            text += versek[i]["szoveg"].trim();
          } else {
            napiIgeSetQuote(
              params,
              params["defaultQuote"],
              params["defaultLocation"]
            );
            return;
          }
        }
      } else {
        napiIgeSetQuote(
          params,
          params["defaultQuote"],
          params["defaultLocation"]
        );
      }
      napiIgeSetQuote(params, text, quote_location);
    }
  };

  xhr.onerror = function () {
    napiIgeSetQuote(params, params["defaultQuote"], params["defaultLocation"]);
  };
  xhr.open(
    "GET",
    "https://szentiras.hu/api/idezet/" +
      quote_location +
      "/" +
      params["translation"]
  );
  xhr.send();
}

function napiIgeSetQuote(params, quote, location) {
  var text = quote.replace("<br>", " ");
  text = quote.replace("<br/>", " ");
  text = quote.replace("<br />", " ");
  text = quote.trim();
  document.getElementById(params["quoteTarget"]).innerHTML = text;
  if (params["locationTarget"]) {
    document.getElementById(params["locationTarget"]).innerHTML = location;
  } else {
    document.getElementById(params["quoteTarget"]).innerHTML +=
      " (" + location + ")";
  }
}

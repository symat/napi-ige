var book_order = {
  "1 Móz": 0,
  "2 Móz": 1,
  "3 Móz": 2,
  "4 Móz": 3,
  "5 Móz": 4,
  Józs: 5,
  Bír: 6,
  Ruth: 7,
  "1 Sám": 8,
  "2 Sám": 9,
  "1 Kir": 10,
  "2 Kir": 11,
  "1 Krón": 12,
  "2 Krón": 13,
  Ezsd: 14,
  Neh: 15,
  Eszt: 16,
  Jób: 17,
  Zsolt: 18,
  Péld: 19,
  Préd: 20,
  Énekek: 21,
  Ézs: 22,
  Jer: 23,
  Jsir: 24,
  Ez: 25,
  Dán: 26,
  Hós: 27,
  Jóel: 28,
  Ámós: 29,
  Abd: 30,
  Jón: 31,
  Mik: 32,
  Náh: 33,
  Hab: 34,
  Zof: 35,
  Hag: 36,
  Zak: 37,
  Mal: 38,
  Mt: 39,
  Mk: 40,
  Luk: 41,
  Ján: 42,
  ApCsel: 43,
  Róm: 44,
  "1 Kor": 45,
  "2 Kor": 46,
  Gal: 47,
  Ef: 48,
  Fil: 49,
  Kol: 50,
  "1 Thessz": 51,
  "2 Thessz": 52,
  "1 Tim": 53,
  "2 Tim": 54,
  Tit: 55,
  Filem: 56,
  Zsid: 57,
  Jak: 58,
  "1 Pét": 59,
  "2 Pét": 60,
  "1 Ján": 61,
  "2 Ján": 62,
  "3 Ján": 63,
  Júd: 64,
  Jel: 65
};

function parseLocation(loc) {
  var parsed = [];
  var bookSplit = loc.split(".");
  parsed[0] = book_order[bookSplit[0].trim()];
  var chapterSplit = bookSplit[1].split(",");
  parsed[1] = parseInt(chapterSplit[0].trim(), 10);
  parsed[2] = chapterSplit[1].trim();
  parsed[3] = parsed[2];
  if (parsed[2].indexOf("-") > 0) {
    parsed[3] = parsed[2].split("-")[1].trim();
    parsed[2] = parsed[2].split("-")[0].trim();
  }
  parsed[2] = parseInt(parsed[2], 10);
  parsed[3] = parseInt(parsed[3], 10);
  return parsed;
}

function orderArray(array) {
  array.sort(function (x, y) {
    var lx = parseLocation(x);
    var ly = parseLocation(y);

    if (lx[0] !== ly[0]) {
      return lx[0] > ly[0] ? 1 : -1;
    }
    if (lx[1] !== ly[1]) {
      return lx[1] > ly[1] ? 1 : -1;
    }
    if (lx[2] !== ly[2]) {
      return lx[2] > ly[2] ? 1 : -1;
    }
    if (lx[3] !== ly[3]) {
      return lx[3] > ly[3] ? 1 : -1;
    }
    return 0;
  });
  return;
}

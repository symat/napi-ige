# Napi Ige

**A small javascrip library to get daily Hungarian Bible quotes.**

The basic idea is to provide a very small javascript function that can be embedded into
any webpage, without requiring any dependency or framework. It is only 3 KB and
compatible even with the very old javascript standards.

## Special Thanks

The library is fetching the texts from the https://szentiras.hu, we owe thanks to the maintainer of that site and API.

## Download

The latest stable version is: `1.0.0`

You can use jsdelivr, a free CDN to download the minified javascript library:

```
   <script src="https://cdn.jsdelivr.net/gh/symat/napi-ige@1.0.0/napiige.min.js"></script>
```

Alternatively, by refrencing `1`, you will get the latest `1.x.y` version, which is always backward compatible with 1.0.0, but also contains extra features and bugfixes:

```
   <script src="https://cdn.jsdelivr.net/gh/symat/napi-ige@1/napiige.min.js"></script>
```

## How it works

First you must include the library, then you can use a javascript function that will asynchronously fetch the quote and replace the inner-html of a DOM element.

Basic example:

```
  <body>
    <b>Quote:</b>
    <div id="myref"></div>

    <script src="https://cdn.jsdelivr.net/gh/symat/napi-ige@1/napiige.min.js"></script>

    <script>
      window.addEventListener("load", function () {
        napiIge({quoteTarget: "myref"});
      });
    </script>
  </body>
```

The function `napiIge` accepts a dictionary you can use to specify the following parameters:

- `quoteTarget`: id of the DOM element where the quote should be loaded (default: `"napi_ige_ref"`)
- `locationTarget`: id of the DOM element where the location (verse) should be loaded. If it is not defined, then the location will be printed after the quote, like: "<quoteText> (<verse>)". (default: `undefined`)
- `translation`: id of the supported bible translations, see: https://szentiras.hu/forditasok (default: `"RUF"`)
- `dateString`: date in ISO string format (e.g. `"1985-04-17"`), or `"today"` for the current date (default: `"today"`)
- `defaultQuote`: the quote to show if any error happens during fetching the text from the Bible, e.g. if https://szentiras.hu is down (default: `"Bízzad az Úrra a te dolgaidat; és a te gondolatid véghez mennek."`)
- `defaultLocation`: the location (verse) to show if any error happens during fetching the text from the Bible, e.g. if https://szentiras.hu is down (default: `"Péld. 16,3"`)
- `loadingText`: the text to show until the quote is fetched (default: `"..."`)

You can find more examples about how to use the `napiIge()` function in the [index.html](index.html).

## Quotes

In version 1.0.0, there are 489 quotes in the database. In the following list we print them using the default Bible translation (Magyar Bibliatársulat újfordítású Bibliája, 2014):

**1 Móz. 4, 7:** Hiszen ha jól cselekszel, emelt fővel járhatsz. Ha pedig nem jól cselekszel, a bűn az ajtó előtt leselkedik, és rád vágyódik, de te uralkodjál rajta!

**1 Móz. 12, 2:** Nagy néppé teszlek, és megáldalak, naggyá teszem nevedet, és áldás leszel.

**1 Móz. 24, 49:** Most azért, ha meg akarjátok mutatni, hogy szeretitek uramat, és hűek vagytok hozzá, mondjátok meg nekem! De ha nem, azt is mondjátok meg, mert akkor máshol kell tovább keresgélnem!

**1 Móz. 28, 15:** Mert én veled vagyok, megőrizlek téged, akárhova mégy, és visszahozlak erre a földre. Bizony, nem hagylak el, amíg nem teljesítem, amit megígértem neked.

**2 Móz. 4, 12:** Most azért csak menj: majd én segítségedre leszek a beszédben, és megtanítalak arra, hogy mit beszélj!

**2 Móz. 14, 14:** Az ÚR harcol értetek, ti pedig maradjatok veszteg!

**2 Móz. 15, 2:** Erőm és énekem az ÚR, megszabadított engem. Ő az én Istenem, őt dicsőítem, atyám Istene, őt magasztalom.

**2 Móz. 15, 18:** Az ÚR uralkodik örökkön-örökké!

**2 Móz. 18, 19:** Most azért hallgass a szavamra; hadd adjak tanácsot neked, és Isten is veled lesz. Légy te a nép szószólója Istennél, és te vidd ügyeiket Isten elé!

**2 Móz. 19, 5:** Most azért, ha engedelmesen hallgattok szavamra, és megtartjátok szövetségemet, akkor, bár enyém az egész föld, valamennyi nép közül ti lesztek az én tulajdonom.

**2 Móz. 20, 3:** Ne legyen más istened rajtam kívül!

**2 Móz. 20, 6:** De irgalmasan bánok ezer nemzedéken át azokkal, akik szeretnek engem és megtartják parancsolataimat.

**2 Móz. 20, 8:** Emlékezz meg a nyugalom napjáról, és szenteld meg azt!

**2 Móz. 20, 12:** Tiszteld apádat és anyádat, hogy hosszú ideig élhess azon a földön, amelyet Istened, az ÚR ad neked!

**2 Móz. 23, 1:** Hazug hírt ne terjessz! Ne segítsd a bűnöst azzal, hogy hamisan tanúskodsz mellette!

**2 Móz. 23, 7:** A hamis ügytől maradj távol! Az ártatlant és igazat ne öld meg, mert én nem adok igazat a bűnösnek!

**2 Móz. 33, 21:** Majd ezt mondta az ÚR: Van egy hely nálam: állj ide a kősziklára!

**3 Móz. 19, 17:** Ne gyűlöld szívedben embertársadat! Fedd meg bátran honfitársadat, hogy ne légy részes a vétkében.

**3 Móz. 19, 18:** Ne légy bosszúálló, se haragtartó néped fiaival szemben! Szeresd felebarátodat, mint magadat! Én vagyok az ÚR!

**3 Móz. 19, 31:** Ne forduljatok halottidézőkhöz, és ne tudakozódjatok jövendőmondóknál, mert tisztátalanokká teszitek magatokat velük. Én, az ÚR vagyok a ti Istenetek!

**3 Móz. 20, 7:** Szenteljétek oda magatokat, és legyetek szentek, mert én, az ÚR vagyok a ti Istenetek!

**4 Móz. 32, 24:** Építsetek hát városokat családotoknak és aklokat nyájaitoknak, de amit kimondtatok, azt tegyétek meg!

**5 Móz. 3, 22:** Ne féljetek tőlük, mert Istenetek, az ÚR maga harcol értetek!

**5 Móz. 4, 31:** nem hagy akkor cserben, és nem hagy elpusztulni, mert irgalmas Isten az ÚR, a te Istened. Nem feledkezik meg az atyáiddal kötött szövetségről, amelyre esküt tett nekik.

**5 Móz. 5, 32:** Tartsátok meg és teljesítsétek azt, amit Istenetek, az ÚR megparancsolt nektek, ne térjetek el attól se jobbra, se balra!

**5 Móz. 5, 33:** Mindenben azon az úton járjatok, amelyet megparancsolt nektek Istenetek, az ÚR, hogy élhessetek, jó dolgotok legyen, és hosszú ideig lakhassatok azon a földön, amelyet birtokba vesztek.

**5 Móz. 8, 6:** Tartsd meg tehát Istenednek, az ÚRnak a parancsolatait, az ő utain járj, és őt féld!

**5 Móz. 26, 10:** Azért hoztam most ide a termés legjavát arról a földről, amelyet te adtál nekem, URam! Így tedd azt oda Istenednek, az ÚRnak színe elé, és borulj le Istenednek, az ÚRnak színe előtt!

**5 Móz. 30, 8-9:** És te újra hallgatni fogsz az ÚR szavára, és teljesíted minden parancsolatát, amelyeket ma megparancsolok neked. Elhalmoz téged javaival Istened, az ÚR kezed minden munkájában, méhed gyümölcsében, állataid ivadékában és földed termésében. Mert újra örömét leli majd az ÚR abban, hogy jót tegyen veled, ahogyan örömét lelte atyáidban,

**5 Móz. 30, 19:** Tanúul hívom ma ellenetek az eget és a földet, mert elétek adtam az életet és a halált, az áldást és az átkot. Válaszd hát az életet, hogy élhess te és utódaid is!

**Józs. 1, 5:** Senki sem állhat ellened egész életedben. Veled leszek, ahogyan Mózessel is vele voltam. Nem hagylak magadra téged, és nem hagylak el.

**Józs. 1, 8:** Ne hagyd abba ennek a törvénykönyvnek az olvasását, arról elmélkedj éjjel-nappal, őrizd meg és tartsd meg mindazt, ami ebben meg van írva. Akkor sikerrel jársz utadon, és boldogulsz.

**Józs. 4, 24:** hogy megtudja a föld minden népe, milyen erős az ÚR keze, és hogy féljétek Isteneteket, az URat mindenkor.

**Józs. 23, 8:** Ragaszkodjatok viszont Istenetekhez, az ÚRhoz, ahogyan a mai napig tettétek!

**Józs. 23, 11:** Azért nagyon vigyázzatok magatokra, és szeressétek Isteneteket, az URat!

**1 Sám. 12, 21:** El ne tántorodjatok, hogy a semmiket kövessétek, amelyek tehetetlenek, és nem tudnak megmenteni, mert semmik azok.

**1 Sám. 16, 7:** De az ÚR ezt mondta Sámuelnek: Ne tekints a megjelenésére, se termetes növésére, mert én megvetem őt. Mert nem az a fontos, amit lát az ember. Az ember azt nézi, ami a szeme előtt van, de az ÚR azt nézi, ami a szívben van.

**1 Sám. 25, 6:** Ezt mondjátok neki: Békesség neked, békesség házad népének, békesség mindenednek!

**2 Sám. 22, 31:** Isten útja tökéletes, az ÚR beszéde színigaz. Pajzsa ő mindazoknak, akik hozzá menekülnek.

**1 Kir. 2, 2:** Én most elmegyek azon az úton, amelyen minden földi halandó elmegy. Légy erős, légy férfi!

**1 Kir. 8, 18:** akkor ezt mondta apámnak, Dávidnak az ÚR: Azzal, hogy házat akartál építeni a nevem tiszteletére, jót akartál.

**1 Kir. 9, 3:** Ezt mondta neki az ÚR: Meghallgattam imádságodat és könyörgésedet, amelyet elém tártál. Megszentelem ezt a templomot, amelyet építettél, hogy itt legyen az én nevem mindörökké; itt lesz a szemem és a szívem is mindenkor!

**2 Kir. 6, 16-17:** De ő így felelt: Ne félj, mert többen vannak velünk, mint ővelük! Majd Elizeus így imádkozott: URam, nyisd meg a szemét, hadd lásson! És az ÚR megnyitotta a szolgának a szemét, és az meglátta, hogy tele van a hegy Elizeus körül tüzes lovakkal és harci kocsikkal.

**2 Kir. 17, 39:** Az URat, a ti Isteneteket féljétek, és ő megment benneteket minden ellenségetek kezéből!

**1 Krón. 16, 8-9:** Adjatok hálát az ÚRnak, hívjátok segítségül nevét, hirdessétek tetteit a népek közt! Énekeljetek, zengjetek zsoltárt neki, emlegessétek minden csodáját!

**1 Krón. 16, 11-12:** Folyamodjatok az ÚRhoz, az ő hatalmához, keressétek orcáját szüntelen! Emlékezzetek csodatetteire, amelyeket véghezvitt, csodáira és döntéseire,

**1 Krón. 28, 9:** Te pedig, fiam, Salamon, ismerd meg atyád Istenét, és szolgálj neki teljes szívvel és készséges lélekkel, mert megvizsgál az ÚR minden szívet, és megismer minden szándékot és indulatot. Ha keresed, megtalálhatod. De ha elhagyod őt, akkor félreállít téged végleg.

**2 Krón. 2, 5:** De kinek is lenne ereje ahhoz, hogy templomot építsen neki? Hiszen az ég és az egek egei sem tudják magukba fogadni őt! És ki vagyok én, hogy templomot akarok építeni? Csak azért teszem, hogy ott áldozhassanak neki.

**2 Krón. 15, 7:** Ti azonban legyetek erősek, ne lankadjatok el, mert tetteiteknek meglesz a jutalma!

**2 Krón. 19, 7:** Rettegjetek hát az ÚRtól, és vigyázzatok, hogyan jártok el, mert Istenünk, az ÚR nem tűri a hamisságot, a személyválogatást és a vesztegetés elfogadását!

**2 Krón. 25, 8:** hanem menj egyedül a harcba! Viselkedj bátran, különben bukásodat okozza Isten az ellenség előtt, mert az Istennek van ereje ahhoz, hogy megsegítsen, vagy elbuktasson.

**2 Krón. 29, 11:** Fiaim, ne tétlenkedjetek! Hiszen titeket választott ki az ÚR, hogy az ő szolgálatára álljatok, neki szolgáljatok és áldozzatok.

**Neh. 2, 4-5:** Akkor a király ezt kérdezte tőlem: Mit kívánsz tehát? Én pedig imádkoztam a menny Istenéhez, majd ezt mondtam a királynak: Ha jónak látja a király, és ha méltónak tartod rá a te szolgádat, akkor küldj el engem Júdába, abba a városba, ahol őseim sírja van, hogy felépítsem azt!

**Jób. 5, 8:** De én az Istenhez fordulnék, Istenre bíznám az ügyemet,

**Jób. 5, 17-18:** Bizony boldog az az ember, akit Isten megfedd! A Mindenható fenyítését ne vesd meg! Mert ő megsebez, de be is kötöz, összezúz, de keze meg is gyógyít.

**Jób. 15, 11:** Kevésnek tartod Isten vigasztalását és a hozzád szelíden szóló beszédet?

**Jób. 19, 25-26:** Mert én tudom, hogy az én megváltóm él, és utoljára megáll a por fölött, és ha ez a bőröm szertefoszlik is, testem nélkül is meglátom az Istent.

**Jób. 22, 21:** Légy bizalommal Istenhez, békülj meg vele, mert ennek jó eredménye lesz.

**Jób. 37, 3-5:** Az egész ég alatt szétterjeszti, villámfényét is a föld pereméig. Utána mennydörgés bömböl, dörög fenséges hangon, szüntelenül hallatszik a hangja. Csodás hangon mennydörög az Isten, és nagy tetteket visz véghez, amelyeket meg sem értünk.

**Jób. 37, 10-12:** Isten leheletétől jég támad, a víz felszíne jégpáncéllá válik. Majd nedvességgel rakja meg a felhőt, és villámait szórják a fellegek. Gomolyog az körös-körül, hogy az ő irányítása szerint megtegye mindazt, amit csak parancsol az egész föld kerekségén.

**Zsolt. 6, 3:** Kegyelmezz, URam, mert elcsüggedtem, gyógyíts meg, URam, mert reszketnek tagjaim!

**Zsolt. 7, 10:** Vess véget a bűnösök gazságának, és bátorítsd az igazat, szívek és vesék vizsgálója, igazságos Isten!

**Zsolt. 9, 11:** Benned bíznak, akik ismerik nevedet, nem hagyod el, URam, azokat, akik hozzád folyamodnak.

**Zsolt. 10, 13-14:** Miért vetheti meg Istent a bűnös? Miért mondhatja magában: Nem lesz számonkérés?! Pedig te látod a vészt és a bánatot, rátekintesz, és kezedben tartod. Rád bízhatja magát a gyámoltalan, az árvának te vagy a segítője.

**Zsolt. 11, 7:** Bizony, igaz az ÚR, igaz tetteket szeret; a becsületes emberek meglátják arcát.

**Zsolt. 17, 7:** Tégy csodát híveddel, mert te megszabadítod azokat, akik jobbodhoz menekülnek támadóik elől.

**Zsolt. 18, 31:** Isten útja tökéletes, az ÚR beszéde színigaz. Pajzsa mindazoknak, akik hozzá menekülnek.

**Zsolt. 23, 4:** Ha a halál árnyéka völgyében járok is, nem félek semmi bajtól, mert te velem vagy: vessződ és botod megvigasztal engem.

**Zsolt. 25, 5:** Vezess hűségesen, és taníts engem, mert te vagy szabadító Istenem, mindig benned reménykedem.

**Zsolt. 25, 7:** Ifjúkorom vétkeire és bűneimre ne emlékezz! Kegyelmesen gondolj rám, mert te jóságos vagy, URam!

**Zsolt. 25, 10:** Az ÚR minden ösvénye szeretet és hűség azoknak, akik megtartják szövetségét és intelmeit.

**Zsolt. 25, 11:** A te nevedért, ó, URam, bocsásd meg bűneimet, mert sok van!

**Zsolt. 25, 12-13:** Azt az embert, aki féli az URat, oktatja ő, hogy melyik utat válassza. Élete boldog marad, és utódai öröklik a földet.

**Zsolt. 25, 18:** Lásd meg nyomorúságomat és gyötrődésemet, és bocsásd meg minden vétkemet!

**Zsolt. 25, 20:** Tartsd meg életemet, ments meg, ne szégyenüljek meg, mert hozzád menekültem!

**Zsolt. 27, 10:** Ha apám, anyám elhagyna is, az ÚR magához fogad engem.

**Zsolt. 27, 13-14:** De én hiszem, hogy még meglátom az ÚR jóságát az élők földjén. Reménykedj az ÚRban, légy erős és bátor szívű, reménykedj az ÚRban!

**Zsolt. 27, 14:** Reménykedj az ÚRban, légy erős és bátor szívű, reménykedj az ÚRban!

**Zsolt. 32, 8:** Bölccsé teszlek, és megtanítalak, melyik úton kell járnod. Tanácsot adok, rajtad lesz a szemem.

**Zsolt. 32, 11:** Örüljetek az ÚRnak, ujjongjatok, ti, igazak! Vigadjatok mind, ti, igaz szívűek!

**Zsolt. 33, 10-11:** Semmivé teszi az ÚR a nemzetek tervét, meghiúsítja a népek szándékait. De az ÚR terve örökké megmarad, szívének szándéka nemzedékről nemzedékre.

**Zsolt. 33, 17-18:** Csalódik, aki lovaktól vár segítséget, mert nagy erejük nem ment meg. De az ÚR szeme ügyel az istenfélőkre, akik szeretetében bíznak.

**Zsolt. 33, 22:** Maradjon velünk, URam, szereteted, mert mi is benned reménykedünk!

**Zsolt. 34, 5-6:** Az ÚRhoz folyamodtam, és ő meghallgatott, megmentett mindattól, amitől rettegtem. Örömre derülnek, kik rátekintenek, nem pirul az arcuk.

**Zsolt. 34, 9:** Érezzétek, és lássátok, hogy jó az ÚR! Boldog az az ember, aki hozzá menekül.

**Zsolt. 34, 14:** Vigyázz, hogy nyelved ne szóljon rosszat, és ajkad ne beszéljen csalárdságot!

**Zsolt. 34, 15:** Hagyj fel a rosszal, és cselekedj jót, törekedj békességre, és kövesd azt!

**Zsolt. 34, 19:** Közel van az ÚR a megtört szívűekhez, és a sebzett lelkűeket megsegíti.

**Zsolt. 36, 10:** Mert nálad van az élet forrása, a te világosságod által látunk világosságot.

**Zsolt. 37, 3:** Bízzál az ÚRban, és tégy jót, akkor az országban lakhatsz, és biztonságban élhetsz.

**Zsolt. 37, 4:** Gyönyörködj az ÚRban, és megadja szíved kéréseit!

**Zsolt. 37, 5-6:** Hagyd az ÚRra utadat, bízzál benne, mert ő munkálkodik: világossá teszi igazságodat, jogodra fényt derít.

**Zsolt. 37, 16-17:** Többet ér a kevés az igaznak, mint a gazdagság a sok bűnösnek. Mert a bűnösök karja összetörik, de az igazakat támogatja az ÚR.

**Zsolt. 37, 34:** Reménykedj az ÚRban, maradj az ő útján! Ő felmagasztal, és öröklöd a földet; meglátod, hogy kiirtja a bűnösöket.

**Zsolt. 39, 7-8:** Árnyékként jár-kel itt az ember, bizony hiába vesződik. Gyűjtöget, de nem tudja, ki fogja hasznát venni. Így hát mit várhatok, Uram? Egyedül benned reménykedem!

**Zsolt. 41, 4:** Az ÚR enyhülést ad betegágyán, jobbulást ad neki, valahányszor betegen fekszik.

**Zsolt. 42, 12:** Miért csüggedsz el, lelkem, miért háborogsz bennem? Bízzál Istenben, mert még hálát adok neki, szabadító Istenemnek!

**Zsolt. 44, 21-22:** Ha elfeledtük volna Istenünk nevét, és idegen istenhez emeltük volna fel kezünket, nem vette volna-e észre Isten? Hiszen ő ismeri a szívnek titkait.

**Zsolt. 50, 15:** Hívj segítségül engem a nyomorúság idején! Én megszabadítlak, és te dicsőítesz engem.

**Zsolt. 50, 23:** Aki hálaadással áldozik, az dicsőít engem, és aki ilyen úton jár, annak mutatom meg Isten szabadítását.

**Zsolt. 51, 3:** Könyörülj rajtam kegyelmeddel, Istenem, töröld el hűtlenségemet nagy irgalmaddal!

**Zsolt. 51, 19:** Isten előtt a töredelmes lélek a kedves áldozat. A töredelmes és megtört szívet nem veted meg, Istenem!

**Zsolt. 52, 10:** De én olyan vagyok, mint a viruló olajfa, Isten házában lehetek, bízom Isten szeretetében most és mindenkor.

**Zsolt. 55, 23:** Vesd az ÚRra terhedet, és ő gondot visel rád! Nem engedi sohasem, hogy ingadozzon az igaz.

**Zsolt. 56, 12:** Istenben bízom, nem félek, ember mit árthat nekem?!

**Zsolt. 58, 2:** Valóban igazat beszéltek, ti, hatalmasok, és pártatlanul ítélkeztek az emberek fölött?

**Zsolt. 60, 13:** Adj nekünk mégis segítséget az ellenség ellen, mert az emberi segítség mit sem ér!

**Zsolt. 62, 11:** Ne bízzatok zsarolt javakban, rablott holmival ne kérkedjetek! Ha gyarapszik is vagyonotok, ne bizakodjatok el!

**Zsolt. 72, 12-13:** Mert megmenti a segítséget kérő szegényt és az elesettet, akinek nincsen támasza. Megmenti a nincstelent és a szegényt, a szegény embereket megsegíti.

**Zsolt. 86, 11:** Taníts engem utaidra, URam, hogy igazságod szerint járjak, és teljes szívvel féljem nevedet.

**Zsolt. 90, 12:** Taníts úgy számlálni napjainkat, hogy bölcs szívhez jussunk!

**Zsolt. 92, 13:** Az igaz virul, mint a pálmafa, magasra nő, mint a libánoni cédrus.

**Zsolt. 94, 10-11:** Aki népeket fenyít meg, az ne büntetne? Hiszen ő tanítja ismeretre az embert! Az ÚR tudja, milyen hiábavalók az ember gondolatai.

**Zsolt. 100, 3:** Tudjátok meg, hogy az ÚR az Isten! Ő alkotott minket, az övéi vagyunk: az ő népe és legelőjének nyája.

**Zsolt. 103, 2:** Áldjad, lelkem, az URat, és ne feledd el, mennyi jót tett veled!

**Zsolt. 103, 3-4:** Ő megbocsátja minden bűnödet, meggyógyítja minden betegségedet, megváltja életedet a sírtól, szeretettel és irgalommal koronáz meg.

**Zsolt. 103, 11-4:** Mert amilyen magasan van az ég a föld fölött, olyan nagy a szeretete az istenfélők iránt.

**Zsolt. 103, 17:** De az ÚR szeretete mindörökké az istenfélőkkel van, és igazsága még az unokáikkal is;

**Zsolt. 105, 1:** Adjatok hálát az ÚRnak, hívjátok segítségül nevét, hirdessétek tetteit a népek közt!

**Zsolt. 111, 10:** A bölcsesség kezdete az ÚR félelme. A józan eszűek mind eszerint élnek. Az ő dicsérete örökre megmarad.

**Zsolt. 112, 4:** Világosság ragyog a sötétben is a becsületesekre attól, aki kegyelmes, irgalmas és igaz.

**Zsolt. 116, 8-9:** Megmentettél engem a haláltól, szememet a könnyhullatástól, lábamat az elbukástól, az ÚR színe előtt járhatok az élők földjén.

**Zsolt. 118, 8-9:** Jobb az ÚRnál keresni oltalmat, mint emberben bízni. Jobb az ÚRnál keresni oltalmat, mint előkelő emberekben bízni.

**Zsolt. 118, 17:** Nem halok meg, hanem élek, és hirdetem az ÚR tetteit!

**Zsolt. 119, 25:** Életem a porhoz tapad: eleveníts meg igéddel!

**Zsolt. 121, 2:** Segítségem az ÚRtól jön, aki az eget és a földet alkotta.

**Zsolt. 121, 5:** Az ÚR védelmez téged, az ÚR a te oltalmad jobb kezed felől.

**Zsolt. 124, 8:** A mi segítségünk az ÚR nevében van, aki az eget és a földet alkotta.

**Zsolt. 145, 18:** Közel van az ÚR mindenkihez, aki hívja, mindenkihez, aki igazán hívja.

**Zsolt. 146, 8:** Az ÚR megnyitja a vakok szemeit, az ÚR fölegyenesíti a görnyedezőket, az ÚR szereti az igazakat.

**Zsolt. 148, 12-13:** ti, ifjak a leányokkal, öregek a fiatalokkal együtt dicsérjétek az ÚR nevét! Mert csak az ő neve magasztos, fensége a föld és az ég fölé emelkedik.

**Péld. 3, 5:** Bízzál az ÚRban teljes szívből, és ne a magad eszére támaszkodj!

**Péld. 3, 7:** Ne tartsd bölcsnek önmagadat, féld az URat, és kerüld a rosszat!

**Péld. 4, 23:** Minden féltve őrzött dolognál jobban óvd szívedet, mert onnan indul ki az élet!

**Péld. 5, 21:** Hiszen az ÚR látja az ember útjait, és figyeli minden lépését.

**Péld. 10, 19:** A sok beszédnél elkerülhetetlen a tévedés, de az eszes ember vigyáz a beszédre.

**Péld. 13, 20:** Aki bölcsekkel jár, bölccsé lesz, az ostobák barátja pedig romlottá lesz.

**Péld. 15, 3:** Mindenen rajta tartja szemét az ÚR, a gonoszakat és a jókat egyaránt figyeli.

**Péld. 15, 11:** A halál és az enyészet helye is az ÚR előtt van, mennyivel inkább az emberek szíve!

**Péld. 15, 16:** Jobb a kevés az ÚR félelmével, mint a sok kincs, ha nyugtalanság jár vele.

**Péld. 16, 3:** Bízd az ÚRra dolgaidat, akkor teljesülnek szándékaid.

**Péld. 16, 22:** Élet forrása az értelem annak, akinek van, de a bolondot még inteni is bolondság.

**Péld. 17, 22:** A vidám szív a legjobb orvosság, a bánatos lélek pedig a csontokat is kiszárítja.

**Péld. 20, 22:** Ne mondd: Megfizetek a rosszért! Reménykedj az ÚRban, ő megsegít téged.

**Péld. 21, 2:** Minden útját helyesnek tartja az ember, de az ÚR vizsgálja meg a szíveket.

**Péld. 21, 25-26:** A restet megöli vágyakozása, mert a két keze nem akar dolgozni; egész nap csak vágyakozik, az igaz pedig ad, és nem fukarkodik.

**Péld. 22, 9:** A jóságos tekintetű ember áldott lesz, mert ad kenyeréből a nincstelennek.

**Péld. 28, 13:** Aki takargatja vétkeit, annak nem lesz jó vége, aki pedig megvallja és elhagyja, az irgalmat nyer.

**Péld. 31, 30:** Csalóka a báj, mulandó a szépség, de az URat félő asszony dicséretre méltó.

**Préd. 5, 4:** Jobb, ha nem teszel fogadalmat, mint ha fogadalmat teszel, és nem teljesíted.

**Ézs. 1, 17:** tanuljatok meg jót cselekedni! Törekedjetek igazságra, térítsétek jó útra az erőszakoskodót! Védjétek meg az árvák igazát, képviseljétek az özvegy peres ügyét!

**Ézs. 36, 5:** Azt hiszed, hogy ész és erő nélkül, üres szavakkal is lehet csatát nyerni? Kiben bíztál, hogy föllázadtál ellenem?

**Ézs. 40, 29:** Erőt ad a megfáradtnak, és az erőtlent nagyon erőssé teszi.

**Ézs. 40, 31:** De akik az ÚRban bíznak, erejük megújul, szárnyra kelnek, mint a sasok, futnak, és nem lankadnak meg, járnak, és nem fáradnak el.

**Ézs. 43, 1:** De most így szól az ÚR, a te teremtőd, Jákób, a te formálód, Izráel: Ne félj, mert megváltottalak, neveden szólítottalak, enyém vagy!

**Ézs. 43, 11:** Én, én vagyok az ÚR, rajtam kívül nincs szabadító.

**Ézs. 45, 5:** Én vagyok az ÚR, nincs más, nincsen isten rajtam kívül! Én öveztelek föl, noha nem ismertél.

**Ézs. 51, 12:** Én, én vagyok a vigasztalótok! Miért félsz a halandótól, az olyan embertől, aki a fű sorsára jut?

**Ézs. 53, 5:** Pedig a mi vétkeink miatt kapott sebeket, bűneink miatt törték össze. Ő bűnhődött, hogy nekünk békességünk legyen, az ő sebei árán gyógyultunk meg.

**Ézs. 54, 10:** Mert a hegyek megszűnhetnek, és a halmok meginoghatnak, de hozzád való hűségem nem szűnik meg, és békességem szövetsége nem inog meg – mondja könyörülő URad.

**Ézs. 57, 12:** Én tudom megmondani, hogyan boldogulsz. De amit te művelsz, az nem használ neked.

**Jer. 2, 17:** Te magad okoztad ezt magadnak, mert elhagytad Istenedet, az URat, amikor a helyes úton akart vezetni.

**Jer. 10, 23:** Tudom, URam, hogy az ember nem ura élete útjának, és aki azon jár, nem maga irányítja lépteit!

**Jsir. 3, 26:** Jó csendben várni az ÚR szabadítására.

**Ez. 18, 32:** Hiszen nem kívánom a halandó halálát – így szól az én Uram, az ÚR –, térjetek hát meg, és éljetek!

**Ez. 36, 26:** Új szívet adok nektek, és új lelket adok belétek: eltávolítom testetekből a kőszívet, és hússzívet adok nektek.

**Dán. 12, 2:** Azok közül, akik a föld porában alszanak, sokan felébrednek majd: némelyek örök életre, némelyek gyalázatra és örök utálatra.

**Hós. 6, 6:** Mert szeretetet kívánok, és nem áldozatot, Isten ismeretét, és nem égőáldozatokat.

**Mik. 7, 19:** Újra irgalmas lesz hozzánk, eltapossa bűneinket, minden vétkünket a tenger mélyére dobja!

**Náh. 1, 7:** Jó az ÚR! Oltalom a nyomorúság idején, gondja van arra, aki hozzá menekül.

**Zof. 1, 7:** Csend legyen az én Uram, az ÚR előtt! Mert közel van az ÚR napja, amikor áldozati lakomát rendez az ÚR, és megszenteli azokat, akiket meghívott.

**Mal. 3, 16:** Amikor erről beszélgettek egymás között azok, akik félik az URat, az ÚR figyelt, és meghallotta. És beírták egy könyvbe az ÚR előtt emlékezetül azokat, akik őt félik és megbecsülik nevét.

**Mt. 3, 2:** Térjetek meg, mert elközelített a mennyek országa!

**Mt. 3, 8:** Teremjetek hát megtéréshez illő gyümölcsöt,

**Mt. 4, 10:** Ekkor így szólt hozzá Jézus: Távozz tőlem, Sátán, mert meg van írva: „Az Urat, a te Istenedet imádd, és csak neki szolgálj!”

**Mt. 5, 3:** Boldogok a lelki szegények, mert övék a mennyek országa.

**Mt. 5, 4:** Boldogok, akik sírnak, mert ők megvigasztaltatnak.

**Mt. 5, 5:** Boldogok a szelídek, mert ők öröklik a földet.

**Mt. 5, 6:** Boldogok, akik éheznek és szomjaznak az igazságra, mert ők megelégíttetnek.

**Mt. 5, 7:** Boldogok az irgalmasok, mert ők irgalmasságot nyernek.

**Mt. 5, 8:** Boldogok a tiszta szívűek, mert ők meglátják Istent.

**Mt. 5, 9:** Boldogok, akik békét teremtenek, mert ők Isten fiainak neveztetnek.

**Mt. 5, 10:** Boldogok, akiket az igazságért üldöznek, mert övék a mennyek országa.

**Mt. 5, 11-12:** Boldogok vagytok, ha énmiattam gyaláznak és üldöznek titeket, és mindenféle rosszat hazudnak rólatok. Örüljetek és ujjongjatok, mert jutalmatok bőséges a mennyekben, hiszen így üldözték a prófétákat is, akik előttetek éltek.

**Mt. 5, 14:** Ti vagytok a világ világossága. Nem rejthető el a hegyen épült város.

**Mt. 5, 16:** Úgy ragyogjon a ti világosságotok az emberek előtt, hogy lássák jó cselekedeteiteket, és dicsőítsék a ti mennyei Atyátokat.

**Mt. 5, 27-28:** Hallottátok, hogy megmondatott: „Ne paráználkodj!” Én pedig azt mondom nektek: aki kívánsággal tekint egy asszonyra, már paráznaságot követett el vele szívében.

**Mt. 5, 38-39:** Hallottátok, hogy megmondatott: „Szemet szemért, fogat fogért.” Én pedig azt mondom nektek, hogy ne szálljatok szembe a gonosz emberrel, hanem aki arcul üt téged jobb felől, tartsd oda annak arcod másik felét is!

**Mt. 5, 43-45:** Hallottátok, hogy megmondatott: „Szeresd felebarátodat, és gyűlöld ellenségedet.” Én pedig azt mondom nektek: Szeressétek ellenségeiteket, és imádkozzatok azokért, akik üldöznek titeket, hogy így mennyei Atyátoknak fiai legyetek, mert ő felhozza napját gonoszokra és jókra, és esőt ad igazaknak és hamisaknak.

**Mt. 6, 3-4:** Te pedig amikor adományt adsz, ne tudja a bal kezed, mit tesz a jobb, hogy adakozásod rejtve maradjon; és majd a te Atyád, aki látja a rejtett dolgokat, megjutalmaz téged.

**Mt. 6, 14-15:** Mert ha az embereknek megbocsátjátok vétkeiket, nektek is megbocsát mennyei Atyátok. Ha pedig nem bocsátotok meg az embereknek, Atyátok sem bocsátja meg a ti vétkeiteket.

**Mt. 6, 19-21:** Ne gyűjtsetek magatoknak kincseket a földön, ahol a moly és a rozsda megemészti, és ahol a tolvajok betörnek, és ellopják, hanem gyűjtsetek magatoknak kincseket a mennyben, ahol sem a moly, sem a rozsda nem emészti meg, és ahol a tolvajok sem törnek be, és nem lopják el. Mert ahol a te kincsed van, ott lesz a te szíved is.

**Mt. 6, 24:** Senki sem szolgálhat két úrnak, mert vagy az egyiket fogja gyűlölni, a másikat pedig szeretni, vagy az egyikhez ragaszkodik majd, a másikat pedig megveti. Nem szolgálhattok Istennek és a mammonnak.

**Mt. 6, 34:** Ne aggódjatok tehát a holnapért, mert a holnap majd aggódik magáért: elég minden napnak a maga baja.

**Mt. 7, 21:** Nem mindenki megy be a mennyek országába, aki ezt mondja nekem: Uram, Uram, hanem csak az, aki cselekszi az én mennyei Atyám akaratát.

**Mt. 8, 26:** De ő így szólt hozzájuk: Mit féltek, ti kicsinyhitűek? Ekkor felkelt, ráparancsolt a szelekre és a tengerre, és minden elcsendesült.

**Mt. 9, 2:** És íme, odavittek hozzá egy bénát, aki ágyban feküdt. Amikor Jézus látta hitüket, így szólt a bénához: Bízzál, fiam, megbocsáttatnak a te bűneid.

**Mt. 9, 9:** Amikor Jézus továbbment onnan, meglátott egy embert a vámszedő helyen ülni, akit Máténak hívtak, és így szólt hozzá: Kövess engem! Az felkelt, és követte őt.

**Mt. 9, 13:** Menjetek, és tanuljátok meg, mit jelent ez: „Irgalmasságot akarok, és nem áldozatot.” Mert nem azért jöttem, hogy az igazakat hívjam, hanem a bűnösöket.

**Mt. 10, 16:** Íme, én elküldelek titeket, mint juhokat a farkasok közé: legyetek azért okosak, mint a kígyók, és szelídek, mint a galambok!

**Mt. 10, 32:** Aki tehát vallást tesz rólam az emberek előtt, arról majd én is vallást teszek mennyei Atyám előtt,

**Mt. 11, 28:** Jöjjetek énhozzám mindnyájan, akik megfáradtatok és meg vagytok terhelve, és én megnyugvást adok nektek.

**Mt. 11, 29-30:** Vegyétek magatokra az én igámat, és tanuljátok meg tőlem, hogy szelíd vagyok és alázatos szívű, és megnyugvást találtok lelketeknek. Mert az én igám jó, és az én terhem könnyű.

**Mt. 14, 31-32:** Jézus pedig azonnal kinyújtotta a kezét, megragadta őt, és ezt mondta neki: Kicsinyhitű, miért kételkedtél? És amint beszálltak a hajóba, elült a szél.

**Mt. 16, 24:** Akkor Jézus ezt mondta tanítványainak: Ha valaki énutánam akar jönni, tagadja meg magát, vegye fel a keresztjét, és kövessen engem!

**Mt. 18, 2-3:** Ő odahívott egy kisgyermeket, közéjük állította, és ezt mondta: Bizony mondom nektek, ha meg nem tértek, és olyanok nem lesztek, mint a kisgyermekek, nem mentek be a mennyek országába.

**Mt. 18, 7:** Jaj a világnak a botránkozások miatt! Mert szükséges, hogy botránkozások történjenek, de jaj annak az embernek, aki megbotránkoztat!

**Mt. 19, 23:** Jézus pedig ezt mondta tanítványainak: Bizony mondom nektek, hogy gazdag ember nehezen megy majd be a mennyek országába.

**Mt. 19, 24:** Ismét mondom nektek: Könnyebb a tevének a tű fokán átmenni, mint a gazdagnak az Isten országába bejutni.

**Mt. 19, 25-26:** Amikor meghallották ezt a tanítványok, nagyon megdöbbentek, és így szóltak: Akkor kicsoda üdvözülhet? Jézus rájuk tekintett, és ezt mondta nekik: Embereknek ez lehetetlen, de Istennek minden lehetséges.

**Mt. 19, 29:** És mindenki, aki elhagyta házát vagy testvéreit, apját vagy anyját, gyermekeit vagy földjeit az én nevemért, a százszorosát kapja, és megörökli az örök életet.

**Mt. 19, 30:** De sok elsőből lesz utolsó, és utolsóból első.

**Mt. 20, 25-27:** De Jézus magához hívta őket, és ezt mondta: Tudjátok, hogy a népek felett zsarnokoskodnak fejedelmeik, és vezetőik hatalmaskodnak rajtuk. De közöttetek ne így legyen, hanem aki naggyá akar lenni közöttetek, az legyen a szolgátok, és aki közöttetek első akar lenni, az legyen a rabszolgátok.

**Mt. 21, 22:** És mindazt, amit imádságban hittel kértek, megkapjátok.

**Mt. 22, 36-37:** Mester, melyik a nagy parancsolat a törvényben? Jézus így válaszolt: „Szeresd az Urat, a te Istenedet teljes szívedből, teljes lelkedből és teljes elmédből.”

**Mt. 22, 36-40:** Mester, melyik a nagy parancsolat a törvényben? Jézus így válaszolt: „Szeresd az Urat, a te Istenedet teljes szívedből, teljes lelkedből és teljes elmédből.” Ez az első és a nagy parancsolat. A második hasonló ehhez: „Szeresd felebarátodat, mint magadat.” E két parancsolattól függ az egész törvény és a próféták.

**Mt. 23, 12:** Mert aki felmagasztalja magát, megaláztatik, és aki megalázza magát, felmagasztaltatik.

**Mt. 23, 28:** Így kívülről ti is igaznak látszotok az emberek szemében, de belül tele vagytok képmutatással és törvényszegéssel.

**Mt. 24, 42:** Vigyázzatok tehát, mert nem tudjátok, hogy melyik órában jön el a ti URatok!

**Mt. 25, 21:** Ura így szólt hozzá: Jól van, jó és hű szolgám, a kevésen hű voltál, sokat bízok rád ezután, jöjj, és osztozz urad örömében!

**Mt. 26, 41:** Virrasszatok, és imádkozzatok, hogy kísértésbe ne essetek: a lélek ugyan kész, de a test erőtlen.

**Mt. 28, 19-20:** Menjetek el tehát, tegyetek tanítvánnyá minden népet, megkeresztelve őket az Atyának, a Fiúnak és a Szentléleknek nevében, tanítva őket, hogy megtartsák mindazt, amit én parancsoltam nektek; és íme, én veletek vagyok minden napon a világ végezetéig.

**Mk. 4, 39-41:** Ő pedig felkelt, ráparancsolt a szélre, és azt mondta a tengernek: Hallgass el, némulj meg! És elült a vihar, és nagy csendesség lett. Akkor ezt mondta nekik: Miért féltek ennyire? Még mindig nincs hitetek? Nagy félelem fogta el őket, és így szóltak egymáshoz: Ki ez, hogy a szél is, a tenger is engedelmeskedik neki?

**Mk. 8, 34:** Ekkor magához hívta a sokaságot tanítványaival együtt, és ezt mondta nekik: Ha valaki énutánam akar jönni, tagadja meg magát, vegye fel a keresztjét, és kövessen engem!

**Mk. 8, 35:** Mert aki meg akarja menteni az életét, az elveszti azt, aki pedig elveszti az életét énértem és az evangéliumért, megmenti azt.

**Mk. 8, 36-38:** Mit használ ugyanis az embernek, ha az egész világot megnyeri, de élete veszendőbe megy? Mert mit is adhatna az ember váltságdíjul az életéért? Mert ha valaki szégyell engem és az én beszédeimet e parázna és bűnös nemzedék előtt, azt az Emberfia is szégyellni fogja, amikor eljön Atyja dicsőségében a szent angyalokkal.

**Mk. 9, 24:** A fiú apja azonnal felkiáltott: Hiszek! Segíts a hitetlenségemen!

**Mk. 10, 27:** Jézus rájuk tekintett, és ezt mondta: Az embereknek lehetetlen, de Istennek nem, mert Istennek minden lehetséges.

**Mk. 10, 45:** Mert az Emberfia sem azért jött, hogy neki szolgáljanak, hanem hogy ő szolgáljon, és életét adja váltságul sokakért.

**Mk. 11, 24:** Ezért mondom nektek: higgyétek, hogy mindazt, amit imádságotokban kértek, megkapjátok, és megadatik nektek.

**Mk. 11, 25-26:** És amikor imádkoztok, bocsássatok meg annak, aki ellen valami panaszotok van, hogy mennyei Atyátok is megbocsássa nektek vétkeiteket. Ha pedig ti nem bocsátotok meg, a ti mennyei Atyátok sem bocsátja meg a vétkeiteket.

**Luk. 1, 28:** És hozzálépve így szólt az angyal: Üdvöz légy, kegyelembe fogadott, az Úr veled van!

**Luk. 4, 18-19:** „Az Úrnak Lelke van énrajtam, mert felkent engem, hogy evangéliumot hirdessek a szegényeknek; azért küldött el, hogy a szabadulást hirdessem a foglyoknak, és a vakoknak szemük megnyílását; hogy szabadon bocsássam a megkínzottakat, és hirdessem az Úr kedves esztendejét.”

**Luk. 5, 20:** Ő pedig látva hitüket, így szólt: Ember, megbocsáttattak a te bűneid.

**Luk. 6, 31:** És amint szeretnétek, hogy az emberek veletek bánjanak, ti is úgy bánjatok velük!

**Luk. 6, 32:** Ha azokat szeretitek, akik szeretnek titeket, mi a jutalmatok? Hiszen a bűnösök is szeretik azokat, akik őket szeretik.

**Luk. 6, 33:** És ha azokkal tesztek jót, akik veletek jót tesznek, mi a jutalmatok? Hiszen a bűnösök is ugyanezt teszik.

**Luk. 6, 35-36:** Ti azonban szeressétek ellenségeiteket, tegyetek jót, és adjatok kölcsön, semmit sem várva érte: nagy lesz akkor a jutalmatok, és a Magasságos fiai lesztek, mert ő jóságos a hálátlanok és gonoszok iránt. Legyetek irgalmasok, amint a ti Atyátok is irgalmas!

**Luk. 6, 46:** Miért mondjátok nekem: URam, URam – ha nem teszitek, amit mondok?

**Luk. 7, 13-15:** Amikor az Úr meglátta az asszonyt, megszánta, és így szólt hozzá: Ne sírj! Azután odalépett, és megérintette a koporsót. Akik vitték, megálltak, ő pedig így szólt: Ifjú, neked mondom, kelj fel! Erre felült a halott, és elkezdett beszélni; Jézus pedig átadta az anyjának.

**Luk. 8, 39:** Térj haza, és beszéld el, mit tett veled az Isten. Ő pedig elment, és hirdette az egész városban, hogy milyen nagy jót tett vele Jézus.

**Luk. 8, 49-50:** Még beszélt, amikor jött valaki a zsinagógai elöljáró házától, és így szólt: Meghalt a leányod, ne fáraszd tovább a Mestert! Amikor Jézus ezt meghallotta, így szólt az apához: Ne félj, csak higgy, és meggyógyul.

**Luk. 9, 47-48:** Jézus pedig ismerve szívük gondolatát, kézen fogott egy kisgyermeket, és maga mellé állította; majd ezt mondta nekik: Aki befogadja ezt a kisgyermeket az én nevemért, az engem fogad be, és aki engem befogad, azt fogadja be, aki engem küldött. Mert aki a legkisebb mindnyájatok között, az az igazán nagy.

**Luk. 11, 9:** Én is azt mondom nektek: kérjetek, és adatik nektek, keressetek, és találtok, zörgessetek, és megnyittatik nektek.

**Luk. 11, 34:** A test lámpása a szem. Ha a szemed tiszta, az egész tested világos, de ha gonosz, a tested is sötét.

**Luk. 12, 33-34:** Adjátok el vagyonotokat, és adjátok alamizsnául, szerezzetek magatoknak el nem avuló erszényeket, el nem fogyó kincset a mennyben, ahol a tolvaj nem férkőzhet hozzá, a moly sem emészti meg. Mert ahol a ti kincsetek van, ott lesz a ti szívetek is.

**Luk. 14, 10-11:** Hanem ha meghívnak, menj el, ülj le az utolsó helyre, hogy amikor jön az, aki meghívott, így szóljon hozzád: Barátom, ülj feljebb! Akkor becsületed lesz minden asztaltársad előtt. Mert aki felmagasztalja magát, megaláztatik, aki pedig megalázza magát, felmagasztaltatik.

**Luk. 14, 26-27:** Ha valaki hozzám jön, de nem gyűlöli meg apját, anyját, feleségét, gyermekeit, testvéreit, sőt még a saját lelkét is, az nem lehet az én tanítványom. Ha valaki nem hordozza a maga keresztjét, és nem jön utánam, az nem lehet az én tanítványom.

**Luk. 16, 15:** Ő pedig ezt mondta nekik: Ti igazaknak tartjátok magatokat az emberek előtt, de Isten ismeri a szíveteket. Mert ami az emberek előtt magasztos, Isten előtt utálatos.

**Luk. 18, 22:** Amikor Jézus ezt hallotta, így szólt hozzá: Még egy fogyatkozásod van: add el minden vagyonodat, oszd szét a szegényeknek, és kincsed lesz a mennyben, azután jöjj, és kövess engem!

**Luk. 21, 14-15:** Határozzátok el szívetekben, hogy nem gondoltok előre a védekezésre, mert én adok nektek szájat és bölcsességet, amelynek nem tud ellenállni vagy ellene mondani egyetlen ellenfeletek sem.

**Luk. 21, 34-35:** Vigyázzatok magatokra, nehogy szívetek elnehezedjék mámortól, részegségtől vagy a megélhetés gondjaitól, és hirtelen lepjen meg titeket az a nap, mint valami csapda, mert rá fog törni mindazokra, akik a föld színén laknak.

**Luk. 21, 36:** Legyetek tehát éberek, és szüntelen könyörögjetek, hogy legyen erőtök kimenekülni mindazokból, amik történni fognak, és hogy megállhassatok az Emberfia előtt.

**Luk. 22, 40:** Mikor pedig odaért, így szólt hozzájuk: Imádkozzatok, hogy kísértésbe ne essetek!

**Ján. 1, 9-11:** Az Ige volt az igazi világosság, amely megvilágosít minden embert: ő jött el a világba. A világban volt, és a világ általa lett, de a világ nem ismerte meg őt: a saját világába jött, de az övéi nem fogadták be őt.

**Ján. 1, 12:** Akik pedig befogadták, azoknak hatalmat adott arra, hogy Isten gyermekeivé legyenek; mindazoknak, akik hisznek az ő nevében,

**Ján. 3, 16:** Mert úgy szerette Isten a világot, hogy egyszülött Fiát adta, hogy aki hisz őbenne, el ne vesszen, hanem örök élete legyen.

**Ján. 3, 17:** Mert Isten nem azért küldte el a Fiút a világba, hogy elítélje a világot, hanem hogy üdvözüljön a világ általa.

**Ján. 3, 18:** Aki hisz őbenne, az nem jut ítéletre, aki pedig nem hisz, már ítélet alatt van, mert nem hitt Isten egyszülött Fiának nevében.

**Ján. 3, 30:** Neki növekednie kell, nekem pedig kisebbé lennem.

**Ján. 3, 31-32:** Aki felülről jön, az felette van mindenkinek. Aki a földről való, földi az, és földiekről szól. Aki a mennyből jön, az felette van mindenkinek: arról tesz bizonyságot, amit látott és hallott, de bizonyságtételét senki sem fogadja el.

**Ján. 3, 36:** Aki hisz a Fiúban, annak örök élete van, aki pedig nem engedelmeskedik a Fiúnak, nem lát majd életet, hanem Isten haragja marad rajta.

**Ján. 6, 37-38:** Akit nekem ad az Atya, az mind énhozzám jön, és aki énhozzám jön, azt én nem küldöm el; mert nem azért szálltam le a mennyből, hogy a magam akaratát tegyem, hanem hogy annak az akaratát, aki elküldött engem.

**Ján. 6, 47:** Bizony, bizony, mondom nektek: aki hisz, annak örök élete van.

**Ján. 8, 12:** Jézus ismét megszólalt, és ezt mondta nekik: Én vagyok a világ világossága: aki engem követ, nem jár sötétségben, hanem övé lesz az élet világossága.

**Ján. 8, 36:** Ha tehát a Fiú megszabadít titeket, valóban szabadok lesztek.

**Ján. 10, 14-15:** Én vagyok a jó pásztor, én ismerem az enyéimet, és az enyéim ismernek engem, ahogyan az Atya ismer engem, én is úgy ismerem az Atyát, és én életemet adom a juhokért.

**Ján. 11, 25-26:** Jézus ekkor ezt mondta neki: Én vagyok a feltámadás és az élet, aki hisz énbennem, ha meghal is, él; és aki él, és hisz énbennem, az nem hal meg soha. Hiszed-e ezt?

**Ján. 12, 26:** Ha valaki nekem szolgál, engem kövessen; és ahol én vagyok, ott lesz az én szolgám is; és ha valaki nekem szolgál, azt megbecsüli az Atya.

**Ján. 13, 7:** Jézus így válaszolt neki: Amit én teszek, most még nem érted, de később majd megérted.

**Ján. 13, 15:** Mert példát adtam nektek, hogy amint én tettem veletek, ti is úgy tegyetek.

**Ján. 13, 34:** Új parancsolatot adok nektek, hogy szeressétek egymást: ahogyan én szerettelek titeket, ti is úgy szeressétek egymást!

**Ján. 14, 1:** Ne nyugtalankodjék a ti szívetek: higgyetek Istenben, és higgyetek énbennem!

**Ján. 14, 4-6:** Ahova pedig én megyek, oda tudjátok az utat. Tamás erre így szólt hozzá: Uram, nem tudjuk, hova mégy: honnan tudnánk akkor az utat? Jézus így válaszolt: Én vagyok az út, az igazság és az élet; senki sem mehet az Atyához, csak énáltalam.

**Ján. 14, 18:** Nem hagylak titeket árván, eljövök hozzátok.

**Ján. 15, 5:** Én vagyok a szőlőtő, ti a szőlővesszők: aki énbennem marad, és én őbenne, az terem sok gyümölcsöt, mert nélkülem semmit sem tudtok cselekedni.

**Ján. 15, 7:** Ha megmaradtok énbennem, és beszédeim megmaradnak tibennetek, akkor bármit akartok, kérjétek, és megadatik nektek.

**Ján. 15, 9:** Ahogyan engem szeretett az Atya, úgy szeretlek én is titeket: maradjatok meg az én szeretetemben!

**Ján. 15, 12:** Az az én parancsolatom, hogy úgy szeressétek egymást, ahogyan én szerettelek titeket.

**Ján. 15, 16:** Nem ti választottatok ki engem, hanem én választottalak ki titeket, és arra rendeltelek, hogy elmenjetek és gyümölcsöt teremjetek, és gyümölcsötök megmaradjon, hogy bármit kértek az Atyától az én nevemben, megadja nektek.

**Ján. 15, 20:** Emlékezzetek arra az igére, amelyet én mondtam nektek: Nem nagyobb a szolga az uránál. Ha engem üldöztek, titeket is üldözni fognak, ha az én igémet megtartották, a tieteket is meg fogják tartani.

**Ján. 17, 3:** Az pedig az örök élet, hogy ismernek téged, az egyedül igaz Istent, és akit elküldtél, Jézus Krisztust.

**Ján. 20, 29:** Jézus így szólt hozzá: Mivel látsz engem, hiszel: boldogok, akik nem látnak, és hisznek.

**ApCsel. 1, 7:** Így válaszolt nekik: Nem a ti dolgotok, hogy olyan időkről és alkalmakról tudjatok, amelyeket az Atya a maga hatalmába helyezett.

**ApCsel. 2, 38:** Péter így válaszolt: Térjetek meg, és keresztelkedjetek meg mindnyájan Jézus Krisztus nevében bűneitek bocsánatára, és megkapjátok a Szentlélek ajándékát.

**ApCsel. 3, 19-20:** Tartsatok tehát bűnbánatot, és térjetek meg, hogy eltöröltessenek a ti bűneitek; hogy eljöjjön az Úrtól a felüdülés ideje, és elküldje Jézust, akit Messiásul rendelt nektek.

**ApCsel. 3, 26:** Isten elsősorban számotokra támasztotta és küldte el Szolgáját, hogy megáldjon titeket, ha ti megtértek gonoszságaitokból.

**ApCsel. 4, 20:** Mert nem tehetjük, hogy ne mondjuk el azt, amit láttunk és hallottunk.

**ApCsel. 5, 29:** Péter és az apostolok így válaszoltak: Istennek kell inkább engedelmeskednünk, mint az embereknek.

**ApCsel. 8, 22:** Térj meg tehát e gonoszságodból, és könyörögj az Úrhoz, hátha megbocsátja neked szíved szándékát.

**ApCsel. 10, 34-35:** Erre Péter beszélni kezdett, és ezt mondta: Most értem meg igazán, hogy Isten nem személyválogató, hanem minden nép között kedves előtte, aki féli őt, és igazságot cselekszik.

**ApCsel. 10, 42-43:** És ő megparancsolta nekünk, hogy hirdessük a népnek, és tegyünk bizonyságot arról, hogy ő Istentől rendelt bírája élőknek és holtaknak. Róla tesznek bizonyságot a próféták mind, hogy aki hisz őbenne, az ő neve által bűnbocsánatot nyer.

**ApCsel. 13, 47:** Mert így parancsolta meg nekünk az Úr: „Pogányok világosságává teszlek, hogy üdvösségük légy a föld végső határáig.”

**ApCsel. 16, 31:** Higgy az Úr Jézusban, és üdvözülsz mind te, mind a te házad népe.

**ApCsel. 17, 30-31:** A tudatlanság időszakait ugyan elnézte Isten, de most azt hirdeti az embereknek, hogy mindenki mindenütt térjen meg. Azért rendelt egy napot, amelyen igazságos ítéletet mond majd az egész földkerekség fölött egy férfi által, akit erre kiválasztott, akiről bizonyságot adott mindenki előtt azáltal, hogy feltámasztotta a halálból.

**ApCsel. 18, 9-10:** Az Úr egy éjjel látomásban ezt mondta Pálnak: Ne félj, hanem szólj, és ne hallgass: mert én veled vagyok, és senki sem fog rád támadni és ártani neked, mert nekem sok népem van ebben a városban.

**ApCsel. 20, 26-27:** Ezért bizonyságot teszek előttetek a mai napon, hogy én mindenki vérétől tiszta vagyok. Mert nem vonakodtam attól, hogy hirdessem nektek az Isten teljes akaratát.

**ApCsel. 20, 28:** Viseljetek gondot tehát magatokra és az egész nyájra, amelynek őrizőivé tett titeket a Szentlélek, hogy legeltessétek az Isten egyházát, amelyet tulajdon vérével szerzett.

**ApCsel. 20, 34-35:** sőt ti jól tudjátok, hogy a magam szükségleteiről meg a velem levőkéről ezek a kezek gondoskodtak. Mindezekben megmutattam nektek, hogy milyen kemény munkával kell az erőtlenekről gondoskodni, megemlékezve az Úr Jézus szavairól. Mert ő mondta: „Nagyobb boldogság adni, mint kapni.”

**ApCsel. 22, 14:** Ő pedig ezt mondta nekem: Atyáink Istene választott ki téged, hogy megismerd az ő akaratát, meglásd az Igazat, és hangot hallj az ő ajkáról.

**ApCsel. 22, 16:** Most tehát miért késlekedsz? Kelj fel, keresztelkedj meg, mosd le bűneidet, segítségül híva az Úr nevét.

**ApCsel. 26, 18:** Azért küldelek el, hogy nyisd meg a szemüket, hogy a sötétségből a világosságra, és a Sátán hatalmából az Istenhez térjenek, hogy az énbennem való hit által megkapják bűneik bocsánatát, és örökséget nyerjenek azok között, akik megszenteltettek.

**Róm. 1, 16-17:** Mert nem szégyellem az evangéliumot, hiszen Isten hatalma az minden hívőnek üdvösségére, először a zsidóknak, majd pedig a görögöknek. Mert abban Isten a maga igazságát nyilatkoztatja ki hitből hitbe, amint meg van írva: „Az igaz ember pedig hitből fog élni.”

**Róm. 2, 1:** Ezért nincs mentséged, te ítélkező ember, mert amiben mást megítélsz, abban önmagadat ítéled el, hiszen ugyanazokat teszed, miközben ítélkezel.

**Róm. 2, 3:** Azt gondolod, te ember, aki ítélkezel azok felett, akik ilyeneket tesznek, holott magad is ugyanazokat cselekszed, hogy te megmenekülhetsz az Isten ítéletétől?

**Róm. 2, 4:** Vagy megveted jóságának, elnézésének és türelmének gazdagságát, és nem veszed tudomásul, hogy téged Isten jósága megtérésre ösztönöz?

**Róm. 2, 11-12:** Mert Isten nem személyválogató. Akik ugyanis a törvény ismerete nélkül vétkeztek, a törvény nélkül vesznek majd el, és akik a törvény ismeretében vétkeztek, azokat a törvény alapján sújtja majd az ítélet.

**Róm. 2, 13:** Hiszen nem a törvény hallgatói igazak Isten előtt, hanem a törvény megtartói fognak megigazíttatni.

**Róm. 5, 3-5:** Sőt, dicsekszünk a megpróbáltatásokkal is, mert tudjuk, hogy a megpróbáltatás szüli az állhatatosságot, az állhatatosság a kipróbáltságot, a kipróbáltság a reménységet; a reménység pedig nem szégyenít meg, mert szívünkbe áradt az Isten szeretete a nekünk adott Szentlélek által.

**Róm. 5, 8:** Isten azonban a maga szeretetét mutatta meg irántunk, mert Krisztus már akkor meghalt értünk, amikor még bűnösök voltunk.

**Róm. 6, 6:** Hiszen tudjuk, hogy a mi óemberünk megfeszíttetett vele, hogy megerőtlenüljön a bűn hatalmában álló test, hogy többé ne szolgáljunk a bűnnek.

**Róm. 6, 12:** Ne uralkodjék tehát a bűn a ti halandó testetekben, hogy engedelmeskedjetek kívánságainak.

**Róm. 6, 13:** Tagjaitokat se állítsátok a gonoszság fegyvereiként a bűn szolgálatába, hanem álljatok Isten szolgálatába, mint akik a halálból életre keltetek, és tagjaitok az igazság fegyvereiként szolgáljanak Istennek.

**Róm. 6, 23:** Mert a bűn zsoldja a halál, Isten kegyelmi ajándéka pedig az örök élet Krisztus Jézusban, a mi Urunkban.

**Róm. 8, 13:** Mert ha test szerint éltek, meg kell halnotok, de ha a Lélek által megölitek a test cselekedeteit, élni fogtok.

**Róm. 8, 28:** Azt pedig tudjuk, hogy akik Istent szeretik, azoknak minden javukra szolgál, azoknak, akiket örök elhatározása szerint elhívott.

**Róm. 8, 33:** Ki vádolná Isten választottait? Hiszen Isten az, aki megigazít.

**Róm. 8, 38-39:** Mert meg vagyok győződve, hogy sem halál, sem élet, sem angyalok, sem fejedelmek, sem jelenvalók, sem eljövendők, sem hatalmak, sem magasság, sem mélység, sem semmiféle más teremtmény nem választhat el minket Isten szeretetétől, amely megjelent Krisztus Jézusban, a mi Urunkban.

**Róm. 10, 9:** Ha tehát száddal Úrnak vallod Jézust, és szíveddel hiszed, hogy Isten feltámasztotta őt a halálból, akkor üdvözülsz.

**Róm. 10, 11:** Az Írás így szól: „Aki hisz őbenne, nem szégyenül meg.”

**Róm. 12, 1-2:** Kérlek azért titeket, testvéreim, az Isten irgalmasságára, hogy okos istentiszteletként szánjátok oda magatokat élő, szent, Istennek tetsző áldozatul, és ne igazodjatok e világhoz, hanem változzatok meg értelmetek megújulásával, hogy megítélhessétek, mi az Isten akarata, mi az, ami jó, ami neki tetsző és tökéletes.

**Róm. 12, 9:** A szeretet ne legyen képmutató. Iszonyodjatok a gonosztól, ragaszkodjatok a jóhoz,

**Róm. 12, 10-11:** a testvérszeretetben legyetek egymás iránt gyengédek, a tiszteletadásban egymást megelőzők, a szolgálatkészségben fáradhatatlanok, a Lélekben buzgók: az Úrnak szolgáljatok.

**Róm. 12, 17:** Ne fizessetek senkinek rosszal a rosszért. A tisztességre legyen gondotok minden ember előtt.

**Róm. 12, 21:** Ne győzzön le téged a rossz, hanem te győzd le a jóval a rosszat.

**Róm. 13, 13-14:** Mint nappal illik, tisztességben éljünk: nem dorbézolásban és részegeskedésben, nem bujálkodásban és kicsapongásban, nem viszálykodásban és irigységben, hanem öltsétek magatokra az Úr Jézus Krisztust; a testet pedig ne kényeztessétek úgy, hogy bűnös kívánságok ébredjenek benne.

**Róm. 14, 10:** Akkor te miért ítéled el testvéredet? Vagy te is, miért veted meg testvéredet? Hiszen mindnyájan oda fogunk állni Isten ítélőszéke elé.

**Róm. 14, 12-13:** Így tehát mindegyikünk önmagáról fog számot adni Istennek. Ne ítélgessük hát többé egymást, hanem azt ítéljétek meg inkább, miként nem okoztok a testvéreteknek megütközést vagy botránkozást.

**Róm. 14, 19:** Arra törekedjünk tehát, ami a békességet és az épülést szolgálja.

**1 Kor. 1, 18:** Mert a keresztről szóló beszéd bolondság ugyan azoknak, akik elvesznek, de nekünk, akik üdvözülünk, Istennek ereje.

**1 Kor. 1, 22-24:** És miközben a zsidók jelt kívánnak, a görögök pedig bölcsességet keresnek, mi a megfeszített Krisztust hirdetjük, aki a zsidóknak ugyan megütközés, a pogányoknak pedig bolondság, de maguknak az elhívottaknak, zsidóknak és görögöknek egyaránt az Isten ereje és az Isten bölcsessége.

**1 Kor. 1, 25:** Mert az Isten „bolondsága” bölcsebb az emberek bölcsességénél, és az Isten „erőtlensége” erősebb az emberek erejénél.

**1 Kor. 1, 27-29:** Sőt azokat választotta ki Isten, akik a világ szemében bolondok, hogy megszégyenítse a bölcseket, és azokat választotta ki Isten, akik a világ szemében erőtlenek, hogy megszégyenítse az erőseket, és azokat választotta ki Isten, akik a világ szemében nem előkelők, sőt lenézettek, és a semmiket, hogy semmikké tegye a valamiket, hogy egyetlen ember se dicsekedjék az Isten színe előtt.

**1 Kor. 1, 30-31:** Az ő munkája az, hogy ti Krisztus Jézusban vagytok. Őt tette nekünk Isten bölcsességgé, igazsággá, megszentelődéssé és megváltássá, hogy amint meg van írva: „Aki dicsekszik, az Úrral dicsekedjék.”

**1 Kor. 2, 4-5:** Beszédem és igehirdetésem sem az emberi bölcsesség megejtő szavaival hangzott hozzátok, hanem a Lélek bizonyító erejével, hogy hitetek ne emberek bölcsességén, hanem Isten erején nyugodjék.

**1 Kor. 3, 10:** Az Istentől nekem adott kegyelem szerint, mint bölcs építőmester, alapot vetettem, de más épít rá. Vigyázzon azonban mindenki, hogyan épít rá.

**1 Kor. 3, 11:** Mert más alapot senki sem vethet a meglevőn kívül, aki Jézus Krisztus.

**1 Kor. 3, 12:** Azt pedig, hogy ki mit épít erre az alapra: aranyat, ezüstöt, drágakövet, fát, szénát vagy szalmát,

**1 Kor. 4, 5:** Egyáltalán ne ítéljetek azért addig, míg el nem jön az Úr. Ő majd megvilágítja a sötétség titkait, és nyilvánvalóvá teszi a szívek szándékait, és akkor mindenki Istentől kapja meg a dicséretet.

**1 Kor. 4, 20:** Mert nem beszédben áll az Isten országa, hanem erőben.

**1 Kor. 6, 9-10:** Vagy nem tudjátok, hogy igazságtalanok nem örökölhetik Isten országát? Ne tévelyegjetek: sem paráznák, sem bálványimádók, sem házasságtörők, sem bujálkodók, sem fajtalanok, sem tolvajok, sem nyerészkedők, sem részegesek, sem rágalmazók, sem harácsolók nem fogják örökölni Isten országát.

**1 Kor. 6, 19-20:** Vagy nem tudjátok, hogy testetek a bennetek levő Szentlélek temploma, akit Istentől kaptatok, és ezért nem a magatokéi vagytok? Mert áron vétettetek meg: dicsőítsétek tehát Istent testetekben!

**1 Kor. 9, 16:** Mert ha az evangéliumot hirdetem, azzal nincs mit dicsekednem, mivel kényszer nehezedik rám. Jaj nekem ugyanis, ha nem hirdetem az evangéliumot!

**1 Kor. 10, 12:** Aki tehát azt gondolja, hogy áll, vigyázzon, hogy el ne essék!

**1 Kor. 10, 13:** Emberi erőt meghaladó kísértés még nem ért titeket. Isten pedig hűséges, és nem hagy titeket erőtökön felül kísérteni; sőt a kísértéssel együtt el fogja készíteni a szabadulás útját is, hogy el bírjátok azt viselni.

**1 Kor. 10, 31:** Akár esztek tehát, akár isztok, vagy bármi mást tesztek, mindent Isten dicsőségére tegyetek!

**1 Kor. 13, 1:** Ha emberek vagy angyalok nyelvén szólok is, szeretet pedig nincs bennem, olyanná lettem, mint a zengő érc vagy a pengő cimbalom.

**1 Kor. 13, 2:** És ha prófétálni is tudok, ha minden titkot ismerek is, és minden bölcsességnek birtokában vagyok, és ha teljes hitem van is, úgyhogy hegyeket mozdíthatok el, szeretet pedig nincs bennem: semmi vagyok.

**1 Kor. 13, 3:** És ha szétosztom az egész vagyonomat, és testem tűzhalálra szánom, szeretet pedig nincs bennem: semmi hasznom abból.

**1 Kor. 13, 4-7:** A szeretet türelmes, jóságos; a szeretet nem irigykedik, a szeretet nem kérkedik, nem fuvalkodik fel. Nem viselkedik bántóan, nem keresi a maga hasznát, nem gerjed haragra, nem rója fel a rosszat. Nem örül a hamisságnak, de együtt örül az igazsággal. Mindent elfedez, mindent hisz, mindent remél, mindent eltűr.

**1 Kor. 13, 8:** A szeretet soha el nem múlik. De legyen bár prófétálás: el fog töröltetni; legyen nyelveken szólás: meg fog szűnni; legyen ismeret: el fog töröltetni.

**1 Kor. 13, 12:** Mert most tükör által homályosan látunk, akkor pedig színről színre; most töredékes az ismeretem, akkor pedig úgy fogok ismerni, ahogyan engem is megismert Isten.

**1 Kor. 13, 13:** Most azért megmarad a hit, a remény, a szeretet, e három; ezek közül pedig a legnagyobb a szeretet.

**1 Kor. 15, 33:** Ne tévelyegjetek: „A jó erkölcsöt megrontja a rossz társaság!”

**1 Kor. 15, 58:** Ezért, szeretett testvéreim, legyetek szilárdak, rendíthetetlenek, buzgólkodjatok mindenkor az Úr munkájában, hiszen tudjátok, hogy fáradozásotok nem hiábavaló az Úrban.

**1 Kor. 16, 13:** Vigyázzatok, álljatok meg a hitben, legyetek férfiak, legyetek erősek!

**1 Kor. 16, 14:** Minden dolgotok szeretetben menjen végbe!

**2 Kor. 4, 17-18:** Mert a mi pillanatnyi könnyű szenvedésünk minden mértéket meghaladó nagy, örök dicsőséget szerez nekünk, mivel nem a láthatókra nézünk, hanem a láthatatlanokra, mert a láthatók ideig valók, a láthatatlanok pedig örökkévalók.

**2 Kor. 5, 6-7:** Tehát mindenkor bizakodunk, és tudjuk, hogy amíg a testben lakunk, távol lakunk az Úrtól; mert hitben járunk, nem látásban.

**2 Kor. 5, 10:** Mert mindnyájunknak leplezetlenül kell odaállnunk Krisztus ítélőszéke elé, hogy mindenki megkapja, amit megérdemel, aszerint, amit e testben cselekedett: akár jót, akár gonoszat.

**2 Kor. 6, 13-14:** Mint gyermekeimhez szólok: viszonzásul tárjátok ki ti is szíveteket! Ne legyetek a hitetlenekkel felemás igában, mert mi köze egymáshoz az igazságnak és a gonoszságnak, vagy mi köze van a világosságnak a sötétséghez?

**2 Kor. 9, 7:** Mindenki úgy adjon, ahogyan előre eldöntötte szívében, ne kedvetlenül vagy kényszerűségből, mert „a jókedvű adakozót szereti Isten”.

**2 Kor. 10, 17-18:** Aki pedig dicsekszik, az Úrral dicsekedjék, mert nem az a megbízható ember, aki önmagát ajánlja, hanem az, akit az Úr ajánl.

**2 Kor. 12, 9:** De ő ezt mondta nekem: Elég neked az én kegyelmem, mert az én erőm erőtlenség által ér célhoz. Legszívesebben tehát az erőtlenségeimmel dicsekszem, hogy Krisztus ereje lakozzék bennem.

**Gal. 5, 16:** Intelek titeket: a Lélek szerint éljetek, és a test kívánságát ne teljesítsétek.

**Gal. 5, 22-23:** A Lélek gyümölcse pedig: szeretet, öröm, békesség, türelem, szívesség, jóság, hűség, szelídség, önmegtartóztatás. Az ilyenek ellen nincs törvény.

**Gal. 5, 24:** Akik pedig Krisztus Jézuséi, a testet megfeszítették szenvedélyeivel és kívánságaival együtt.

**Gal. 5, 25-26:** Ha a Lélek által élünk, akkor éljünk is a Lélek szerint. Ne legyünk becsvágyók, egymást ingerlők, egymásra irigykedők.

**Gal. 6, 9-10:** A jó cselekvésében pedig ne fáradjunk el, mert a maga idejében aratunk majd, ha meg nem lankadunk. Ezért tehát, amíg időnk van, tegyünk jót mindenkivel, leginkább pedig azokkal, akik testvéreink a hitben.

**Ef. 2, 8-9:** Hiszen kegyelemből van üdvösségetek hit által, és ez nem tőletek van: Isten ajándéka; nem cselekedetekért, hogy senki se dicsekedjék.

**Ef. 2, 19:** Ezért tehát nem vagytok többé idegenek és jövevények, hanem polgártársai a szenteknek és háza népe Istennek.

**Ef. 4, 3:** igyekezzetek megtartani a Lélek egységét a békesség kötelékével.

**Ef. 4, 4-6:** Egy a test, és egy a Lélek, aminthogy egy reménységre kaptatok elhívást is: egy az Úr, egy a hit, egy a keresztség, egy az Istene és Atyja mindeneknek; ő van mindenek felett és mindenek által és mindenekben.

**Ef. 4, 25:** Ezért tehát vessétek le a hazugságot, és mondjatok igazat, mindenki a felebarátjának, mivelhogy tagjai vagyunk egymásnak.

**Ef. 4, 28:** A tolvaj többé ne lopjon, hanem inkább dolgozzék, és saját keze munkájával szerezze meg a javakat, hogy legyen mit adnia a szűkölködőknek.

**Ef. 4, 29:** Semmiféle bomlasztó beszéd ne hagyja el a szátokat, hanem csak akkor szóljatok, ha az jó a szükséges építésre, hogy áldást hozzon azokra, akik hallják.

**Ef. 4, 31:** Minden keserűség, indulat, harag, kiabálás és istenkáromlás legyen távol tőletek minden gonoszsággal együtt.

**Ef. 4, 32:** Viszont legyetek egymáshoz jóságosak, irgalmasak, bocsássatok meg egymásnak, ahogyan Isten is megbocsátott nektek Krisztusban.

**Ef. 5, 1-2:** Legyetek tehát Isten követői mint szeretett gyermekei, és éljetek szeretetben, ahogyan Krisztus is szeretett minket, és önmagát adta értünk áldozati ajándékul, Istennek kedves illatként.

**Ef. 6, 6-8:** Ne látszatra szolgáljatok, mintha embereknek akarnátok tetszeni, hanem Krisztus szolgáiként cselekedjétek Isten akaratát: lélekből, jóakarattal szolgáljatok, mint az Úrnak, és nem mint embereknek, mert tudjátok, hogy ha valaki valami jót tesz, visszakapja az Úrtól, akár szolga, akár szabad.

**Fil. 1, 21:** Mert nekem az élet Krisztus, és a meghalás nyereség.

**Fil. 2, 3:** Semmit ne tegyetek önzésből, se hiú dicsőségvágyból, hanem alázattal különbnek tartsátok egymást magatoknál;

**Fil. 2, 5:** Az az indulat legyen bennetek, amely Krisztus Jézusban is megvolt:

**Fil. 2, 7-8:** hanem megüresítette önmagát, szolgai formát vett fel, emberekhez hasonlóvá lett, és emberként élt; megalázta magát, és engedelmes volt mindhalálig, mégpedig a kereszthalálig.

**Fil. 2, 11:** és minden nyelv vallja, hogy Jézus Krisztus Úr az Atya Isten dicsőségére.

**Fil. 2, 13:** mert Isten az, aki munkálja bennetek mind a szándékot, mind a cselekvést az ő tetszésének megfelelően.

**Fil. 3, 20:** Nekünk pedig a mennyben van polgárjogunk, ahonnan az Úr Jézus Krisztust is várjuk üdvözítőül,

**Fil. 4, 4:** Örüljetek az Úrban mindenkor! Ismét mondom: örüljetek!

**Fil. 4, 6:** Semmiért se aggódjatok, hanem imádságban és könyörgésben mindenkor hálaadással tárjátok fel kéréseiteket Isten előtt;

**Fil. 4, 8:** Egyébként pedig, testvéreim, ami igaz, ami tisztességes, ami igazságos, ami tiszta, ami szeretetre méltó, ami jó hírű, ha valami nemes és dicséretes, azt vegyétek figyelembe!

**Fil. 4, 13:** Mindenre van erőm Krisztusban, aki megerősít engem.

**Kol. 1, 13-14:** Ő szabadított meg minket a sötétség hatalmából, és ő vitt át minket szeretett Fiának országába, akiben van megváltásunk és bűneink bocsánata.

**Kol. 2, 6-7:** Mivel tehát már elfogadtátok Krisztus Jézust, az Urat, éljetek is őbenne. Gyökerezzetek meg és épüljetek fel őbenne, erősödjetek meg a hit által, amint tanultátok, és hálaadásotok legyen egyre bőségesebb.

**Kol. 2, 14:** Eltörölte a követeléseivel minket terhelő adóslevelet, amely minket vádolt, és eltávolította azt az útból, odaszegezve a keresztfára.

**Kol. 2, 20-21:** Ha tehát Krisztussal meghaltatok a világ elemei számára, miért terhelitek magatokat olyan kötöttségekkel, amelyek csak az e világ szerint élőkre kötelezők: „Ne nyúlj hozzá, ne ízleld meg, ne is érintsd!”

**Kol. 3, 2:** Az odafennvalókkal törődjetek, ne a földiekkel!

**Kol. 3, 12:** Mint Istennek szent és szeretett választottai, öltsetek magatokra könyörületes szívet, jóságot, alázatot, szelídséget, türelmet.

**Kol. 3, 15:** És Krisztus békessége uralkodjék a szívetekben, hiszen erre vagytok elhíva az egy testben. És legyetek háládatosak.

**Kol. 3, 16:** Krisztus beszéde lakjék bennetek gazdagon úgy, hogy tanítsátok egymást teljes bölcsességgel, és intsétek egymást zsoltárokkal, dicséretekkel, lelki énekekkel; hálaadással énekeljetek szívetekben Istennek.

**Kol. 3, 17:** Amit pedig szóltok vagy tesztek, mind az Úr Jézus nevében tegyétek, hálát adva az Atya Istennek őáltala.

**Kol. 3, 23-24:** Amit tesztek, jó lélekkel végezzétek úgy, mint az Úrnak, és nem úgy, mint az embereknek, tudván, hogy ti viszonzásul megkapjátok az Úrtól az örökséget. Az Úr Krisztusnak szolgáljatok!

**Kol. 4, 2:** Az imádkozásban és a hálaadásban legyetek kitartóak és éberek!

**Kol. 4, 5:** Bölcsen viselkedjetek a kívülállók iránt, a kedvező alkalmakat jól használjátok fel.

**Kol. 4, 17:** És mondjátok meg Arkhipposznak: Legyen gondod rá, hogy betöltsed azt a szolgálatot, amelyet átvettél az Úrban!

**1 Thessz. 2, 4:** Hanem mivel Isten ítélt minket alkalmasnak arra, hogy ránk bízza az evangéliumot, úgy hirdetjük azt, mint akik nem embereknek akarunk tetszeni, hanem a szívünket vizsgáló Istennek.

**1 Thessz. 2, 12:** intettünk és buzdítottunk, és kérve kértünk titeket: éljetek Istenhez méltó módon, aki az ő országába és dicsőségébe hív titeket.

**1 Thessz. 4, 11:** és tartsátok becsületbeli dolognak, hogy csendesen éljetek, tegyétek a magatok dolgát, és saját kezetekkel dolgozzatok, ahogyan elrendeltük nektek.

**1 Thessz. 4, 13:** Nem szeretnénk, testvéreink, ha tudatlanok lennétek az elhunytak felől, és szomorkodnátok, mint a többiek, akiknek nincs reménységük.

**1 Thessz. 5, 5-6:** Hiszen valamennyien a világosság és a nappal fiai vagytok, nem vagyunk az éjszakáé, sem a sötétségé. Akkor ne is aludjunk, mint a többiek, hanem legyünk éberek és józanok!

**1 Thessz. 5, 21-22:** de mindent vizsgáljatok meg: a jót tartsátok meg, a gonosz minden fajtájától tartózkodjatok!

**2 Thessz. 3, 3:** De hűséges az Úr, aki megerősít titeket, és megőriz a gonosztól.

**1 Tim. 2, 11:** Az asszony csendben tanuljon, teljes alázatossággal.

**1 Tim. 4, 11:** Rendeld el ezeket, és tanítsd!

**1 Tim. 4, 12:** Senki meg ne vessen ifjú korod miatt, hanem légy példája a hívőknek beszédben, magaviseletben, szeretetben, hitben, tiszta életben.

**1 Tim. 4, 16:** Legyen gondod önmagadra és a tanításra, maradj meg ezek mellett, mert ha így cselekszel, megmented magadat is, hallgatóidat is.

**1 Tim. 6, 6-7:** Valóban nagy nyereség a kegyesség megelégedéssel, mert semmit sem hoztunk a világba, nem is vihetünk ki semmit belőle.

**1 Tim. 6, 12:** Harcold meg a hit nemes harcát, ragadd meg az örök életet, amelyre elhívattál, amelyről vallást tettél szép hitvallással sok tanú előtt.

**1 Tim. 6, 17:** Azoknak pedig, akik e világban gazdagok, parancsold meg, hogy ne legyenek gőgösek, és ne a bizonytalan gazdagságban reménykedjenek, hanem Istenben, aki megélhetésünkre mindent bőségesen megad nekünk.

**2 Tim. 1, 7:** Mert nem a félelem lelkét adta nekünk Isten, hanem az erő, a szeretet és a józanság lelkét.

**2 Tim. 2, 3:** Vállald velem együtt a szenvedést, mint Krisztus Jézus jó katonája.

**2 Tim. 2, 14:** Ezekre emlékeztesd és Isten színe előtt bizonyságot téve kérd őket: ne folytassanak haszontalan szóharcot a hallgatók romlására.

**2 Tim. 2, 19:** Az Isten által vetett szilárd alap azonban megáll, amelyre ez van pecsételve: „Ismeri az Úr az övéit, és hagyja el a gonoszt mindenki, aki az Úr nevét vallja!”

**2 Tim. 2, 22:** Az ifjúkori kívánságot pedig kerüld! Törekedj viszont az igazságra, a hitre, a szeretetre, a békességre azokkal együtt, akik tiszta szívből hívják segítségül az Urat.

**2 Tim. 2, 23:** Az ostoba és éretlen vitatkozások elől térj ki, tudva, hogy ezek viszálykodást szülnek.

**2 Tim. 2, 24:** De az Úr szolgája ne viszálykodjék, hanem legyen barátságos mindenkihez, tanításra alkalmas és türelmes,

**2 Tim. 3, 16:** A teljes Írás Istentől ihletett, és hasznos a tanításra, a feddésre, a megjobbításra, az igazságban való nevelésre;

**2 Tim. 4, 1-2:** Kérve kérlek Isten és Krisztus Jézus színe előtt, aki ítélni fog élőket és holtakat; az ő eljövetelére és országára kérlek: hirdesd az igét, állj elő vele, akár alkalmas, akár alkalmatlan az idő, feddj, ints, biztass teljes türelemmel és tanítással.

**2 Tim. 4, 5-2:** Te azonban légy józan mindenben, a bajokat szenvedd el, végezd az evangélista munkáját, töltsd be szolgálatodat.

**Zsid. 2, 18:** Mivel maga is kísértést szenvedett, segíteni tud azokon, akik kísértésbe esnek.

**Zsid. 4, 12:** Mert Isten igéje élő és ható, élesebb minden kétélű kardnál, mélyre hatol, az elme és a lélek, az ízületek és a velők szétválásáig, és megítéli a szív gondolatait és szándékait.

**Zsid. 4, 14:** Mivel tehát nagy főpapunk van, aki áthatolt az egeken, Jézus, az Isten Fia, ragaszkodjunk hitvallásunkhoz.

**Zsid. 4, 15-16:** Mert nem olyan főpapunk van, aki ne tudna megindulni erőtlenségeinken, hanem olyan, aki hozzánk hasonlóan kísértést szenvedett mindenben, de nem vétkezett. Járuljunk tehát bizalommal a kegyelem trónusához, hogy irgalmat nyerjünk, és kegyelmet találjunk, amikor segítségre van szükségünk.

**Zsid. 6, 11-12:** De kívánjuk, hogy közületek mindenki ugyanazt az igyekezetet tanúsítsa mindvégig, amíg a reménység egészen be nem teljesedik, hogy ne legyetek restek, hanem kövessétek azokat, akik hit és türelem által öröklik az ígéreteket.

**Zsid. 10, 35:** Ne veszítsétek el tehát bizalmatokat, amelynek nagy jutalma van.

**Zsid. 11, 1:** A hit pedig a remélt dolgokban való bizalom, és a nem látható dolgok létéről való meggyőződés.

**Zsid. 11, 6:** Hit nélkül pedig senki sem lehet kedves Isten előtt, mert aki az Istenhez járul, annak hinnie kell, hogy ő van, és megjutalmazza azokat, akik őt keresik.

**Zsid. 12, 1:** Ezért tehát mi is, akiket a bizonyságtevőknek ekkora fellege vesz körül, tegyünk le minden ránk nehezedő terhet és a bennünket megkörnyékező bűnt, és állhatatossággal fussuk meg az előttünk levő pályát.

**Zsid. 12, 11:** Az első pillanatban ugyan semmiféle fenyítés nem látszik örvendetesnek, hanem keservesnek, később azonban az igazság békességes gyümölcsét hozza azoknak, akik megedződtek általa.

**Zsid. 12, 14:** Törekedjetek mindenki iránt a békességre és a szent életre, amely nélkül senki sem látja meg az Urat.

**Zsid. 12, 28:** Ezért tehát mi, akik rendíthetetlen országot kaptunk, legyünk hálásak, és azzal szolgáljunk Istennek tetsző módon: tisztelettel és félelemmel.

**Zsid. 13, 5:** Ne legyetek pénzsóvárak, érjétek be azzal, amitek van, mert ő mondta: „Nem maradok el tőled, sem el nem hagylak téged.”

**Zsid. 13, 14:** Mert nincsen itt maradandó városunk, hanem az eljövendőt keressük.

**Zsid. 13, 16:** A jótékonyságról és az adakozásról pedig el ne feledkezzetek, mert ilyen áldozatokban gyönyörködik Isten.

**Jak. 1, 2-3:** Teljes örömnek tartsátok, testvéreim, amikor különféle kísértésekbe estek, tudva, hogy hitetek próbája állhatatosságot eredményez.

**Jak. 1, 5:** Ha pedig valakinek nincsen bölcsessége, kérjen Istentől, aki készségesen és szemrehányás nélkül ad mindenkinek, és meg is kapja.

**Jak. 1, 12:** Boldog ember az, aki a kísértés idején kitart, mert miután kiállta a próbát, elnyeri az élet koronáját, amelyet az Úr megígért az őt szeretőknek.

**Jak. 1, 17:** minden jó adomány és minden tökéletes ajándék onnan felülről, a világosság Atyjától száll alá, akiben nincs változás, sem fénynek és árnyéknak váltakozása.

**Jak. 1, 19-20:** Tanuljátok meg tehát, szeretett testvéreim: legyen minden ember gyors a hallásra, késedelmes a szólásra, késedelmes a haragra, mert az ember haragja nem szolgálja Isten igazságát.

**Jak. 1, 22:** Legyetek az igének cselekvői, ne csupán hallgatói, hogy be ne csapjátok magatokat.

**Jak. 1, 26:** Ha valaki azt hiszi, hogy kegyes, de nem fékezi meg a nyelvét, hanem még önmagát is becsapja, annak a kegyessége hiábavaló.

**Jak. 1, 27:** Tiszta és szeplőtlen kegyesség az Isten és Atya előtt ez: meglátogatni az árvákat és az özvegyeket nyomorúságukban, és tisztán megőrizni az embernek önmagát a világtól.

**Jak. 2, 13:** Mert az ítélet irgalmatlan ahhoz, aki nem cselekedett irgalmasságot, az irgalmasság viszont diadalmaskodik az ítéleten.

**Jak. 4, 8:** Közeledjetek Istenhez, és ő közeledni fog hozzátok. Tisztítsátok meg a kezeteket, ti bűnösök, és szenteljétek meg a szíveteket, ti kétlelkűek.

**Jak. 4, 10:** Alázzátok meg magatokat az Úr előtt, és ő felmagasztal titeket.

**Jak. 4, 17:** Aki tehát tudna jót tenni, de nem teszi: bűne az annak.

**Jak. 5, 8:** Legyetek tehát ti is türelemmel, és erősítsétek meg a szíveteket, mert az Úr eljövetele közel van.

**Jak. 5, 15:** És a hitből fakadó imádság megszabadítja a szenvedőt, az Úr felsegíti őt, sőt ha bűnt követett is el, bocsánatot nyer.

**Jak. 5, 16:** Valljátok meg azért egymásnak bűneiteket, és imádkozzatok egymásért, hogy meggyógyuljatok. Nagy az ereje az igaz ember buzgó könyörgésének.

**1 Pét. 1, 14-15:** Mint engedelmes gyermekek ne igazodjatok azokhoz a korábbi vágyaitokhoz, amelyek tudatlanságotok idején voltak bennetek, hanem – mivel ő, a Szent hívott el titeket – ti is szentek legyetek egész magatartásotokban,

**1 Pét. 2, 5:** ti magatok is mint élő kövek épüljetek fel lelki házzá, szent papsággá, hogy lelki áldozatokat ajánljatok fel, amelyek kedvesek Istennek Jézus Krisztus által.

**1 Pét. 2, 9:** Ti azonban választott nemzetség, királyi papság, szent nemzet vagytok, Isten tulajdonba vett népe, hogy hirdessétek nagy tetteit annak, aki a sötétségből az ő csodálatos világosságára hívott el titeket;

**1 Pét. 3, 9:** Ne fizessetek a gonoszért gonosszal, vagy a gyalázkodásért gyalázkodással, hanem ellenkezőleg: mondjatok áldást, hiszen arra hívattatok el, hogy áldást örököljetek.

**1 Pét. 3, 15:** Ellenben az Urat, Krisztust tartsátok szentnek szívetekben, és legyetek készen mindenkor számot adni mindenkinek, aki számon kéri tőletek a bennetek élő reménységet.

**1 Pét. 4, 8:** Mindenekelőtt legyetek kitartóak az egymás iránti szeretetben, mert a szeretet sok bűnt elfedez.

**1 Pét. 4, 9:** Legyetek egymás iránt vendégszeretők zúgolódás nélkül.

**1 Pét. 5, 5:** Ugyanúgy, ti, ifjabbak, engedelmeskedjetek az idősebbeknek, egymás iránt pedig valamennyien legyetek alázatosak, mert Isten a gőgösöknek ellenáll, az alázatosaknak pedig kegyelmet ad.

**1 Pét. 5, 7:** Minden gondotokat őreá vessétek, mert neki gondja van rátok.

**2 Pét. 3, 9:** Nem késlekedik az Úr az ígérettel, amint egyesek gondolják, hanem türelmes hozzátok, mert nem azt akarja, hogy némelyek elvesszenek, hanem azt, hogy mindenki megtérjen.

**1 Ján. 1, 8:** Ha azt mondjuk, hogy nincsen bűnünk, önmagunkat csaljuk meg, és nincs meg bennünk az igazság.

**1 Ján. 1, 9:** Ha megvalljuk bűneinket, hű és igaz ő: megbocsátja bűneinket, és megtisztít minket minden gonoszságtól.

**1 Ján. 2, 12:** Írok nektek, gyermekek, mert megbocsáttattak bűneitek az ő nevéért.

**1 Ján. 2, 15:** Ne szeressétek a világot, se azt, ami a világban van. Ha valaki szereti a világot, abban nincs meg az Atya szeretete.

**1 Ján. 3, 5:** Azt pedig tudjátok, hogy ő azért jelent meg, hogy elvegye a bűnöket, és hogy őbenne nincsen bűn.

**1 Ján. 3, 14:** Mi tudjuk, hogy átmentünk a halálból az életbe, mert szeretjük testvéreinket: aki nem szereti a testvérét, az a halálban marad.

**1 Ján. 3, 18:** Gyermekeim, ne szóval szeressünk, ne is nyelvvel, hanem cselekedettel és igazsággal.

**1 Ján. 4, 4:** Ti Istentől valók vagytok, gyermekeim, és legyőztétek őket, mert nagyobb az, aki bennetek van, mint az, aki a világban van.

**1 Ján. 4, 9:** Abban nyilvánult meg Isten irántunk való szeretete, hogy egyszülött Fiát küldte el Isten a világba, hogy éljünk őáltala.

**1 Ján. 4, 18:** A szeretetben nincs félelem, sőt a teljes szeretet kiűzi a félelmet; mert a félelem gyötrelemmel jár, aki pedig fél, nem lett tökéletessé a szeretetben.

**1 Ján. 4, 20:** Ha valaki azt mondja: „Szeretem Istent”, a testvérét viszont gyűlöli, az hazug, mert aki nem szereti a testvérét, akit lát, nem szeretheti Istent, akit nem lát.

**2 Ján. 1, 10-11:** Ha valaki hozzátok érkezik, és nem ezt a tanítást viszi, ne fogadjátok be a házatokba, és ne köszöntsétek, mert aki köszönti, közösséget vállal annak gonosz cselekedeteivel.

**3 Ján. 1, 11:** Szeretett testvérem, ne a rosszat kövesd, hanem a jót. Aki a jót cselekszi, az Istentől van, aki a rosszat cselekszi, az nem látta Istent.

**Jel. 2, 2:** Tudok cselekedeteidről, fáradozásodról és állhatatosságodról és arról, hogy nem viselheted el a gonoszokat, és próbára tetted azokat, akik apostoloknak mondják magukat, pedig nem azok, és hazugnak találtad őket.

**Jel. 2, 3-4:** Tudom, hogy állhatatos vagy, terhet viseltél az én nevemért, és nem fáradtál meg, de az a panaszom ellened, hogy nincs meg már benned az első szeretet.

**Jel. 3, 5:** Aki győz, azt öltöztetik fehér ruhába, annak a nevét nem törlöm ki az élet könyvéből, hanem vallást teszek nevéről az én Atyám előtt és angyalai előtt.

**Jel. 3, 8:** Tudok cselekedeteidről. Íme, nyitott ajtót adtam eléd, amelyet senki sem zárhat be, mert bár kevés erőd van, mégis megtartottad az én igémet, és nem tagadtad meg az én nevemet.

**Jel. 3, 20:** Íme, az ajtó előtt állok, és zörgetek: ha valaki meghallja a hangomat, és kinyitja az ajtót, bemegyek ahhoz, és vele vacsorálok, ő pedig énvelem.

**Jel. 14, 7:** és hatalmas hangon így szólt: Féljétek az Istent, és adjatok neki dicsőséget, mert eljött ítéletének órája; imádjátok azt, aki teremtette a mennyet és a földet, a tengert és a vizek forrásait!

**Jel. 19, 9:** Így szólt hozzám: Írd meg: Boldogok, akik hivatalosak a Bárány menyegzőjének vacsorájára! Ezt is mondta nekem: Ezek Isten igaz igéi.

**Jel. 21, 7:** Aki győz, örökölni fogja mindezt, és Istene leszek annak, az pedig fiam lesz.

## License

You can do (copy / change) whatever you want with the source code, but of course I don't take any responsibility for the code. More formally: The 3-Clause BSD License (see [license.md](license.md))

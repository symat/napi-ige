# Napi Ige

(a small javascrip library to get daily Hungarian Bible quotes)

## Special Thanks

The library is fetching the texts from the https://szentiras.hu, we owe thanks to the maintainer of that site and API.

## Download

The latest stable version is: `1.0.0`

You can use jsdelivr, a free CDN to download the minified javascript library:

```
   <script src="https://cdn.jsdelivr.net/gh/symat/napi-ige@1.0.0/napiige.min.js"></script>
```

## How it works

First you must include the library, then you can use a javascript function that will asynchronously fetch the quote and replace the inner-html of a DOM element.

Basic example:

```
  <body>
    <b>Quote:</b>
    <div id="myref"></div>

    <script src="https://cdn.jsdelivr.net/gh/symat/napi-ige@1.0.0/napiige.min.js"></script>

    <script>
      window.addEventListener("load", function () {
        napiIge("myref");
      });
    </script>
  </body>
```

The function `napiIge` has the following parameters:

- `targetElement`: id of the DOM element where the quote should be loaded
- `translation`: id of the supported bible translations, see: https://szentiras.hu/forditasok (default: `"RUT"`)
- `dateString`: date in ISO string format (e.g. `"1985-04-17"`), or `"today"` for the current date (default: `"today"`)
- `defaultText`: the text to show if any error happens during fetching the text from the Bible, e.g. if https://szentiras.hu is down (default: `"Bízzad az Úrra a te dolgaidat; és a te gondolatid véghez mennek. (Péld 16,3)"`)
- `loadingText`: the text to show until the quote is fetched (default: `"..."`)

You can fin more examples in the [index.html](index.html).

## License

The 3-Clause BSD License (see [license.md](license.md))

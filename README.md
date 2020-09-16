# Napi Ige

(a small javascrip library to get daily Hungarian Bible quotes)

## Special Thanks

The library is fetching the texts from the https://szentiras.hu, we owe thanks to the maintainer of that site and API.

## How it works

First you must include the napiige.js file, then you can use a javascript function that will asynchronously fetch the quote and replace the inner-html of a DOM element.

Basic example:

```
  <body>
    <b>Quote:</b>
    <div id="myref"></div>

    <script src="napiige.js"></script>
    <script>
      window.addEventListener("load", function () {
        napi_ige("myref");
      });
    </script>
  </body>
```

The function `napi_ige` has the following parameters:

# Youtube Max to Window

Maximizes video player to window instead of the screen

# Build

YTM uses Parcel to create bundled files

Create a production bundled file with:
```shell
npm run build
```

# Usage
YTM uses GreaseMonkey to inject and run scripts

Take the bundled code and create a GreaseMonkey script that looks similar to:
```Javascript
// ==UserScript==
// @name         YoutubeToMax
// @description  Maximizes video player to window instead of the screen
// @author       FöRVaiS
// @match        https://www.youtube.com/*
// ==/UserScript==

(function () {
    // {Bundle Code}
})()
```

Loading a video will generate a new icon being prepended to the video control bar.
The button will toggle window-fullscreen mode.

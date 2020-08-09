# :zap: Javascript30 Tutorial Geolocation

* Wes Bos Youtube Tutorial: [JavaScript Geolocation based Speedometer and Compass - #JavaScript30 21/30](https://www.youtube.com/watch?v=X7Cbtra0C6I&index=21&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH).

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Javascript30 Tutorial Geolocation](#zap-javascript30-tutorial-geolocation)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Tutorial app to show geolocation and speed, tutorial 21 from Wes Bos Javascript30 course

## :camera: Screenshots

![Example screenshot](./img/geo.png).

## :signal_strength: Technologies

* [Javascript v1.9 ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## :floppy_disk: Setup

* Open index.html in browser. If any code is changed the browser needs to be refreshed.

## :computer: Code Examples

* geolocation used to get coordinates and speed:

```javascript
navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = Math.round(data.coords.speed);
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.err(err);
});
```

## :cool: Features

* Needs a simulator to test the speed indicator.

## :clipboard: Status & To-Do List

* Status: Working. Updated to work from browser, not from Glitch.
* To-Do: can be enhanced to show more information on location etc. on the screen, not just using console.log.
Options could be changed, to show miles per hour instead of km/h etc.

## :clap: Inspiration

* [JavaScript Geolocation based Speedometer and Compass - #JavaScript30 21/30](https://www.youtube.com/watch?v=X7Cbtra0C6I&index=21&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)

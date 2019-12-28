const arrow = document.querySelector('.arrow');
const speed= document.querySelector('.speed');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = Math.round(data.coords.speed);
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.err(err);
});

/*
notes

geolocation data is:
GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1577547366569}
coords: GeolocationCoordinates
latitude: 41.591158899999996
longitude: 1.5208624
altitude: null
accuracy: 427227
altitudeAccuracy: null
heading: null
speed: null
__proto__: GeolocationCoordinates
timestamp: 1577547366569
__proto__: GeolocationPosition

format: navigator.geolocation.getCurrentPosition(success[, error[, [options]])

change km to miles?
*/

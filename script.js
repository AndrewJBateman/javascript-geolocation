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
format: navigator.geolocation.getCurrentPosition(success[, error[, [options]])

change km to miles?
*/

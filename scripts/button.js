//var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jupiter-roman-tkachenko.jpg') {
      myImage.setAttribute ('src','images/deathstar.png');
    } else {
      myImage.setAttribute ('src','images/jupiter-roman-tkachenko.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your codename.');
  localStorage.setItem('codename', myName);
  myHeading.textContent = 'There is something behind that planet, ' + myName;
}
if(!localStorage.getItem('codename')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('codename');
  myHeading.textContent = 'There is something behind that planet, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

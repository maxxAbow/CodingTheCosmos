
var today = document.getElementById('dateToday');

// today.innerHTML=moment().format('LLLL');


var apiKeyPicture = "vbBdCkMZKqwb4qJwGH4og1wD1L5EJKlW5gF4m9m4"

var photoURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${apiKeyPicture}`

// Retrieve photo url from link

var marsImgSrc = document.getElementById('mars-photo')

// Shows most recent photo



var roverModal = document.getElementById("exampleModalCenter")
var solInfo = document.getElementById('sol')
var earthDate = document.getElementById('earthdate')
var camera = document.getElementById('camera')
var roverStatus = document.getElementById("status")


let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")

modalBtn.onclick = function(){
  modal.style.display = "block"
  
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }


}

// converts months to numbered format for select-date api call


  const monthObj = {
  Jan: "1",
  Feb: "2",
  Mar: "3",
  Apr: "4",
  May: "5",
  Jun: "6",
  Jul: "7",
  Aug: "8",
  Sep: "9",
  Oct: "10",
  Nov: "11",
  Dec: "12" 
} 

  function me(){
    var text = $( "#date-picker" ).datepicker("getDate").toString()
    var newText = text.slice(4,7)
    var yearNumber = text.slice(11,15)
    var dayNumber = text.slice(8,11)
    var monthNumber = monthObj[newText]
    
    
    console.log(newText)
    console.log(text)
    console.log(monthNumber)
    console.log(yearNumber)
    console.log(dayNumber)
    



var submittedDate = yearNumber + '-' + monthNumber + '-' + dayNumber 
// console.log(submittedDate)

var submitDateUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + submittedDate.trim() + "&api_key=vbBdCkMZKqwb4qJwGH4og1wD1L5EJKlW5gF4m9m4"
console.log(submitDateUrl)

fetch(submitDateUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var selectedPhoto = data.photos[0]

    marsImgSrc.src = selectedPhoto.img_src

    console.log(selectedPhoto.rover.name)
    
    solInfo.innerHTML = "Rover: " + selectedPhoto.rover.name
    earthDate.innerText = "Earth Date: " + selectedPhoto.earth_date
    camera.innerText = "Camera: " + selectedPhoto.camera.full_name
    roverStatus.innerText = "Rover Status: " + selectedPhoto.rover.status


  })


}

  
  

  

















$( function() {
  $( "#date-picker" ).datepicker({dateFormat:'yy-mm-dd'});
} );

  fetch(photoURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var latestPhoto = data.latest_photos[0]
    marsImgSrc.src = latestPhoto.img_src

    solInfo.innerText = "Rover: " + latestPhoto.rover.name
    earthDate.innerText = "Earth Date: " + latestPhoto.earth_date
    camera.innerText = "Camera: " + latestPhoto.camera.full_name
    roverStatus.innerText = "Rover Status: " + latestPhoto.rover.status


  })

//Earth date, upper right
var today = document.getElementById('dateToday');
today.innerHTML = moment().format('LLLL');

//DONKI
//https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=DEMO_KEY

var todaysDate = 'startDate' + moment().format('L');
var apiKey = '&api_key=jNaTZmpOkTNGqbyCyZipimLVQEiNfeKjWvkcEMe3';
var dataUrl = "https://api.nasa.gov/DONKI/notifications?" + todaysDate + apiKey;
var msgBody = document.getElementById('donki');

fetch(dataUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data[0].messageBody);
    var jargon = data[0].messageBody.replace(/\##/g, "<br><br>");
    msgBody.innerHTML = jargon;
  })

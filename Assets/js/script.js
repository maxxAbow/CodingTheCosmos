var today = document.getElementById('dateToday');

// today.innerHTML=moment().format('LLLL');


var apiKeyPicture =  "vbBdCkMZKqwb4qJwGH4og1wD1L5EJKlW5gF4m9m4"


var photoURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-8-3&api_key=" + apiKeyPicture

// Retrieve photo url from link

var marsImgSrc = document.getElementById('mars-photo')

// Shows most recent photo



var roverModal = document.getElementById("exampleModalCenter")
var modalButton = document.getElementById('modal-btn')
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






fetch(photoURL)
    .then(function (response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data.photos[0].earth_date)
        console.log(data.photos[0].sol)
        console.log(data.photos[0].img_src)
        marsImgSrc.src=data.photos[0].img_src
        
        solInfo.innerText = "Rover: " + data.photos[0].rover.name
        earthDate.innerText = "Earth Date: " + data.photos[0].earth_date
        camera.innerText = "Camera: " + data.photos[0].camera.full_name
        roverStatus.innerText = "Rover Status: " + data.photos[0].rover.status


    })



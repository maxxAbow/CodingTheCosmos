var today = document.getElementById('dateToday');

// today.innerHTML=moment().format('LLLL');


var apiKeyPicture =  "vbBdCkMZKqwb4qJwGH4og1wD1L5EJKlW5gF4m9m4"

var photoURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3666&api_key=" + apiKeyPicture

// Retrieve photo url from link

var marsImgSrc = document.getElementById('mars-photo')



fetch(photoURL)
    .then(function (response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data.photos[0].img_src)
        marsImgSrc.src=data.photos[0].img_src
    })



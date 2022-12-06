//Earth date, upper right
var today = document.getElementById('dateToday');
today.innerHTML=moment().format('LLLL');

//DONKI
//https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=DEMO_KEY

var todaysDate = 'startDate' + moment().format('L');
var apiKey='&api_key=jNaTZmpOkTNGqbyCyZipimLVQEiNfeKjWvkcEMe3';
var dataUrl = "https://api.nasa.gov/DONKI/notifications?" + todaysDate + apiKey;
var msgBody=document.getElementById('donki');

fetch(dataUrl)
    .then(function (response){
        return response.json();
    })
    .then (function(data){
        console.log(data[0].messageBody);
        var jargon=data[0].messageBody.replace(/\##/g,"</br>");
        msgBody.innerHTML=jargon;
    })

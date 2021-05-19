`use strict`

$(function(){


    let daily = [
        {
        "dt": 1619982000,
        "sunrise": 1619959135,
        "sunset": 1620007935,
        "moonrise": 1619941320,
        "moonset": 1619977380,
        "moon_phase": 0.71,
        "temp": {
            "day": 86.9,
            "min": 72.32,
            "max": 90.09,
            "night": 79.2,
            "eve": 85.5,
            "morn": 72.32
        },
        "feels_like": {
            "day": 83.41,
            "night": 69.76,
            "eve": 82.26,
            "morn": 69.76
        },
        "pressure": 1002,
        "humidity": 9,
        "dew_point": 22.73,
        "wind_speed": 22.5,
        "wind_deg": 222,
        "wind_gust": 34.05,
        "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
            }
        ],
        "clouds": 0,
        "pop": 0,
        "uvi": 9.36
        },
        {
        "dt": 1620068400,
        "sunrise": 1620045478,
        "sunset": 1620094381,
        "moonrise": 1620030720,
        "moonset": 1620067680,
        "moon_phase": 0.75,
        "temp": {
            "day": 77.9,
            "min": 67.24,
            "max": 88.25,
            "night": 78.66,
            "eve": 88.25,
            "morn": 67.24
        },
        "feels_like": {
            "day": 76.51,
            "night": 65.55,
            "eve": 84.51,
            "morn": 65.55
        },
        "pressure": 1006,
        "humidity": 24,
        "dew_point": 38.37,
        "wind_speed": 19.91,
        "wind_deg": 225,
        "wind_gust": 31.59,
        "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
            }
        ],
        "clouds": 0,
        "pop": 0,
        "uvi": 9.13
        },
        {
        "dt": 1620154800,
        "sunrise": 1620131822,
        "sunset": 1620180828,
        "moonrise": 1620119520,
        "moonset": 1620157860,
        "moon_phase": 0.78,
        "temp": {
            "day": 84.78,
            "min": 71.02,
            "max": 91.6,
            "night": 80.85,
            "eve": 91.06,
            "morn": 71.02
        },
        "feels_like": {
            "day": 81.68,
            "night": 68.9,
            "eve": 86.83,
            "morn": 68.9
        },
        "pressure": 1012,
        "humidity": 12,
        "dew_point": 28.65,
        "wind_speed": 10.09,
        "wind_deg": 267,
        "wind_gust": 18.81,
        "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
            }
        ],
        "clouds": 5,
        "pop": 0,
        "uvi": 9.99
        },
        {
        "dt": 1620241200, //#4 
        "sunrise": 1620218167,
        "sunset": 1620267274,
        "moonrise": 1620208020,
        "moonset": 1620247920,
        "moon_phase": 0.81,
        "temp": {
            "day": 86.34,
            "min": 75.04,
            "max": 94.68,
            "night": 85.37,
            "eve": 94.68,
            "morn": 75.04
        },
        "feels_like": {
            "day": 82.92,
            "night": 73.09,
            "eve": 89.87,
            "morn": 73.09
        },
        "pressure": 1013,
        "humidity": 11,
        "dew_point": 26.64,
        "wind_speed": 6.91,
        "wind_deg": 278,
        "wind_gust": 13.38,
        "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
            }
        ],
        "clouds": 1,
        "pop": 0,
        "uvi": 9.86
        },
        {
        "dt": 1620327600,
        "sunrise": 1620304513,
        "sunset": 1620353721,
        "moonrise": 1620296280,
        "moonset": 1620337800,
        "moon_phase": 0.85,
        "temp": {
            "day": 86.74,
            "min": 75.88,
            "max": 96.91,
            "night": 82.69,
            "eve": 96.91,
            "morn": 75.88
        },
        "feels_like": {
            "day": 83.25,
            "night": 74.21,
            "eve": 91.83,
            "morn": 74.21
        },
        "pressure": 1014,
        "humidity": 15,
        "dew_point": 34.18,
        "wind_speed": 12.8,
        "wind_deg": 250,
        "wind_gust": 20.36,
        "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
            }
        ],
        "clouds": 1,
        "pop": 0,
        "uvi": 9.78
        },
        {
        "dt": 1620414000, //#6
        "sunrise": 1620390861,
        "sunset": 1620440167,
        "moonrise": 1620384360,
        "moonset": 1620427560,
        "moon_phase": 0.88,
        "temp": {
            "day": 85.84,
            "min": 75.99,
            "max": 95.56,
            "night": 80.67,
            "eve": 95.56,
            "morn": 75.99
        },
        "feels_like": {
            "day": 82.51,
            "night": 74.32,
            "eve": 90.61,
            "morn": 74.32
        },
        "pressure": 1011,
        "humidity": 14,
        "dew_point": 32.2,
        "wind_speed": 17.09,
        "wind_deg": 229,
        "wind_gust": 22.32,
        "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
            }
        ],
        "clouds": 1,
        "pop": 0,
        "uvi": 10
        },
        {
        "dt": 1620500400,
        "sunrise": 1620477210,
        "sunset": 1620526614,
        "moonrise": 1620472320,
        "moonset": 1620517260,
        "moon_phase": 0.91,
        "temp": {
            "day": 84.47,
            "min": 75.07,
            "max": 93.31,
            "night": 77.63,
            "eve": 93.31,
            "morn": 75.07
        },
        "feels_like": {
            "day": 81.45,
            "night": 72.99,
            "eve": 88.74,
            "morn": 72.99
        },
        "pressure": 1008,
        "humidity": 12,
        "dew_point": 28.26,
        "wind_speed": 19.73,
        "wind_deg": 222,
        "wind_gust": 24.16,
        "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
            }
        ],
        "clouds": 0,
        "pop": 0,
        "uvi": 10
        },
        {
        "dt": 1620586800,
        "sunrise": 1620563560,
        "sunset": 1620613060,
        "moonrise": 1620560280,
        "moonset": 1620607020,
        "moon_phase": 0.94,
        "temp": {
            "day": 79.83,
            "min": 71.92,
            "max": 87.62,
            "night": 72.88,
            "eve": 87.62,
            "morn": 71.92
        },
        "feels_like": {
            "day": 79.83,
            "night": 69.71,
            "eve": 83.93,
            "morn": 69.71
        },
        "pressure": 1006, //hPa
        "humidity": 13, // %
        "dew_point": 24.76, //degree
        "wind_speed": 20.87, //Miles oper hour
        "wind_deg": 204, //ClockWise
        "wind_gust": 24.65, //Miles per hour
        "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
            }
        ],
        "clouds": 0,
        "pop": 0, //persipatation
        "uvi": 10 //index
        },
        {
            "lat": 33.53,
            "lon": -112.18,
            "timezone": "America/Phoenix",

        }
    ];

    //Variables for data 
    let $day;
    window.stop();

    (function() {
        let link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'favicon.png';
        document.getElementsByTagName('head')[0].appendChild(link);
    })();

    //Basic
    let $general = $(`#basic`);
    let $headerDay = $(`#header-day`);
    let $feelsLike = $(`#feels-like`);
    let $discription = $(`#discription`);
    let $minMax = $(`#min-max`);
    let $timeOfDay = $(`#time-of-day`);
    let $location = $(`#location`);

    //Extra
    let $extra = $(`#extra`);
    let $pressure = $(`#pressure`);
    let $huminity = $(`#huminity`);
    let $drewPoint = $(`#drew-point`);
    let $pop = $(`#pop`);
    let $windSpeed = $(`#wind-speed`);
    let $windDeg = $(`#wind-deg`);
    let $windGust = $(`#wind-gust`);
    let $uvi = $(`#uvi`);

    
    //variable for time
    let dayTime = new Date();
    let time = dayTime.getHours();

    let dateNow = new Date();
    dateNow.getDay();

    //Will check what day it is 
    function isDay0(){
        if(daily[0].dt === 1619982000){

            //Checks What time of day it is and prints coresponding temp data

            //==========================================================================//
            //This is for the Basic Info

            if(time <= 6){
                $timeOfDay.append(`${daily[0].temp.morn}°`);
            }if(time > 7 && time <= 14){
                $timeOfDay.append(`${daily[0].temp.day}°`);
            }if(time > 14 && time <= 20){
                $timeOfDay.append(`${daily[0].temp.eve}°`);
            }if(time > 20){
                $timeOfDay.append(`${daily[0].temp.night}°`);
            }

            //Check time and prints feels like data
            if(time <= 6){
                $feelsLike.append(`Feels like  ${daily[0].feels_like.morn}°`);
            }if(time > 7 && time <= 14){
                $feelsLike.append(`Feels like  ${daily[0].feels_like.day}°`);
            }if(time > 14 && time <= 20){
                $feelsLike.append(`Feels like  ${daily[0].feels_like.eve}°`);
            }if(time > 20){
                $feelsLike.append(`Feels like  ${daily[0].feels_like.night}°`);
            }

            $headerDay.prepend("Today");
            let location = `${daily[8].timezone}`
            if(location === "America/Phoenix"){
                $location.append("Phoenix");
            }
            
            $discription.append(`${daily[0].weather[0].description}`);
            $minMax.append(`<p>Min ${daily[0].temp.min}° | Max ${daily[0].temp.max}°</p>`);

            //=====================================================================================//

            //This is for the extra data

            $pressure.append(`${daily[0].pressure} hPa`);
            $huminity.append(`${daily[0].humidity}%`);
            $drewPoint.append(`${daily[0].dew_point}°`);
            $pop.append(`${daily[0].pop}%`);
            $windSpeed.append(`${daily[0].wind_speed} mph`);

            let windDegree = `${daily[0].wind_deg}`;
            if(windDegree < 90){
                $windDeg.append(`${daily[0].wind_deg}° NE`);
            }if(windDegree < 180 && windDegree > 90){
                $windDeg.append(`${daily[0].wind_deg}° SE`);
            }if(windDegree < 270 && windDegree > 180){
                $windDeg.append(`${daily[0].wind_deg}° SW`);
            }if(windDegree < 360 && windDegree > 270){
                $windDeg.append(`${daily[0].wind_deg}° NW`);
            }

            $windGust.append(`${daily[0].wind_gust} mph`);
            let uVIndex = `${daily[0].uvi}`;
            if(uVIndex <= 2){
                $uvi.append(`${daily[0].uvi} Low`).addClass("text-success")
            }if(uVIndex <= 5){
                $uvi.append(`${daily[0].uvi} Moderate`).addClass("text-warning")
            }if(uVIndex <= 7){
                $uvi.append(`${daily[0].uvi} High`).addClass("text-orange")
            }if(uVIndex > 7){
                $uvi.append(`${daily[0].uvi} Very High`).addClass("text-danger")
            }

        }
    }

    function isDay1(){
        if(daily[1].dt === 1620068400){

            //Checks What time of day it is and prints coresponding temp data

            //==========================================================================//
            //This is for the Basic Info

            if(time <= 6){
                $timeOfDay.append(`${daily[1].temp.morn}°`);
            }if(time > 7 && time <= 14){
                $timeOfDay.append(`${daily[1].temp.day}°`);
            }if(time > 14 && time <= 20){
                $timeOfDay.append(`${daily[1].temp.eve}°`);
            }if(time > 20){
                $timeOfDay.append(`${daily[1].temp.night}°`);
            }

            //Check time and prints feels like data
            if(time <= 6){
                $feelsLike.append(`Feels like  ${daily[1].feels_like.morn}°`);
            }if(time > 7 && time <= 14){
                $feelsLike.append(`Feels like  ${daily[1].feels_like.day}°`);
            }if(time > 14 && time <= 20){
                $feelsLike.append(`Feels like  ${daily[1].feels_like.eve}°`);
            }if(time > 20){
                $feelsLike.append(`Feels like  ${daily[1].feels_like.night}°`);
            }

            $headerDay.prepend("Tuesday");
            let location = `${daily[8].timezone}`
            if(location === "America/Phoenix"){
                $location.append("Phoenix");
            }
            
            $discription.append(`${daily[1].weather[0].description}`);
            $minMax.append(`<p>Min ${daily[1].temp.min}° | Max ${daily[1].temp.max}°</p>`);

            //=====================================================================================//

            //This is for the extra data

            $pressure.append(`${daily[1].pressure} hPa`);
            $huminity.append(`${daily[1].humidity}%`);
            $drewPoint.append(`${daily[1].dew_point}°`);
            $pop.append(`${daily[1].pop}%`);
            $windSpeed.append(`${daily[1].wind_speed} mph`);

            let windDegree = `${daily[1].wind_deg}`;
            if(windDegree < 90){
                $windDeg.append(`${daily[1].wind_deg}° NE`);
            }if(windDegree < 180 && windDegree > 90){
                $windDeg.append(`${daily[1].wind_deg}° SE`);
            }if(windDegree < 270 && windDegree > 180){
                $windDeg.append(`${daily[1].wind_deg}° SW`);
            }if(windDegree < 360 && windDegree > 270){
                $windDeg.append(`${daily[1].wind_deg}° NW`);
            }

            $windGust.append(`${daily[1].wind_gust} mph`);
            let uVIndex = `${daily[1].uvi}`;
            if(uVIndex <= 2){
                $uvi.append(`${daily[1].uvi} Low`).addClass("text-success")
            }if(uVIndex <= 5){
                $uvi.append(`${daily[1].uvi} Moderate`).addClass("text-warning")
            }if(uVIndex <= 7){
                $uvi.append(`${daily[1].uvi} High`).addClass("text-orange")
            }if(uVIndex > 7){
                $uvi.append(`${daily[1].uvi} Very High`).addClass("text-danger")
            }

        }
    }

    function isDay2(){
        if(daily[2].dt === 1620154800){

            //Checks What time of day it is and prints coresponding temp data

            //==========================================================================//
            //This is for the Basic Info

            if(time <= 6){
                $timeOfDay.append(`${daily[2].temp.morn}°`);
            }if(time > 7 && time <= 14){
                $timeOfDay.append(`${daily[2].temp.day}°`);
            }if(time > 14 && time <= 20){
                $timeOfDay.append(`${daily[2].temp.eve}°`);
            }if(time > 20){
                $timeOfDay.append(`${daily[2].temp.night}°`);
            }

            //Check time and prints feels like data
            if(time <= 6){
                $feelsLike.append(`Feels like  ${daily[2].feels_like.morn}°`);
            }if(time > 7 && time <= 14){
                $feelsLike.append(`Feels like  ${daily[2].feels_like.day}°`);
            }if(time > 14 && time <= 20){
                $feelsLike.append(`Feels like  ${daily[2].feels_like.eve}°`);
            }if(time > 20){
                $feelsLike.append(`Feels like  ${daily[2].feels_like.night}°`);
            }

            $headerDay.prepend("Wednesday");
            let location = `${daily[8].timezone}`
            if(location === "America/Phoenix"){
                $location.append("Phoenix");
            }
            
            $discription.append(`${daily[2].weather[0].description}`);
            $minMax.append(`<p>Min ${daily[2].temp.min}° | Max ${daily[2].temp.max}°</p>`);

            //=====================================================================================//

            //This is for the extra data

            $pressure.append(`${daily[2].pressure} hPa`);
            $huminity.append(`${daily[2].humidity}%`);
            $drewPoint.append(`${daily[2].dew_point}°`);
            $pop.append(`${daily[2].pop}%`);
            $windSpeed.append(`${daily[2].wind_speed} mph`);

            let windDegree = `${daily[2].wind_deg}`;
            if(windDegree < 90){
                $windDeg.append(`${daily[2].wind_deg}° NE`);
            }if(windDegree < 180 && windDegree > 90){
                $windDeg.append(`${daily[2].wind_deg}° SE`);
            }if(windDegree < 270 && windDegree > 180){
                $windDeg.append(`${daily[2].wind_deg}° SW`);
            }if(windDegree < 360 && windDegree > 270){
                $windDeg.append(`${daily[2].wind_deg}° NW`);
            }

            $windGust.append(`${daily[2].wind_gust} mph`);
            let uVIndex = `${daily[2].uvi}`;
            if(uVIndex <= 2){
                $uvi.append(`${daily[2].uvi} Low`).addClass("text-success")
            }if(uVIndex <= 5){
                $uvi.append(`${daily[2].uvi} Moderate`).addClass("text-warning")
            }if(uVIndex <= 7){
                $uvi.append(`${daily[2].uvi} High`).addClass("text-orange")
            }if(uVIndex > 7){
                $uvi.append(`${daily[1].uvi} Very High`).addClass("text-danger")
            }

        }
    }

    function isDay3(){
        if(daily[3].dt === 1620241200){

            //Checks What time of day it is and prints coresponding temp data

            //==========================================================================//
            //This is for the Basic Info

            if(time <= 6){
                $timeOfDay.append(`${daily[3].temp.morn}°`);
            }if(time > 7 && time <= 14){
                $timeOfDay.append(`${daily[3].temp.day}°`);
            }if(time > 14 && time <= 20){
                $timeOfDay.append(`${daily[3].temp.eve}°`);
            }if(time > 20){
                $timeOfDay.append(`${daily[3].temp.night}°`);
            }

            //Check time and prints feels like data
            if(time <= 6){
                $feelsLike.append(`Feels like  ${daily[3].feels_like.morn}°`);
            }if(time > 7 && time <= 14){
                $feelsLike.append(`Feels like  ${daily[3].feels_like.day}°`);
            }if(time > 14 && time <= 20){
                $feelsLike.append(`Feels like  ${daily[3].feels_like.eve}°`);
            }if(time > 20){
                $feelsLike.append(`Feels like  ${daily[3].feels_like.night}°`);
            }

            $headerDay.prepend("Thursday");
            let location = `${daily[8].timezone}`
            if(location === "America/Phoenix"){
                $location.append("Phoenix");
            }
            
            $discription.append(`${daily[3].weather[0].description}`);
            $minMax.append(`<p>Min ${daily[3].temp.min}° | Max ${daily[3].temp.max}°</p>`);

            //=====================================================================================//

            //This is for the extra data

            $pressure.append(`${daily[3].pressure} hPa`);
            $huminity.append(`${daily[3].humidity}%`);
            $drewPoint.append(`${daily[3].dew_point}°`);
            $pop.append(`${daily[3].pop}%`);
            $windSpeed.append(`${daily[3].wind_speed} mph`);

            let windDegree = `${daily[3].wind_deg}`;
            if(windDegree < 90){
                $windDeg.append(`${daily[3].wind_deg}° NE`);
            }if(windDegree < 180 && windDegree > 90){
                $windDeg.append(`${daily[3].wind_deg}° SE`);
            }if(windDegree < 270 && windDegree > 180){
                $windDeg.append(`${daily[3].wind_deg}° SW`);
            }if(windDegree < 360 && windDegree > 270){
                $windDeg.append(`${daily[3].wind_deg}° NW`);
            }

            $windGust.append(`${daily[3].wind_gust} mph`);
            let uVIndex = `${daily[3].uvi}`;
            if(uVIndex <= 2){
                $uvi.append(`${daily[3].uvi} Low`).addClass("text-success")
            }if(uVIndex <= 5){
                $uvi.append(`${daily[3].uvi} Moderate`).addClass("text-warning")
            }if(uVIndex <= 7){
                $uvi.append(`${daily[3].uvi} High`).addClass("text-orange")
            }if(uVIndex > 7){
                $uvi.append(`${daily[3].uvi} Very High`).addClass("text-danger")
            }

        }
    }

    function isDay4(){
        if(daily[4].dt === 1620327600){

            //Checks What time of day it is and prints coresponding temp data

            //==========================================================================//
            //This is for the Basic Info

            if(time <= 6){
                $timeOfDay.append(`${daily[4].temp.morn}°`);
            }if(time > 7 && time <= 14){
                $timeOfDay.append(`${daily[4].temp.day}°`);
            }if(time > 14 && time <= 20){
                $timeOfDay.append(`${daily[4].temp.eve}°`);
            }if(time > 20){
                $timeOfDay.append(`${daily[4].temp.night}°`);
            }

            //Check time and prints feels like data
            if(time <= 6){
                $feelsLike.append(`Feels like  ${daily[4].feels_like.morn}°`);
            }if(time > 7 && time <= 14){
                $feelsLike.append(`Feels like  ${daily[4].feels_like.day}°`);
            }if(time > 14 && time <= 20){
                $feelsLike.append(`Feels like  ${daily[4].feels_like.eve}°`);
            }if(time > 20){
                $feelsLike.append(`Feels like  ${daily[4].feels_like.night}°`);
            }

            $headerDay.prepend("Friday");
            let location = `${daily[8].timezone}`
            if(location === "America/Phoenix"){
                $location.append("Phoenix");
            }
            
            $discription.append(`${daily[4].weather[0].description}`);
            $minMax.append(`<p>Min ${daily[4].temp.min}° | Max ${daily[4].temp.max}°</p>`);

            //=====================================================================================//

            //This is for the extra data

            $pressure.append(`${daily[4].pressure} hPa`);
            $huminity.append(`${daily[4].humidity}%`);
            $drewPoint.append(`${daily[4].dew_point}°`);
            $pop.append(`${daily[4].pop}%`);
            $windSpeed.append(`${daily[4].wind_speed} mph`);

            let windDegree = `${daily[4].wind_deg}`;
            if(windDegree < 90){
                $windDeg.append(`${daily[4].wind_deg}° NE`);
            }if(windDegree < 180 && windDegree > 90){
                $windDeg.append(`${daily[4].wind_deg}° SE`);
            }if(windDegree < 270 && windDegree > 180){
                $windDeg.append(`${daily[4].wind_deg}° SW`);
            }if(windDegree < 360 && windDegree > 270){
                $windDeg.append(`${daily[4].wind_deg}° NW`);
            }

            $windGust.append(`${daily[4].wind_gust} mph`);
            let uVIndex = `${daily[4].uvi}`;
            if(uVIndex <= 2){
                $uvi.append(`${daily[4].uvi} Low`).addClass("text-success")
            }if(uVIndex <= 5){
                $uvi.append(`${daily[4].uvi} Moderate`).addClass("text-warning")
            }if(uVIndex <= 7){
                $uvi.append(`${daily[4].uvi} High`).addClass("text-orange")
            }if(uVIndex > 7){
                $uvi.append(`${daily[4].uvi} Very High`).addClass("text-danger")
            }

        }
    }

    function isDay5(){
        if(daily[5].dt === 1620414000){

            //Checks What time of day it is and prints coresponding temp data

            //==========================================================================//
            //This is for the Basic Info

            if(time <= 6){
                $timeOfDay.append(`${daily[5].temp.morn}°`);
            }if(time > 7 && time <= 14){
                $timeOfDay.append(`${daily[5].temp.day}°`);
            }if(time > 14 && time <= 20){
                $timeOfDay.append(`${daily[5].temp.eve}°`);
            }if(time > 20){
                $timeOfDay.append(`${daily[5].temp.night}°`);
            }

            //Check time and prints feels like data
            if(time <= 6){
                $feelsLike.append(`Feels like  ${daily[5].feels_like.morn}°`);
            }if(time > 7 && time <= 14){
                $feelsLike.append(`Feels like  ${daily[5].feels_like.day}°`);
            }if(time > 14 && time <= 20){
                $feelsLike.append(`Feels like  ${daily[5].feels_like.eve}°`);
            }if(time > 20){
                $feelsLike.append(`Feels like  ${daily[5].feels_like.night}°`);
            }

            $headerDay.prepend("Saturday");
            let location = `${daily[8].timezone}`
            if(location === "America/Phoenix"){
                $location.append("Phoenix");
            }
            
            $discription.append(`${daily[5].weather[0].description}`);
            $minMax.append(`<p>Min ${daily[5].temp.min}° | Max ${daily[5].temp.max}°</p>`);

            //=====================================================================================//

            //This is for the extra data

            $pressure.append(`${daily[5].pressure} hPa`);
            $huminity.append(`${daily[5].humidity}%`);
            $drewPoint.append(`${daily[5].dew_point}°`);
            $pop.append(`${daily[5].pop}%`);
            $windSpeed.append(`${daily[5].wind_speed} mph`);

            let windDegree = `${daily[5].wind_deg}`;
            if(windDegree < 90){
                $windDeg.append(`${daily[5].wind_deg}° NE`);
            }if(windDegree < 180 && windDegree > 90){
                $windDeg.append(`${daily[5].wind_deg}° SE`);
            }if(windDegree < 270 && windDegree > 180){
                $windDeg.append(`${daily[5].wind_deg}° SW`);
            }if(windDegree < 360 && windDegree > 270){
                $windDeg.append(`${daily[5].wind_deg}° NW`);
            }

            $windGust.append(`${daily[5].wind_gust} mph`);
            let uVIndex = `${daily[5].uvi}`;
            if(uVIndex <= 2){
                $uvi.append(`${daily[5].uvi} Low`).addClass("text-success")
            }if(uVIndex <= 5){
                $uvi.append(`${daily[5].uvi} Moderate`).addClass("text-warning")
            }if(uVIndex <= 7){
                $uvi.append(`${daily[5].uvi} High`).addClass("text-orange")
            }if(uVIndex > 7){
                $uvi.append(`${daily[5].uvi} Very High`).addClass("text-danger")
            }

        }
    }

    function isDay6(){
        if(daily[6].dt === 1620500400){

            //Checks What time of day it is and prints coresponding temp data

            //==========================================================================//
            //This is for the Basic Info

            if(time <= 6){
                $timeOfDay.append(`${daily[6].temp.morn}°`);
            }if(time > 7 && time <= 14){
                $timeOfDay.append(`${daily[6].temp.day}°`);
            }if(time > 14 && time <= 20){
                $timeOfDay.append(`${daily[6].temp.eve}°`);
            }if(time > 20){
                $timeOfDay.append(`${daily[6].temp.night}°`);
            }

            //Check time and prints feels like data
            if(time <= 6){
                $feelsLike.append(`Feels like  ${daily[6].feels_like.morn}°`);
            }if(time > 7 && time <= 14){
                $feelsLike.append(`Feels like  ${daily[6].feels_like.day}°`);
            }if(time > 14 && time <= 20){
                $feelsLike.append(`Feels like  ${daily[6].feels_like.eve}°`);
            }if(time > 20){
                $feelsLike.append(`Feels like  ${daily[6].feels_like.night}°`);
            }

            $headerDay.prepend("Sunday");
            let location = `${daily[8].timezone}`
            if(location === "America/Phoenix"){
                $location.append("Phoenix");
            }
            
            $discription.append(`${daily[6].weather[0].description}`);
            $minMax.append(`<p>Min ${daily[6].temp.min}° | Max ${daily[6].temp.max}°</p>`);

            //=====================================================================================//

            //This is for the extra data

            $pressure.append(`${daily[6].pressure} hPa`);
            $huminity.append(`${daily[6].humidity}%`);
            $drewPoint.append(`${daily[6].dew_point}°`);
            $pop.append(`${daily[6].pop}%`);
            $windSpeed.append(`${daily[6].wind_speed} mph`);

            let windDegree = `${daily[6].wind_deg}`;
            if(windDegree < 90){
                $windDeg.append(`${daily[6].wind_deg}° NE`);
            }if(windDegree < 180 && windDegree > 90){
                $windDeg.append(`${daily[6].wind_deg}° SE`);
            }if(windDegree < 270 && windDegree > 180){
                $windDeg.append(`${daily[6].wind_deg}° SW`);
            }if(windDegree < 360 && windDegree > 270){
                $windDeg.append(`${daily[6].wind_deg}° NW`);
            }

            $windGust.append(`${daily[6].wind_gust} mph`);
            let uVIndex = `${daily[6].uvi}`;
            if(uVIndex <= 2){
                $uvi.append(`${daily[6].uvi} Low`).addClass("text-success")
            }if(uVIndex <= 5){
                $uvi.append(`${daily[6].uvi} Moderate`).addClass("text-warning")
            }if(uVIndex <= 7){
                $uvi.append(`${daily[6].uvi} High`).addClass("text-orange")
            }if(uVIndex > 7){
                $uvi.append(`${daily[6].uvi} Very High`).addClass("text-danger")
            }

        }
    }

    function isDay7(){
        if(daily[7].dt === 1620586800){

            //Checks What time of day it is and prints coresponding temp data

            //==========================================================================//
            //This is for the Basic Info

            if(time <= 6){
                $timeOfDay.append(`${daily[7].temp.morn}°`);
            }if(time > 7 && time <= 14){
                $timeOfDay.append(`${daily[7].temp.day}°`);
            }if(time > 14 && time <= 20){
                $timeOfDay.append(`${daily[7].temp.eve}°`);
            }if(time > 20){
                $timeOfDay.append(`${daily[7].temp.night}°`);
            }

            //Check time and prints feels like data
            if(time <= 6){
                $feelsLike.append(`Feels like  ${daily[7].feels_like.morn}°`);
            }if(time > 7 && time <= 14){
                $feelsLike.append(`Feels like  ${daily[7].feels_like.day}°`);
            }if(time > 14 && time <= 20){
                $feelsLike.append(`Feels like  ${daily[7].feels_like.eve}°`);
            }if(time > 20){
                $feelsLike.append(`Feels like  ${daily[7].feels_like.night}°`);
            }

            $headerDay.prepend("Monday");
            let location = `${daily[8].timezone}`
            if(location === "America/Phoenix"){
                $location.append("Phoenix");
            }
            
            $discription.append(`${daily[7].weather[0].description}`);
            $minMax.append(`<p>Min ${daily[7].temp.min}° | Max ${daily[7].temp.max}°</p>`);

            //=====================================================================================//

            //This is for the extra data

            $pressure.append(`${daily[7].pressure} hPa`);
            $huminity.append(`${daily[7].humidity}%`);
            $drewPoint.append(`${daily[7].dew_point}°`);
            $pop.append(`${daily[7].pop}%`);
            $windSpeed.append(`${daily[7].wind_speed} mph`);

            let windDegree = `${daily[7].wind_deg}`;
            if(windDegree < 90){
                $windDeg.append(`${daily[7].wind_deg}° NE`);
            }if(windDegree < 180 && windDegree > 90){
                $windDeg.append(`${daily[7].wind_deg}° SE`);
            }if(windDegree < 270 && windDegree > 180){
                $windDeg.append(`${daily[7].wind_deg}° SW`);
            }if(windDegree < 360 && windDegree > 270){
                $windDeg.append(`${daily[7].wind_deg}° NW`);
            }

            $windGust.append(`${daily[7].wind_gust} mph`);
            let uVIndex = `${daily[7].uvi}`;
            if(uVIndex <= 2){
                $uvi.append(`${daily[7].uvi} Low`).addClass("text-success")
            }if(uVIndex <= 5){
                $uvi.append(`${daily[7].uvi} Moderate`).addClass("text-warning")
            }if(uVIndex <= 7){
                $uvi.append(`${daily[7].uvi} High`).addClass("text-orange")
            }if(uVIndex > 7){
                $uvi.append(`${daily[7].uvi} Very High`).addClass("text-danger")
            }

        }
    }

    //Variables for 7-day forcast (Static)
    let $day0Header = $(`#day0-header`);
    let $day0High = $(`#day0-high`);
    let $day0Low = $(`#day0-low`);
    let $discription0 = $(`#discription0`);
    let $pop0 = $(`#pop-0`);

    let $day1Header = $(`#day1-header`);
    let $day1High = $(`#day1-high`);
    let $day1Low = $(`#day1-low`);
    let $discription1 = $(`#discription1`);
    let $pop1 = $(`#pop-1`);

    let $day2Header = $(`#day2-header`);
    let $day2High = $(`#day2-high`);
    let $day2Low = $(`#day2-low`);
    let $discription2 = $(`#discription2`);
    let $pop2 = $(`#pop-2`);

    let $day3Header = $(`#day3-header`);
    let $day3High = $(`#day3-high`);
    let $day3Low = $(`#day3-low`);
    let $discription3 = $(`#discription3`);
    let $pop3 = $(`#pop-3`);

    let $day4Header = $(`#day4-header`);
    let $day4High = $(`#day4-high`);
    let $day4Low = $(`#day4-low`);
    let $discription4 = $(`#discription4`);
    let $pop4 = $(`#pop-4`);

    let $day5Header = $(`#day5-header`);
    let $day5High = $(`#day5-high`);
    let $day5Low = $(`#day5-low`);
    let $discription5 = $(`#discription5`);
    let $pop5 = $(`#pop-5`);

    let $day6Header = $(`#day6-header`);
    let $day6High = $(`#day6-high`);
    let $day6Low = $(`#day6-low`);
    let $discription6 = $(`#discription6`);
    let $pop6 = $(`#pop-6`);

    let $day7Header = $(`#day7-header`);
    let $day7High = $(`#day7-high`);
    let $day7Low = $(`#day7-low`);
    let $discription7 = $(`#discription7`);
    let $pop7 = $(`#pop-7`);

    //Pushes simple date for the 7-day forcast (static)
    function forcast(){
        $day0Header.append("Mon");
        $day0High.append(`H: ${daily[0].temp.max}°`);
        $day0Low.append(`L: ${daily[0].temp.min}°`);
        $discription0.append(`${daily[0].weather[0].description}`);
        $pop0.prepend(`${daily[0].pop}%`);

        $day1Header.append("Tue");
        $day1High.append(`H: ${daily[1].temp.max}°`);
        $day1Low.append(`L: ${daily[1].temp.min}°`);
        $discription1.append(`${daily[1].weather[0].description}`);
        $pop1.prepend(`${daily[1].pop}%`);

        $day2Header.append("Wed");
        $day2High.append(`H: ${daily[2].temp.max}°`);
        $day2Low.append(`L: ${daily[2].temp.min}°`);
        $discription2.append(`${daily[2].weather[0].description}`);
        $pop2.prepend(`${daily[2].pop}%`);

        $day3Header.append("Thu");
        $day3High.append(`H: ${daily[3].temp.max}°`);
        $day3Low.append(`L: ${daily[3].temp.min}°`);
        $discription3.append(`${daily[3].weather[0].description}`);
        $pop3.prepend(`${daily[3].pop}%`);

        $day4Header.append("Fri");
        $day4High.append(`H: ${daily[4].temp.max}°`);
        $day4Low.append(`L: ${daily[4].temp.min}°`);
        $discription4.append(`${daily[4].weather[0].description}`);
        $pop4.prepend(`${daily[4].pop}%`);

        $day5Header.append("Sat");
        $day5High.append(`H: ${daily[5].temp.max}°`);
        $day5Low.append(`L: ${daily[5].temp.min}°`);
        $discription5.append(`${daily[5].weather[0].description}`);
        $pop5.prepend(`${daily[5].pop}%`);

        $day6Header.append("Sun");
        $day6High.append(`H: ${daily[6].temp.max}°`);
        $day6Low.append(`L: ${daily[6].temp.min}°`);
        $discription6.append(`${daily[6].weather[0].description}`);
        $pop6.prepend(`${daily[6].pop}%`);

        $day7Header.append("Mon");
        $day7High.append(`H: ${daily[7].temp.max}°`);
        $day7Low.append(`L: ${daily[7].temp.min}°`);
        $discription7.append(`${daily[7].weather[0].description}`);
        $pop7.prepend(`${daily[7].pop}%`);
    }


    let input = "Page path is " + window.location.pathname;

    input = input.split("/")
    input = input.splice(", ");
    
    let lastInput = input[input.length - 1];
    
    
    if (lastInput == "index.html") {
        isDay0();
        forcast();
    } if (lastInput == "tuesday.html") {
        isDay1();
        forcast();
    } if (lastInput == "wednesday.html") {
        isDay2();
        forcast();
    }  if (lastInput == "thursday.html") {
        isDay3();
        forcast();
    }  if (lastInput == "friday.html") {
        isDay4();
        forcast();
    }  if (lastInput == "saturday.html") {
        isDay5();
        forcast();
    }  if (lastInput == "sunday.html") {
        isDay6();
        forcast();
    }  if (lastInput == "monday.html") {
        isDay7();
        forcast();
    } if (lastInput == "7dayforcast.html") {
        forcast();
    } 


    //redirectPages();
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })





})




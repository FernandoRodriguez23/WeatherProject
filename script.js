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
        "dt": 1620241200,
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
        "dt": 1620414000,
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

    //Variables for 7-day forcast (Static)
    let $day0Header = $(`#day0-header`);
    let $day0High = $(`#day0-high`);
    let $day0Low = $(`#day0-low`);
    let $discription0 = $(`#discription0`);//Add to other

    let $day1Header = $(`#day1-header`);
    let $day1High = $(`#day1-high`);
    let $day1Low = $(`#day1-low`);

    let $day2Header = $(`#day2-header`);
    let $day2High = $(`#day2-high`);
    let $day2Low = $(`#day2-low`);

    let $day3Header = $(`#day3-header`);
    let $day3High = $(`#day3-high`);
    let $day3Low = $(`#day3-low`);

    let $day4Header = $(`#day4-header`);
    let $day4High = $(`#day4-high`);
    let $day4Low = $(`#day4-low`);

    let $day5Header = $(`#day5-header`);
    let $day5High = $(`#day5-high`);
    let $day5Low = $(`#day5-low`);

    let $day6Header = $(`#day6-header`);
    let $day6High = $(`#day6-high`);
    let $day6Low = $(`#day6-low`);

    let $day7Header = $(`#day7-header`);
    let $day7High = $(`#day7-high`);
    let $day7Low = $(`#day7-low`);

    //Pushes simple date for the 7-day forcast (static)
    function forcast(){
        $day0Header.append("Today");
        $day0High.append(`Max ${daily[0].temp.max}°`);
        $day0Low.append(`Min ${daily[0].temp.min}°`);

        $day1Header.append("Tuesday");
        $day1High.append(`Max ${daily[1].temp.max}°`);
        $day1Low.append(`Min ${daily[1].temp.min}°`);

        $day2Header.append("Wednesday");
        $day2High.append(`Max ${daily[2].temp.max}°`);
        $day2Low.append(`Min ${daily[2].temp.min}°`);

        $day3Header.append("Thursday");
        $day3High.append(`Max ${daily[3].temp.max}°`);
        $day3Low.append(`Min ${daily[3].temp.min}°`);

        $day4Header.append("Friday");
        $day4High.append(`Max ${daily[4].temp.max}°`);
        $day4Low.append(`Min ${daily[4].temp.min}°`);

        $day5Header.append("Saturday");
        $day5High.append(`Max ${daily[5].temp.max}°`);
        $day5Low.append(`Min ${daily[5].temp.min}°`);

        $day6Header.append("Sunday");
        $day6High.append(`Max ${daily[6].temp.max}°`);
        $day6Low.append(`Min ${daily[6].temp.min}°`);

        $day7Header.append("Monday");
        $day7High.append(`Max ${daily[7].temp.max}°`);
        $day7Low.append(`Min ${daily[7].temp.min}°`);
    }





    forcast();
    isDay0();






})




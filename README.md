# Fun Weather App

This is a weather app that I made during Laurea UAS' Fullstack development -course.

The user can pick a city and the application shows the temperature and weather condition
of said city.

## Styles
- **Pure css**

## Technologies
- **Node.js**
- **Express**
- **Pug view engine**

## Problems
Unfortunately the API call to the weatherstack.com can be made only using
http with free account.

This is a problem because Heroku doesn't allow api calls over http. Thus
the application works only locally as of now.

## Screenshots

![abudhabi]
![helsinki]

## How to run?
### Option 1:
App is published on Heroku: https://fun-weather-application.herokuapp.com/
(At the moment not working, see Problems section)
### Option 2:
Clone repository, install Node.js and run locally.

[abudhabi]: screenshots/abudhabi.png
[helsinki]: screenshots/helsinki.png
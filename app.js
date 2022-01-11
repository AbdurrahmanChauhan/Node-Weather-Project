const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  var cityName = "Mumbai"
  https
    .get(
      'https://api.openweathermap.org/data/2.5/forecast?q=' +
        cityName +
        '&appid=902d63a6bfbba904729f1ed561e1a4ca&units=imperial#',
      (response) => {
        console.log('statusCode:', response.statusCode)
        // console.log('headers:', response.headers)

        response.on('data', (d) => {

          let option1 = {
            weekday: 'long',
          }
          let option2 = {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
          }

          weatherData = JSON.parse(d)

          res.render('index', {

          city: cityName,

            t1: new Date(weatherData.list[0].dt_txt).toLocaleDateString('en-US', option1),
            st1: new Date(weatherData.list[0].dt_txt).toLocaleDateString('en-US', option2),
            src1: ('http://openweathermap.org/img/wn/' + weatherData.list[0].weather[0].icon + '@2x.png'),
            temp1: weatherData.list[0].main.temp,
            desc1: weatherData.list[0].weather[0].description,

            t2: new Date(weatherData.list[3].dt_txt).toLocaleDateString('en-US', option1),
            st2: new Date(weatherData.list[3].dt_txt).toLocaleDateString('en-US', option2),
            src2: ('http://openweathermap.org/img/wn/' + weatherData.list[3].weather[0].icon + '@2x.png'),
            temp2: weatherData.list[3].main.temp,
            desc2: weatherData.list[3].weather[0].description,

            t3: new Date(weatherData.list[11].dt_txt).toLocaleDateString('en-US', option1),
            st3: new Date(weatherData.list[11].dt_txt).toLocaleDateString('en-US', option2),
            src3: ('http://openweathermap.org/img/wn/' + weatherData.list[11].weather[0].icon + '@2x.png'),
            temp3: weatherData.list[11].main.temp,
            desc3: weatherData.list[11].weather[0].description,

            t4: new Date(weatherData.list[19].dt_txt).toLocaleDateString('en-US', option1),
            st4: new Date(weatherData.list[19].dt_txt).toLocaleDateString('en-US', option2),
            src4: ('http://openweathermap.org/img/wn/' + weatherData.list[19].weather[0].icon + '@2x.png'),
            temp4: weatherData.list[19].main.temp,
            desc4: weatherData.list[19].weather[0].description,

            t5: new Date(weatherData.list[27].dt_txt).toLocaleDateString('en-US', option1),
            st5: new Date(weatherData.list[27].dt_txt).toLocaleDateString('en-US', option2),
            src5: ('http://openweathermap.org/img/wn/' + weatherData.list[27].weather[0].icon + '@2x.png'),
            temp5: weatherData.list[27].main.temp,
            desc5: weatherData.list[27].weather[0].description,
          })
        })
      },
    )
    .on('error', (e) => {
      console.error(e)
    })
})

app.post('/city', (req, res) => {
  console.log(req.body.cityName)
  cityName = req.body.cityName
  https
  .get(
    'https://api.openweathermap.org/data/2.5/forecast?q=' +
      cityName +
      '&appid=902d63a6bfbba904729f1ed561e1a4ca&units=imperial#',
    (response) => {
      console.log('statusCode:', response.statusCode)
      // console.log('headers:', response.headers)

      response.on('data', (d) => {
        let option1 = {
          weekday: 'long',
        }
        let option2 = {
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
        }

        weatherData = JSON.parse(d)

        res.render('index', {

          city: cityName,

          t1: new Date(weatherData.list[0].dt_txt).toLocaleDateString('en-US', option1),
          st1: new Date(weatherData.list[0].dt_txt).toLocaleDateString('en-US', option2),
          src1: ('http://openweathermap.org/img/wn/' + weatherData.list[0].weather[0].icon + '@2x.png'),
          temp1: weatherData.list[0].main.temp,
          desc1: weatherData.list[0].weather[0].description,

          t2: new Date(weatherData.list[3].dt_txt).toLocaleDateString('en-US', option1),
          st2: new Date(weatherData.list[3].dt_txt).toLocaleDateString('en-US', option2),
          src2: ('http://openweathermap.org/img/wn/' + weatherData.list[3].weather[0].icon + '@2x.png'),
          temp2: weatherData.list[3].main.temp,
          desc2: weatherData.list[3].weather[0].description,

          t3: new Date(weatherData.list[11].dt_txt).toLocaleDateString('en-US', option1),
          st3: new Date(weatherData.list[11].dt_txt).toLocaleDateString('en-US', option2),
          src3: ('http://openweathermap.org/img/wn/' + weatherData.list[11].weather[0].icon + '@2x.png'),
          temp3: weatherData.list[11].main.temp,
          desc3: weatherData.list[11].weather[0].description,

          t4: new Date(weatherData.list[19].dt_txt).toLocaleDateString('en-US', option1),
          st4: new Date(weatherData.list[19].dt_txt).toLocaleDateString('en-US', option2),
          src4: ('http://openweathermap.org/img/wn/' + weatherData.list[19].weather[0].icon + '@2x.png'),
          temp4: weatherData.list[19].main.temp,
          desc4: weatherData.list[19].weather[0].description,

          t5: new Date(weatherData.list[27].dt_txt).toLocaleDateString('en-US', option1),
          st5: new Date(weatherData.list[27].dt_txt).toLocaleDateString('en-US', option2),
          src5: ('http://openweathermap.org/img/wn/' + weatherData.list[27].weather[0].icon + '@2x.png'),
          temp5: weatherData.list[27].main.temp,
          desc5: weatherData.list[27].weather[0].description,
        })
      })
    },
  )
  .on('error', (e) => {
    console.error(e)
  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

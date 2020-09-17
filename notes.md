npm run serve

adding sass
 npm install --save-dev sass-loader@7.1.0
 npm install --save-dev node-sass@4.14.1
 
 create a file under src and name it vue.config.js
 add paste this inside 
 ```module.exports = {
     css: {
       loaderOptions: {
         sass: {
           data: `@import "@/styles/main.scss";`
         }
       }
     }
    }
``` 

finally add ```lang=scss``` on every style inside vue file

adding router

 npm install vue-router

// babel.config.js
module.exports = {
   presets: [
     "@babel/preset-env",
     "@babel/preset-react",{
     development: process.env.BABEL_ENV === "development",}
   ],
   Plugin:[
    "@babel/plugin-syntax-jsx"

   ]
 };
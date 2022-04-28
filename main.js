const csvtojson = require('csvtojson')

const csvfilepath= "input.csv";
const fs = require('fs');
 

csvtojson().fromFile(csvfilepath)
.then((e)=>{

    let tmp = e.filter(function (data) {
        return data.koi_disposition === "CONFIRMED" &&
        data.koi_insol > 0.36 &&
        data.koi_insol < 1.11 &&
        data.koi_prad < 1.6
    }).map(function (res) {
        return res;
    })
  
    tmp.forEach(function (obj) {
        console.log(obj);

        console.log(tmp.length)
  
})})


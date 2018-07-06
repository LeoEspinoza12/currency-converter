const axios = require('axios')

let http = 'http: //data.fixer.io/api/latest?access_key=3b38a57d0277ef82ceaf2802352525f5';
// console.log('sadfasdf')

// const getExchangeRate = (from, to) => {
//   return axios.get('http://data.fixer.io/api/latest?access_key=3b38a57d0277ef82ceaf2802352525f5').then((response) => {
//     const euro = 1 / response.data.rates[from];
//     const rate = euro * response.data.rates[to];
//     // console.log(euro);
//     // console.log(rate);
//     return rate;
//   })
// }

const getExchangeRate = async (from, to) => {
  const response = await axios.get('http://data.fixer.io/api/latest?access_key=3b38a57d0277ef82ceaf2802352525f5')
    const euro = 1 / response.data.rates[from];
      const rate = euro * response.data.rates[to];
    // console.log(euro);
      // console.log(rate);
    return rate;
}
getExchangeRate('USD', 'CAD').then((rate)=>{
  // console.log(rate)
    return rate
}).catch((err)=>{
  console.log(err)  
})


let convert = (rate, amount) => {
  return rate * amount
}






const getCurrency = async (from, to, amount) => {
  let currencyValue = await getExchangeRate(from, to)
  let conversion = await convert(currencyValue, amount)
  let country = await getCountry(to);
  
  let result = conversion.toFixed(2)
  // console.log(`your money is ${result}`)
  return `your money is ${result}. you can spend this money on the following countries: ${country}`;
  // return country
}

getCurrency('PHP', 'USD', 100).then((res)=>{
  // console.log(res)
  console.log(res)
}).catch((err)=>{
  console.log(err)
})



















const getCountry = async (currencyCode) =>{
const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
  return response.data.map((data) => data.name)
  // let name =  response.data.filter((data)=>{
  //     console.log(data.name)
  // } )  
  // const lang = response.data[0].name;
  // const lang = 'asdfsadf'
  // return lang
}

// getCountry('USD').then((res)=>{
  
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })}
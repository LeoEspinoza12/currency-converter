let students = [{
  name: 'john',
  score: 70
}, {
  name: 'mark',
  score: 75
}, {
  name: 'peter',
  score: 80
}, {
  name: 'james',
  score: 85
}, {
  name: 'thomas',
  score: 90
}, {
  name: 'cecile',
  score: 95
}, {
  name: 'joshua',
  score: 98
}, {
  name: 'paul',
  score: 99
}
]


const addThis = (num1, num2 ) => {
  return num1 + num2;
}


const addNow = (num)=>{
  return num + 5
}



const adderNumber = async (num) => {
  let numOne = await addThis(num, 5)
  let numTwo = await addNow(numOne, numOne)
  let numThree = await addThis(numTwo, numOne)
// console.log(numOne)
  if (numThree){
    return `${numThree} is the highest number`
  }
}

adderNumber(5).then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err)
})





// let passer = async (num)=>{
//   // throw new Error('this is an error')
//   return num
// }



// passer(75).then((res)=>{
//   console.log(res)
// }).catch((e)=>{
//   console.log(e)
// })



// let passers = (lowestScore, highestScore) => {
//   return new Promise((resolve, reject)=>{
//     let result = [];
//     students.filter((student)=>{
//         if(student.score >= lowestScore && student.score <= highestScore){
//           result.push(student)
//         }
//       })
      
//     if(result){
//       resolve(result)
//     } else{
//       reject('no search is found.')
//     }
//   })
// }

// passers(77, 94).then((res)=>{
//   releaserResult(res, 'jame').then((res)=>{
//     console.log(`${res.name} has passed the test`)
//   }).catch((err)=>{
//     console.log(err)
//   })
// }).catch((err)=>{
//   console.log(err)
// })

// let releaserResult = (results, name)=> {
//   return new Promise((resolve, reject)=>{
//     let result = results.find((res) => {
//        if(res.name == name) {
//          return res
//        }
//     });
//     if(result){
//       resolve(result)
//     } else {
//       reject(`${name} did not pass the test`)
//     }
//   })
// }


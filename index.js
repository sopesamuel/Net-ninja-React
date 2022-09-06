// const ninjas = [
// { name: 'Sope', belt: 'brown' },
// { name: 'Seyi', belt: 'red' },
// { name: 'Samuel', belt: 'brown' }
// ]

// //filter method

// const newNinjas = ninjas.filter((ninja)=>{
//      return ninja.belt == 'brown'
// })

// console.log(newNinjas, ninjas)

const ninjas = [
    {name: 'chuks', age: 30},
    {name: 'Sops', age: 22},
    {name: 'Gm', age: 45}
]

const newNinjas = ninjas.filter((ninja)=>{
return ninja.name === 'Gm'
})

console.log( newNinjas, ninjas)

const names = ninjas.map((ninja)=>{
    return ninja.name
})

console.log(names)
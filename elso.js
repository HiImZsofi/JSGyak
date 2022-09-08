const empty = [] //üres array
let randomInt = 0
for (let index = 0; index < 10; index++) { //tíz szám max
    
    randomInt = Math.floor(Math.random()* 100) + 1  //random szám
    empty.push(randomInt) //array push
    
}

empty.sort(((a,b) => a-b)) //rendezés

for (let index = 0; index < empty.length; index++) {
    
    console.log(empty[index]) //kiiras
    
}

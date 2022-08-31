const scores = [10,20,70,30,5,60,90];

//reduce = acc and curr is parameters, 0 is the initial value
const result = scores.reduce((acc,curr) => {
    if(curr>50){
        acc++;
    }
    return acc;
},0)

console.log(result);
/****************Example 2******************/
const scores1 = [
    {player:"sinan", score:50},
    {player:"deniz", score:30},
    {player:"bora", score:70},
    {player:"can", score:100},
]

const resultSinan= scores1.reduce((acc,curr) =>{
    if (curr.player === "sinan") {
        acc+=curr.score;
    }
    return acc;
},0)

console.log(resultSinan);

/**find method ****/

const firstHighScores = scores.find((score)=>{
    return score>50;
})

console.log(firstHighScores)

/***sort method****/

scores.sort((a,b) => a-b);
console.log(scores)
console.log(scores.reverse())

/***** Chaining arrays ****/

const promos = scores1
    .filter(product => product.score >= 50)
    .map(product => `the ${product.player} has ${product.score} point`);
console.log(promos)
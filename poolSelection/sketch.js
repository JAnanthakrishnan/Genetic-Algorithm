let fruits = [
  {
    name: "mango",
    score: 5,
  },
  {
    name: "apple",
    score: 3,
  },
  {
    name: "cherry",
    score: 1,
  },
  {
    name: "blueberry",
    score: 1,
  },
];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  let sum =0;
  for (let i=0;i<fruits.length;i++){
      sum+=fruits[i].score;
  }
  for(let i=0;i<fruits.length;i++){
      fruits[i].prob = fruits[i].score/sum;
      fruits[i].count = 0;
  }
//   for(let i=0;i<100000;i++){
//       let fruit = pickOne(fruits);
//       fruit.count++;
//   }
}

function pickOne(list){
    let index = 0;
    let r = random(1);
    while(r>0){
        r = r-list[index].prob;
        index++;
    }
    index--;
    return list[index];
}

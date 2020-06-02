let population = [];
let popCount;
let target;
let mutationRate;
let bestStr = "";
let generations ;
function setup() {
  noCanvas();
  createElement("h1", "Genetic algorithm");
  input = createElement(
    "p",
    '<form onSubmit ="getInput(event)" id ="form"><input type="text" placeholder="Type something..." id="myInput"><input type="submit" value  = \"Evolve\" /></form>'
  );
  bestString = createElement("p", "Best string till now:");
  bestString.id("left_pos");
  let div0 = createDiv("");
  div0.id("container");
  bestString.parent(div0);
  allPhrases = createElement("p", "All Phrases :");
  allPhrases.id("right_pos");
  allPhrases.parent(div0);

  popCount = 500;
  generations = 0;
  target = "To be or not to be";
  mutationRate = 0.01;
  for (let i = 0; i < popCount; i++) {
    let ele = new DNA(target);
    population.push(ele);
  }
}
function draw() {
  background(255);
  // let matingPool = [];
  let max = population[0].fitness;
  for (let i = 0; i < population.length; i++) {
    if (population[i].fitness > max) {
      max = population[i].fitness;
      bestStr = population[i].getStr();
    }
  }

  for (let i = 0; i < population.length; i++) {
    // let a = floor(random(matingPool.length));
    // let b = floor(random(matingPool.length));
    // let parentA = matingPool[a];
    // let parentB = matingPool[b];
    let parentA = check(max);
    let parentB = check(max);
    let child = parentA.crossOver(parentB);
    child.mutate(mutationRate);
    population[i] = child;
    population[i].calcFitness();
  }

  // textFont("Iosevka");
  // text("Best string till now: ", 20, 150);
  // text(bestStr, 50, 200);
  // textSize(32);
  if (bestStr.localeCompare(target) === 0) {
    noLoop();
  }
  bestString.html(
    "Best string till now :<br> &emsp; &emsp; <strong >" + bestStr + "</strong><br><br>No of generations : " + generations
  );
  allPhrases.html("<strong>All Phrases : </strong> <br> " + printPop());
  generations++;
}

function check(max) {
  for (let i = 0; i < population.length; i++) {
    while (true) {
      let pop = floor(random(population.length));
      let r = random(max);
      if (r < population[pop].fitness) {
        return population[pop];
      }
    }

    // let fitness;
    // fitness = map(population[i].fitness,0,max,0,1)
    // let n = fitness * 100;
    // for (let j = 0; j < n; j++) {
    //   matingPool.push(population[i]);
    // }
  }
}
function printPop() {
  let str = "";
  for (let i = 0; i < population.length; i++) {
    str += population[i].getStr() + "<br>";
  }
  return str;
}
function getInput(event) {
  event.preventDefault();
  noLoop();
  let input = document.getElementById("myInput").value;
  console.log(input)
  generations = 0;
  population = [];
  popCount = 500;
  target = input;
  document.getElementById("myInput").value ='';
  if (target === "") {
    target = "Enter something";
  }
  mutationRate = 0.01;
  for (let i = 0; i < popCount; i++) {
    let ele = new DNA(target);
    population.push(ele);
  }
  loop();
}

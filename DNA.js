class DNA {
  constructor() {
    this.genes = [];
    for (let i = 0; i < target.length; i++) {
      this.genes[i] = this.newChar();
    }
    this.fitness;
    this.calcFitness();
  }
  newChar(){
    let c = floor(random(63, 123));
    if (c === 63) c = 32;
    if (c === 64) c = 46;
    return String.fromCharCode(c);
  }
  calcFitness() {
    let score = 0;
    for (let i = 0; i < target.length; i++) {
      if (this.genes[i] === target.charAt(i)) {
        score++;
      }
    }
    this.fitness = float(score) / target.length;
    this.fitness = pow(this.fitness,5)+0.001;
  }
  crossOver(mate) {
    let child = new DNA();
    let midPoint = random(this.genes.length);
    for (let i = 0; i < this.genes.length; i++) {
      if (i < midPoint) child.genes[i] = this.genes[i];
      else child.genes[i] = mate.genes[i];
    }
    return child;
  }
  mutate() {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = this.newChar();
      }
    }
  }
  getStr() {
    let str = [];
    for (let i = 0; i < this.genes.length; i++) {
      str += this.genes[i];
    }
    return str;
  }
}

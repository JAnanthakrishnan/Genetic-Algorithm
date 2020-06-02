class Population{
    constructor(popCount,length){
        this.population = [];
        for(let i=0;i<popCount;i++){
            this.population[i] = new DNA(length);
        }
    }
}
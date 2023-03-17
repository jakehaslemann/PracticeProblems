// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, dna) => {
  let pAequor = {
    specimenNum: number,
    dna: dna,
    mutate() {
      let randomNumber = Math.floor(Math.random() * 15);
      let originalDNA = this.dna[randomNumber];
      while (originalDNA === this.dna[randomNumber]) {
        this.dna[randomNumber] = returnRandBase();
      }
    },
    compareDNA(testCase) {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === testCase.dna[i]) {
          count++;
        }
      }
      let percentage = Math.round((count / 15) * 100 * 100) / 100;
      console.log(
        `Specimen ${this.specimenNum} and specimen ${testCase.specimenNum} have ${percentage}% DNA in common.`
      );
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === "G" || this.dna[i] === "C") {
          count++;
        }
      }
      if (count / 15 > 0.6) {
        return true;
      } else {
        return false;
      }
    },
  };
  return pAequor;
};

const createPAqeuorFarm = (numberOfOrganisms) => {
  farm = [];
  for (let i = 0; i < numberOfOrganisms; i++) {
    farm.push(pAequorFactory(i, mockUpStrand()));
  }
  return farm;
};

const myFarm = createPAqeuorFarm(30);
console.log(myFarm);

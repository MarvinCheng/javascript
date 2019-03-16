class Stat {
    constructor(array) {
        this.array = array;
    }

    mean() {
        return this.array.reduce((prev, val, index, array) => {
            if (index !== array.length - 1) {
                return prev + val;
            } else {
                return (prev + val) / array.length;
            }
        });
    }

    mode() {
        let obj = {};
        let mode = 0;
        this.array.forEach(i => {
            obj[i] = obj[i] + 1 || 1
        });
        for (let i in obj) {
            if (obj[i] > mode) {
                mode = obj[i];
            }
        }
        return mode;
    }

    median() {
        let sorted = this.array.sort();
        return sorted.length % 2 === 0 ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2 : sorted[Math.floor(sorted.length / 2)];

    }
}

let stat1 = new Stat([1, 2, 3, 4, 5, 5]);
let stat2 = new Stat([1, 2, 2, 3, 3, 4, 5]);
console.log(stat1.mean());
console.log(stat1.mode());
console.log(stat1.median());

console.log(stat2.mean());
console.log(stat2.mode());
console.log(stat2.median());
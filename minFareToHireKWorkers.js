/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} K
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, K) {
    let minFare = wage[0];
    let fare = [];
    let baseQuality = quality[0];
    console.log("WAGE" + wage);
    let baseWage = wage[0]; console.log("MinFare" + minFare);
    for (var i = 1;i < quality.length;i++){
        let paidFare = (quality[i] / baseQuality) * baseWage; console.log(paidFare);
        if (paidFare >= wage[i]) { console.log( "paidFare >= wage[i]?" + paidFare >= wage[i]);
            fare.push(paidFare);
        }
    }
    fare.sort((a, b) => a - b); console.log("fare " + fare);
    for (var j=0;j<K-1;j++){ console.log("J " + j);
        minFare += fare[j];
    }
    console.log("minFare " + minFare);
    return minFare;
};


mincostToHireWorkers([4,5],[8,14],2);
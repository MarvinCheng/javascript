function printString(min, max) {
    for (let i = min; i <= max; i++) {
        let str = String(i) + " ";
        if (i % 3 == 0) {
            str += "Spicy";
        }
        if (i % 5 == 0) {
            str += "Chicken";
            if (i % 3 == 0) {
                str += "!";
            }
        }
        console.log(str);
    }
}

// printString(1, 20);

function reverse(str) {
    let punctuation = ["!",",",".","?"];
    let arr = str.toLowerCase().split(" ");
    let result = [];
    for (let i of arr) {
        let res = i.split("").reverse();
        if (res.length > 0) {
            res[0] = res[0].toUpperCase();
            let str = res.join("");
            result.push(str);
        }
    }
    return result.reverse().join("");
}

console.log(reverse("Hey there, Alan"));


function calculateTax(income) {
    // let map = new Map();
    let remaining = income;
    let tax = 0;
    if (income <= 18200) {
        return 0;
    } else {
        if (income >= 180001) {
            if (income == 180001){
                remaining = 1;
            } else{
                remaining = income - 180001;
            }
            tax += remaining * 0.45;
            income = 180000;
        }
        if ( income >= 87001 && income <= 180000) {
            if (income == 87001){
                remaining = 1;
            } else{
                remaining = income - 87001;
            }

            tax += remaining * 0.37;
            income = 87000;
        }
        if (income <= 87000 && income >= 37001) {
            if (income == 37001){
                remaining = 1;
            } else{
                remaining = income - 37001;
            }
            tax += remaining * 0.325;
            income = 37000;
        }
        if (income <= 37000 && income >= 18201) {
            if (income ==18201){
                remaining = 1;
            } else{
                remaining = income - 18201;
            }
            tax += remaining * 0.19;
        }
    }
    return tax;
}


// console.log(calculateTax(37001).toFixed(2));
// console.log(calculateTax(85000).toFixed(2));
console.log(calculateTax(180001).toFixed(2));
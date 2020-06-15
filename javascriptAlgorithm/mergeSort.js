// avg complexity: nlogn
// worst complexity: nlogn

// function mergeSort (arr) {
//     if (arr.length === 1) {
//         // return once we hit an array with a single item
//         return arr;
//     }
//
//     const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
//     const left = arr.slice(0, middle); // items on the left side
//     console.log('left', left);
//     const right = arr.slice(middle); // items on the right side
//     console.log('right', right);
//
//     return merge(
//         mergeSort(left),
//         mergeSort(right)
//     );
// }
//
// // compare the arrays item by item and return the concatenated result
// function merge (left, right) {
//     console.log(left, right);
//     let result = [];
//     let indexLeft = 0;
//     let indexRight = 0;
//
//     while (indexLeft < left.length && indexRight < right.length) {
//         if (left[indexLeft] < right[indexRight]) {
//             result.push(left[indexLeft]);
//             indexLeft++;
//         } else {
//             result.push(right[indexRight]);
//             indexRight++;
//         }
//     }
//     //copy 剩下的value回去result
//     return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
// }

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]


function mergeSort(arr){
    if(arr.length ===1){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}



class A{
    constructor(a){
        this.a = a;
    }
}
class B{
    constructor(a,b){
        this.a = new A(a);
        this.b = b;
    }
}

let bb = new B(1,2);
console.log(bb);

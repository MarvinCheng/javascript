const reverse = array => {
    let max = array.length - 1;
    for (let i = 0, j = array.length - 1; i < j; i++) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        j--;
    }
    return array;
}


console.log(reverse([1, 2, 3, 4]));
console.log(reverse([4, 3, 2, 1]));
console.log(reverse([4, 3, 2, 1, 5, 6, 7, 8, 9]));
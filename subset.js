function all_subset(array) {
    let subset = new Array();
    helper(array, subset, 0);
}

function helper(array, subset, index) {
    if (index == array.length) {
        console.log(print_subset(subset));
    } else {
        subset[index] = null;
        helper(array, subset, index + 1);
        subset[index] = array[index];
        helper(array, subset, index + 1);
    }
}

function print_subset(subset){
        for (let i of subset){
            console.log(i);
        }

}
all_subset([1, 2]);
const caesarCipher = (string, number) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let str = string.toLowerCase();
    let result = "";
    console.log(str);
    for (let i in str) {
        if (alphabet.indexOf(str[i]) === -1) {
            result += str[i];
            continue;
        }

        let index = alphabet.indexOf(str[i]) + number % 26;
        // index of alphabet + number = positive number
        if (index > 25) {
            index -= 26;
        }
        // index of alphabet + number = negative value
         if (index < 0) {
            index += 26;
        }
        result += alphabet[index];
    }
    return result;
}

console.log(caesarCipher("I love JavaScript!", 100));
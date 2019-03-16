const reverseWords = str =>{
  let arr = str.split(" ");
  let reverse = [];
  for (let i of arr){
      let array = [...i].reverse().join("");
      reverse.push(array);
  }
  return reverse.join(" ");
}
// "I evol !tpircsavaJ"
console.log(reverseWords("I love javascript!"));
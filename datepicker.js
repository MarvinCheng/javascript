const choices = {
    day: "day-of-week",
    yearMonth: "year-month",
    userInput: "user-input",
};

// 跑 onload 的方法
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('DomContentLoaded');
//     init();
// }, false);

window.onload = function () {
    console.log('All assets are loaded');
    init();

};

function init(){
    // document fragment is more lightweight than document.
    // It will become empty after calling append or insert method [appendChild or insertBefore].
    let documentFragment = document.createDocumentFragment();

    // append day options
    for (let i = 1; i <= 31; i++) {
        let dayEle = createOption(i);
        documentFragment.appendChild(dayEle);
    }
    document.getElementById('day').appendChild(documentFragment);

    // append month options
    let months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    for (let month of months) {
        let ele = createOption(month);
        documentFragment.appendChild(ele);
    }
    document.getElementById('month').appendChild(documentFragment);

    // append year options
    let currentYear = new Date().getFullYear();
    for (let i = -10; i <= 10; i++) {
        let yearEle = createOption(currentYear + i);
        documentFragment.appendChild(yearEle);
    }
    document.getElementById('year').appendChild(documentFragment);

    // default block to day of week
    document.getElementById(choices.day).style.display="block";
    document.getElementById("choice").value = "day-of-week";
}

function change() {
    let inputIds = Object.values(choices);
    let selectedOption = document.querySelector('input[name=user-choice-radio]:checked');
    let targetId = selectedOption.value;
    let target = targetId;
    for (let id of inputIds) {
        if (target !== id) {
            document.getElementById(id).style.display = "none";
        } else {
            document.getElementById(id).style.display = "block";
        }
    }
    document.getElementById('choice').value=target;
}

function createOption(value) {
    let element = document.createElement("option");
    element.value = value;
    element.text = value;
    return element;

}

function getSelectedOptions(id){
    const selectedOptions = document.querySelector(`#${id}`).selectedOptions;
    if(!selectedOptions.length){
        throw new  Error(`No value found for id ${id}`);
    }
    return selectedOptions[0].value;
}

function run(event){
    const choice = document.getElementById("choice").value;
    event.preventDefault();
    const result = [];
    switch(choice){
        case "day-of-week":
            let checked = document.querySelectorAll(".week:checked");
            for (let check of checked){
                result.push(check.value);
            }
            break;
        case "year-month":
            let day = getSelectedOptions("day");
            let month = getSelectedOptions("month");
            let year = getSelectedOptions("year");
            result.push(day, month, year);
            break;
        case "user-input":
            result.push(document.querySelector("#user-input-text").value);
            break;
        default:
            throw new Error("choose a method!");
    }
    document.getElementById("result").value= result.join(" ");

}



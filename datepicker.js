window.onload = function () {
    console.log('All assets are loaded');
    for (let i = 1; i <= 31; i++) {
        appendOption("day", i);
    }
    // document fragment is more lightweight than document.
    // It will become empty after calling append or insert method [appendChild or insertBefore].

    let documentFragment = document.createDocumentFragment();
    let months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    for (let month of months) {
        // appendOption("month", month);
        let ele = createOption(month);
        documentFragment.appendChild(ele);
    }
    document.getElementById('month').appendChild(documentFragment);
    let currentYear = new Date().getFullYear();
    for (let i = -10; i <= 10; i++) {
        appendOption("year", (currentYear + i));
    }
};

function change(event) {
    let inputIds = ["day-of-week", "year-month", "user-input"];
    let targetId = event.target.id;
    let target = targetId.split("-tab")[0];
    for (let id of inputIds) {
        if (target !== id) {
            document.getElementById(id).style.display = "none";
        } else {
            document.getElementById(id).style.display = "block";
        }
    }
}

function appendOption(id, value) {
    let element = document.createElement("option");
    element.value = value;
    element.text = value;
    document.getElementById(id).appendChild(element);
}

function createOption(value) {
    let element = document.createElement("option");
    element.value = value;
    element.text = value;
    return element;

}
//Fetch object 只需要一个argument,就是url,然后会return resolved promise,不管response成功与否
// fetch object return a resolved promise
// to get response body, use response.json() => this will return a promise also. need to use ,then to get value

//example
// let fetch = fetch("test.json"); -> this will return a resolve promise, no matter they request the url successfully

// fetch.then((response)=> response.json()) => first then will get the response from fetch, which is a promise
// .then(data=> console.log(data)); => second then will get the response.json(), which is a promise too

let req = fetch("test.json");
let req2 = fetch("test.json");
let req3 = fetch('test.json');
let errReq = fetch('test2.json');

// req.then((response) => {
//     console.log("resp", response);
//     return response.json();
// }).then(data=> console.log(data));

async function processResp() {
    let resp = await req;
    let body = await resp.json();
    console.log(body);
}

// processResp();

//fetch image example
let image = fetch('zippay.jpg');

image.then(resp => resp.blob()).then(res => {
    const objectUrl = URL.createObjectURL(res);
    const image = document.querySelector('.image');
    image.src = objectUrl;
});


// run multiple fetch in promise all
// all promise must be resolved, if it's failed it will get error when r.json()!
// Promise.all([req, req2]).then(responses => {
//     console.log(responses);
//     return Promise.all(responses.map(r => r.json()))
// })
//     .then(json => json.forEach(i => console.log(i)));


//example of success promises, with one REJECT promise, and return response body without error.
let promises = Promise.all([req, req2, errReq]).then(responses => {
    console.log(responses);
    return Promise.all(responses.map(r => {

        console.log("r", r);
        // check ok status to check if the response is success
        // ok is true when status is 200-299.
        // if didn't check this, it will get error if the response is error.
        if (r.ok) {
            return r.json();
        }
    }));
})
    .then(json => json.forEach(i => {
        console.log(`promise all`);
        console.log(i);
    }));
console.log(promises);

// fetch response只能够用一次 (memory efficiency), 
// 如果要再用同一个response的话, 可以把 response 存在cache里,或者clone response 去另外一个variable
let clone;
req3.then((response) => {
    console.log("resp", response);
    clone = response.clone().json();
    console.log("clone ", clone.then(data => console.log("data ", data)));
    // console.log("clone " ,clone.json().then(data => console.log("data ", data)));
    return response.json();
}).then(data => console.log(data));

let url = "test.json";
let data = {};
// When a value is simply returned from within a then handler, it will effectively return Promise.resolve(<value returned by whichever handler was called>).

// all modes for fetch API
fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
})
    .then(response => response.json())
    .then(json => {
        console.log("response from post ", json)
    }); // parses response to JSON


//fetch 10 images example
let urls = ['zippay.jpg', 'zippay.jpg', 'zippay.jpg', 'zippay.jpg', 'zippay.jpg', 'zippay.jpg', 'zippay2.jpg'];
let docFragment = document.createDocumentFragment();
Promise.all(urls.map(i => fetch(i))).then(responses => {
    return Promise.all(responses.map(r => {
        if (r.ok) {
            return r.blob();
        }
        return undefined;
    }));
}).then(blob => {
    blob.forEach(i => {
        if (i) {
            const objectUrl = URL.createObjectURL(i);
            const ele = document.createElement('img');
            ele.src = objectUrl;
            docFragment.appendChild(ele);
        }
    });
}).finally(() => {
    const div = document.getElementById('images');
    div.appendChild(docFragment);
});

// normal fetch example
let newFetch = fetch('test.json');
newFetch.then(response => {
    return response.json()
}).then(json => {
    console.log('newFetch json');
    console.log(json);
});


let newFFetch = fetch('test2.json');
newFFetch.then(resp => {
    if (resp.ok) {
        return resp.json();
    }
    return null;
}).then(json => {
    console.log("NewFFetch json");
    console.log(json);
});

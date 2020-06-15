function clickMe(event) {
    console.log("Click");
}


function fetchDesign(id) {
    return Promise.resolve({
        designId: id,
        shapes: [
            {shapeId: 'basic-shape', color: {r: 55, g: 40, b: 255}, children: []},
            {
                shapeId: 'person', color: {r: 255, g: 255, b: 252}, children: [
                    {shapeId: 'person-head', color: {r: 255, g: 255, b: 255}, children: []},
                    {shapeId: 'person-body', color: {r: 205, g: 255, b: 252}, children: []},
                    {shapeId: 'person-legs', color: {r: 100, g: 255, b: 252}, children: []},
                ]
            },
            {shapeId: 'zigzag-polygon', color: {r: 205, g: 255, b: 252}, children: []},
            {
                shapeId: 'fish', color: {r: 205, g: 255, b: 252}, children: [
                    {shapeId: 'fish-eyes', color: {r: 255, g: 255, b: 255}, children: []},
                    {
                        shapeId: 'fish-fin', color: {r: 100, g: 66, b: 74}, children: [
                            {shapeId: 'fish-fin-part-1', color: {r: 93, g: 54, b: 55}, children: []},
                            {shapeId: 'fish-fin-part-2', color: {r: 33, g: 255, b: 255}, children: []},
                            {shapeId: 'fish-fin-part-3', color: {r: 128, g: 53, b: 255}, children: []},
                        ]
                    },
                    {shapeId: 'fish-tail', color: {r: 255, g: 5, b: 255}, children: []},
                ]
            },
            {
                shapeId: 'person', color: {r: 255, g: 255, b: 252}, children: [
                    {shapeId: 'person-head', color: {r: 255, g: 255, b: 255}, children: []},
                    {shapeId: 'person-body', color: {r: 205, g: 255, b: 252}, children: []},
                    {shapeId: 'person-legs', color: {r: 100, g: 255, b: 252}, children: []},
                ]
            },
        ]
    })
};


function calculateColor(obj, color){
    for(let c in color){
        obj[c] = obj[c] + color[c];
    }
}

function loop(color, shapes){
    let count = 0;
    for(let shape of shapes){
        calculateColor(color, shape.color);
        count++;
        if(shape.children.length >0){
            count += loop(color,shape.children);
        }
    }
    return count;
}

fetchDesign(1).then(resp => {
    let color = {r:0, g:0, b:0};
    let shapes = resp.shapes;
    let count;
    count = loop(color, shapes);
    console.log(color);
    console.log(count);
    for(let col in color){
        color[col] = Math.floor(color[col] / count);
    }
    console.log(Object.entries(color));
    console.log(color);
});

// fetchDesign(1).then(resp => {
//     let shapes = resp.shapes;
//     let obj = {};
//     let count = 0;
//     shapes.forEach(shape => {
//         let color = shape.color;
//         let children = shape.children;
//         for (let i in color) {
//             obj[i] = obj[i] + color[i] || color[i];
//         }
//         let arr = calculateChildren(shape.children);
//         arr.forEach(ele => {
//             for (let i in ele) {
//                 obj[i] = obj[i] + ele[i];
//             }
//             count++;
//         });
//         count++;
//     });
//     for (let j in obj) {
//         obj[j] = obj[j] / count;
//     }
//     console.log(obj);
// });
//
// const calculateChildren = (children) => {
//     let arr = [];
//     children.forEach(ele => {
//         arr.push(ele.color);
//         if (ele.children.length !== 0) {
//             arr = arr.concat(calculateChildren(ele.children));
//         }
//     });
//     return arr;
// }
//
//
// const response = {
//     designId: 1,
//     shapes: [
//         {shapeId: 'basic-shape', color: {r: 55, g: 40, b: 255}, children: []},
//         {
//             shapeId: 'person', color: {r: 255, g: 255, b: 252}, children: [
//                 {shapeId: 'person-head', color: {r: 255, g: 255, b: 255}, children: []},
//                 {shapeId: 'person-body', color: {r: 205, g: 255, b: 252}, children: []},
//                 {shapeId: 'person-legs', color: {r: 100, g: 255, b: 252}, children: []},
//             ]
//         },
//         {shapeId: 'zigzag-polygon', color: {r: 205, g: 255, b: 252}, children: []},
//         {
//             shapeId: 'fish', color: {r: 205, g: 255, b: 252}, children: [
//                 {shapeId: 'fish-eyes', color: {r: 255, g: 255, b: 255}, children: []},
//                 {
//                     shapeId: 'fish-fin', color: {r: 100, g: 66, b: 74}, children: [
//                         {shapeId: 'fish-fin-part-1', color: {r: 93, g: 54, b: 55}, children: []},
//                         {shapeId: 'fish-fin-part-2', color: {r: 33, g: 255, b: 255}, children: []},
//                         {shapeId: 'fish-fin-part-3', color: {r: 128, g: 53, b: 255}, children: []},
//                     ]
//                 },
//                 {shapeId: 'fish-tail', color: {r: 255, g: 5, b: 255}, children: []},
//             ]
//         },
//         {
//             shapeId: 'person', color: {r: 255, g: 255, b: 252}, children: [
//                 {shapeId: 'person-head', color: {r: 255, g: 255, b: 255}, children: []},
//                 {shapeId: 'person-body', color: {r: 205, g: 255, b: 252}, children: []},
//                 {shapeId: 'person-legs', color: {r: 100, g: 255, b: 252}, children: []},
//             ]
//         },
//     ]
// };
//
// function calculateColors(shapes = response.shapes, result = {r: 0, g: 0, b: 0}, count = 0){
//     shapes.forEach((shape) => {
//         if(shape.children.length >1){
//             let res = calculateColors(shape.children, result, count);
//             result = res.result;
//             count = res.count;
//         }
//         if(shape.color){
//             count++;
//             let color = shape.color;
//             for (let key of Object.keys(color)){
//                 result[key] += color[key];
//             }
//         }
//     });
//     return {result, count};
// }
//
// setTimeout(()=> {
//     console.log('recursion start >>>>');
//
//     let total = calculateColors();
//     let totalColors = total.result;
//     let count = total.count;
//     let average = {};
//     console.log(totalColors, count);
//     for(let key of Object.keys(totalColors)){
//         average[key] = totalColors[key] / count;
//     }
//     console.log(average);
//
// }, 0);


function closure(){
    let a =2;
    function bar(){
        console.log(a);
        return a;
    }
    return bar;
}
let b = closure();
console.log(b());


let a = 3;
function printa(){
    return this.a;
}
console.log('printa ',printa());
let d = {a:5};
console.log('printa.call(this) ',printa.call(d));

let c = {
    a:4,
    printa,
};

console.log('c.printa()', c.printa());



for(let i=0; i<5; i++){
    setTimeout(()=>{console.log(i)}, 1000);
}

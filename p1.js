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

//calculate average color of this
fetchDesign(1).then(resp => {
    let shapes = resp.shapes;
    let obj = {};
    let count = 0;
    shapes.forEach(shape => {
        let color = shape.color;
        let children = shape.children;
        for (let i in color) {
            obj[i] = obj[i] + color[i] || color[i];
        }
        let arr = calculateChildren(shape.children);
        arr.forEach(ele => {
            for (let i in ele) {
                obj[i] = obj[i] + ele[i];
            }
            count++;
        });
        count++;
    });
    for (let j in obj) {
        obj[j] = obj[j] / count;
    }
    console.log(obj);
});

const calculateChildren = (children) => {
    let arr = [];
    children.forEach(ele => {
        arr.push(ele.color);
        if (ele.children.length !== 0) {
            arr = arr.concat(calculateChildren(ele.children));
        }
    });
    return arr;
}



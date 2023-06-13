const {Circle, Triangle, Square} = require('./shapes');

describe("Circle", ()=>{
    test("should make a green circle element",()=>{
        const expected = `<circle cx="150" cy="100" r="80" fill="green" />`
        const circle = new Circle();
        circle.setColor("green")
        const content = circle.render()
        exepect(content).toEqual(expected);
    })
})

desscribe("Triangle", ()=>{
    test("should make a yellow triangle element", ()=>{
        const expected = ``
    })
})

const {Circle, Triangle, Square} = require('./shapes');

describe("Circle", ()=>{
    test("should make a green circle element",()=>{
        const expected = `<circle cx="150" cy="100" r="80" fill="green" />`
        const circle = new Circle();
        circle.setColor("green")
        const content = circle.render()
        expect(content).toEqual(expected);
    })
})

describe("Triangle", ()=>{
    test("should make a yellow triangle element", ()=>{
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="yellow" />`
        const triangle = new Triangle();
        triangle.setColor("yellow")
        const content = triangle.render()
        expect(content).toEqual(expected);
    })
})

describe("Square", ()=>{
    test("should make a blue square element", ()=>{
        const expected = `<rect x="90" y="40" width="120" height="120" fill="blue"/>`
        const square = new Square();
        square.setColor("blue")
        const content = square.render()
        expect(content).toEqual(expected);
    })
})


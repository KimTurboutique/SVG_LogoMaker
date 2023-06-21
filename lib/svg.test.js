const { Square } = require('./shapes');
const SVG = require('./svg');

describe ("SVG", ()=>{
    test("should generate a logo", ()=>{
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://w3.org/2000/svg"></svg>`
        const svg = new SVG();
        const content = svg.render()
        expect(content).toEqual(expected);
    })  
   
    test("should render svg with text", ()=>{
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">KSR</text></svg>`
        const svg = new SVG();
        svg.setText("KSR", "green")
        const content = svg.render()
        expect(content).toEqual(expected);
    })
    
    test("should render svg with text and shape", ()=>{
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">KSR</text></svg>`
        const svg = new SVG();
        svg.setText("KSR", "green")
        const square = new Square();
        square.setColor("blue")
        svg.setShape(square)
        const content = svg.render()
        expect(content).toEqual(expected);
    })
})


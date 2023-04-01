// const { beforeAll } = require("@jest/globals");
// const { default: test } = require("node:test");
// const { describe } = require("yargs");


const { expect } = require("@jest/globals");
const { game } = require("../game");

// beforeAll() to load HTML file into the DOM
beforeAll(() => {
    let fs = require("fs");                  //install node's fs library, part of node standard library
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exist", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exist", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exist", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exist", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });

})
import blueCardsData from './mythicCards/blue/index.js';
import brownCardsData from './mythicCards/brown/index.js';
import greenCardsData from './mythicCards/green/index.js';
import ancientsData from './mythicCards/ancients.js'
import { changeButton } from "./logicClick.js";

const green1 = document.querySelector('.green-1');
const green2 = document.querySelector('.green-2');
const green3 = document.querySelector('.green-3');
const blue1 = document.querySelector('.blue-1');
const blue2 = document.querySelector('.blue-2');
const blue3 = document.querySelector('.blue-3');
const brown1 = document.querySelector('.red-1');
const brown2 = document.querySelector('.red-2');
const brown3 = document.querySelector('.red-3');

let greenArr = [];
let brownArr = [];
let blueArr = [];

export let fullStackArr = [];


export function ancientLogic(ancient) {
    let activeAncient = String(ancient.className).split('ancient-').join('').split(' active').join('').toLowerCase();

    ancientsData.forEach((value) => {
        if ((value.name).toLowerCase() === activeAncient) {
            green1.textContent = value.firstStage.greenCards;
            blue1.textContent = value.firstStage.blueCards;
            brown1.textContent = value.firstStage.brownCards;
            green2.textContent = value.secondStage.greenCards;
            blue2.textContent = value.secondStage.blueCards;
            brown2.textContent = value.secondStage.brownCards;
            green3.textContent = value.thirdStage.greenCards;
            blue3.textContent = value.thirdStage.blueCards;
            brown3.textContent = value.thirdStage.brownCards;
            randomStack();
            fullStack();
        }
    })
}

function randomStack() {
    let fullGreen = Number(green1.textContent) + Number(green2.textContent) + Number(green3.textContent);
    let fullBrown = Number(brown1.textContent) + Number(brown2.textContent) + Number(brown3.textContent);
    let fullBlue = Number(blue1.textContent) + Number(blue2.textContent) + Number(blue3.textContent);

    for (let i = 0; i < fullGreen; i++) {
        let num = Math.trunc(getRandom(greenCardsData.length));
        if (greenArr.includes(num)) {
            i -= 1;
        } else {
            greenArr.push(num);
        }
    }

    for (let i = 0; i < fullBrown; i++) {
        let num = Math.trunc(getRandom(brownCardsData.length));
        if (brownArr.includes(num)) {
            i -= 1;
        } else {
            brownArr.push(num);
        }
    }

    for (let i = 0; i < fullBlue; i++) {
        let num = Math.trunc(getRandom(blueCardsData.length));
        if (blueArr.includes(num)) {
            i -= 1;
        } else {
            blueArr.push(num);
        }
    }

    function getRandom(numberMax) {
        return Math.random() * (numberMax - 1) + 1;
    }

    console.log(greenArr, brownArr, blueArr);
}

export function fullStack() {

    if (Number(blue3.textContent) > 0) {
        for (let i = 0; i < Number(blue3.textContent); i++) {
            fullStackArr.push(`url(./assets/MythicCards/blue/blue${blueArr.pop(blueArr[i])}.png)`);
        }
    }

    if (Number(brown3.textContent) > 0) {
        for (let i = 0; i < Number(brown3.textContent); i++) {
            fullStackArr.push(`url(./assets/MythicCards/brown/brown${brownArr.pop(brownArr[i])}.png)`);
        }
    }


    if (Number(green3.textContent) > 0) {
        for (let i = 0; i < Number(green3.textContent); i++) {
            fullStackArr.push(`url(./assets/MythicCards/green/green${greenArr.pop(greenArr[i])}.png)`);
        }
    }

    if (Number(blue2.textContent) > 0) {
        for (let i = 0; i < Number(blue2.textContent); i++) {
            fullStackArr.push(`url(./assets/MythicCards/blue/blue${blueArr.pop(blueArr[i])}.png)`);
        }
    }

    if (Number(brown2.textContent) > 0) {
        for (let i = 0; i < Number(brown2.textContent); i++) {
            fullStackArr.push(`url(./assets/MythicCards/brown/brown${brownArr.pop(brownArr[i])}.png)`);
        }
    }


    if (Number(green2.textContent) > 0) {
        for (let i = 0; i < Number(green2.textContent); i++) {
            fullStackArr.push(`url(./assets/MythicCards/green/green${greenArr.pop(greenArr[i])}.png)`);
        }
    }

    if (Number(blue1.textContent) > 0) {
        for (let i = 0; i < Number(blue1.textContent); i++) {
            fullStackArr.push(`url(./assets/MythicCards/blue/blue${blueArr.pop(blueArr[i])}.png)`);
        }
    }

    if (Number(brown1.textContent) > 0) {
        for (let i = 0; i < Number(brown1.textContent); i++) {
            fullStackArr.push(`url(./assets/MythicCards/brown/brown${brownArr.pop(brownArr[i])}.png)`);
        }
    }


    if (Number(green1.textContent) > 0) {
        for (let i = 0; i < Number(green1.textContent); i++) {
            fullStackArr.push(`url(./assets/MythicCards/green/green${greenArr.pop(greenArr[i])}.png)`);
        }
    }

    console.log(fullStackArr);
}

export function diffLogic(diff) {
    let activeDiff = String(diff.className).split('diff-').join('').split(' active').join('');

    if (activeDiff === 2) {

    }
}
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

export let greenArrCon = [];
export let brownArrCon = [];
export let blueArrCon = [];

let stageSum1 = null;
let stageSum2 = null;
let stageSum3 = null;

export let fullStackArr = [];

let activeDiff = null;


export function ancientLogic(ancient) {
    let activeAncient = String(ancient.className).split('ancient-').join('').split(' active').join('').toLowerCase();

    ancientsData.forEach((value) => {
        if ((value.name).toLowerCase() === activeAncient) {
            green1.textContent = value.firstStage.greenCards;
            blue1.textContent = value.firstStage.blueCards;
            brown1.textContent = value.firstStage.brownCards;
            stageSum1 = value.firstStage.greenCards + value.firstStage.blueCards + value.firstStage.brownCards;
            green2.textContent = value.secondStage.greenCards;
            blue2.textContent = value.secondStage.blueCards;
            brown2.textContent = value.secondStage.brownCards;
            stageSum2 = value.secondStage.greenCards + value.secondStage.blueCards + value.secondStage.brownCards; 
            green3.textContent = value.thirdStage.greenCards;
            blue3.textContent = value.thirdStage.blueCards;
            brown3.textContent = value.thirdStage.brownCards;
            stageSum3 = value.thirdStage.greenCards + value.thirdStage.blueCards + value.thirdStage.brownCards;
        }
    })
}

function randomStack() {
    let fullGreen = Number(green1.textContent) + Number(green2.textContent) + Number(green3.textContent);
    let fullBrown = Number(brown1.textContent) + Number(brown2.textContent) + Number(brown3.textContent);
    let fullBlue = Number(blue1.textContent) + Number(blue2.textContent) + Number(blue3.textContent);

    function getRandom(numberMax) {
        return (Math.trunc(Math.random() * (numberMax - 1) + 1));
    }

    for (let i = 0; i < fullGreen; i++) {
        let num = getRandom(greenCardsData.length);

        if (activeDiff === 0) {

            if (greenArr.includes(greenCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (greenCardsData[num].difficulty === 'easy') {
                    greenArr.push(greenCardsData[num].cardFace);
                } else if ((greenCardsData[num].difficulty === 'normal') && ((greenArr.length > 3) && (greenArr.length <= fullGreen))) {
                    greenArr.push(greenCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }

        if (activeDiff === 1) {

            if (greenArr.includes(greenCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (greenCardsData[num].difficulty !== 'hard') {
                    greenArr.push(greenCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }

        if (activeDiff === 2) {

            if (greenArr.includes(greenCardsData[num].cardFace)) {
                i -= 1;
            } else {
                greenArr.push(greenCardsData[num].cardFace);
            }
        }

        if (activeDiff === 3) {

            if (greenArr.includes(greenCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (greenCardsData[num].difficulty !== 'easy') {
                    greenArr.push(greenCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }

        if (activeDiff === 4) {

            if (greenArr.includes(greenCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (greenCardsData[num].difficulty === 'hard') {
                    greenArr.push(greenCardsData[num].cardFace);
                } else if ((greenCardsData[num].difficulty === 'normal') && ((greenArr.length > 3) && (greenArr.length <= fullGreen))) {
                    greenArr.push(greenCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }
    }

    for (let i = 0; i < fullBrown; i++) {
        let num = getRandom(brownCardsData.length);

        if (activeDiff === 0) {

            if (brownArr.includes(brownCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (brownCardsData[num].difficulty === 'easy') {
                    brownArr.push(brownCardsData[num].cardFace);
                } else if ((brownCardsData[num].difficulty === 'normal') && ((brownArr.length > 4) && (brownArr.length <= fullBrown))) {
                    brownArr.push(brownCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }

        if (activeDiff === 1) {

            if (brownArr.includes(brownCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (brownCardsData[num].difficulty !== 'hard') {
                    brownArr.push(brownCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }

        if (activeDiff === 2) {

            if (brownArr.includes(brownCardsData[num].cardFace)) {
                i -= 1;
            } else {
                brownArr.push(brownCardsData[num].cardFace);
            }
        }

        if (activeDiff === 3) {

            if (brownArr.includes(brownCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (brownCardsData[num].difficulty !== 'easy') {
                    brownArr.push(brownCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }

        if (activeDiff === 4) {

            if (brownArr.includes(brownCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (brownCardsData[num].difficulty === 'hard') {
                    brownArr.push(brownCardsData[num].cardFace);
                } else if ((brownCardsData[num].difficulty === 'normal') && ((brownArr.length > 4) && (brownArr.length <= fullBrown))) {
                    brownArr.push(brownCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }
    }

    for (let i = 0; i < fullBlue; i++) {
        let num = getRandom(blueCardsData.length);

        if (activeDiff === 0) {

            if (blueArr.includes(blueCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (blueCardsData[num].difficulty === 'easy') {
                    blueArr.push(blueCardsData[num].cardFace);
                } else if ((blueCardsData[num].difficulty === 'normal') && ((blueArr.length > 3) && (blueArr.length <= fullBlue))) {
                    blueArr.push(blueCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }

        if (activeDiff === 1) {

            if (blueArr.includes(blueCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (blueCardsData[num].difficulty !== 'hard') {
                    blueArr.push(blueCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }

        if (activeDiff === 2) {

            if (blueArr.includes(blueCardsData[num].cardFace)) {
                i -= 1;
            } else {
                blueArr.push(blueCardsData[num].cardFace);
            }
        }

        if (activeDiff === 3) {

            if (blueArr.includes(blueCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (blueCardsData[num].difficulty !== 'easy') {
                    blueArr.push(blueCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }

        if (activeDiff === 4) {

            if (blueArr.includes(blueCardsData[num].cardFace)) {
                i -= 1;
            } else {
                if (blueCardsData[num].difficulty === 'hard') {
                    blueArr.push(blueCardsData[num].cardFace);
                } else if ((blueCardsData[num].difficulty === 'normal') && ((blueArr.length > 3) && (blueArr.length <= fullBlue))) {
                    blueArr.push(blueCardsData[num].cardFace);
                } else {
                    i -= 1;
                }
            }
        }
    }

    greenArrCon = greenArr.slice();
    brownArrCon = brownArr.slice();
    blueArrCon = blueArr.slice();
}

export function fullStack() {

    if (Number(blue3.textContent) > 0) {
        for (let i = 0; i < Number(blue3.textContent); i++) {
            fullStackArr.push(blueArr.pop(blueArr[i]));
        }

    }

    if (Number(brown3.textContent) > 0) {
        for (let i = 0; i < Number(brown3.textContent); i++) {
            fullStackArr.push(brownArr.pop(brownArr[i]));         
        }
    }


    if (Number(green3.textContent) > 0) {
        for (let i = 0; i < Number(green3.textContent); i++) {
            fullStackArr.push(greenArr.pop(greenArr[i]));
        }
    }

    if (Number(blue2.textContent) > 0) {
        for (let i = 0; i < Number(blue2.textContent); i++) {
            fullStackArr.push(blueArr.pop(blueArr[i]));
        }
    }

    if (Number(brown2.textContent) > 0) {
        for (let i = 0; i < Number(brown2.textContent); i++) {
            fullStackArr.push(brownArr.pop(brownArr[i]));
        }
    }


    if (Number(green2.textContent) > 0) {
        for (let i = 0; i < Number(green2.textContent); i++) {
            fullStackArr.push(greenArr.pop(greenArr[i]));
        }
    }

    if (Number(blue1.textContent) > 0) {
        for (let i = 0; i < Number(blue1.textContent); i++) {
            fullStackArr.push(blueArr.pop(blueArr[i]));
        }
    }

    if (Number(brown1.textContent) > 0) {
        for (let i = 0; i < Number(brown1.textContent); i++) {
            fullStackArr.push(brownArr.pop(brownArr[i]));
        }
    }


    if (Number(green1.textContent) > 0) {
        for (let i = 0; i < Number(green1.textContent); i++) {
            fullStackArr.push(greenArr.pop(greenArr[i]));
        }
    }

    fullStackArr.reverse();

    let randomCol1 = fullStackArr.slice(0, stageSum1);
    let randomCol2 = fullStackArr.slice(stageSum1, (stageSum1 + stageSum2));
    let randomCol3 = fullStackArr.slice((stageSum1 + stageSum2), (stageSum1 + stageSum2 + stageSum3));

    randomCol1.sort(() => Math.random() - 0.5);    
    randomCol2.sort(() => Math.random() - 0.5); 
    randomCol3.sort(() => Math.random() - 0.5); 

    fullStackArr = randomCol1.concat(randomCol2,randomCol3);
}

export function diffLogic(diff) {
    activeDiff = Number(String(diff.className).split('diff-').join('').split(' active').join(''));
    randomStack();
    fullStack();
}
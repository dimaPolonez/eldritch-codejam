import { ancientLogic } from "./algorithm.js";
import { diffLogic } from "./algorithm.js";
import { fullStackArr } from "./algorithm.js";
import { greenArrCon } from "./algorithm.js";
import { brownArrCon } from "./algorithm.js";
import { blueArrCon } from "./algorithm.js";




const changeAnc12 = document.querySelector('.ancient-Cthulthu');
const changeAnc13 = document.querySelector('.ancient-ShubNiggurath');
const changeAnc14 = document.querySelector('.ancient-IogSothoth');
const changeAnc15 = document.querySelector('.ancient-Azathoth');
const hText = document.querySelector('.h-text');
const ancCont = document.querySelector('.ancients-container').style;

const diffCont = document.querySelector('.diff-container');
const cardCont = document.querySelector('.card-container');

const diff0 = document.querySelector('.diff-0');
const diff1 = document.querySelector('.diff-1');
const diff2 = document.querySelector('.diff-2');
const diff3 = document.querySelector('.diff-3');
const diff4 = document.querySelector('.diff-4');

const green1 = document.querySelector('.green-1');
const green2 = document.querySelector('.green-2');
const green3 = document.querySelector('.green-3');
const blue1 = document.querySelector('.blue-1');
const blue2 = document.querySelector('.blue-2');
const blue3 = document.querySelector('.blue-3');
const brown1 = document.querySelector('.red-1');
const brown2 = document.querySelector('.red-2');
const brown3 = document.querySelector('.red-3');

const cardFull = document.querySelector('.card-full');

const cardH1 = document.querySelector('.card-h-1').style;
const cardH2 = document.querySelector('.card-h-2').style;
const cardH3 = document.querySelector('.card-h-3').style;


let nowCard = null;




const buttonChange = document.querySelector('.button-change');

if (buttonChange.classList.contains('button-change-active') === true) {
    buttonChange.classList.remove('button-change-active');
}


export function changeButton(nameCard) {
    buttonChange.classList.add('button-change-active');
    changeAnc12.classList.remove('active');
    changeAnc13.classList.remove('active');
    changeAnc14.classList.remove('active');
    changeAnc15.classList.remove('active');
    nameCard.classList.add('active');

    function popupDiff() {
        ancientLogic(nameCard);
        changeAnc12.style.display = 'none';
        changeAnc13.style.display = 'none';
        changeAnc14.style.display = 'none';
        changeAnc15.style.display = 'none';
        hText.textContent = "Выберите уровень сложности";
        nameCard.style.display = 'block';
        nameCard.classList.remove('active');
        nameCard.classList.add('active-post');
        diffCont.style.display = 'flex';
        buttonChange.style.visibility = 'hidden';
        ancCont.justifyContent = '';
    }

    buttonChange.addEventListener('click', popupDiff);
}

changeAnc12.addEventListener('click', () => {
    changeButton(changeAnc12);
});
changeAnc13.addEventListener('click', () => {
    changeButton(changeAnc13);
});
changeAnc14.addEventListener('click', () => {
    changeButton(changeAnc14);
});
changeAnc15.addEventListener('click', () => {
    changeButton(changeAnc15);
});



function changeDiff(difficult) {

    diff0.classList.remove('diff-active');
    diff1.classList.remove('diff-active');
    diff2.classList.remove('diff-active');
    diff3.classList.remove('diff-active');
    diff4.classList.remove('diff-active');
    difficult.classList.add('diff-active');
    buttonChange.style.visibility = 'visible';
    buttonChange.style.height = '110px';
    buttonChange.style.fontSize = '40px';
    buttonChange.textContent = 'Замешать колоду';

    function popupCard() {
        diffLogic(difficult);
        diffCont.style.display = 'none';
        buttonChange.style.visibility = 'hidden';
        buttonChange.style.height = '80px';
        cardCont.style.display = 'flex';
        cardFull.style.display = 'block';
        hText.textContent = "Чтобы вытащить карту, нажмите на колоду!";
    }
    buttonChange.addEventListener('click', popupCard);
}


diff0.addEventListener('click', () => {
    changeDiff(diff0);
});
diff1.addEventListener('click', () => {
    changeDiff(diff1);
});
diff2.addEventListener('click', () => {
    changeDiff(diff2);
});
diff3.addEventListener('click', () => {
    changeDiff(diff3);
});
diff4.addEventListener('click', () => {
    changeDiff(diff4);
});

if (cardFull.classList.contains('card-reverse') === true) {
    cardFull.classList.remove('card-reverse');
}


function notCard() {
    buttonChange.style.visibility = 'hidden';
    hText.textContent = "Игра завершена!";
    hText.style.marginTop = '350px';
    ancCont.display = 'none';
    cardCont.style.display = 'none';
    setTimeout(function () {
        location.reload();
    }, 1500);
    
}

function newCard() {

    buttonChange.style.visibility = 'visible';
    buttonChange.style.height = '80px';
    buttonChange.textContent = 'Играть ещё раз';
    buttonChange.addEventListener('click', () => {
        notCard();
    });

    if (fullStackArr.length === 0) {
        notCard();
    }

    cardFull.style.backgroundImage = fullStackArr[0];
    nowCard = cardFull.style.backgroundImage;

    if ((Number(green1.textContent) > 0) && (greenArrCon.includes(fullStackArr[0]) === true)) {
        green1.textContent -= 1;
    } else if ((Number(brown1.textContent) > 0) && (brownArrCon.includes(fullStackArr[0]) === true)) {
        brown1.textContent -= 1;
    } else if ((Number(blue1.textContent) > 0) && (blueArrCon.includes(fullStackArr[0]) === true)) {
        blue1.textContent -= 1;
    } else if ((Number(green2.textContent) > 0) && (greenArrCon.includes(fullStackArr[0]) === true)) {
        cardH1.opacity = "0.6";
        cardH1.color = "gray";
        green2.textContent -= 1;
    } else if ((Number(brown2.textContent) > 0) && (brownArrCon.includes(fullStackArr[0]) === true)) {
        cardH1.opacity = "0.6";
        cardH1.color = "gray";
        brown2.textContent -= 1;
    } else if ((Number(blue2.textContent) > 0) && (blueArrCon.includes(fullStackArr[0]) === true)) {
        cardH1.opacity = "0.6";
        cardH1.color = "gray";
        blue2.textContent -= 1;
    } else if ((Number(green3.textContent) > 0) && (greenArrCon.includes(fullStackArr[0]) === true)) {
        cardH2.opacity = "0.6";
        cardH2.color = "gray";
        green3.textContent -= 1;
    } else if ((Number(brown3.textContent) > 0)  && (brownArrCon.includes(fullStackArr[0]) === true)) {
        cardH2.opacity = "0.6";
        cardH2.color = "gray";
        brown3.textContent -= 1;
    } else if ((Number(blue3.textContent) > 0) && (blueArrCon.includes(fullStackArr[0]) === true)) {
        cardH2.opacity = "0.6";
        cardH2.color = "gray";
        blue3.textContent -= 1;
    }

    fullStackArr.shift();

    if ((Number(brown3.textContent) === 0) && (Number(blue3.textContent) === 0)) {
        cardH3.opacity = "0.6";
        cardH3.color = "gray";
    }
}


cardFull.addEventListener('click', newCard);


window.addEventListener('mouseover', function (event) {
    if ((event.target !== cardFull)) {
        cardFull.style.backgroundImage = 'url(./assets/mythicCardBackground.png)';
    } else if (event.target === cardFull) {
        cardFull.style.backgroundImage = nowCard;
    }
});


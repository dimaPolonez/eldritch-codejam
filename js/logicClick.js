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

const cardFull = document.querySelector('.card-full');

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
    buttonChange.style.height = '130px';
    buttonChange.style.fontSize = '40px';
    buttonChange.textContent = 'Замешать колоду';

    function popupCard() {
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

let color = 'blue';
let num = 4;


function notCard() {
    hText.textContent = "Игра завершена!";
    hText.style.marginTop = '350px';
    ancCont.display = 'none';
    cardCont.style.display = 'none';
    buttonChange.style.visibility = 'visible';
    buttonChange.style.height = '80px';
    buttonChange.textContent = 'Играть ещё раз';
    buttonChange.addEventListener('click', () => {
        hText.textContent = "Игра завершена!";
        setTimeout(function () {
            location.reload();
        }, 100);
    });
}


function newCard() {
        cardFull.style.backgroundImage = `url(./assets/MythicCards/${color}/${color}${num}.png)`;
        num += 1;
        nowCard = cardFull.style.backgroundImage;
        if (num > 12) {
            notCard();
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
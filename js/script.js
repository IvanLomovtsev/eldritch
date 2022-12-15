import greenCardsData from '../data/mythicCards/green/index.js';
import brownCardsData from '../data/mythicCards/brown/index.js';
import blueCardsData from '../data/mythicCards/blue/index.js';

//древние
const azathoth = document.querySelector('.azathoth');
const cthulhu = document.querySelector('.cthulhu');
const iogSothoth = document.querySelector('.iogSothoth');
const shubNiggurath = document.querySelector('.shubNiggurath');
const mythicCardBackground = document.querySelector('.mythicCardBackground');
const currentCard = document.querySelector('.current-card');
//карточки мифов
const firstGreen = document.querySelector('.first>.green');
const firstBrown = document.querySelector('.first>.brown');
const firstBlue = document.querySelector('.first>.blue');
const secondGreen = document.querySelector('.second>.green');
const secondBrown = document.querySelector('.second>.brown');
const secondBlue = document.querySelector('.second>.blue');
const thirdGreen = document.querySelector('.third>.green');
const thirdBrown = document.querySelector('.third>.brown');
const thirdBlue = document.querySelector('.third>.blue');
//уровень сложности
const veryLight = document.querySelector('.very-light');
const light = document.querySelector('.light');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');
const veryHard = document.querySelector('.very-hard');
//замешать колоду
const mixUp = document.querySelector('.mix-up')

azathoth.addEventListener('click', ()=>{
    azathoth.style.scale = '1.2';
    azathoth.style.borderColor = 'red';
    azathoth.classList.remove('scale');
    cthulhu.classList.remove('scale');
    iogSothoth.classList.remove('scale');
    shubNiggurath.classList.remove('scale');
    veryLight.classList.add('scale');
    light.classList.add('scale');
    medium.classList.add('scale');
    hard.classList.add('scale');
    veryHard.classList.add('scale');
    cthulhu.disabled = true;
    iogSothoth.disabled = true;
    shubNiggurath.disabled = true;
    veryLight.disabled = false;
    light.disabled = false;
    medium.disabled = false;
    hard.disabled = false;
    veryHard.disabled = false;
    firstGreen.textContent = 1;
    firstBrown.textContent = 2;
    firstBlue.textContent = 1;
    secondGreen.textContent = 2;
    secondBrown.textContent = 3;
    secondBlue.textContent = 1;
    thirdGreen.textContent = 2;
    thirdBrown.textContent = 4;
    thirdBlue.textContent = 0;
})
cthulhu.addEventListener('click', ()=>{
    cthulhu.style.scale = '1.2';
    cthulhu.style.borderColor = 'red';
    azathoth.classList.remove('scale');
    cthulhu.classList.remove('scale');
    iogSothoth.classList.remove('scale');
    shubNiggurath.classList.remove('scale');
    veryLight.classList.add('scale');
    light.classList.add('scale');
    medium.classList.add('scale');
    hard.classList.add('scale');
    veryHard.classList.add('scale');
    azathoth.disabled = true;
    iogSothoth.disabled = true;
    shubNiggurath.disabled = true;
    veryLight.disabled = false;
    light.disabled = false;
    medium.disabled = false;
    hard.disabled = false;
    veryHard.disabled = false;
    firstGreen.textContent = 0;
    firstBrown.textContent = 2;
    firstBlue.textContent = 2;
    secondGreen.textContent = 1;
    secondBrown.textContent = 3;
    secondBlue.textContent = 0;
    thirdGreen.textContent = 3;
    thirdBrown.textContent = 4;
    thirdBlue.textContent = 0;
})
iogSothoth.addEventListener('click', ()=>{
    iogSothoth.style.scale = '1.2';
    iogSothoth.style.borderColor = 'red';
    azathoth.classList.remove('scale');
    cthulhu.classList.remove('scale');
    iogSothoth.classList.remove('scale');
    shubNiggurath.classList.remove('scale');
    veryLight.classList.add('scale');
    light.classList.add('scale');
    medium.classList.add('scale');
    hard.classList.add('scale');
    veryHard.classList.add('scale');
    cthulhu.disabled = true;
    azathoth.disabled = true;
    shubNiggurath.disabled = true;
    veryLight.disabled = false;
    light.disabled = false;
    medium.disabled = false;
    hard.disabled = false;
    veryHard.disabled = false;
    firstGreen.textContent = 0;
    firstBrown.textContent = 2;
    firstBlue.textContent = 1;
    secondGreen.textContent = 2;
    secondBrown.textContent = 3;
    secondBlue.textContent = 1;
    thirdGreen.textContent = 3;
    thirdBrown.textContent = 4;
    thirdBlue.textContent = 0;
})
shubNiggurath.addEventListener('click', ()=>{
    shubNiggurath.style.scale = '1.2';
    shubNiggurath.style.borderColor = 'red';
    azathoth.classList.remove('scale');
    cthulhu.classList.remove('scale');
    iogSothoth.classList.remove('scale');
    shubNiggurath.classList.remove('scale');
    veryLight.classList.add('scale');
    light.classList.add('scale');
    medium.classList.add('scale');
    hard.classList.add('scale');
    veryHard.classList.add('scale');
    cthulhu.disabled = true;
    iogSothoth.disabled = true;
    azathoth.disabled = true;
    veryLight.disabled = false;
    light.disabled = false;
    medium.disabled = false;
    hard.disabled = false;
    veryHard.disabled = false;
    firstGreen.textContent = 1;
    firstBrown.textContent = 2;
    firstBlue.textContent = 1;
    secondGreen.textContent = 3;
    secondBrown.textContent = 2;
    secondBlue.textContent = 1;
    thirdGreen.textContent = 2;
    thirdBrown.textContent = 4;
    thirdBlue.textContent = 0;
})
let stages;
veryLight.addEventListener('click', ()=>{
    veryLight.style.scale = '1.2';
    veryLight.style.backgroundColor = 'red';
    veryLight.classList.remove('scale');
    light.classList.remove('scale');
    medium.classList.remove('scale');
    hard.classList.remove('scale');
    veryHard.classList.remove('scale');
    light.disabled = true;
    medium.disabled = true;
    hard.disabled = true;
    veryHard.disabled = true;
    const level = 0;
    const numGreen = Number(firstGreen.innerHTML)+Number(secondGreen.innerHTML)+Number(thirdGreen.innerHTML);
    const numBrown = Number(firstBrown.innerHTML)+Number(secondBrown.innerHTML)+Number(thirdBrown.innerHTML);
    const numBlue = Number(firstBlue.innerHTML)+Number(secondBlue.innerHTML)+Number(thirdBlue.innerHTML);
    mixUp.disabled = false;
    mixUp.classList.add('scale');
    mixUp.addEventListener('click', ()=>{
        mixUp.style.scale = '1.2';
        mixUp.style.backgroundColor = 'red';
        mixUp.classList.remove('scale');
        document.querySelector('.hide-card').style.display = 'block';
        setCard(level, numGreen, numBrown,  numBlue);
    })
})
light.addEventListener('click', ()=>{
    light.style.scale = '1.2';
    light.style.backgroundColor = 'red';
    veryLight.classList.remove('scale');
    light.classList.remove('scale');
    medium.classList.remove('scale');
    hard.classList.remove('scale');
    veryHard.classList.remove('scale');
    veryLight.disabled = true;
    medium.disabled = true;
    hard.disabled = true;
    veryHard.disabled = true;
    const level = 1;
    const numGreen = Number(firstGreen.innerHTML)+Number(secondGreen.innerHTML)+Number(thirdGreen.innerHTML);
    const numBrown = Number(firstBrown.innerHTML)+Number(secondBrown.innerHTML)+Number(thirdBrown.innerHTML);
    const numBlue = Number(firstBlue.innerHTML)+Number(secondBlue.innerHTML)+Number(thirdBlue.innerHTML);
    mixUp.disabled = false;
    mixUp.classList.add('scale');
    mixUp.addEventListener('click', ()=>{
        mixUp.style.scale = '1.2';
        mixUp.style.backgroundColor = 'red';
        mixUp.classList.remove('scale');
        document.querySelector('.hide-card').style.display = 'block';
        setCard(level, numGreen, numBrown,  numBlue);
    })
})
medium.addEventListener('click', ()=>{
    medium.style.scale = '1.2';
    medium.style.backgroundColor = 'red';
    veryLight.classList.remove('scale');
    light.classList.remove('scale');
    medium.classList.remove('scale');
    hard.classList.remove('scale');
    veryHard.classList.remove('scale');
    light.disabled = true;
    veryLight.disabled = true;
    hard.disabled = true;
    veryHard.disabled = true;
    const level = 2;
    const numGreen = Number(firstGreen.innerHTML)+Number(secondGreen.innerHTML)+Number(thirdGreen.innerHTML);
    const numBrown = Number(firstBrown.innerHTML)+Number(secondBrown.innerHTML)+Number(thirdBrown.innerHTML);
    const numBlue = Number(firstBlue.innerHTML)+Number(secondBlue.innerHTML)+Number(thirdBlue.innerHTML);
    mixUp.disabled = false;
    mixUp.classList.add('scale');
    mixUp.addEventListener('click', ()=>{
        mixUp.style.scale = '1.2';
        mixUp.style.backgroundColor = 'red';
        mixUp.classList.remove('scale');
        document.querySelector('.hide-card').style.display = 'block';
        setCard(level, numGreen, numBrown,  numBlue);
    })
})
hard.addEventListener('click', ()=>{
    hard.style.scale = '1.2';
    hard.style.backgroundColor = 'red';
    veryLight.classList.remove('scale');
    light.classList.remove('scale');
    medium.classList.remove('scale');
    hard.classList.remove('scale');
    veryHard.classList.remove('scale');
    light.disabled = true;
    medium.disabled = true;
    veryLight.disabled = true;
    veryHard.disabled = true;
    const level = 3;
    const numGreen = Number(firstGreen.innerHTML)+Number(secondGreen.innerHTML)+Number(thirdGreen.innerHTML);
    const numBrown = Number(firstBrown.innerHTML)+Number(secondBrown.innerHTML)+Number(thirdBrown.innerHTML);
    const numBlue = Number(firstBlue.innerHTML)+Number(secondBlue.innerHTML)+Number(thirdBlue.innerHTML);
    mixUp.disabled = false;
    mixUp.classList.add('scale');
    mixUp.addEventListener('click', ()=>{
        mixUp.style.scale = '1.2';
        mixUp.style.backgroundColor = 'red';
        mixUp.classList.remove('scale');
        document.querySelector('.hide-card').style.display = 'block';
        setCard(level, numGreen, numBrown,  numBlue);
    })
})
veryHard.addEventListener('click', ()=>{
    veryHard.style.scale = '1.2';
    veryHard.style.backgroundColor = 'red';
    veryLight.classList.remove('scale');
    light.classList.remove('scale');
    medium.classList.remove('scale');
    hard.classList.remove('scale');
    veryHard.classList.remove('scale');
    light.disabled = true;
    medium.disabled = true;
    hard.disabled = true;
    veryLight.disabled = true;
    const level = 4;
    const numGreen = Number(firstGreen.innerHTML)+Number(secondGreen.innerHTML)+Number(thirdGreen.innerHTML);
    const numBrown = Number(firstBrown.innerHTML)+Number(secondBrown.innerHTML)+Number(thirdBrown.innerHTML);
    const numBlue = Number(firstBlue.innerHTML)+Number(secondBlue.innerHTML)+Number(thirdBlue.innerHTML);
    mixUp.disabled = false;
    mixUp.classList.add('scale');
    mixUp.addEventListener('click', ()=>{
        mixUp.style.scale = '1.2';
        mixUp.style.backgroundColor = 'red';
        mixUp.classList.remove('scale');
        document.querySelector('.hide-card').style.display = 'block';
        setCard(level, numGreen, numBrown,  numBlue);
    })
})

function setCard(level, numGreen, numBrown,  numBlue){
    if (level === 0){
        const greenCards = veryEasyLevel (greenCardsData, numGreen);
        const brownCards = veryEasyLevel (brownCardsData, numBrown);
        const blueCards = veryEasyLevel (blueCardsData, numBlue);
        stages = collectionStage(greenCards, brownCards, blueCards);
        console.log(stages);
    }
    if (level === 1){
        const greenCards = easyLevel (greenCardsData, numGreen);
        const brownCards = easyLevel (brownCardsData, numBrown);
        const blueCards = easyLevel (blueCardsData, numBlue);
        stages = collectionStage(greenCards, brownCards, blueCards);
        console.log(stages);
    }
    if (level === 2){
        const greenCards = mediumLevel (greenCardsData, numGreen);
        const brownCards = mediumLevel (brownCardsData, numBrown);
        const blueCards = mediumLevel (blueCardsData, numBlue);
        stages = collectionStage(greenCards, brownCards, blueCards);
        console.log(stages);
    }
    if (level === 3){
        const greenCards = hardLevel (greenCardsData, numGreen);
        const brownCards = hardLevel (brownCardsData, numBrown);
        const blueCards = hardLevel (blueCardsData, numBlue);
        stages = collectionStage(greenCards, brownCards, blueCards);
        console.log(stages);
    }
    if (level === 4){
        const greenCards = veryHardLevel (greenCardsData, numGreen);
        const brownCards = veryHardLevel (brownCardsData, numBrown);
        const blueCards = veryHardLevel (blueCardsData, numBlue);
        stages = collectionStage(greenCards, brownCards, blueCards);
        console.log(stages);
    }
}
function veryEasyLevel (colorCardsData, num){
    const colorEasyCards = [];
    colorCardsData.forEach(card=>{
        if(card.difficulty === 'easy'){
            colorEasyCards.push(card);
        }
    })
    if (colorEasyCards.length < num){
        const colorNormalCards = [];
        colorCardsData.forEach(card=>{
            if(card.difficulty === 'normal'){
                colorNormalCards.push(card);
            }
        })
        colorNormalCards.sort(function(){
            return Math.random() - 0.5;
        });
        return colorEasyCards.concat(colorNormalCards.slice(0, num-colorEasyCards.length));
    }
    else {
        colorEasyCards.sort(function(){
            return Math.random() - 0.5;
        });
        return colorEasyCards.slice(0, num);
    }
}
function easyLevel (colorCardsData, num){
    const colorEasyNormalCards = [];
    colorCardsData.forEach(card=>{
        if(card.difficulty !== 'hard'){
            colorEasyNormalCards.push(card);
        }
    })
    colorEasyNormalCards.sort(function(){
        return Math.random() - 0.5;
    });
    return colorEasyNormalCards.slice(0, num);
}
function mediumLevel (colorCardsData, num){
    colorCardsData.sort(function(){
        return Math.random() - 0.5;
    });
    return colorCardsData.slice(0, num);
}
function hardLevel (colorCardsData, num){
    const colorNormalHardCards = [];
    colorCardsData.forEach(card=>{
        if(card.difficulty !== 'easy'){
            colorNormalHardCards.push(card);
        }
    })
    colorNormalHardCards.sort(function(){
        return Math.random() - 0.5;
    });
    return colorNormalHardCards.slice(0, num);
}
function veryHardLevel (colorCardsData, num){
    const colorHardCards = [];
    colorCardsData.forEach(card=>{
        if(card.difficulty === 'hard'){
            colorHardCards.push(card);
        }
    })
    if (colorHardCards.length < num){
        const colorNormalCards = [];
        colorCardsData.forEach(card=>{
            if(card.difficulty === 'normal'){
                colorNormalCards.push(card);
            }
        })
        colorNormalCards.sort(function(){
            return Math.random() - 0.5;
        });
        return colorHardCards.concat(colorNormalCards.slice(0, num-colorHardCards.length));
    }
    else {
        colorHardCards.sort(function(){
            return Math.random() - 0.5;
        });
        return colorHardCards.slice(0, num);
    }
}


function collectionStage(greenCards, brownCards, blueCards){
    const firstStage = greenCards.slice(0, Number(firstGreen.innerHTML)).concat(brownCards.slice(0, Number(firstBrown.innerHTML)), blueCards.slice(0, Number(firstBlue.innerHTML)));
    const secondStage = greenCards.slice(Number(firstGreen.innerHTML), Number(firstGreen.innerHTML)+Number(secondGreen.innerHTML)).concat(brownCards.slice(Number(firstBrown.innerHTML), Number(firstBrown.innerHTML)+Number(secondBrown.innerHTML)), blueCards.slice(Number(firstBlue.innerHTML), Number(firstBlue.innerHTML)+Number(secondBlue.innerHTML)));
    const thirdStage = greenCards.slice(Number(firstGreen.innerHTML)+Number(secondGreen.innerHTML)).concat(brownCards.slice(Number(firstBrown.innerHTML)+Number(secondBrown.innerHTML)), blueCards.slice(Number(firstBlue.innerHTML)+Number(secondBlue.innerHTML)));
    firstStage.sort(function(){
        return Math.random() - 0.5;
    });
    secondStage.sort(function(){
        return Math.random() - 0.5;
    });
    thirdStage.sort(function(){
        return Math.random() - 0.5;
    });
    return firstStage.concat(secondStage, thirdStage);
}
mythicCardBackground.addEventListener ('click', ()=>{
    const droppedCard = stages.shift();
    currentCard.style.background = "url("+droppedCard.cardFace+")";
    currentCard.style.backgroundSize = "100%";
    if (Number(firstGreen.innerHTML)>0 && droppedCard.color === 'green'){
        firstGreen.textContent = Number(firstGreen.innerHTML)-1; 
    }
    else if (Number(secondGreen.innerHTML)>0 && Number(firstGreen.innerHTML)===0 && droppedCard.color === 'green'){
        secondGreen.textContent = Number(secondGreen.innerHTML)-1; 
    }
    else if (Number(thirdGreen.innerHTML)>0 && Number(secondGreen.innerHTML)===0 && Number(firstGreen.innerHTML)===0 && droppedCard.color === 'green'){
        thirdGreen.textContent = Number(thirdGreen.innerHTML)-1; 
    }
    else if (Number(firstBrown.innerHTML)>0 && droppedCard.color === 'brown'){
        firstBrown.textContent = Number(firstBrown.innerHTML)-1; 
    }
    else if (Number(secondBrown.innerHTML)>0 && Number(firstBrown.innerHTML)===0 && droppedCard.color === 'brown'){
        secondBrown.textContent = Number(secondBrown.innerHTML)-1; 
    }
    else if (Number(thirdBrown.innerHTML)>0 && Number(secondBrown.innerHTML)===0 && Number(firstBrown.innerHTML)===0 && droppedCard.color === 'brown'){
        thirdBrown.textContent = Number(thirdBrown.innerHTML)-1; 
    }
    else if (Number(firstBlue.innerHTML)>0 && droppedCard.color === 'blue'){
        firstBlue.textContent = Number(firstBlue.innerHTML)-1; 
    }
    else if (Number(secondBlue.innerHTML)>0 && Number(firstBlue.innerHTML)===0 && droppedCard.color === 'blue'){
        secondBlue.textContent = Number(secondBlue.innerHTML)-1; 
    }
    else if (Number(thirdBlue.innerHTML)>0 && Number(secondBlue.innerHTML)===0 && Number(firstBlue.innerHTML)===0 && droppedCard.color === 'blue'){
        thirdBlue.textContent = Number(thirdBlue.innerHTML)-1; 
    }
    if (stages.length === 0){
        mythicCardBackground.style.display = 'none';
    }
})
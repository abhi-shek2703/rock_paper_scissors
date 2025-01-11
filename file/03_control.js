let score = JSON.parse(localStorage.getItem('score')) || {
    won : 0,
    loss : 0,
    tie : 0
}


scores();

function moveSelector(selector) {
    const emptyValue = RandValue();
    compaValue = ''
    if (selector === 'Rock') {
        if (emptyValue == 'Rock') {
            compaValue = 'Draw'
        } else if (emptyValue == 'Paper') {
            compaValue = 'Lose'
        } else if (emptyValue == 'Scissors') {
            compaValue = 'Won'
        }
    }
    else if (selector === 'Paper' ) {
        if (emptyValue == 'Rock') {
            compaValue = 'Won'
        } else if (emptyValue == 'Paper') {
            compaValue = 'Draw'
        } else if (emptyValue == 'Scissors') {
            compaValue = 'Lose'
        }
    }
    else if (selector === 'Scissors') {
        if (emptyValue == 'Rock') {
            compaValue = 'Lose'
        } else if (emptyValue == 'Paper') {
            compaValue = 'Won'
        } else if (emptyValue == 'Scissors') {
            compaValue = 'Draw'}
    }

    if (compaValue === 'Won') {
        score.won += 1
    } else if (compaValue === 'Lose') {
        score.loss += 1
    } else if (compaValue === 'Draw') {
        score.tie += 1
    }

    localStorage.setItem('score', JSON.stringify(score));
    
    scores();
    

    document.querySelector('.js-result').innerHTML = `${compaValue}`;

    document.querySelector('.js-result').innerHTML = `you 
        <img src="/img/${selector}.png" class = "move-buttton">
        <img src="/img/${emptyValue}.png" class = "move-buttton">
        computer
    </p>`;

    }
    
function scores () {
    document.querySelector('.js-scores').innerHTML = `Won ${score.won}, Loses ${score.loss}, Draw ${score.tie}`;    
}

function RandValue() {
    const randChoices = Math.random();
    let emptyValue = ''
    if (randChoices >=0 && randChoices <=1/3) {
        emptyValue = 'Rock';
    } else if (randChoices >= 1/3 && randChoices <= 2/3) {
        emptyValue = 'Scissors';
    } else if (randChoices >= 2/3 && randChoices <= 1) {
        emptyValue = 'Paper';
    }
    return emptyValue;
}
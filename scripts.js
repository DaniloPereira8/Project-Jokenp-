
const result = document.querySelector('.result')
const myScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const resultGif = document.querySelector('.result-gif')
const machineChoiceElement = document.getElementById('machine-choice')

let humanScoreNumber = 0
let machineScoreNumber = 0

const humanPlayer = (humanChoice) => {
    const machineChoice = machinePlayer();
    playTheGame(humanChoice, machineChoice);
    showMachineChoice(machineChoice)

};

const machinePlayer = () => {
    const choice = ['rock', 'paper', 'scissors']
    const mathNumber = Math.floor(Math.random() * 3)

    return choice[mathNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano:' + human + 'Maquina:' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate! 😐'
        resultGif.src = "https://tenor.com/pt-BR/view/double-exclamation-open-mouth-exclamation-question-mark-hushed-astounded-gif-10799688381009226913.gif"

    } else if ((human === 'paper' && machine === 'rock')
        || (human === 'rock' && machine === 'scissors')
        || (human === 'scissors' && machine === 'paper')
    ) {

        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você venceu! 🎉'
        resultGif.src = "https://tenor.com/pt-BR/view/digital-photo-pretentious-v-victory-hand-camera-gif-628012822116094397.gif"

    } else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu para o robô! 🤖'
        resultGif.src = "https://tenor.com/pt-BR/view/cute-crying-emotional-tears-brokenhearted-gif-15450189.gif"
    }
}

const showMachineChoice = (machineChoice) => {
    machineChoiceElement.textContent = machineChoice;
  };
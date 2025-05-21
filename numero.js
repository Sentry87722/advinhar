const numerosecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function jogar() {
    const palpite = parseInt(prompt("Adivinhe um número entre 1 e 100:"));
    tentativas++;

    if(isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Digite um nùmero válido entre 1 e 100.");
        jogar();

    } else if  (palpite < numerosecreto) {
        alert("Muito baixo! Tente novamente.");
        jogar();

    } else if  (palpite > numerosecreto) {
        alert("Muito alto! Tente novamente.");
        jogar();

    } else{
        alert(`Parabéns! Você deixou de ser burro ${tentativas} tentativas!`);
    }
    }
jogar();
let jogos = ['Brawl Stars', 'Candy Crush', 'Stumble Guys'];
let jogoFav = 'Candy Crush';
let posicao = true;

for (let i = 0; i < jogos.length; i++) {
    if (jogos[i] === jogoFav) {
        console.log(`${jogoFav} está em ${i + 1}° lugar no ranking 🏆`);
        posicao = true;
        break;
    } 
}
if (!posicao) {
    console.log(`${jogoFav} não está no ranking 😢`);
}

//Julia Miranda, 25/04
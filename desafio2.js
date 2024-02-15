


let resultado = calcularRank(88, 19);



function calcularRank(vitoria, derrota) {
    rank = vitoria - derrota;
    return rank
}

switch (true) {
    case resultado <= 10:
        estatus = 'Ferro';
        break;

    case resultado > 10 && resultado <= 20:
        estatus = 'Bronze';
        break;

    case resultado > 20 && resultado <= 50:
        estatus = 'Prata';
        break;

    case resultado > 50 && resultado <= 80:
        estatus = 'Ouro';
        break;

    case resultado > 80 && resultado <= 90:
        estatus = 'Diamante';
        break;

    case resultado > 90 && resultado <= 100:
        estatus = 'Lendário';
        break;

    default:
        estatus = 'Imortal';
        break;


}
console.log("O Herói tem um saldo de " + resultado + " vitórias e está no nível " + estatus)
  
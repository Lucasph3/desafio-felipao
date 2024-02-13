

let heroi = "Felipao";
let xp;
xp = 5000
let estatus;

switch (true) {
    case xp <= 1000:
        estatus = 'Ferro';
        break;

    case xp > 1000 && xp <= 2000:
        estatus = 'Bronze';
        break;

    case xp > 2000 && xp <= 5000:
        estatus = 'Prata';
        break;

    case xp > 5000 && xp <= 7000:
        estatus = 'Ouro';
        break;

    case xp > 7000 && xp <= 8000:
        estatus = 'Platina';
        break;

    case xp > 8000 && xp <= 9000:
        estatus = 'Ascendente';
        break;

    case xp > 9000 && xp <= 10000:
        estatus = 'Imortal';   
        break;

    default:
        estatus = 'Radiante';
        break;


}

console.log("O Herói de nome " + heroi + " está no nível de " + estatus)


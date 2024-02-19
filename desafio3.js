
class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    atacar() {
        let ataque;
        switch (this.tipo) {
          case 'mago':
            ataque = 'magia';
            break;
          case 'guerreiro':
            ataque = 'espada';
            break;
          case 'monge':
            ataque = 'artes marciais';
            break;
          case 'ninja':
            ataque = 'shuriken';
            break;
          default:
            ataque = 'usou um ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
   }
}


let player1 = new heroi('Lucas', 30, 'mago');
let player2 = new heroi('felipao', 30, 'ninja');

player1.atacar()
player2.atacar()



/**
 * Arquivo: geraNomePF.ts
 * Data: 30/10/2018
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let { sample } = require('underscore');
let nomesHomem = require('../dados/pessoa/nomes-homem');
let sobrenomes = require('../dados/pessoa/sobrenomes');

class GeraNomePF {

    geraPrimeiroNome() {
        let primeiroNome;
        let nomeDoMeio;
        primeiroNome = sample(nomesHomem).split(' ')[0];
        nomeDoMeio = sample(nomesHomem).split(' ')[0];
        var primeiroMeioNome = [primeiroNome, nomeDoMeio].join(' ');
        return primeiroMeioNome;
    }

    geraSobrenome() {
        let sobrenome;
        sobrenome = sample(sobrenomes).split(' ')[0];
        return sobrenome;
    }

    geraNomeCompleto() {
        var nomeCompleto;
        nomeCompleto = (this.geraPrimeiroNome() + " " + this.geraSobrenome());
        return nomeCompleto;

    }

    geraNomeContato() {
        var nomeCoontato;
        nomeCoontato = (this.geraPrimeiroNome() + " " + this.geraSobrenome());
        return nomeCoontato;

    }

    geraNomeContato2() {
        var nomeCoontato;
        nomeCoontato = (this.geraPrimeiroNome() + " " + this.geraSobrenome());
        return nomeCoontato;

    }
}
module.exports = GeraNomePF;
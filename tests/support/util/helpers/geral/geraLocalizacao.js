/**
 * Arquivo: geraLocalizacao.ts
 * Data: 13/11/2018
 * Author: Fernanda Ferreira
 */

let { sample } = require('underscore');
let logradouro = require('../dados/localizacao/logradouro');
let bairro = require('../dados/localizacao/bairro');
let complemento = require('../dados/localizacao/complemento');
let cidade = require('../dados/localizacao/cidade');
let estado = require('../dados/localizacao/estado');
const fs = require('fs');
let path = require('path');

class GeraLocalizacao {

    geraAleatorio() {
        var aleatorio = '0123456789';
        var sufixo = '';
        var tamanho = 3;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }

        return sufixo;
    }

    geraNumero() {
        var aleatorio = '0123456789';
        var sufixo = '';
        var tamanho = 3;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }
        return sufixo;
    }

    geraLogradouro() {
        let lograd;
        lograd = sample(logradouro).split(' ')[0];
        return lograd;
    }

    geraBairro() {
        let bairr;
        bairr = sample(bairro).split(' ')[0];
        return bairr;
    }
    geraCidade() {
        let cidadee;
        cidadee = sample(cidade).split(' ')[0];
        return cidadee;
    }
    geraEstado() {
        let estadoo;
        estadoo = sample(estado).split(' ')[0];
        return estadoo;
    }
    geraComplemento() {
        let comp;
        comp = sample(complemento).split(' ')[0];
        var comple = comp+" "+(this.geraAleatorio());
        return comple;
    }

    geraPontoReferencia() {
        let pontoRef;
        pontoRef = sample(complemento).split(' ')[0];
        var pontoRefe = "Próximo ao "+pontoRef+" "+(this.geraAleatorio());
        return pontoRefe;
    }
}
module.exports = GeraLocalizacao;
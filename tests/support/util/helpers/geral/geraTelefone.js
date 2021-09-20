/**
 * Arquivo: geraTelefone.ts
 * Data: 20/09/2021
 * Author: Lucas Barros
 */

const fs = require('fs');
let path = require('path');

class GeraTelefone {

    geraTelefone10() {
        var aleatorio = '0123456789';
        var telefone10;
        var sufixo = '';
        var tamanho = 8;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }
        telefone10 = "65" + sufixo;
        return telefone10;
    }
    geraTelefone11() {
        var aleatorio = '0123456789';
        var telefone11;
        var sufixo = '';
        var tamanho = 8;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }
        telefone11 = "659" + sufixo;
        return telefone11;
    }
}
module.exports = GeraTelefone;
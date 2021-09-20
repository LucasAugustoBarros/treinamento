/**
 * Arquivo: geraCpfCnpj.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');
let cpfs, cnpjs;

class GeraCpfCnpj {


    geraRandon(n) {
        var ranNum = Math.round(Math.random() * n);
        return ranNum;
    }

    mod(dividendo, divisor) {
        return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
    }

    cpf() {
        var n = Math.round(Math.random() * 9 + 1); // Gera nr entre 9 e 1
        var n1 = this.geraRandon(n);
        var n2 = this.geraRandon(n);
        var n3 = this.geraRandon(n);
        var n4 = this.geraRandon(n);
        var n5 = this.geraRandon(n);
        var n6 = this.geraRandon(n);
        var n7 = this.geraRandon(n);
        var n8 = this.geraRandon(n);
        var n9 = this.geraRandon(n);
        var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
        d1 = 11 - (this.mod(d1, 11));
        if (d1 >= 10) d1 = 0;
        var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
        d2 = 11 - (this.mod(d2, 11));
        if (d2 >= 10) d2 = 0;

        cpfs = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
        return cpfs;
    }

    cnpj() {
        var n = Math.round(Math.random() * 9 + 1); // Gera nr entre 9 e 1
        var n1 = this.geraRandon(n);
        var n2 = this.geraRandon(n);
        var n3 = this.geraRandon(n);
        var n4 = this.geraRandon(n);
        var n5 = this.geraRandon(n);
        var n6 = this.geraRandon(n);
        var n7 = this.geraRandon(n);
        var n8 = this.geraRandon(n);
        var n9 = 0;//this.geraRandon(n);
        var n10 = 0;//this.geraRandon(n);
        var n11 = 0;//this.geraRandon(n);	
        var n12 = 1;//this.geraRandon(n);		
        var d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
        d1 = 11 - (this.mod(d1, 11));
        if (d1 >= 10) d1 = 0;
        var d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
        d2 = 11 - (this.mod(d2, 11));
        if (d2 >= 10) d2 = 0;

        return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + d1 + d2;
        return cnpjs;
    }

    formatarCPF(v) {
        v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
        return v;
    }

    formatarCNPJ(v) {
        v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/, "$1.$2"); //Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2"); //Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/(\d{4})(\d)/, "$1-$2"); //Coloca um hífen depois do bloco de quatro dígitos
        return v;
    }
}
module.exports = GeraCpfCnpj;
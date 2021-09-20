/**
 * Arquivo: geraNomePJ.ts
 * Data: 06/11/2018
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let { sample } = require('underscore');
let tipo = require('../../helpers/dados/empresa/tipo-empresa');
let sobrenomes = require('../../helpers/dados/empresa/sobrenome-empresa');

let nomeCompletoUnidadeVeicularGravado, data, toFile, stringFile, nomeFantasaTransportadoraGravado, nomeCompletoTransportadoraPJGravado;

class GeraNomePJ {

    geraNome() {
        let primeiroSobrenome;
        let nomeDoMeio;
        primeiroSobrenome = sample(sobrenomes).split(' ')[0];
        nomeDoMeio = sample(sobrenomes).split(' ')[0];
        var primeiroMeioSobrenome = [primeiroSobrenome, nomeDoMeio].join(' & ');
        return primeiroMeioSobrenome;
    }

    geraTipoEmpresa() {
        let tipoEmpresa;
        tipoEmpresa = sample(tipo).split(' ')[0];
        return tipoEmpresa;
    }

    geraNomeCompletoPJ() {
        var nomeCompleto;
        nomeCompleto = (this.geraNome() + " " + this.geraTipoEmpresa());
        return nomeCompleto;
    }

    geraNomeCompletoUnidadeVeicularPJ() {
        var nomeCompleto;
        nomeCompleto = (GeraNomePJ.geraNome() + " " + GeraNomePJ.geraTipoEmpresa());

        nomeCompletoUnidadeVeicularGravado = {
            nomeCompletoUnidadeVeicularG: nomeCompleto
        };

        data = JSON.stringify(nomeCompletoUnidadeVeicularGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/nomePJUnidadeVeicular.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return nomeCompleto;
    }

    geraNomeCompletoTransportadoraPJ() {
        var nomeCompleto;
        nomeCompleto = ("TRANSP " + GeraNomePJ.geraNome() + " " + GeraNomePJ.geraTipoEmpresa());

        nomeCompletoTransportadoraPJGravado = {
            nomeCompletoTransportadoraPJG: nomeCompleto
        };

        data = JSON.stringify(nomeCompletoTransportadoraPJGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/nomeCompletoTransportadoraPJ.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return nomeCompleto;
    }

    geraNomeFantasia(nomeCompletoPJ) {

        var nomePJ = nomeCompletoPJ; // o nome completo
        var partes = nomePJ.split(' '); // dividir em partes
        var tipo_empresa = partes.pop(); // remover o tipo empresa com pop e guardar numa variavel
        var primeiros_nomes = partes.join(' '); // criar uma string separada por espaços(' ') com as partes restantes
        var nomeFantasia = `${primeiros_nomes}`; //resultado

        nomeFantasaTransportadoraGravado = {
            nomeFantasaTransportadoraG: nomeFantasia
        };

        data = JSON.stringify(nomeFantasaTransportadoraGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/nomePJFantasiaTransportadora.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return nomeFantasia;
    }
}
module.exports = GeraNomePJ;
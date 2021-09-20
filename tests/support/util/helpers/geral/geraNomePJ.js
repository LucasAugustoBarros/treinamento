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
        return nomeCompleto;
    }

    geraNomeCompletoTransportadoraPJ() {
        var nomeCompleto;
        nomeCompleto = ("TRANSP " + GeraNomePJ.geraNome() + " " + GeraNomePJ.geraTipoEmpresa());
        return nomeCompleto;
    }

    geraNomeFantasia() {
        let nomeFantasia;
        nomeFantasia = sample(sobrenomes).split(' ')[0];
        return nomeFantasia;
    }
}
module.exports = GeraNomePJ;
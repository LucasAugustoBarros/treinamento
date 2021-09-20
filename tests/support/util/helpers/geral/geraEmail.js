/**
 * Arquivo: geraEmail.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

class GeraEmail {
    
    rand() {
        var x = Math.floor((Math.random() * 100) + 1);
        return x;
    }

    emailEmbarcador() {
        var emailEmb = "embarcador.at" + this.rand() + this.rand() + "@gmail.com";
        return emailEmb;
    }

    emailEmbarcadorTransp() {
        var emailEmbTransp = "embarcador.transportador.at" + this.rand() + this.rand() + "@gmail.com";
        return emailEmbTransp;
    }

    emailTransportador() {
        var emailTransp = "transportador.at" + this.rand() + this.rand() + "@gmail.com";
        return emailTransp;
    }

    emailTenant() {
        var emailTenant = "tenant.at" + this.rand() + this.rand() + "@gmail.com";
        return emailTenant;
    }

    emailParceiro() {
        var emailParceiro = "parceiro.at" + this.rand() + this.rand() + "@gmail.com";
        return emailParceiro;
    }

}
module.exports = GeraEmail;
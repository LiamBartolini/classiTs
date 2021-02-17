var contatoreTesta = 1;
var contatoreCroce = 1;
var contatore1 = 1;
var contatore2 = 1;
var contatore3 = 1;
var contatore4 = 1;
var contatore5 = 1;
var contatore6 = 1;

abstract class Sorte {
    abstract lanciaOggetto(value:string) : number;
}

class Dado extends Sorte {
    oggetto : string = 'dado';
    lanciaOggetto() : number {
        if (this.oggetto == 'dado') {
            return Math.floor(1 + Math.random() * 6); // genera un numero compreso tra 1 e 6 
        }
    }
}

class Moneta extends Sorte {
    oggetto : string = 'moneta';
    lanciaOggetto() : number {
        if (this.oggetto == 'moneta') {
            return Math.random() < 0.5 ? 0 : 1; // genera un numero compreso tra 0 e 1
        }
    }
}

document.getElementById("btnLancia").addEventListener("click", function () {
    var e = (document.getElementById("selezione")) as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    var selezionato = opt.value;
    console.log(selezionato);

    if (selezionato == 'dado') {
        var lancioDado :Dado = new Dado();
        switch(lancioDado.lanciaOggetto()) {
            case 1:
                document.getElementById("badge-1").innerHTML = contatore1.toString();
                contatore1++;
                break;
            case 2:
                document.getElementById("badge-2").innerHTML = contatore2.toString();
                contatore2++;
                break;
            case 3:
                document.getElementById("badge-3").innerHTML = contatore3.toString();
                contatore3++;
                break;
            case 4:
                document.getElementById("badge-4").innerHTML = contatore4.toString();
                contatore4++;
                break;
            case 5:
                document.getElementById("badge-5").innerHTML = contatore5.toString();
                contatore5++;
                break;
            case 6:
                document.getElementById("badge-6").innerHTML = contatore6.toString();
                contatore6++;
                break;
            default:
                break;
        }
    } else {
        var lanciaMoneta : Moneta = new Moneta();
        if (lanciaMoneta.lanciaOggetto() == 0) {
            document.getElementById("badge-testa").innerHTML = contatoreTesta.toString();
            contatoreTesta++;
        } else {
            document.getElementById("badge-croce").innerHTML = contatoreCroce.toString();
            contatoreCroce++;
        }
    }
});
/* Miguel Mendez || Github @yorkfx */
// Curso Principiante en Programación G6 -  Alura ONE

function encriptar(){
    textoDescomponer = "";
    if(document.getElementById("areaTexto").value == ''){
        // console.log("No hay nada que encriptar");
        document.querySelector("h2").style.display = "block";
        document.querySelector("h4").style.display = "block";
        // alert("Ingresa algun texto a encriptar");
        return true;
    }
    else{
        // console.log(`${textoDescomponer}`);
        // var textoEncriptado = CryptoJS.AES.encrypt("Message", textoDescomponer);
        // console.log(`${textoEncriptado}`);
        document.querySelector("#btnDesencriptar").removeAttribute('disabled');

        document.querySelector("img").style.display = "none";
        document.querySelector("h2").style.display = "none";
        document.querySelector("h4").style.display = "none";

        var cadenaEncriptar = document.getElementById('areaTexto').value;
        var mapObj = {
            a:"ai",
            e:"enter",
            i:"imes",
            o:"ober",
            u:"ufat"
        };
        cadenaEncriptar = cadenaEncriptar.replace(/a|e|i|o|u/g, function(matched){
            return mapObj[matched];
        });

        textoEncriptado = cadenaEncriptar;

        // textoEncriptado = document.getElementById('areaTexto').value.replace(/[a]/g, "ai").replace(/[e]/g, "enter").replace(/[i]/g, "ies").replace(/[o]/g, "ober").replace(/[u]/g, "ufat");
        // console.log(textoEncriptado);
        document.getElementById("textoEncriptado").innerHTML = textoEncriptado;
        document.getElementById("areaDesencriptado").style.display = "block";
        
        return false;   
    }
}


function desencriptar(){
    textoDescomponer = "";

    if(document.getElementById("areaTexto").value == ''){
        // console.log("No hay nada que encriptar");
        alert("Ingresa algun texto a desencriptar");
        return true;
    }
    else{
        // console.log(`${textoDescomponer}`);
        document.querySelector("img").style.display = "none";
        document.querySelector("h2").style.display = "none";
        document.querySelector("h4").style.display = "none";
        textoEncriptado = document.getElementById('areaTexto').value.replaceAll("ai",'a').replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
        // console.log(textoEncriptado);
        document.getElementById("textoEncriptado").innerHTML = textoEncriptado;
        document.getElementById("areaDesencriptado").style.display = "block";
        
        return false;   
    }
}

function copiarTexto() {
    var cajaTextoEncriptado = document.getElementById('textoEncriptado');

    cajaTextoEncriptado.contenteditable = true;
    cajaTextoEncriptado.focus();
    document.execCommand('selectAll');
    document.execCommand("copy");
    cajaTextoEncriptado.contenteditable = false;
    alert("Texto copiado al portapapeles");


}
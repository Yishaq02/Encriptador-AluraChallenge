let tencriptado = "";
let tdesencriptado = "";

// function textofinal(text){
//     var e = document.getElementById("textfinal");
//     e.value(text);
// }

function encriptar(text){
    
    console.log(text);
    text = text.replaceAll("e", 'enter');
    text = text.replaceAll("i", 'imes');
    text = text.replaceAll("a", 'ai');
    text = text.replaceAll("o", 'ober');
    text = text.replaceAll("u", 'ufat');   
    console.log(text);
    tencriptado = text;
    // textofinal(tencriptado);

    return tencriptado;
}

function desencriptar(text){
    if(text != ""){
        console.log(text);
        text = text.replaceAll("enter", 'e');
        text = text.replaceAll("imes", 'i');
        text = text.replaceAll("ai", 'a');
        text = text.replaceAll("ober", 'o');
        text = text.replaceAll("ufat", 'u');   
        tdesencriptado = text;
        // textofinal(tdesencriptado);
        return console.log(text);  
        
    }else{
        return console.log('Ingresa un mensaje');
    }
}

function filtro(text) {
    let exeption = [ ":",",","."];
    let i = 0;
    while(i < text.length){
        let t = text.charAt(i);
        if(t === t.toUpperCase() & exeption.includes(t)){
            // console.log(`aqui: ${t}`);
            console.log("No pongas letras mayusculas ni palabras con acento");
            limpiarCaja();
            break;
        }else{
            if(t == "á" || t == "é" || t == "í" || t == "ó" || t == "ú" || t == "à" || t == "è" || t == "ò"){
                // console.log('No aqui');
                console.log("No pongas letras mayusculas ni palabras con acento");
                limpiarCaja();
                break;
            }
        }
        i++;
    }    
    if(i == text.length){
        limpiarCaja();
        console.log("La palabra esta bien");
        encriptar(text);
        return true;
    }      
}

function limpiarCaja() {
    document.querySelector('#texto').value = '';
}


// switch(text.charAt(i)){
//     case "e":
//         console.log("Test 1:");
//         text.replace("e","enter");
//         break;
//     case "i":
//         console.log("Test 2:");
//         text.replace("i","imes");
//         break;
//     case "a":
//         console.log("Test 3:");
//         text.replace("a","ai");
//         break;
//     case "o":
//         console.log("Test 4:");
//         text.replace("o","ober");
//         break;
//     case "u":
//         console.log("Test 5:");
//         text.replace("u","ufat")
//         break;
//     default:
//     console.log("No se recibio nada");
// }
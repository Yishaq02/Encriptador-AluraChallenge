function encriptar(text){
    //intento por usar regex. Un fracaso de momento
    let regex = /e/i;
    console.log(text.replace(regex, 'enter'));
    console.log("Test 0:");
    regex = /i/i;
    console.log(text.replace(regex, 'imes'));
    console.log("Test 0:");
    console.log(text);

    // let i = 0;
    // while(i < text.length){
    //     switch(text.charAt(i)){
    //         case "e":
    //             console.log("Test 1:");
    //             text.replace("e","enter");
    //             break;
    //         case "i":
    //             console.log("Test 2:");
    //             text.replace("i","imes");
    //             break;
    //         case "a":
    //             console.log("Test 3:");
    //             text.replace("a","ai");
    //             break;
    //         case "o":
    //             console.log("Test 4:");
    //             text.replace("o","ober");
    //             break;
    //         case "u":
    //             console.log("Test 5:");
    //             text.replace("u","ufat")
    //             break;
    //         default:
    //         console.log("No se recibio nada");
    //     }
    //     console.log("Test 6:");
    // i++;
    // }
    // console.log("Test 7:");
    
    // console.log(text);

}

function filtro(text) {
    let i = 0;
    while(i < text.length){
        let t = text.charAt(i);
        if(t === t.toUpperCase()){
            console.log("No pongas letras mayusculas ni palabras con acento");
            limpiarCaja();
            break;
        }else{
            if(t == "á" || t == "é" || t == "í" || t == "ó" || t == "ú" || t == "à" || t == "è" || t == "ò"){
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
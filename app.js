let tencriptado = "";
let tdesencriptado = "";

// navigator.clipboard.writeText("Este es el texto a copiar")
// .then(() => {
//   console.log('Contenido copiado al portapapeles');
//   /* Resuelto - texto copiado al portapapeles con éxito */
// },() => {
//   console.error('Error al copiar');
//   /* Rechazado - fallo al copiar el texto al portapapeles */
// });

// async function copiarContenido() {
//     try {
//       await navigator.clipboard.writeText('Este es el texto a copiar');
//       console.log('Contenido copiado al portapapeles');
//       /* Resuelto - texto copiado al portapapeles con éxito */
//     } catch (err) {
//       console.error('Error al copiar: ', err);
//       /* Rechazado - fallo al copiar el texto al portapapeles */
//     }
//   }

let texto = document.getElementById('texto').innerHTML;
  const copiarContenido = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }

function textofinal(text){
    // let img = document.getElementById('img.imgMuñeco');
    // img.remove(); 

    // // let img = document.querySelector('img.imgMuñeco').remove;
    // // img.remove;
    let h2 = document.querySelector('h2.textfinal');
    h2.innerHTML = "";

    let header = document.querySelector('p.textfinal');
    header.innerHTML = text;
    return;
}

function encriptar(text){
    
    console.log(text);
    text = text.replaceAll("e", 'enter');
    text = text.replaceAll("i", 'imes');
    text = text.replaceAll("a", 'ai');
    text = text.replaceAll("o", 'ober');
    text = text.replaceAll("u", 'ufat');   
    console.log(text);
    tencriptado = text;
    textofinal(tencriptado);

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
        textofinal(tdesencriptado);
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
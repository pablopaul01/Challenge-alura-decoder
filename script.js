let munieco = document.querySelector(".contenedormunieco");
let contenedor = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".texto-resultado");
let cajatexto = document.querySelector(".cajatexto");


function encriptar(){
    if(cajatexto.value === ""){
        const toastLiveExample = document.getElementById('errorToast')
        const toast = new bootstrap.Toast(toastLiveExample)
        document.getElementById('text-error').textContent = "Debe ingresa un texto para encriptar";
        toast.show()
    }
    else
    {
        ocultar();
        resultado.textContent = encriptarTexto(cajatexto.value);
    }
}

function desencriptar(){
    if(resultado.textContent === ""){
        const toastLiveExample = document.getElementById('errorToast')
        const toast = new bootstrap.Toast(toastLiveExample)
        document.getElementById('text-error').textContent = "No hay contenido para desencriptar";
        toast.show()
    }
    else
    {
        ocultar();
        let textoDesencriptado = desencriptarTexto(resultado.textContent);
        resultado.textContent = textoDesencriptado;
    }
}


function ocultar(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar"); 

btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    if(contenido === ""){
        const toastLiveExample = document.getElementById('errorToast')
        const toast = new bootstrap.Toast(toastLiveExample)
        document.getElementById('text-error').textContent = "No hay contenido para copiar";
        toast.show()

    }
    else
    {
        navigator.clipboard.writeText(contenido); 
        const toastLiveExample = document.getElementById('successToast')
        const toast = new bootstrap.Toast(toastLiveExample)
        document.getElementById('text-success').textContent += "Texto copiado correctamente!";
        toast.show()

    }
});

function reset (){
            if (munieco.classList.contains("ocultar") && contenedor.classList.contains("ocultar")) {
            munieco.classList.remove("ocultar");
            contenedor.classList.remove("ocultar");
            resultado.textContent = "";
            cajatexto.value = "";
        }
}

cajatexto.addEventListener("input", (e) => {
    if (cajatexto.value === "" && munieco.classList.contains("ocultar") && contenedor.classList.contains("ocultar")) {
        munieco.classList.remove("ocultar");
        contenedor.classList.remove("ocultar");
        resultado.textContent = "";
    }
}
)
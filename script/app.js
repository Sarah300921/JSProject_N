function textAsign(element, text) {
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = text;
}

function inputData() {
    //let datoNumerico = parseInt(document.getElementById('valorUno').value);
    let datoCadena = document.getElementById('valorUno').value;

//    console.log(datoNumerico);
//    console.log(typeof(datoNumerico));
    console.log(datoCadena);
    console.log(typeof(datoCadena));

}

textAsign('h1', 'Proyecto 1');
textAsign('p','Parrafo muestra');

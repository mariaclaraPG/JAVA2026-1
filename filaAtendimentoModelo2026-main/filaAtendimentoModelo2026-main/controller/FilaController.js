const minhaFila = new Fila(5);

function adicionarElemento() {
    const novoElemento = document.getElementById("txtnovoNome");


    if (minhaFila.enqueue(novoElemento.value)) {
       mostrarFila();
       novoElemento.value="";
       novoElemento.focus();
    } else {
        alert("Fila cheia!");
    }
}

function removerElemento() {
    if (minhaFila.dequeue()!=null) {
        alert("elemento removido: "+minhaFila.dequeue());
        console.log(minhaFila.toString());
    } else {
        alert("Fila vazia");
    }
}

function mostrarFila(){
    const filaElemento = document.getElementById("lblPessoasFila");
    filaElemento.textContent = minhaFila.toString();
}




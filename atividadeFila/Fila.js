class Fila{
    #inicio;
    #fim;
    #qtd;
    #elementos;
    
    constructor(tamanho=10){
        this.#fim = -1;
        this.#inicio = 0;
        this.#qtd = 0;
        this.#elementos = new Array(tamanho);
    }
    enqueue(elemento) { 
        this.#elementos.push(elemento); 
    }
    dequeue() {
        if(this.isEmpty()){
            return "Fila vazia"; 
        }
        else{
        return this.data.shift(); 
        }
    }
    isEmpty() {
       return this.#elementos.length === 0;
    }
}

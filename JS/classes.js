export class categoria {
    //encapsulamento dos campos privados
    #nome;
    #valor;
    constructor(nome){
        this.#nome = nome;
        this.#valor = 0;
    }
    //usando o geter para pegar as classes privadas
    get valor(){
        return this.#valor;
    }
    get nome(){
        return this.#nome;
    }

    //manipulaão
    adicionarvalor(valor){
        this.#valor += parseFloat(valor);
    }

}

export class listaGastosPorCategoria{
    #categorias;
    constructor(...categorias){
        this.#categorias = categorias;
    }
    get categorias(){
        return this.#categorias;
    }
    //programação funcionals
    obterCategoriaNome(nome){
       return this.#categorias.find((categoria)=> categoria.nome == nome)
    }


    obterTotal(){
        //redução dos valors
        return this.#categorias.reduce((acumulador, categoria)=> acumulador + categoria.valor, 0);
    }
}
//modulação do Ecma Script modules
import { categoria, listaGastosPorCategoria} from "./classes.js";
import { valorNegativo, atualizarInterface, valorNulo} from "./uteis.js";

//POO
const gastosPorCategotia = new listaGastosPorCategoria(
    new categoria("Alimentação"),
    new categoria("Transporte"),
    new categoria("Lazer"),
    new categoria("Outros")
)
    

//manipulação do DOM
const formulario = document.querySelector('form');

formulario.addEventListener('submit', (evento)=>{
    //prevenção do comportamento default
    evento.preventDefault();

    const valorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;
    if(valorNegativo(valorInformado) ){
        alert("Valor invalido, não pode ser negativo");
        return;
    }
    const categoria = gastosPorCategotia.obterCategoriaNome(categoriaInformada);
    categoria.adicionarvalor(valorInformado);

    atualizarInterface(gastosPorCategotia);
    formulario.reset();
})
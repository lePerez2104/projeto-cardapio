import { enroladinhoMignon } from "./cardapio";

/* informação extra da função fica entre parênteses 
PROPS = objeto que possui as informações que o componente recebe para estruturar a interface de forma dinâmica */
export function ItemCardapio(props) {
    return <div className="container-item-cardapio">
        <div>
            {/* {componente.objeto} */}
            <h2>{props.nome}</h2>
            <p>{props.preco}</p>
            <p>{props.descricao}</p>
        </div>
        <img src={props.imagem} alt="" />
    </div>

}
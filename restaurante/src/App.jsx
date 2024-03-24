/* | AULA 03 |
     CARDÁPIO */

/* importando variável de estado do próprio React*/
import { useState } from "react";
/* importando e armazenando imagem em uma variável */
import Restaurante from "./assets/hashtaurante.webp";
/* importando/linkando css
OBS: o CSS só precisa ser importado uma única vez em algum arquivo React para que toda a página tenha acesso */
import './App.css';
/* import com {} = utilizado para importar funções padrão */
import { Navegacao } from "./Navegacao";
/* importando componente */
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";

/* export = possibilita exportar um componente para ser usado em outros arquivos*/
export function App() {
  /* Criando lista com elementos 0,1 e 2, respectivamente */
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  /* Variável de estado/controle, vai controlar a página que está selecionada */
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  /*<> </> =  tag fantasma que agrupa um conjuento de tags cumprindo a exigência do React sem ocorrer erro (tag pai abraça tags filhos) */
  return <>
          {/*utilizando a variável criada para indicar a imagem*/}
          <img src={Restaurante} alt="" className="capa"/> {/* className = é uma classe no jsx*/}
          {/* criando tags usando componentes */}
          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
          <div className="menu">
            {/* MAP = faz com que um procedimento ocorra com todos os componentes de uma lista */}
            {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
          </div>
        </>
}
// Importações
import { useState } from "react";
import Restaurante from "./assets/hashtaurante.webp";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];  /* Lista de categorias */
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  /* Tag fantasma para agrupar componentes */
  return <>
          <img src={Restaurante} alt="" className="capa"/>
          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
          <div className="menu">
            {/* O procedimento irá ocorrer com todos os componentes de cada lista */}
            {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
          </div>
        </>
}
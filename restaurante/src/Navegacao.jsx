/* exportando função */
export function Navegacao(props) {
    return <div className="navegacao">
        {/* BOTÕES - CATEGORIAS */}
        <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)}/>   {/* a página selecionada por padrão é "Pratos Principais", mas quando o usuário clicar nessa categoria vai direcionar a uma função e localizar no PROPS a função  "atualizarPaginaSelecionada" */}
        <label htmlFor="pagina-0">Pratos Principais</label>
        <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPaginaSelecionada(1)} />
        <label htmlFor="pagina-1">Sobremesas</label>
        <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPaginaSelecionada(2)} />
        <label htmlFor="pagina-2">Bebidas</label>
    </div>
}
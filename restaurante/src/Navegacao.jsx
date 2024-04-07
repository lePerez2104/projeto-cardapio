export function Navegacao(props) {
    return <div className="navegacao">
        {/* Botôes das categorias do cardápio*/}
        <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)}/> 
        <label htmlFor="pagina-0">Pratos Principais</label>  {/* A página selecionada por padrão é "Pratos Principais" */}
        <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPaginaSelecionada(1)} />
        <label htmlFor="pagina-1">Sobremesas</label>
        <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPaginaSelecionada(2)} />
        <label htmlFor="pagina-2">Bebidas</label>
    </div>
}
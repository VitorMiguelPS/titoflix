import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

const CadastroCategoria = function () {
	return (
		<PageDefault>
      <h1>Cadastro de Categoria</h1>

			<form>
				<label>
					Nome da Categoria:
					<input type="text"></input>
				</label>
				<button type="submit"> Cadastrar </button>
			</form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
	)
}

export default CadastroCategoria;
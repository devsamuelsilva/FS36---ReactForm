import "./App.css";

function App() {
  return (
    <>
      <main className="form-pessoa">
        <h2>Cadastro de Pessoas</h2>
        <form className="row g-3">
        <div className="col-md-6">
            <label htmlFor="nomeCompleto" className="form-label">
              Nome Completo
            </label>
            <input
              type="texte"
              className="form-control"
              id="nome"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="nomeDaMae" className="form-label">
              Nome da Mãe
            </label>
            <input
              type="text"
              className="form-control"
              id="nomeDaMae"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Digite o Email"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Digite a Senha"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="cep" className="form-label">
              Cep
            </label>
            <input
              type="number"
              className="form-control"
              id="password"
              placeholder="Digite a cep"
            />
          </div>
          <div className="col-md-8">
            <label htmlFor="endereco" className="form-label">
              Endereço
            </label>
            <input type="text" className="form-control" id="endereco" />
          </div>
          <div className="col-md-1">
            <label htmlFor="numero" className="form-label">
              Numero
            </label>
            <input type="number" className="form-control" id="numero" />
          </div>
          <div className="col-md-11">
            <label htmlFor="complemento" className="form-label">
              Complemento
            </label>
            <input type="text" className="form-control" id="complemento" />
          </div>
          <div className="col-md-4">
            <label htmlFor="bairro" className="form-label">
              Bairro
            </label>
            <input type="text" className="form-control" id="bairro" />
          </div>
          <div className="col-md-4">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <select className="form-select" id="estado">
              <option selected> Escolha...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="cidade" className="form-label">
              Cidade
            </label>
            <select className="form-select" id="cidade">
              <option selected> Escolha...</option>
              <option>...</option>
            </select>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;

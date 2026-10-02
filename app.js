function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se campoPesquisa for uma string sem nada 
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você deve digitar o nome da abelha.</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let nome = "";
  let descricao = "";
  let ocorrencia = "";
  let tamanho = "";
  let coloração = "";
  let ninhos = "";
  let produção = "";
  let tags = "";

  // Itera sobre cada item de dado na lista de dados
  for (let dado of dados) {
    nome = dado.nome.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    ocorrencia = dado.ocorrencia.toLowerCase()
    tags = dado.tags.toLowerCase()
    tamanho = (dado.Tamanho || "").toLowerCase()
    coloração = (dado.Coloração || "").toLowerCase()
    ninhos = (dado.Ninhos || "").toLowerCase()
    produção = (dado.Produção || "").toLowerCase()
    // Se titulo includes campoPesquisa
    if (nome.includes(campoPesquisa) ||  descricao.includes(campoPesquisa) || ocorrencia.includes(campoPesquisa) || tamanho.includes(campoPesquisa) || coloração.includes(campoPesquisa) || ninhos.includes(campoPesquisa) || produção.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2><a href="${dado.link}" target="_blank">${dado.nome}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}

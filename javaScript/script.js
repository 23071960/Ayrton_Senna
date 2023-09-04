function salvarDados() {
    var numero = document.getElementById("numero").value;
    var nome = document.getElementById("nome").value;
    const selectTurma = document.getElementById("turma");
    const outraTurmaInput = document.getElementById("outraTurma");
    
    let turmaSelecionada = "";
    if (selectTurma.value === "personalizada") {
      turmaSelecionada = outraTurmaInput.value;
    } else {
      turmaSelecionada = selectTurma.value;
    }
  
    var turma = turmaSelecionada;
    var email = document.getElementById("email").value;

    var dados = {
      numero: numero,
      nome: nome,
      email: email,
      turma: turma
    };
  
    // Verificar se já existem dados salvos
    var dadosAnteriores = sessionStorage.getItem("dadosFormulario");
    var listaDados = [];
  
    if (dadosAnteriores) {
      listaDados = JSON.parse(dadosAnteriores);
    }
  
    // Adicionar os novos dados à lista
    listaDados.unshift(dados);
  
    // Armazenar a lista atualizada no sessionStorage
    sessionStorage.setItem("dadosFormulario", JSON.stringify(listaDados));
  
    // Exibir mensagem de confirmação
    exibirPopup();
  
    // Limpar o formulário
    document.getElementById("numero").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("turma").value = "";
    document.getElementById("email").value = "";
  
    // Atualizar a lista na página
    exibirListaNaPagina();
  }
 
function exibirPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function fecharPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function exibirListaNaPagina() {
    var tabelaDados = document.getElementById("listaDados");

    // Limpar a tabela
    tabelaDados.innerHTML = "";

    // Recuperar a lista de dados do sessionStorage
    var dadosAnteriores = sessionStorage.getItem("dadosFormulario");
    var listaArmazenada = JSON.parse(dadosAnteriores);

    // Criar a tabela e os títulos das colunas
    if (listaArmazenada) {
        var table = document.createElement("table");
        var thead = document.createElement("thead");
        var trHead = document.createElement("tr");
        var thNumero = document.createElement("th"); // Novo campo
        var thNome = document.createElement("th");
        var thTurma = document.createElement("th"); // Novo campo
        var thEmail = document.createElement("th");

        thNumero.textContent = "Número"; // Novo campo
        thNome.textContent = "Nome";
        thTurma.textContent = "Turma"; // Novo campo
        thEmail.textContent = "E-mail";

        trHead.appendChild(thNumero); // Novo campo
        trHead.appendChild(thNome);
        trHead.appendChild(thTurma); // Novo campo
        trHead.appendChild(thEmail);
        thead.appendChild(trHead);
        table.appendChild(thead);

        var tbody = document.createElement("tbody");

        // Preencher a tabela com os dados
        listaArmazenada.forEach(function(dados) {
            var tr = document.createElement("tr");
            var tdNumero = document.createElement("td"); // Novo campo
            var tdNome = document.createElement("td");
            var tdTurma = document.createElement("td"); // Novo campo
            var tdEmail = document.createElement("td");

            tdNumero.textContent = dados.numero.toString().padStart(3, '0'); // Formata para 3 dígitos
            tdNome.textContent = dados.nome;
            tdTurma.textContent = dados.turma; // Novo campo
            tdEmail.textContent = dados.email;

            tr.appendChild(tdNumero); // Novo campo
            tr.appendChild(tdNome);
            tr.appendChild(tdTurma); // Novo campo
            tr.appendChild(tdEmail);

            tbody.appendChild(tr);
        });
 // Adicionar a totalização (número de linhas) após a tabela
 var totalizacaoElement = document.createElement("p");
 totalizacaoElement.textContent = "Total de Dados: " + listaArmazenada.length;
 tabelaDados.appendChild(table);
 tabelaDados.appendChild(totalizacaoElement);
        table.appendChild(tbody);       
    }
}

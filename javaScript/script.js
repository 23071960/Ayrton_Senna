function salvarDados() {
  var numero = document.getElementById("numero").value.trim();
  var nome = document.getElementById("nome").value.trim();
  const selectTurma = document.getElementById("turma");
  const outraTurmaInput = document.getElementById("outraTurma");
  
  let turmaSelecionada = "";
  if (selectTurma.value === "personalizada") {
      turmaSelecionada = outraTurmaInput.value.trim();
  } else {
      turmaSelecionada = selectTurma.value;
  }

  var email = document.getElementById("email").value.trim();
  function exibirTurmaSelecionada() {
    var selectTurma = document.getElementById("turma");
    var turmaSelecionada = selectTurma.options[selectTurma.selectedIndex].text;
    var turmaSelecionadaElement = document.getElementById("turmaSelecionada");
    turmaSelecionadaElement.textContent = "Turma selecionada: " + turmaSelecionada;
}
  // Verifique se os campos obrigatórios estão preenchidos
  if (numero === "" || nome === "" || turmaSelecionada === "" || email === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return; // Aborta a função se campos obrigatórios estiverem vazios
  }

  var dados = {
      numero: numero,
      nome: nome,
      email: email,
      turma: turmaSelecionada
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

  // Limpar a tabela (exceto a linha de cabeçalho)
  var tbody = tabelaDados.querySelector("tbody");
  tbody.innerHTML = "";

  // Recuperar a lista de dados do sessionStorage
  var dadosAnteriores = sessionStorage.getItem("dadosFormulario");
  var listaArmazenada = JSON.parse(dadosAnteriores);

  // Preencher a tabela com os dados
  if (listaArmazenada) {
      listaArmazenada.forEach(function (dados) {
          var tr = document.createElement("tr");
          var tdNumero = document.createElement("td");
          var tdNome = document.createElement("td");
          var tdTurma = document.createElement("td");
          var tdEmail = document.createElement("td");

          tdNumero.textContent = dados.numero.toString().padStart(3, '0');
          tdNome.textContent = dados.nome;
          tdTurma.textContent = dados.turma;
          tdEmail.textContent = dados.email;

          tr.appendChild(tdNumero);
          tr.appendChild(tdNome);
          tr.appendChild(tdTurma);
          tr.appendChild(tdEmail);

          tbody.appendChild(tr);
      });

      // Atualizar o total de dados na linha de totalização
      var totalDadosElement = document.getElementById("totalDados");
      totalDadosElement.textContent = listaArmazenada.length;
  }
}

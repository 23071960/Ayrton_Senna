function selecionarTurma() {
    const selectTurma = document.getElementById("turma");
    const inputOutraTurma = document.getElementById("outraTurma");
    const labelTurma = document.querySelector("label[for='turma']");
    const labelOutraTurma = document.querySelector("label[for='outraTurma']");
  
    if (selectTurma.value === "personalizada") {
      selectTurma.style.display = "none";
      labelTurma.style.display = "none";
      inputOutraTurma.style.display = "block";
      labelOutraTurma.style.display = "block";
      inputOutraTurma.style.marginTop = "0"; // Remove a margem superior do campo
  
    } else {
      inputOutraTurma.style.display = "none";
      labelOutraTurma.style.display = "none";
      selectTurma.style.display = "block";
      labelTurma.style.display = "block";
    }
  }
  
  
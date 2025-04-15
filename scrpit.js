document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const fields = this.querySelectorAll("input, select, textarea");
    let valid = true;
  
    fields.forEach(field => {
      const errorElement = field.nextElementSibling;
      errorElement.textContent = "";
  
      
      if (field.hasAttribute("required") && !field.value.trim()) {
        errorElement.textContent = "Campo obrigatório.";
        valid = false;
        return;
      }
  
    
      if (field.type === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          errorElement.textContent = "Email inválido.";
          valid = false;
        }
      }
  
      if (field.name === "cpf") {
        if (!/^\d{11}$/.test(field.value)) {
          errorElement.textContent = "CPF deve ter 11 dígitos.";
          valid = false;
        }
      }
  
      if (field.name === "telefone") {
        if (!/^\d{10,11}$/.test(field.value)) {
          errorElement.textContent = "Telefone inválido.";
          valid = false;
        }
      }
  
      if (field.type === "number" && field.value < 0) {
        errorElement.textContent = "Valor inválido.";
        valid = false;
      }
  
      if (field.name === "nascimento") {
        const date = new Date(field.value);
        const today = new Date();
        if (date > today) {
          errorElement.textContent = "Data inválida.";
          valid = false;
        }
      }
    });
  
    if (valid) {
      alert("Cadastro enviado com sucesso!");
      this.reset();
    } else {
      alert("Por favor, corrija os erros antes de enviar.");
    }
  });
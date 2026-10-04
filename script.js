/* =========================================================
   ✏️ CONFIGURAÇÃO — edite apenas esta parte
   Número com indicativo do país, sem "+", espaços ou traços.
   Exemplo: 351912345678
   ========================================================= */
const WHATSAPP_NUMERO = "351900000000";
const MENSAGEM_PADRAO = "Olá Bela Cris! Gostaria de marcar um horário.";

/* --------- Não é preciso mexer abaixo desta linha --------- */
document.querySelectorAll(".js-whatsapp").forEach((link) => {
  const servico = link.dataset.service;
  const texto = servico
    ? `Olá Bela Cris! Gostaria de marcar: ${servico}.`
    : MENSAGEM_PADRAO;
  link.href = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
});

const ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();

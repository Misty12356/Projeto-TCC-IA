// 1. Mapeamento dos elementos da tela (Dando nomes às peças)
const campoPergunta = document.getElementById('campo-pergunta');
const btnEnviar = document.getElementById('btn-enviar');
const relatorioSaida = document.getElementById('relatorio-saida');
const btnParar = document.getElementById('btn-parar');

// 2. Função para "Enviar" a pergunta
btnEnviar.addEventListener('click', () => {
    const textoDigitado = campoPergunta.value;

    if (textoDigitado.trim() === "") {
        alert("Por favor, digite uma pergunta antes de enviar!");
        return;
    }

    // Simulando o processamento
    relatorioSaida.innerHTML = "<em>Processando resposta estratégica...</em>";

    // Simulação de resposta da IA (Aterramento)
    setTimeout(() => {
        relatorioSaida.innerHTML = `<strong>Resposta Gerada:</strong> <br> Você perguntou: "${textoDigitado}". <br><br> Este é um teste da lógica RAG. No futuro, aqui aparecerão os dados verificados do seu banco de dados.`;
    }, 1500); // Espera 1.5 segundos para parecer que está pensando
});

// 3. Função para o botão "Parar"
btnParar.addEventListener('click', () => {
    relatorioSaida.innerHTML = "<span style='color: red;'>⚠️ Processamento interrompido pelo usuário.</span>";
});

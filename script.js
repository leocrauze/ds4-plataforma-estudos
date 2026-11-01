// Conteúdo das matérias e banco de questões ficam em dados simples para facilitar atualizações.
const subjects = {
  portugues: {
    name: "Língua Portuguesa", icon: "📚", subtitle: "Leia, compreenda e expresse suas ideias.",
    points: ["Identifique o tema e as informações principais de um texto.", "Observe quem fala, para quem e com qual intenção.", "Use pontuação para organizar as ideias e dar clareza."],
    example: "Ao ler uma notícia, procure primeiro o que aconteceu, com quem e onde. Depois, compare o título com as informações do texto.",
    quiz: [
      { q: "Em uma notícia, qual pergunta ajuda a encontrar o assunto principal?", options: ["O que aconteceu?", "Qual é a cor favorita do autor?", "Quantas páginas tem o jornal?"], answer: 0, explanation: "A pergunta ‘o que aconteceu?’ ajuda a localizar o fato central da notícia." },
      { q: "Qual sinal costuma encerrar uma pergunta direta?", options: ["Ponto de interrogação (?)", "Vírgula (,)" , "Dois-pontos (:)"], answer: 0, explanation: "O ponto de interrogação indica que a frase é uma pergunta." },
      { q: "Uma receita culinária é um texto que geralmente…", options: ["ensina um passo a passo", "narra uma lenda", "apresenta uma notícia"], answer: 0, explanation: "Receitas trazem ingredientes e instruções organizadas para preparar algo." },
      { q: "Qual palavra é um adjetivo na frase ‘A mochila azul é leve’?", options: ["mochila", "azul", "é"], answer: 1, explanation: "‘Azul’ caracteriza a mochila e, por isso, é um adjetivo." },
      { q: "Qual é o plural de ‘animal’?", options: ["animais", "animals", "animalis"], answer: 0, explanation: "O plural de palavras terminadas em -al geralmente troca -al por -ais: animal/animais." },
      { q: "Em ‘Estudei bastante, portanto fui bem’, a palavra ‘portanto’ indica…", options: ["conclusão", "dúvida", "oposição"], answer: 0, explanation: "‘Portanto’ conecta uma ideia de conclusão ou resultado." },
      { q: "Qual frase está pontuada como uma pergunta?", options: ["Que horas são?", "Que horas são.", "Que horas são!"], answer: 0, explanation: "O ponto de interrogação é usado para marcar uma pergunta direta." },
      { q: "Em uma fábula, é comum encontrar…", options: ["animais que agem como pessoas", "instruções de montagem", "resultados de uma pesquisa"], answer: 0, explanation: "Fábulas frequentemente apresentam animais com características humanas e uma lição." },
      { q: "Qual destas palavras é sinônimo de ‘alegre’?", options: ["contente", "distante", "silencioso"], answer: 0, explanation: "‘Contente’ tem sentido semelhante ao de ‘alegre’." }
    ]
  },
  matematica: {
    name: "Matemática", icon: "➗", subtitle: "Use estratégias para resolver situações do cotidiano.",
    points: ["Estime o resultado antes de fazer uma conta.", "Frações representam partes de um todo dividido em partes iguais.", "Perímetro é a soma dos lados de uma figura."],
    example: "Uma pizza foi dividida em 8 pedaços iguais. Se você comeu 2, comeu 2/8 da pizza, ou 1/4 depois de simplificar a fração.",
    quiz: [
      { q: "Quanto é 25% de 100?", options: ["25", "4", "75"], answer: 0, explanation: "25% significa 25 de cada 100; portanto, 25% de 100 é 25." },
      { q: "Qual fração representa metade de um inteiro?", options: ["1/2", "1/3", "2/5"], answer: 0, explanation: "Metade é uma de duas partes iguais: 1/2." },
      { q: "Um retângulo tem lados de 3 cm e 5 cm. Qual é o perímetro?", options: ["16 cm", "15 cm", "8 cm"], answer: 0, explanation: "O perímetro soma todos os lados: 3 + 5 + 3 + 5 = 16 cm." },
      { q: "Quanto é 7 × 8?", options: ["56", "54", "64"], answer: 0, explanation: "Sete grupos de oito totalizam 56." },
      { q: "Qual número é maior: 0,7 ou 0,65?", options: ["0,7", "0,65", "São iguais"], answer: 0, explanation: "0,7 equivale a 0,70, que é maior que 0,65." },
      { q: "Uma camiseta custa R$ 80 e tem desconto de 10%. Qual é o valor do desconto?", options: ["R$ 8", "R$ 10", "R$ 18"], answer: 0, explanation: "10% de R$ 80 é 80 ÷ 10 = R$ 8." },
      { q: "Quantos centímetros há em 2 metros?", options: ["200 cm", "20 cm", "2.000 cm"], answer: 0, explanation: "Cada metro tem 100 centímetros; 2 × 100 = 200 cm." },
      { q: "Qual é o resultado de 3²?", options: ["9", "6", "5"], answer: 0, explanation: "3² significa 3 × 3, que é igual a 9." },
      { q: "Uma caixa tem 12 lápis. Quantos lápis há em 4 caixas iguais?", options: ["48", "36", "16"], answer: 0, explanation: "Multiplicamos 12 lápis por caixa por 4 caixas: 12 × 4 = 48." }
    ]
  },
  ciencias: {
    name: "Ciências", icon: "🔬", subtitle: "Investigue a vida, a matéria e o ambiente.",
    points: ["Os seres vivos dependem de água, energia e condições adequadas.", "A matéria pode mudar de estado com variações de temperatura.", "Ações individuais e coletivas ajudam a cuidar dos ecossistemas."],
    example: "Quando o gelo fica fora do congelador, recebe calor do ambiente e derrete. Essa mudança do estado sólido para o líquido é a fusão.",
    quiz: [
      { q: "Como se chama a passagem da água líquida para vapor?", options: ["Evaporação", "Solidificação", "Condensação"], answer: 0, explanation: "Na evaporação, a água passa do estado líquido para o gasoso." },
      { q: "Qual é uma fonte de energia renovável?", options: ["Luz do Sol", "Carvão mineral", "Petróleo"], answer: 0, explanation: "A energia solar vem do Sol e é renovada naturalmente." },
      { q: "Qual atitude ajuda a reduzir o lixo enviado a aterros?", options: ["Separar materiais recicláveis", "Misturar todo o lixo", "Descartar pilhas no lixo comum"], answer: 0, explanation: "A separação permite encaminhar materiais recicláveis para reaproveitamento." },
      { q: "Qual órgão do corpo humano bombeia o sangue?", options: ["Coração", "Pulmão", "Estômago"], answer: 0, explanation: "O coração impulsiona o sangue para diferentes partes do corpo." },
      { q: "Qual gás as plantas absorvem do ar durante a fotossíntese?", options: ["Gás carbônico", "Oxigênio", "Hélio"], answer: 0, explanation: "Na fotossíntese, as plantas usam gás carbônico, água e luz para produzir alimento." },
      { q: "Qual é o principal papel das raízes de uma planta?", options: ["Absorver água e sais minerais", "Produzir sementes diretamente", "Atrair insetos com cores"], answer: 0, explanation: "As raízes ajudam a fixar a planta e absorvem água e sais minerais do solo." },
      { q: "Qual destes animais é um mamífero?", options: ["Baleia", "Tubarão", "Sardinha"], answer: 0, explanation: "A baleia é mamífera: respira por pulmões e alimenta os filhotes com leite." },
      { q: "A força que nos mantém próximos ao chão é a…", options: ["gravidade", "evaporação", "fotossíntese"], answer: 0, explanation: "A gravidade é a atração entre corpos, como a Terra e os objetos ao seu redor." },
      { q: "Qual hábito contribui para prevenir doenças transmitidas por mosquitos?", options: ["Eliminar água parada", "Deixar caixas d’água abertas", "Acumular pneus no quintal"], answer: 0, explanation: "Sem água parada, os mosquitos têm menos locais para depositar ovos." }
    ]
  },
  historia: {
    name: "História", icon: "🏛️", subtitle: "Conheça diferentes sociedades e suas transformações.",
    points: ["Fontes históricas podem ser escritas, orais, visuais ou materiais.", "A linha do tempo organiza acontecimentos em sequência.", "Pessoas e grupos vivem experiências diferentes em cada época."],
    example: "Uma fotografia antiga da escola é uma fonte visual. Ela pode revelar roupas, espaços e costumes, mas precisa ser analisada junto de outras informações.",
    quiz: [
      { q: "Qual item é uma fonte histórica material?", options: ["Uma ferramenta antiga", "Uma previsão do tempo", "Uma conta matemática"], answer: 0, explanation: "Objetos produzidos ou usados por pessoas podem ser fontes materiais." },
      { q: "Para que serve uma linha do tempo?", options: ["Organizar acontecimentos em sequência", "Medir a temperatura", "Localizar países no mapa"], answer: 0, explanation: "A linha do tempo mostra a ordem e, às vezes, a duração dos acontecimentos." },
      { q: "Ao estudar uma fonte histórica, é importante perguntar…", options: ["quem a produziu e em que contexto", "se ela é bonita", "quanto ela pesa sempre"], answer: 0, explanation: "Autor e contexto ajudam a compreender por que a fonte foi produzida e o que ela pode revelar." },
      { q: "O estudo da História ajuda a compreender…", options: ["mudanças e permanências ao longo do tempo", "somente datas futuras", "apenas fenômenos naturais"], answer: 0, explanation: "A História investiga experiências humanas, mudanças e permanências em diferentes épocas." },
      { q: "Qual exemplo é uma fonte oral?", options: ["Relato de uma pessoa entrevistada", "Moeda antiga", "Fotografia de uma praça"], answer: 0, explanation: "Depoimentos e entrevistas são fontes transmitidas pela fala." },
      { q: "Em que continente se localiza o Brasil?", options: ["América do Sul", "Europa", "África"], answer: 0, explanation: "O Brasil está localizado na América do Sul." },
      { q: "O que um mapa histórico pode mostrar?", options: ["Territórios e fronteiras em determinada época", "A temperatura exata de hoje", "A voz de uma pessoa"], answer: 0, explanation: "Mapas históricos ajudam a observar territórios e fronteiras em contextos do passado." },
      { q: "A invenção da escrita é geralmente usada para marcar o início da…", options: ["Idade Antiga", "Idade Contemporânea", "Pré-História"], answer: 0, explanation: "Em uma divisão tradicional, a escrita marca a passagem da Pré-História para a História Antiga." },
      { q: "Por que comparamos diferentes fontes sobre um acontecimento?", options: ["Para conhecer perspectivas e evidências variadas", "Para apagar versões diferentes", "Para evitar fazer perguntas"], answer: 0, explanation: "Fontes diferentes podem apresentar perspectivas distintas e ajudar a construir uma compreensão mais completa." }
    ]
  }
};

const tabs = [...document.querySelectorAll(".tab-button")];
const subjectPanel = document.querySelector("#subject-panel");
const quizArea = document.querySelector("#quiz-area");
let activeQuiz = null;

function renderSubject(key) {
  const subject = subjects[key];
  subjectPanel.innerHTML = `
    <article class="subject-card" aria-labelledby="subject-title">
      <div class="subject-title"><span class="subject-icon" aria-hidden="true">${subject.icon}</span><div><h3 id="subject-title">${subject.name}</h3><p>${subject.subtitle}</p></div></div>
      <div class="lesson-grid">
        <div><h4>Pontos-chave</h4><ul>${subject.points.map(point => `<li>${point}</li>`).join("")}</ul></div>
        <div class="example-box"><h4>Exemplo do dia a dia</h4><p>${subject.example}</p></div>
      </div>
    </article>`;
}

tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(item => item.setAttribute("aria-selected", String(item === tab)));
  renderSubject(tab.dataset.subject);
}));
renderSubject("portugues");

function startQuiz(key) {
  // Embaralha tanto a ordem das questões quanto as alternativas em cada nova partida.
  const questions = [...subjects[key].quiz].sort(() => Math.random() - 0.5).map(question => {
    const options = question.options.map((text, index) => ({ text, correct: index === question.answer }));
    options.sort(() => Math.random() - 0.5);
    return { ...question, options: options.map(option => option.text), answer: options.findIndex(option => option.correct) };
  });
  activeQuiz = { key, questions, index: 0, score: 0, answered: false };
  renderQuestion();
  quizArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderQuestion() {
  const quiz = activeQuiz;
  if (!quiz) return;
  if (quiz.index >= quiz.questions.length) {
    quizArea.innerHTML = `<div class="result-card" role="status"><p class="eyebrow">Quiz concluído</p><h3>${subjects[quiz.key].name}</h3><p class="score">${quiz.score} de ${quiz.questions.length} acertos</p><p>${quiz.score === quiz.questions.length ? "Excelente trabalho! Você acertou todas as questões." : "Bom esforço! Revise os pontos-chave e tente novamente."}</p><button class="button" type="button" data-restart="${quiz.key}">Tentar novamente</button></div>`;
    return;
  }
  const current = quiz.questions[quiz.index];
  quizArea.innerHTML = `<div class="question-card" aria-live="polite">
    <p class="question-progress">Questão ${quiz.index + 1} de ${quiz.questions.length} · ${subjects[quiz.key].name}</p>
    <h3>${current.q}</h3>
    <div class="answer-list">${current.options.map((option, i) => `<button class="answer-option" type="button" data-answer="${i}">${String.fromCharCode(65 + i)}. ${option}</button>`).join("")}</div>
    <div class="answer-feedback" id="answer-feedback" role="status" hidden></div>
    <div class="quiz-controls"><span class="quiz-score">Placar: ${quiz.score}/${quiz.index}</span><button class="button" type="button" data-next hidden>Próxima</button></div>
  </div>`;
  quizArea.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => answerQuestion(Number(button.dataset.answer))));
  quizArea.querySelector("[data-next]").addEventListener("click", () => { quiz.index++; quiz.answered = false; renderQuestion(); });
}

function answerQuestion(choice) {
  const quiz = activeQuiz;
  if (!quiz || quiz.answered) return;
  quiz.answered = true;
  const current = quiz.questions[quiz.index];
  const correct = choice === current.answer;
  if (correct) quiz.score++;
  quizArea.querySelectorAll("[data-answer]").forEach((button, i) => {
    button.disabled = true;
    if (i === current.answer) button.classList.add("is-correct");
    if (i === choice && !correct) button.classList.add("is-wrong");
  });
  const feedback = quizArea.querySelector("#answer-feedback");
  feedback.innerHTML = `<strong>${correct ? "Resposta certa!" : `Quase! A resposta correta é “${current.options[current.answer]}”.`}</strong>${current.explanation}`;
  feedback.hidden = false;
  const next = quizArea.querySelector("[data-next]");
  next.hidden = false;
  next.textContent = quiz.index === quiz.questions.length - 1 ? "Ver resultado" : "Próxima questão";
  quizArea.querySelector(".quiz-score").textContent = `Placar: ${quiz.score}/${quiz.index + 1}`;
  next.focus();
}

document.querySelectorAll("[data-start-quiz]").forEach(button => button.addEventListener("click", () => startQuiz(button.dataset.startQuiz)));
quizArea.addEventListener("click", event => {
  const restart = event.target.closest("[data-restart]");
  if (restart) startQuiz(restart.dataset.restart);
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("is-open", !isOpen);
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  mainNav.classList.remove("is-open");
}));

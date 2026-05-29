# SUS Calc

Calculadora do questionário **System Usability Scale (SUS)** desenvolvida em React.

Atividade prática da disciplina Modelagem de Interfaces — UI/UX  
Bloco IV — Avaliação de Usabilidade | PUC Goiás — ADS

---

## Funcionalidades

- [x] Formulário com os 10 itens SUS (escala Likert 1–5)
- [x] Cálculo automático do escore SUS (0–100)
- [x] Classificação qualitativa com cor correspondente
- [x] Histórico de respondentes com média geral
- [x] Limpeza do histórico

## Pré-requisitos

- Node.js 18+
- npm 9+

## Instalação e execução

```bash
npm install
npm run dev
```

Acesse em: http://localhost:5173

## Discente

Nome: [SEU NOME AQUI]  
Matrícula: [SUA MATRÍCULA AQUI]

## Estrutura do projeto

```
sus-calc/
├── src/
│   ├── components/
│   │   ├── SUSForm.jsx       — formulário com validação
│   │   ├── ScoreCard.jsx     — exibição do escore com cor
│   │   └── ScoreHistory.jsx  — histórico e média geral
│   ├── data/
│   │   └── susQuestions.js   — array com os 10 itens
│   ├── utils/
│   │   └── calculateSUS.js   — funções puras de cálculo
│   ├── App.jsx               — composição e estado global
│   └── App.css               — estilos globais
├── .gitignore
├── package.json
└── README.md
```

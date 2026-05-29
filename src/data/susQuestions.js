/**
 * Lista dos 10 itens do questionário SUS.
 * positive: true  → item positivo (ímpar)
 * positive: false → item negativo (par)
 */
export const SUS_QUESTIONS = [
  { id: 1,  text: 'Eu acho que gostaria de usar este sistema com frequência.',                               positive: true  },
  { id: 2,  text: 'Eu acho o sistema desnecessariamente complexo.',                                          positive: false },
  { id: 3,  text: 'Eu achei o sistema fácil de usar.',                                                       positive: true  },
  { id: 4,  text: 'Eu acho que precisaria de apoio de uma pessoa técnica para usar este sistema.',            positive: false },
  { id: 5,  text: 'Eu acho que as várias funções deste sistema estão bem integradas.',                        positive: true  },
  { id: 6,  text: 'Eu acho que há muita inconsistência neste sistema.',                                       positive: false },
  { id: 7,  text: 'Eu imagino que a maioria das pessoas aprenderia a usar este sistema rapidamente.',         positive: true  },
  { id: 8,  text: 'Eu achei o sistema muito complicado de usar.',                                             positive: false },
  { id: 9,  text: 'Eu me senti muito confiante usando o sistema.',                                            positive: true  },
  { id: 10, text: 'Eu precisaria aprender muitas coisas antes de conseguir usar este sistema.',               positive: false },
];

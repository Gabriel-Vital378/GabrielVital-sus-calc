/**
 * Calcula o escore SUS a partir de um array de respostas.
 *
 * @param {number[]} answers - Array de 10 inteiros (1–5), na ordem dos itens SUS.
 * @returns {number} Escore SUS no intervalo [0, 100].
 *
 * Regras:
 *   - Itens ímpares (positivos, índices 0,2,4,6,8): valor ajustado = resposta − 1
 *   - Itens pares  (negativos, índices 1,3,5,7,9):  valor ajustado = 5 − resposta
 *   - Escore = (soma dos 10 valores ajustados) × 2,5
 */
export function calculateSUS(answers) {
  const adjustedSum = answers.reduce((sum, value, i) => {
    const adjusted = i % 2 === 0 ? value - 1 : 5 - value;
    return sum + adjusted;
  }, 0);
  return adjustedSum * 2.5;
}

/**
 * Retorna a classificação qualitativa e a cor correspondente para um escore SUS.
 *
 * @param {number} score - Escore SUS (0–100).
 * @returns {{ label: string, color: string }} Objeto com rótulo e cor hexadecimal (sem #).
 *
 * Faixas:
 *   ≥ 90  → Excelente  (#0E6655)
 *   ≥ 80  → Bom        (#1E8449)
 *   ≥ 70  → Regular    (#F0A500)
 *   ≥ 51  → OK         (#E67E22)
 *   < 51  → Ruim       (#C0392B)
 */
export function interpretSUS(score) {
  if (score >= 90) return { label: 'Excelente', color: '0E6655' };
  if (score >= 80) return { label: 'Bom',       color: '1E8449' };
  if (score >= 70) return { label: 'Regular',   color: 'F0A500' };
  if (score >= 51) return { label: 'OK',        color: 'E67E22' };
  return               { label: 'Ruim',         color: 'C0392B' };
}

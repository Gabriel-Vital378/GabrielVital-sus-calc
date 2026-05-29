import { useState } from 'react';
import SUSForm      from './components/SUSForm.jsx';
import ScoreHistory from './components/ScoreHistory.jsx';
import './App.css';

/**
 * Componente raiz da aplicação SUS Calc.
 *
 * Responsabilidades:
 *  - Manter o estado do histórico de respondentes (lifting state up).
 *  - Passar callbacks para SUSForm e ScoreHistory.
 */
export default function App() {
  const [systemName, setSystemName] = useState('');

  /**
   * Histórico de respondentes.
   * Cada entrada: { id: number, score: number, label: string, color: string }
   */
  const [history, setHistory] = useState([]);

  /**
   * Chamado por SUSForm após cálculo do escore.
   * Adiciona nova entrada ao histórico.
   */
  function handleSubmit(score, label, color) {
    setHistory(prev => [...prev, { id: prev.length + 1, score, label, color }]);
  }

  /**
   * Chamado por ScoreHistory ao clicar em "Limpar Histórico".
   * Redefine o histórico para array vazio.
   */
  function handleClear() {
    setHistory([]);
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>SUS Calc</h1>
        <p className="app-subtitle">System Usability Scale Calculator</p>
      </header>

      <SUSForm
        systemName={systemName}
        onSystemNameChange={setSystemName}
        onSubmit={handleSubmit}
      />

      <ScoreHistory history={history} onClear={handleClear} />
    </main>
  );
}

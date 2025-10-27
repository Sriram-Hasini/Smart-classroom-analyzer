import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    setLoading(true);
    const response = await fetch('/analyze', { method: 'POST' });
    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Smart Classroom Feedback Analyzer</h1>
      <button onClick={analyze} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <p>Attentive Score: {result.attentive_score}%</p>
          <p>Speech Turns: {result.speech_turns}</p>
          <p>{result.summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;

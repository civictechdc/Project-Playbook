import { useState } from 'react';

export default function PathFinder() {
  const [structure, setStructure] = useState(null);
  const [problem, setProblem] = useState(null);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Where should you start?</h2>

      <div>
        <p>Do you already have structure for your project?</p>
        <button onClick={() => setStructure('yes')}>Yes</button>
        <button onClick={() => setStructure('no')}>No</button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <p>Do you have a specific civic problem defined?</p>
        <button onClick={() => setProblem('yes')}>Yes</button>
        <button onClick={() => setProblem('no')}>No</button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        {structure === 'no' && (
          <p><strong>Start as a BUILDER:</strong> Focus on scoping + framing the problem.</p>
        )}

        {structure === 'yes' && problem === 'yes' && (
          <p><strong>Start as a CONTRIBUTOR:</strong> You’re ready to join an existing project.</p>
        )}
      </div>
    </div>
  );
}
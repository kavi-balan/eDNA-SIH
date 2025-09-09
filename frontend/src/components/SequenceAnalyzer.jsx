import React, { useState, useEffect } from 'react';

const SequenceAnalyzer = () => {
  const [sequences, setSequences] = useState([]);
  const [processingIndex, setProcessingIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample DNA sequences for demonstration
  const sampleSequences = [
    { id: 1, sequence: 'ATCGATCGATCGATCG', status: 'pending', taxa: '' },
    { id: 2, sequence: 'GCTAGCTAGCTAGCTA', status: 'pending', taxa: '' },
    { id: 3, sequence: 'TATATAATATATATAT', status: 'pending', taxa: '' },
    { id: 4, sequence: 'CGCGCGCGCGCGCGCG', status: 'pending', taxa: '' },
    { id: 5, sequence: 'AGCTAGCTAGCTAGCT', status: 'pending', taxa: '' }
  ];

  const taxaDatabase = [
    'Protists', 'Cnidarians', 'Mollusks', 'Arthropods', 'Echinoderms', 'Chordates'
  ];

  useEffect(() => {
    if (sequences.length === 0) {
      setSequences(sampleSequences);
    }
  }, []);

  const startAnalysis = () => {
    setIsProcessing(true);
    setProcessingIndex(0);

    const processSequence = (index) => {
      if (index >= sequences.length) {
        setIsProcessing(false);
        return;
      }

      setTimeout(() => {
        setSequences(prev => prev.map((seq, i) =>
          i === index
            ? {
                ...seq,
                status: 'processing',
                taxa: 'Analyzing...'
              }
            : seq
        ));

        // Simulate AI processing time
        setTimeout(() => {
          const randomTaxa = taxaDatabase[Math.floor(Math.random() * taxaDatabase.length)];
          setSequences(prev => prev.map((seq, i) =>
            i === index
              ? {
                  ...seq,
                  status: 'completed',
                  taxa: randomTaxa
                }
              : seq
          ));

          setProcessingIndex(index + 1);
          processSequence(index + 1);
        }, 2000 + Math.random() * 2000); // 2-4 seconds processing time
      }, 500);
    };

    processSequence(0);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#666666';
      case 'processing': return '#ffaa00';
      case 'completed': return '#00ccff';
      default: return '#666666';
    }
  };

  return (
    <div className="sequence-analyzer">
      <h3>Real-time Sequence Analysis</h3>
      <div className="analyzer-controls">
        <button
          className="button"
          onClick={startAnalysis}
          disabled={isProcessing}
        >
          {isProcessing ? 'Analyzing...' : 'Start AI Analysis'}
        </button>
      </div>

      <div className="sequences-list">
        {sequences.map((seq, index) => (
          <div
            key={seq.id}
            className={`sequence-item ${seq.status}`}
            style={{
              animation: seq.status === 'processing' ? 'pulse 1s infinite' : 'none'
            }}
          >
            <div className="sequence-header">
              <span className="sequence-id">Sequence #{seq.id}</span>
              <span
                className="status-indicator"
                style={{ backgroundColor: getStatusColor(seq.status) }}
              >
                {seq.status}
              </span>
            </div>

            <div className="sequence-data">
              <code className="dna-sequence">{seq.sequence}</code>
              {seq.taxa && (
                <div className="taxa-result">
                  <span className="taxa-label">Predicted Taxa:</span>
                  <span className="taxa-value">{seq.taxa}</span>
                </div>
              )}
            </div>

            {seq.status === 'processing' && (
              <div className="processing-bar">
                <div className="progress-fill"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {isProcessing && (
        <div className="processing-summary">
          <p>AI Model Processing: {processingIndex + 1} / {sequences.length} sequences</p>
          <div className="overall-progress">
            <div
              className="progress-fill"
              style={{ width: `${((processingIndex + 1) / sequences.length) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SequenceAnalyzer;

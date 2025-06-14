import React, { useState } from 'react';

const MoodSelector = () => {
  const moods = ['😄', '😐', '😞', '😠'];

  const moodMessages = {
    '😄': 'You seem happy today!',
    '😐': 'A neutral kind of day.',
    '😞': 'Feeling a bit down...',
    '😠': 'Take a deep breath. It will pass.',
  };

  const initialCounts = {
    '😄': 0,
    '😐': 0,
    '😞': 0,
    '😠': 0,
  };

  const [counts, setCounts] = useState(initialCounts);
  const [selectedMood, setSelectedMood] = useState('');

  const handleClick = (mood) => {
    setCounts((prev) => ({ ...prev, [mood]: prev[mood] + 1 }));
    setSelectedMood(mood);
  };

  const resetClick = () => {
    setCounts(initialCounts);
    setSelectedMood('');
  };

  // ---- Styling ----

  const pageStyle = {
    minHeight: '100vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '20px',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    textAlign: 'center',
    maxWidth: '420px',
    width: '100%',
  };

  const emojiButtonStyle = {
    fontSize: '36px',
    margin: '10px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  const countStyle = {
    display: 'block',
    fontSize: '12px',
    color: '#555',
  };

  const moodBoxStyle = {
    marginTop: '20px',
    fontSize: '18px',
    background: '#f0f4f8',
    padding: '10px 15px',
    borderRadius: '8px',
    color: '#333',
  };

  const resetButtonStyle = {
    marginTop: '30px',
    padding: '10px 24px',
    fontSize: '14px',
    backgroundColor: '#00b894',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2>How are you feeling today?</h2>

        {moods.map((mood) => (
          <button
            key={mood}
            style={emojiButtonStyle}
            onClick={() => handleClick(mood)}
          >
            {mood}
            <span style={countStyle}>Clicked: {counts[mood]}</span>
          </button>
        ))}

        {selectedMood && (
          <div style={moodBoxStyle}>
            Your mood: {selectedMood} – {moodMessages[selectedMood]}
          </div>
        )}

        <button style={resetButtonStyle} onClick={resetClick}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default MoodSelector;

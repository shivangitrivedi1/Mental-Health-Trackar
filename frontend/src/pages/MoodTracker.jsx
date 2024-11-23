import React, { useState, useEffect } from 'react';
import '../style/MoodTracker.css'; // Import the CSS file

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);
  const [dailyTip, setDailyTip] = useState('');
  const [journalEntry, setJournalEntry] = useState('');
  const [streak, setStreak] = useState(0);

  const moods = [
    { mood: 'Happy', emoji: '😊', color: '#FFD700' },
    { mood: 'Sad', emoji: '😢', color: '#1E90FF' },
    { mood: 'Angry', emoji: '😡', color: '#FF4500' },
    { mood: 'Excited', emoji: '🤩', color: '#32CD32' },
    { mood: 'Calm', emoji: '😌', color: '#8A2BE2' },
  ];

  const wellnessTips = [
    "Take a deep breath and relax.",
    "Go for a short walk to clear your mind.",
    "Write down three things you're grateful for.",
    "Drink a glass of water and stay hydrated.",
    "Spend 5 minutes meditating or practicing mindfulness.",
  ];

  useEffect(() => {
    setDailyTip(wellnessTips[Math.floor(Math.random() * wellnessTips.length)]);
  }, []);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setMoodHistory((prevHistory) => [
      ...prevHistory,
      { ...mood, date: new Date().toLocaleString() },
    ]);
    updateStreak();
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    if (
      moodHistory.length === 0 ||
      new Date(moodHistory[moodHistory.length - 1].date).toDateString() !== today
    ) {
      setStreak((prevStreak) => prevStreak + 1);
    }
  };

  const getMostFrequentMood = () => {
    if (moodHistory.length === 0) return null;
    const moodCounts = moodHistory.reduce((counts, entry) => {
      counts[entry.mood] = (counts[entry.mood] || 0) + 1;
      return counts;
    }, {});
    const mostFrequentMood = Object.keys(moodCounts).reduce((a, b) =>
      moodCounts[a] > moodCounts[b] ? a : b
    );
    return moods.find((m) => m.mood === mostFrequentMood);
  };

  const handleJournalSubmit = () => {
    alert("Journal entry saved!");
    setJournalEntry('');
  };

  const clearHistory = () => {
    setMoodHistory([]);
    setStreak(0);
  };

  const mostFrequentMood = getMostFrequentMood();

  return (
    <div className="mood-tracker-container">
      <h2 className="mood-tracker-title">Mood Tracker</h2>
      
      <div className="daily-tip">
        <h3>Daily Wellness Tip:</h3>
        <p>{dailyTip}</p>
      </div>
      
      <div className="mood-options">
        {moods.map((mood) => (
          <button
            key={mood.mood}
            className="mood-button"
            style={{ backgroundColor: mood.color }}
            onClick={() => handleMoodSelect(mood)}
          >
            {mood.emoji} <span>{mood.mood}</span>
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="selected-mood">
          <h3>Your Current Mood:</h3>
          <div
            className="mood-display"
            style={{ backgroundColor: selectedMood.color }}
          >
            {selectedMood.emoji} {selectedMood.mood}
          </div>
        </div>
      )}

      {moodHistory.length > 0 && (
        <div className="mood-history">
          <h3>Mood History:</h3>
          <ul>
            {moodHistory.map((entry, index) => (
              <li key={index} style={{ borderColor: entry.color }}>
                <span>{entry.emoji}</span>
                <span>{entry.mood}</span>
                <span className="mood-date">{entry.date}</span>
              </li>
            ))}
          </ul>
          <button className="clear-history-button" onClick={clearHistory}>
            Clear History
          </button>
        </div>
      )}

      {mostFrequentMood && (
        <div className="mood-insights">
          <h3>Mood Insights:</h3>
          <p>
            Your most frequent mood is:{" "}
            <span
              className="insight-mood"
              style={{ backgroundColor: mostFrequentMood.color }}
            >
              {mostFrequentMood.emoji} {mostFrequentMood.mood}
            </span>
          </p>
        </div>
      )}

      <div className="journal-section">
        <h3>Daily Journal:</h3>
        <textarea
          placeholder="Write about your day..."
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
        ></textarea>
        <button onClick={handleJournalSubmit}>Save Journal Entry</button>
      </div>

      <div className="streak-section">
        <h3>Your Streak:</h3>
        <p>You have tracked your mood for {streak} consecutive days!</p>
      </div>
    </div>
  );
};

export default MoodTracker;

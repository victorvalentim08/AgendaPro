import { useState, useEffect } from 'react';
import { ScheduleList } from '../components/ScheduleList';
import { getAvailableSlots } from '../services/supabase';
import '../App.css';

export function HomePage() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    async function loadSlots() {
      const data = await getAvailableSlots();
      setSlots(data);
    }
    loadSlots();
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Agende seu Horário</h1>
      <div className="schedule-section">
        <h2 className="schedule-subtitle">Escolha um horário:</h2>
        {slots.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777' }}>Nenhum horário disponível no momento.</p>
        ) : (
          <ScheduleList slots={slots} />
        )}
      </div>
    </div>
  );
}
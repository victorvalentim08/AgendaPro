import { useState, useEffect } from 'react';
import { ScheduleList } from '../components/ScheduleList';
import { AdminPanel } from '../components/AdminPanel';
import { getAvailableSlots } from '../services/supabase';
import '../App.css';

export function AdminPage() {
  const [slots, setSlots] = useState([]);

  async function loadSlots() {
    const data = await getAvailableSlots();
    setSlots(data);
  }

  useEffect(() => {
    loadSlots();
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Painel de Controle - Admin</h1>
      
      <AdminPanel onSlotCreated={loadSlots} />
      
      <div className="schedule-section">
        <h2 className="schedule-subtitle">Horários Cadastrados no Banco:</h2>
        <ScheduleList slots={slots} />
      </div>
    </div>
  );
}
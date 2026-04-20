import { useState } from 'react';
import { createTimeSlot } from '../services/supabase';
import './AdminPanel.css'; 

export function AdminPanel({ onSlotCreated }) {
  const [newTime, setNewTime] = useState('');

  const handleCreate = async () => {
    if (!newTime) return; 
    
    const result = await createTimeSlot(newTime);
    if (result) {
      alert('Horário criado com sucesso!');
      setNewTime(''); 
      onSlotCreated(); 
    }
  };

  return (
    <div className="admin-panel-container">
      <h3 className="admin-panel-title">Painel do Administrador</h3>
      <p className="admin-panel-subtitle">Adicionar novo horário disponível:</p>
      
      <div className="admin-panel-form">
        <input 
          type="time" 
          value={newTime} 
          onChange={(e) => setNewTime(e.target.value)}
          className="admin-panel-input"
        />
        <button onClick={handleCreate} className="admin-panel-button">
          Criar Horário
        </button>
      </div>
    </div>
  );
}
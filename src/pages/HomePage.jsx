import { useState, useEffect } from 'react';
import { ScheduleList } from '../components/ScheduleList';
import { getAvailableSlots } from '../services/supabase';
import './HomePage.css'; 

export function HomePage() {
  const [slots, setSlots] = useState([]);
  
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    async function loadSlots() {
      const data = await getAvailableSlots();
      setSlots(data);
    }
    loadSlots();
  }, []);

  const handleBooking = () => {
    alert(`Reserva para ${name} às ${selectedSlot.time} confirmada (simulação).`);
    setSelectedSlot(null);
    setName('');
    setPhone('');
  };

  return (
    <div className="homepage-container">
      <div className="header-section">
        <h1>Agende o seu Horário</h1>
      </div>

      {!selectedSlot ? (
        <div className="schedule-section">
          <h2 className="schedule-subtitle">Escolha um horário:</h2>
          {slots.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#777' }}>Nenhum horário disponível no momento.</p>
          ) : (
            <ScheduleList slots={slots} onSelectSlot={setSelectedSlot} />
          )}
        </div>
      ) : (
        <div className="booking-form-container">
          <h2>Confirmar Agendamento</h2>
          <p>Horário selecionado: <strong>{selectedSlot.time}</strong></p>
          
          <div className="form-group">
            <label>Nome:</label>
            <input 
              type="text" 
              placeholder="Seu nome completo" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>WhatsApp:</label>
            <input 
              type="text" 
              placeholder="(XX) XXXXX-XXXX" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button 
              className="btn-confirm" 
              onClick={handleBooking}
              disabled={!name || !phone}
            >
              Confirmar Reserva
            </button>
            <button 
              className="btn-cancel" 
              onClick={() => setSelectedSlot(null)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
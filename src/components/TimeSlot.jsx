import './TimeSlot.css'; 

export function TimeSlot({ time, isAvailable, onSelect }) {
  const statusClass = isAvailable ? 'time-slot-available' : 'time-slot-unavailable';

  return (
    <button
      onClick={onSelect}
      disabled={!isAvailable}
      className={`time-slot-btn ${statusClass}`}
    >
      {time}
    </button>
  );
}
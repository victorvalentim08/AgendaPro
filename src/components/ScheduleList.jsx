import './ScheduleList.css';
import { TimeSlot } from './TimeSlot';

export function ScheduleList({ slots = [], onSelectSlot }) {
  
  const handleSlotSelect = (slot) => {
    if (onSelectSlot) {
      onSelectSlot(slot);
    }
  };

  return (
    <div className="schedule-list-container">
      <div className="schedule-grid">
        {slots.map((slot) => (
          <TimeSlot
            key={slot.id}
            time={slot.time}
            isAvailable={slot.is_available}
            onSelect={() => handleSlotSelect(slot)}
          />
        ))}
      </div>
    </div>
  );
}
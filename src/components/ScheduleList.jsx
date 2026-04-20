import './ScheduleList.css';
import { TimeSlot } from './TimeSlot';

export function ScheduleList({ slots = [], onSlotSelect }) {
  const handleSlotSelect = (slotId) => {
    if (onSlotSelect) {
      onSlotSelect(slotId);
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
            onSelect={() => handleSlotSelect(slot.id)}
          />
        ))}
      </div>
    </div>
  );
}

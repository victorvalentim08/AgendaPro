import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// --- FUNÇÃO 1: Busca os horários ---
export async function getAvailableSlots() {
  const { data, error } = await supabase
    .from('time_slots')
    .select('*')
    .order('time', { ascending: true });

  if (error) {
    console.error("Erro ao buscar horários:", error);
    return [];
  };

  return data;
};

// --- FUNÇÃO 2: Cria um novo horário (Admin) ---
export async function createTimeSlot(timeString) {
  // O garante que enviamos apenas a data YYYY-MM-DD para o banco [cite: 671, 672, 675]
  const today = new Date().toISOString().split('T');

  const { data, error } = await supabase
    .from('time_slots')
    .insert([
      { time: timeString, date: today, is_available: true }
    ])
    .select();

  if (error) {
    console.error("Erro ao criar o horário:", error);
    return null;
  };
  
  return data;
};

// --- FUNÇÃO 3: Realiza o agendamento oficial (Cliente) ---
export async function bookAppointment(slotId, clientName, clientPhone) {
  // 1. Cria o registo na tabela 'appointments' [cite: 656, 676]
  const { data: appointment, error: appError } = await supabase
    .from('appointments')
    .insert([
      { 
        slot_id: slotId, 
        client_name: clientName, 
        client_phone: clientPhone 
      }
    ])
    .select();

  if (appError) {
    console.error("Erro ao criar agendamento:", appError);
    return { success: false, error: appError };
  };

  // 2. Atualiza o status do horário para ocupado (is_available = false) [cite: 656, 661, 676]
  const { error: slotError } = await supabase
    .from('time_slots')
    .update({ is_available: false })
    .eq('id', slotId);

  if (slotError) {
    console.error("Erro ao bloquear horário:", slotError);
    return { success: false, error: slotError };
  };

  return { success: true, data: appointment };
};

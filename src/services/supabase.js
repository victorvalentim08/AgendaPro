import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// --- FUNÇÃO 1: Busca os horários ---
export async function getAvailableSlots() {
  const { data, error } = await supabase
    .from('time_slots')
    .select('*')
    .order('time', { ascending: true }); 

  if (error) {
    console.error("Erro ao buscar horários:", error);
    return [];
  }

  return data; 
}

// --- FUNÇÃO 2: Cria um novo horário ----
export async function createTimeSlot(timeString) {
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
  }
  
  return data;
}

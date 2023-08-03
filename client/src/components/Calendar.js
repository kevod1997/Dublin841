import  { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const dayStyle = { border: '2px solid #F59E0B'}

  const footer = selectedDay ? (
    //Dia en español
    <p className='m-2'>Seleccionaste el {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p className='m-2'>Por favor elegi un dia.</p>
  );

  return (
    <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
      className='bg-white p-8 rounded-xl shadow-lg'
      locale={es}
        modifiersStyles={{
            selectedDay: dayStyle,
        }
        }
    />
  );
}
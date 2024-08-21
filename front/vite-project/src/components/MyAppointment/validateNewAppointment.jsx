const validateNewAppointment = (values) => {
    const errors = {};
    const selectedDate = new Date(values.date);
    const [hours] = values.time.split(':').map(Number);
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 6 || dayOfWeek === 5) {
      errors.date = 'No se puede agendar en fines de semana';
    }
    if (hours < 9 || hours > 17) {
        errors.time = 'El turno debe estar entre las 9:00 y las 17:00';
    }
    return errors;
  };
  export default validateNewAppointment;
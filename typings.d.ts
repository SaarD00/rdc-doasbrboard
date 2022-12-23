

export type AppointmentBody = {
  paitent_name: string
  email: string
  phone: string
  address?: string
  speciality: string
  date?: string
  }
  
  
  
  
  export interface Appointment extends AppointmentBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'appointment'
  }
  

  


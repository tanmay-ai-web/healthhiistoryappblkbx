// Mock data storage for hackathon demo
// In production, this would be replaced with a real database

export interface User {
  id: string;
  role: 'patient' | 'doctor';
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  verified: boolean;
  createdAt: string;
  // Patient specific
  uniqueId?: string;
  bloodType?: string;
  allergies?: string[];
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  // Doctor specific
  licenseNumber?: string;
  specialty?: string;
  hospital?: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  type: 'diagnosis' | 'lab_result' | 'prescription' | 'imaging' | 'report';
  title: string;
  description: string;
  date: string;
  status: 'normal' | 'abnormal' | 'critical' | 'pending' | 'reviewed';
  category: string;
  files?: string[];
  createdAt: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  type: string;
  duration: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
  notes?: string;
}

// Mock data storage (in production, use a real database)
let users: User[] = [
  {
    id: 'user_patient_1',
    role: 'patient',
    email: 'patient@demo.com',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1985-06-15',
    phone: '+1 (555) 123-4567',
    verified: true,
    createdAt: '2024-01-01T00:00:00Z',
    uniqueId: 'PT123456',
    bloodType: 'A+',
    allergies: ['Penicillin', 'Shellfish'],
    emergencyContact: {
      name: 'Jane Doe',
      phone: '+1 (555) 987-6543',
      relationship: 'Spouse'
    }
  },
  {
    id: 'user_doctor_1',
    role: 'doctor',
    email: 'doctor@demo.com',
    firstName: 'Sarah',
    lastName: 'Johnson',
    dateOfBirth: '1980-03-20',
    phone: '+1 (555) 234-5678',
    verified: true,
    createdAt: '2024-01-01T00:00:00Z',
    licenseNumber: 'MD123456',
    specialty: 'Cardiology',
    hospital: 'City General Hospital'
  }
];

let medicalRecords: MedicalRecord[] = [
  {
    id: 'record_1',
    patientId: 'PT123456',
    doctorId: 'user_doctor_1',
    type: 'lab_result',
    title: 'Blood Work - Complete Panel',
    description: 'Comprehensive blood chemistry panel showing normal values across all markers.',
    date: '2024-01-15',
    status: 'normal',
    category: 'Blood Work',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'record_2',
    patientId: 'PT123456',
    doctorId: 'user_doctor_1',
    type: 'prescription',
    title: 'Hypertension Medication',
    description: 'Lisinopril 10mg daily for blood pressure management.',
    date: '2024-01-10',
    status: 'reviewed',
    category: 'Medication',
    createdAt: '2024-01-10T14:30:00Z'
  },
  {
    id: 'record_3',
    patientId: 'PT123456',
    doctorId: 'user_doctor_1',
    type: 'imaging',
    title: 'Chest X-Ray',
    description: 'Routine chest X-ray showing clear lungs and normal heart size.',
    date: '2024-01-05',
    status: 'normal',
    category: 'Imaging',
    createdAt: '2024-01-05T09:15:00Z'
  }
];

let appointments: Appointment[] = [
  {
    id: 'appt_1',
    patientId: 'PT123456',
    doctorId: 'user_doctor_1',
    date: '2024-01-25',
    time: '10:00 AM',
    type: 'Follow-up',
    duration: '30 min',
    status: 'scheduled'
  },
  {
    id: 'appt_2',
    patientId: 'PT123456',
    doctorId: 'user_doctor_1',
    date: '2024-02-01',
    time: '2:30 PM',
    type: 'Annual Checkup',
    duration: '45 min',
    status: 'scheduled'
  }
];

// User management functions
export const createUser = (userData: Omit<User, 'id' | 'createdAt'>): User => {
  const newUser: User = {
    ...userData,
    id: `user_${userData.role}_${Date.now()}`,
    createdAt: new Date().toISOString(),
    uniqueId: userData.role === 'patient' ? `PT${Date.now().toString().slice(-6)}` : undefined
  };
  users.push(newUser);
  return newUser;
};

export const getUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email);
};

export const getUserById = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

export const getPatientByUniqueId = (uniqueId: string): User | undefined => {
  return users.find(user => user.role === 'patient' && user.uniqueId === uniqueId);
};

// Medical records functions
export const createMedicalRecord = (recordData: Omit<MedicalRecord, 'id' | 'createdAt'>): MedicalRecord => {
  const newRecord: MedicalRecord = {
    ...recordData,
    id: `record_${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  medicalRecords.push(newRecord);
  return newRecord;
};

export const getMedicalRecordsByPatientId = (patientId: string): MedicalRecord[] => {
  return medicalRecords.filter(record => record.patientId === patientId);
};

export const getMedicalRecordsByDoctorId = (doctorId: string): MedicalRecord[] => {
  return medicalRecords.filter(record => record.doctorId === doctorId);
};

// Appointment functions
export const createAppointment = (appointmentData: Omit<Appointment, 'id'>): Appointment => {
  const newAppointment: Appointment = {
    ...appointmentData,
    id: `appt_${Date.now()}`
  };
  appointments.push(newAppointment);
  return newAppointment;
};

export const getAppointmentsByPatientId = (patientId: string): Appointment[] => {
  return appointments.filter(appointment => appointment.patientId === patientId);
};

export const getAppointmentsByDoctorId = (doctorId: string): Appointment[] => {
  return appointments.filter(appointment => appointment.doctorId === doctorId);
};

// Authentication helper
export const authenticateUser = (email: string, _password: string): User | null => {
  // In demo, accept any password for demo accounts
  const user = getUserByEmail(email);
  if (user && (email === 'patient@demo.com' || email === 'doctor@demo.com')) {
    return user;
  }
  return null;
};

// Demo data getters
export const getDemoPatients = (): User[] => {
  return users.filter(user => user.role === 'patient');
};

export const getDemoDoctors = (): User[] => {
  return users.filter(user => user.role === 'doctor');
};

export const getAllMedicalRecords = (): MedicalRecord[] => {
  return medicalRecords;
};

export const getAllAppointments = (): Appointment[] => {
  return appointments;
};
using { hospital as my } from '../db/schema';

service HospitalService {
  entity Patients as projection on my.Patient;
  entity Doctors  as projection on my.Doctor;
}

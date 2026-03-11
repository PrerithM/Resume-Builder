export interface ResumeFormData {
  photoUri: string;
  
  // Header
  name: string;
  address: string;
  mobileNo: string;
  email: string;
  applyFor: string;

  // Personal Data
  nationality: string;
  gender: string;
  maritalStatus: string;
  dob: string;

  // Education
  elementary: string;
  elementaryYear: string;
  highSchool: string;
  highSchoolYear: string;
  college: string;
  course: string;
  specialSkills: string;

  // Work Experience
  experience: string;

  // Applicant Certification
  certificationDate: string;
}

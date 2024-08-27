export interface LabTechnician {
    name: string;
    id: string;
}

export interface Report {
    id: number;
    patientName: string;
    patientId: string;
    diagnosisTitle: string;
    diagnosisDetails: string;
    reportDate: string;
    photoUrl: string;
    labTechnician: LabTechnician;
}
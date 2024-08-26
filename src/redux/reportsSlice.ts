import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LabTechnician {
  name: string;
  id: string;
}

export interface Report {
  id: number;
  patientName: string;
  patientId: string;     //tc
  diagnosisTitle: string;
  diagnosisDetails: string;
  reportDate: string;
  photoUrl: string;
  labTechnician: LabTechnician;
}

interface ReportsState {
  reports: Report[];
  labTechnicians: LabTechnician[];
}

const initialState: ReportsState = {
  reports: [],
  labTechnicians: [],
};

const reportSlice = createSlice({

  name: 'reports',
  initialState,
  reducers: {

    addReport: (state, action: PayloadAction<Omit<Report, 'id'>>) => { //Omit id'nin çıkartılmasını sağlar. çünkü id'yi kullanıcıdan almıyoruz kendi dönüyor
      const highestId = state.reports.length > 0 ? Math.max(...state.reports.map(r => r.id)) : 0;
      const newId = highestId + 1;
      const newReport = { ...action.payload, id: newId };
      state.reports.push(newReport)
    },

    deleteReport: (state, action: PayloadAction<number>) => {
      state.reports = state.reports.filter(report => report.id !== action.payload);
    },
    updateReport: (state, action: PayloadAction<Report>) => {
      const index = state.reports.findIndex(report => report.id === action.payload.id);
      if (index !== -1) {
        state.reports[index] = action.payload;
      }
    },

    setReports: (state, action: PayloadAction<Report[]>) => {
      state.reports = action.payload;
    }

  }

});

export const { addReport, deleteReport, updateReport, setReports } = reportSlice.actions;
export default reportSlice.reducer;
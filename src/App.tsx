// import { useState } from 'react'
import '@mantine/core/styles.css'; //martine css özellikleri için import edilmesi,
import { Routes, Route } from 'react-router-dom';
import ReportsList from './pages/ReportsList'
import AddReport from './pages/AddReport'
import ReportDetail from './pages/ReportDetail';
function App() {


  return (
    <>


      {/* <ReportsList></ReportsList> */}

      {/* <ReportDetail></ReportDetail> */}
      <Routes>
        <Route path="/" element={<ReportsList />} />
        <Route path="/report/:id" element={<ReportDetail />} />
        <Route path="/add-report" element={<AddReport />} />


      </Routes>

    </>
  )
}

export default App

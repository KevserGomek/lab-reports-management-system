import { ReactNode } from 'react'
import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router-dom';
import ReportsList from './pages/ReportsList'
import AddReport from './pages/AddReport'
import ReportDetail from './pages/ReportDetail';
import UpdateReport from './pages/UpdateReport';
import Login from './pages/Login'
import NotFound from './pages/NotFound';
import NotAuthorized from './pages/NotAuthorized'
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

interface ProtectedRouteProps {
  element: ReactNode;
  allowedRoles?: string[];
  userRole: string;
}

function App() {

  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, allowedRoles, userRole }) => {

    if (!userRole) return <NotAuthorized />;
    if (allowedRoles && !allowedRoles.includes(userRole)) return <NotAuthorized />;
    return <>{element}</>;
  };

  return (

    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/reports" element={
          <ProtectedRoute
            element={<ReportsList />}
            allowedRoles={['admin', 'reader']}
            userRole={currentUser?.role || ''}
          />
        } />

        <Route path="/report/:id" element={
          <ProtectedRoute
            element={<ReportDetail />}
            allowedRoles={['admin', 'reader']}
            userRole={currentUser?.role || ''}
          />
        } />

        <Route path="/add-report" element={
          <ProtectedRoute
            element={<AddReport />}
            allowedRoles={['admin']}
            userRole={currentUser?.role || ''}
          />
        } />

        <Route path="/update-report/:id" element={
          <ProtectedRoute
            element={<UpdateReport />}
            allowedRoles={['admin']}
            userRole={currentUser?.role || ''}
          />
        } />

        <Route path="/*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App

import ReportForm from '../components/ReportForm';
import Navbar from '../components/Navbar'

const UpdateReport: React.FC = () => {

    return (

        <>
            <Navbar />
            <ReportForm isEditMode={true} />
        </>
        
    );
};

export default UpdateReport;


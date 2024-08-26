import ReportForm from '../components/ReportForm';
import Navbar from '../components/Navbar';

const AddReport: React.FC = () => {

    return (

        <>
            <Navbar />
            <ReportForm isEditMode={false} />
        </>

    );
};

export default AddReport;


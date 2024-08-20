import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Flex, Box, Card } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'; 

const reports = [
    {
        id: 1,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 2,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 3,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 4,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 5,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 6,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 7,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 8,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 9, //dosya no
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 10,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 11,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 11,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 11,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 11,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 11,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 11,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 11,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    },
    {
        id: 11,
        patientName: "patient name",
        patientId: "12345678901",
        diagnosisTitle: "title",
        diagnosisDetails: "details",
        reportDate: "2024-08-01",
        photoUrl: "",
        labTechnician: {
            name: "laborant name",
            id: "1234567"
        }
    }



];





type Report = {
    id: number;
    patientName: string;
    patientId: string;
    diagnosisTitle: string;
    diagnosisDetails: string;
    labTechnician: {
        id: string
        name: string;
    };
    reportDate: string;

};



//1- RESPONSIVE TASARIM SIKINTILI SON SÜTUN GÖRÜNMÜYOR







const ReportsList: React.FC = () => { //FC: function component

    //   const [reportsList, setReportsList] = useState(reports)

    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const handleViewReportDetail = (report: Report) => {
        console.log(report.id);
        navigate(`/report/${report.id}`)
    };



    const rows = reports.map((report) => (
        <Table.Tr
            key={report.id}
            onClick={() => handleViewReportDetail(report)}
        >
            <Table.Td style={{textAlign:"center"}}>{report.patientId}</Table.Td>
            <Table.Td style={{textAlign:"center"}}>{report.patientName}</Table.Td>
            <Table.Td style={{textAlign:"center"}}> {report.diagnosisTitle}</Table.Td>
            <Table.Td style={{textAlign:"center"}}>{report.labTechnician.name}</Table.Td>
            <Table.Td style={{textAlign:"center"}}>{report.reportDate}</Table.Td>
            <Table.Td style={{textAlign:"center"}}>delbtn</Table.Td>
        </Table.Tr>

    ));


    return (

        

        <Flex
            justify="center"
            align="center"
            style={{ backgroundColor: "red", minHeight: '100vh', maxWidth: "100vw"}}>

            <Card shadow="sm"  radius="md" withBorder style={{ minWidth: "90vw",   overflowY: 'auto', padding:0 , height: isSmallScreen ? '100vh' : '80vh', width: isSmallScreen ? '100vw' : '90vw',
                    marginTop: isSmallScreen ? '0' : '5rem',
                    marginBottom: isSmallScreen ? '0' : '5rem',
                
             }}>

                <Table striped highlightOnHover withTableBorder withRowBorders={false} stickyHeader horizontalSpacing="sm" verticalSpacing="md">
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th style={{backgroundColor:"yellow", textAlign:"center", width:"10%"}}>hasta tc</Table.Th>
                            <Table.Th style={{backgroundColor:"red", textAlign:"center", width:"10%"}}>hasta adı</Table.Th>
                            <Table.Th style={{backgroundColor:"blue", textAlign:"center", width:"10%"}}>tanı</Table.Th>
                            <Table.Th style={{backgroundColor:"orange", textAlign:"center", width:"10%"}}>laborant adı</Table.Th>
                            <Table.Th style={{backgroundColor:"brown", textAlign:"center", width:"10%"}}>tarih</Table.Th>
                            <Table.Th style={{backgroundColor:"green", textAlign:"center", width:"10%"}}>buton</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody style={{ cursor: 'pointer' }}>{rows}</Table.Tbody>
                </Table>
            </Card>




        </Flex>


    );
};

export default ReportsList;

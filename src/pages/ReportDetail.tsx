import { Card, Image, Text, Group, Flex, Box, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ReportDetail: React.FC = () => {

    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const location = useLocation();
    const { report } = location.state || {};

    return (

        <>
            <Navbar />

            <Flex
                justify="center"
                align="center"
                style={{
                    backgroundColor: "#EEF0E5",
                    minHeight: "calc(100vh - 5rem)",
                    maxWidth: "100vw",
                    flexDirection: "column"
                }}
            >

                <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{
                        backgroundColor: '#B6C4B6',
                        width: isSmallScreen ? '100vw' : '90vw',
                        minHeight: isSmallScreen ? '100vh' : '60vh',
                        marginTop: isSmallScreen ? '0' : '3rem',
                        marginBottom: isSmallScreen ? '0' : '4rem'
                    }}
                >

                    <Group justify="space-between" mt="md" mb="xs" >
                        <Text fw={500}>The File Number: {report.id}</Text>

                        <Text fw={500}>Date: {report.reportDate}</Text>
                    </Group>

                    <Group align='flex-start' mb="xs" style={{ flexDirection: 'column', gap: 0 }}>
                        <Text fw={500}>Patient's Identification Number: {report.patientId}</Text>

                        <Text fw={500} fs="3rem">Patient's Name and Surname: {report.patientName}</Text>
                    </Group>

                    <Group justify="flex-start" align='flex-start' mb="xs" style={{ flexDirection: 'column', gap: 10 }}>
                        <Title size="h2" >{report.diagnosisTitle}</Title>

                        <Image
                            src={report.photoUrl}
                            h={200}
                            alt=""
                            style={{ width: "30%" }}
                        />

                        <Box style={{ padding: "1rem" }}><Text fw={500}>{report.diagnosisDetails}</Text></Box>
                    </Group>

                    <Group align='flex-end' mb="xs" style={{ flexDirection: 'column', gap: 0 }}>
                        <Text fw={500}>Lab-Technician's ID: {report.labTechnician.id}</Text>

                        <Text fw={500}>Lab-Technician's Full Name: {report.labTechnician.name}</Text>
                    </Group>
                </Card>
            </Flex>
        </>

    );
};

export default ReportDetail;

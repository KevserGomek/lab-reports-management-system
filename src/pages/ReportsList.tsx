import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Flex, Box, Card, Radio, Group, TextInput, Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { Report, deleteReport } from '../redux/reportsSlice'
import { IconTrash, IconEdit } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import type { AppDispatch } from '../redux/store';

const ReportsList: React.FC = () => {

    const [checked, setChecked] = useState<boolean>(false);
    const reports = useSelector((state: RootState) => state.reports.reports);
    const currentUser = useSelector((state: RootState) => state.users.currentUser);
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const [searchValue, setSearchValue] = useState<string>('');
    const [filteredReports, setFilteredReports] = useState<Report[]>(reports);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        setFilteredReports(reports);

    }, [reports]);

    const handleSortByDate = () => {

        const sorted = [...reports].sort((a, b) => {
            return new Date(a.reportDate).getTime() - new Date(b.reportDate).getTime();
        });
        setFilteredReports(sorted);

    };

    const handleRadioChange = () => {

        setChecked((prevChecked) => !prevChecked);

        if (!checked) {
            handleSortByDate();
        } else {
            setFilteredReports(reports);
        }

    };
    
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value.toLowerCase();
        setSearchValue(value);

        const filteredResults = reports.filter(report => {

            return (
                report.patientName.toLowerCase().includes(value) ||
                report.patientId.includes(value) ||
                report.labTechnician.name.toLowerCase().includes(value)
            );

        });

        setFilteredReports(filteredResults);
    
    };

    const handleDeleteReport = (id: number) => {

        const confirmed = window.confirm('Are you sure you want to delete the report?')
        if (!confirmed) return;

        try {
            setFilteredReports((prevReports) => prevReports.filter(report => report.id !== id));
            dispatch(deleteReport(id))
        } catch (error) {
            console.log(error)
        }

    }

    const handleViewReportDetail = (report: Report) => {

        navigate(`/report/${report.id}`, { state: { report } }) ;  //report'u state'e atadık

    };

    const handleUpdateReport = (report: Report) => {

        navigate(`/update-report/${report.id}`, { state: { report } });

    };

    const rows = filteredReports.map((report) => {
       
        const row = (

            <Table.Tr
                key={report.id}
                onClick={() => handleViewReportDetail(report)}
            >
                <Table.Td style={{ textAlign: "center" }}>{report.patientId}</Table.Td>
                <Table.Td style={{ textAlign: "center" }}>{report.patientName}</Table.Td>
                <Table.Td style={{ textAlign: "center" }}>{report.diagnosisTitle}</Table.Td>
                <Table.Td style={{ textAlign: "center" }}>{report.labTechnician.name}</Table.Td>
                <Table.Td style={{ textAlign: "center" }}>{report.reportDate}</Table.Td>
                {currentUser?.role === 'admin' && (
                    <Table.Td style={{ textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
                        <Tooltip label="Delete the report">
                            <IconTrash onClick={() => handleDeleteReport(report.id)} />
                        </Tooltip>

                        <Tooltip label="Update the report">
                            <IconEdit onClick={() => handleUpdateReport(report)} />
                        </Tooltip>
                    </Table.Td>
                )}
            </Table.Tr>

        );

        return row;

    });

    return (

        <>
            <Flex
                justify="center"
                align="center"
                style={{
                    backgroundColor: "#EEF0E5",
                    height: '100vh',
                    maxWidth: "100vw",
                    flexDirection: "column"
                }}
            >
                <Navbar />

                <Group
                    style={{
                        marginTop: isSmallScreen ? '1rem' : '4rem',
                        width: isSmallScreen ? '100vw' : '90vw',
                        height: "4rem",
                        gap: "20px"
                    }}
                >
                    <TextInput

                        type="search"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={handleSearch}
                        size='lg'
                    />

                    <Radio

                        size='lg'
                        value="checked"
                        label="Sort by date"
                        checked={checked}
                        onClick={handleRadioChange}
                    />
                </Group>

                <Card
                    shadow="sm"
                    radius="md"
                    withBorder
                    style={{
                        minWidth: "90vw",
                        overflowY: 'auto',
                        padding: 0,
                        height: isSmallScreen ? '100vh' : '80vh',
                        width: isSmallScreen ? '100vw' : '90vw',
                        marginTop: "3rem",
                        marginBottom: isSmallScreen ? '0' : '5rem',

                    }}
                >
                    <Box style={{ overflowX: 'auto' }}>
                        <Table striped highlightOnHover withTableBorder withRowBorders={false} stickyHeader horizontalSpacing="sm" verticalSpacing="md">
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th style={{ backgroundColor: "#163020", textAlign: "center", color: "white" }}>Patient's ID</Table.Th>
                                    <Table.Th style={{ backgroundColor: "#163020", textAlign: "center", color: "white" }}>Patient's Full Name</Table.Th>
                                    <Table.Th style={{ backgroundColor: "#163020", textAlign: "center", color: "white" }}>Diagnosis</Table.Th>
                                    <Table.Th style={{ backgroundColor: "#163020", textAlign: "center", color: "white" }}>Lab-Technician Full Name</Table.Th>
                                    <Table.Th style={{ backgroundColor: "#163020", textAlign: "center", color: "white" }}>Date</Table.Th>
                                    {currentUser?.role === 'admin' && (
                                        <Table.Th style={{ backgroundColor: "#163020", textAlign: "center", color: "white" }}>Options</Table.Th>
                                    )}
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody style={{ cursor: 'pointer' }}>{rows}</Table.Tbody>
                        </Table>
                    </Box>
                </Card>
            </Flex>
        </>

    );
};

export default ReportsList;

import React, { useState } from 'react';
import { Card, Button, Group, Flex, Title, TextInput, FileInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { useMediaQuery } from '@mantine/hooks';
import { useDispatch } from 'react-redux';
import { addReport, updateReport } from '../redux/reportsSlice'
import { useLocation } from 'react-router-dom'; //state'i karşılamak için
import '@mantine/dates/styles.css';
import type { AppDispatch } from '../redux/store';

interface ReportFormProps {
    isEditMode: boolean;
}
const ReportForm: React.FC<ReportFormProps> = ({ isEditMode }) => { //isEditMode type eklemen gerek sanırım

    const [fileValue, setFileValue] = useState<File | null>(null);
    const [dateValue, setDateValue] = useState<Date | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const { report } = location.state || {};
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    const form = useForm({

        initialValues: {
            id: report?.id || "",
            patientName: report?.patientName || "",
            patientId: report?.patientId || "",
            diagnosisTitle: report?.diagnosisTitle || "",
            diagnosisDetails: report?.diagnosisDetails || "",
            reportDate: report?.reportDate || "",
            photoUrl: report?.photoUrl || "",
            labTechnician: {
                id: report?.labTechnician?.id || "",
                name: report?.labTechnician?.name || ""
            }
        },

        validate: {
            patientId: (value) => (!/^[1-9][0-9]{10}$/.test(value) ? 'Patients ID must be 11 digits and cannot start with 0.' : null),
            patientName: (value) => (value.length < 2 ? 'Please enter a valid name and surname!' : null),
            diagnosisTitle: (value) => (value.length < 1 ? 'Diagnosis Title is required!' : null),
            diagnosisDetails: (value) => (value.length < 1 ? 'Diagnosis Details is required!' : null),
            reportDate: (value) => (value.length < 1 ? 'Date is required!' : null),
            photoUrl: (value) => (value.length < 1 ? 'Image is required!' : null),
            labTechnician: {
                id: (value) => (!/^[1-9][0-9]{6}$/.test(value) ? 'Lab Technician ID must be 7 digits and cannot start with 0.' : null),
                name: (value) => (value.length < 1 ? 'Lab Technician Name is required.' : null),
            }
        }

    });

    const handleSubmit = (values: typeof form.values) => {

        if (report) {
            dispatch(updateReport(values));
        } else {
            dispatch(addReport(values));
        }

    };

    return (

        <>

            <Flex
                justify="center"
                align="center"
                style={{
                    backgroundColor: "#EEF0E5",
                    minHeight: '100vh',
                    maxWidth: "100vw"
                }}
            >
                <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{
                        backgroundColor: '#B6C4B6',
                        width: isSmallScreen ? '100vw' : '50vw',
                        marginTop: isSmallScreen ? '0' : '4rem',
                        marginBottom: isSmallScreen ? '0' : '4rem',
                    }}
                >
                    <Title size="h2">
                        {isEditMode ? 'Update The Report' : 'Add A Report'}
                    </Title>

                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <Group
                            style={{
                                flexDirection: 'column',
                                gap: 10,
                                alignItems: "center",
                                marginBottom: "10px",
                                marginTop: "20px",
                                padding: "13px"
                            }}
                        >
                            <TextInput
                                variant="filled"
                                label="Patient's Identification Number:"
                                placeholder="Enter the patient's id "
                                size='lg'
                                name='patientId'
                                maxLength={11}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                                key={form.key('patientId')}
                                {...form.getInputProps('patientId')}
                            />

                            <TextInput
                                variant="filled"
                                label="Patient's Name and Surname:"
                                placeholder="Enter the patient's full name"
                                size='lg'
                                name='patientName'
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                                key={form.key('patientName')}
                                {...form.getInputProps('patientName')}
                            />
                        </Group>

                        <Group
                            style={{
                                flexDirection: 'column',
                                gap: 10,
                                alignItems: "center",
                                marginBottom: "10px",
                                padding: "13px"
                            }}
                        >
                            <TextInput
                                variant="filled"
                                label="Diagnosis:"
                                placeholder="Enter the diagnosis title"
                                size='lg'
                                name='diagnosisTitle'
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                                key={form.key('diagnosisTitle')}
                                {...form.getInputProps('diagnosisTitle')}
                            />

                            <Textarea
                                variant="filled"
                                label="Diagnosis Details:"
                                placeholder="Write the diagnosis details..."
                                size='lg'
                                name='diagnosisTitle'
                                rows={10}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                                key={form.key('diagnosisDetails')}
                                {...form.getInputProps('diagnosisDetails')}
                            />

                            <FileInput
                                variant="filled"
                                label="Diagnosis Image:"
                                placeholder={isEditMode ? "Change the diagnosis image" : "Please select the diagnosis image"}
                                value={fileValue}
                                size='lg'
                                onChange={(file) => {
                                    setFileValue(file);
                                    form.setFieldValue('photoUrl', file ? file.name : '');
                                }}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            />
                        </Group>

                        <Group
                            style={{
                                flexDirection: 'column',
                                gap: 10,
                                alignItems: "center",
                                marginBottom: "10px",
                                padding: "13px"
                            }}>
                            <TextInput
                                variant="filled"
                                label="Lab-Technician ID:"
                                placeholder="Enter the lab-technician id"
                                size='lg'
                                maxLength={7}
                                name='labTechnicianId'
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                                key={form.key('labTechnician.id')}
                                {...form.getInputProps('labTechnician.id')}
                            />

                            <TextInput
                                variant="filled"
                                label="Lab-Technician's Full Name:"
                                placeholder="Enter the lab-technician's full name"
                                size='lg'
                                name='labTechnicianName'
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                                key={form.key('labTechnician.name')}
                                {...form.getInputProps('labTechnician.name')}
                            />
                        </Group>

                        <Group
                            style={{
                                flexDirection: 'column',
                                alignItems: "center",
                                marginBottom: "10px",
                                padding: "13px"
                            }}
                        >
                            <DateInput
                                variant="filled"
                                onChange={(date) => {
                                    setDateValue(date);
                                    form.setFieldValue('reportDate', date ? date.toISOString().split('T')[0] : ''); // ISO formatta tarih
                                }}
                                label="Date:"
                                placeholder={isEditMode ? report.reportDate : 'Enter the date'}
                                size='lg'
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                                key={form.key('reportDate')}
                            />
                        </Group>

                        <Group
                            style={{
                                alignItems: "center",
                                marginBottom: "10px",
                                marginTop: "10px",
                                padding: "13px"
                            }}
                        >
                            <Button
                                style={{
                                    width: "100%",
                                    height: "3rem",
                                    backgroundColor: "#163020"
                                }}
                                type="submit">Submit</Button>
                        </Group>
                    </form>
                </Card>
            </Flex>

        </>
    );
};

export default ReportForm;


import React, { useState } from 'react';
import { Card, Image, Text, Badge, Button, Group, Container, Flex, Box, Title, TextInput, FileInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { useMediaQuery } from '@mantine/hooks';    //responsive yapmak için kullanılan hook --- height'i de 
const AddReport: React.FC = () => {

    const [fileValue, setFileValue] = useState<File | null>(null);
    const [dateValue, setDateValue] = useState<Date | null>(null);


    const isSmallScreen = useMediaQuery('(max-width: 768px)');


    //TODO
    //1- validation işlemleri
    //2- date input style
 







    const form = useForm({
        initialValues: {
            id: null,
            patientName: "",
            patientId: "",
            diagnosisTitle: "",
            diagnosisDetails: "",
            image: "",
            reportDate: "",
            labTechnician: {
                id: "",
                name: ""
            }

        }
    })

    const handleSubmit = () => {
        console.log("submit");
    };

    return (

        <>
            <Flex
                justify="center"
                align="center"
                style={{ backgroundColor: "red", minHeight: '100vh', maxWidth: "100vw" }}>



                <Card shadow="sm" padding="lg" radius="md" withBorder 
                style={{ 
                    backgroundColor: 'yellow', 
                    width: isSmallScreen ? '100vw' : '50vw', 
                    marginTop: isSmallScreen ? '0' : '5rem', 
                    marginBottom: isSmallScreen ? '0' : '5rem' , 
                    }}>
                    <Title size="h2">Add Report</Title>
                    <form onSubmit={form.onSubmit(handleSubmit)}>

                        <Group bg="green" style={{ flexDirection: 'column', gap: 10, alignItems: "center", marginBottom: "10px", padding: "13px" }}>
                            <TextInput
                                label="tc"
                                placeholder="tc"
                                size='lg'


                                style={{
                                    width: "100%",

                                    backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",

                                    padding: "1rem",
                                }}

                            />
                            <TextInput
                                label="name"
                                placeholder="name"
                                size='lg'


                                style={{
                                    width: "100%",

                                    backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",

                                    padding: "1rem",
                                }}
                            />
                        </Group>


                        <Group bg="orange" style={{ flexDirection: 'column', gap: 10, alignItems: "center", marginBottom: "10px", padding: "13px" }}>
                            <TextInput
                                label="tanı"
                                placeholder="titile"
                                size='lg'


                                style={{
                                    width: "100%",

                                    backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",

                                    padding: "1rem",
                                }}
                            />
                            <TextInput
                                label="detail"
                                placeholder="detail"
                                size='lg'


                                style={{
                                    width: "100%",

                                    backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",

                                    padding: "1rem",
                                }}
                            />
                            <FileInput
                                label="Input label"
                                placeholder="Input placeholder" value={fileValue} onChange={setFileValue}
                                size='lg'


                                style={{
                                    width: "100%",

                                    backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",

                                    padding: "1rem",
                                }} />

                        </Group>


                        <Group bg="brown" style={{ flexDirection: 'column', gap: 10, alignItems: "center", marginBottom: "10px", padding: "13px" }}>
                            <TextInput
                                label="laborant no"
                                placeholder="no"
                                size='lg'


                                style={{
                                    width: "100%",

                                    backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",

                                    padding: "1rem",
                                }}

                            />
                            <TextInput
                                label="lab-name"
                                placeholder="name"
                                size='lg'


                                style={{
                                    width: "100%",

                                    backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",

                                    padding: "1rem",
                                }}

                            />
                        </Group>
                        <DateInput       //valueFormat prop'una bak ve dateInput stillendirme
                            value={dateValue}
                            onChange={setDateValue}
                            label="Date input"
                            placeholder="Date input"
                            size='lg'


                            style={{
                                width: "100%",

                                backgroundColor: "red",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",

                                padding: "1rem",
                            }}
                        />

                        <Group bg="brown" style={{ flexDirection: 'column', gap: 10, alignItems: "center", marginBottom: "10px", marginTop: "10px", padding: "13px" }}>
                            <Button style={{
                                width: "100%",
                            }}>Submit</Button>
                        </Group>

                    </form>


                </Card>






            </Flex>









        </>

    );
};

export default AddReport;


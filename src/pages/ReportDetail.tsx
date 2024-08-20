import React from 'react';
import { Card, Image, Text, Badge, Button, Group, Container, Flex, Box, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
const ReportDetail: React.FC = () => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    return (

        <>
            <Flex
                justify="center"
                align="center"
                style={{
                    backgroundColor: "red",
                    minHeight: '100vh',
                    maxWidth: "100vw"
                }}>

                <Card shadow="sm" padding="lg" radius="md" withBorder style={{
                    backgroundColor: 'yellow', width: isSmallScreen ? '100vw' : '90vw',
                    marginTop: isSmallScreen ? '0' : '5rem',
                    marginBottom: isSmallScreen ? '0' : '5rem'
                }}>


                    <Group justify="space-between" mt="md" mb="xs" style={{ backgroundColor: 'green' }}>

                        <Text fw={500}>Dosya Numaras: reportid</Text>
                        <Text fw={500}>Tarih: reportDate</Text>
                    </Group>

                    <Group align='flex-start' mb="xs" style={{ backgroundColor: 'green', flexDirection: 'column', gap: 0 }}>
                        <Text fw={500}>Hasta Tc:</Text>
                        <Text fw={500} fs="3rem">Hasta Ad Soyası</Text>
                    </Group>

                    <Group justify="flex-start" align='flex-start' mb="xs" style={{ backgroundColor: 'orange', flexDirection: 'column', gap: 10 }}>
                        <Title size="h2" style={{ backgroundColor: "red" }}>title</Title>
                        <Image //image conatiner'ı img'yi center'a alıyor.     //IMAGE ORTALAMA STYLE VE FONT FAMILY
                            src="../../brain.jpg"
                            h={200}
                            //fit="contain"      // img continer içinde img'nin yerleştirilmesi
                            //width="auto"
                            alt="brain"
                            style={{ backgroundColor: "blue", width: "30%" }}
                        />
                        <Box bg="red" style={{ padding: "1rem" }}><Text fw={500}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
                            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
                            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?</Text></Box>
                    </Group>


                    <Group align='flex-end' mb="xs" style={{ backgroundColor: 'green', flexDirection: 'column', gap: 0 }}>
                        <Text fw={500}>Laborant No:</Text>
                        <Text fw={500}>Laborant Ad Soyası</Text>
                    </Group>

                </Card>



            </Flex>

        </>

    );
};

export default ReportDetail;

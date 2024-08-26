
import { useNavigate } from 'react-router-dom';
import { Flex, Card, Button, Group, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import '@mantine/notifications/styles.css';

const NotFound: React.FC = () => {

    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

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
                <Card
                    shadow="sm"
                    radius="md"
                    withBorder
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'column',
                        padding: 20,
                        height: isSmallScreen ? '100vh' : '40vh',
                        width: isSmallScreen ? '100vw' : '40vw',
                        marginTop: isSmallScreen ? '0' : '5rem',
                        marginBottom: isSmallScreen ? '0' : '5rem',
                        backgroundColor: '#B6C4B6',
                    }}
                >
                    <Title size="h1" style={{ fontSize: "3rem" }} mx="auto" c="#163020">No authorization found.</Title>

                    <Text mx="auto" c="#163020">This page is not publically available. To access it please login first.</Text>

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
                            onClick={() => navigate('/')}>Return Login Page</Button>
                    </Group>
                </Card>
            </Flex>
        </>

    );
};

export default NotFound;
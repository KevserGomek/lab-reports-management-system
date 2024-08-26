
import { useNavigate } from 'react-router-dom';
import { Flex, Card, Button, Group, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import '@mantine/notifications/styles.css';

const NotFound: React.FC = () => {

    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const currentUser = useSelector((state: RootState) => state.users.currentUser);

    const handleClick = () => {

        if (currentUser) {
            navigate('/reports')
        } else {
            navigate('/')
        }

    }

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
                        height: isSmallScreen ? '100vh' : '50vh',
                        width: isSmallScreen ? '100vw' : '45vw',
                        marginTop: isSmallScreen ? '0' : '5rem',
                        marginBottom: isSmallScreen ? '0' : '5rem',
                        backgroundColor: '#B6C4B6',
                    }}>
                    <Title size="h1" style={{ fontSize: "8rem" }} mx="auto" c="#163020">404</Title>

                    <Text mx="auto" c="#163020">Opss! Page Not Found!</Text>

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
                            onClick={handleClick}>{currentUser ? "Return Reports Page" : "Return Login Page"}</Button>
                    </Group>
                </Card>
            </Flex>
        </>

    );
};

export default NotFound;
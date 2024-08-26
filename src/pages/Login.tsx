import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Card, TextInput, Button, Group, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/usersSlice';
import { RootState } from '../redux/store';
import '@mantine/notifications/styles.css';
import { notifications } from '@mantine/notifications';
import type { AppDispatch } from '../redux/store';

const Login: React.FC = () => {

    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users.users);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const registeredUser = users.find(user =>
            user.username === username && user.password === password);

        if (registeredUser) {
            dispatch(setCurrentUser(registeredUser.id));
            navigate('/reports')
        } else {
            notifications.show({
                title: 'ERROR!',
                message: 'Invalid Username or Password!',
                position: 'top-center',
                color: "red"
            })

            setPassword('');
            setUsername('');
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
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: 20,
                        height: isSmallScreen ? '100vh' : 'auto',
                        width: isSmallScreen ? '100vw' : '45vw',
                        marginTop: isSmallScreen ? '0' : '5rem',
                        marginBottom: isSmallScreen ? '0' : '5rem',
                        backgroundColor: '#B6C4B6',
                    }}
                >
                    <Title size="h1" mx="auto">Login</Title>

                    <form onSubmit={handleSubmit}>
                        <Group
                            style={{
                                flexDirection: 'column',
                                gap: 10,
                                alignItems: "center",
                                marginBottom: "10px",
                                marginTop: "10px",
                                padding: "13px"
                            }}
                        >
                            <TextInput
                                variant='filled'
                                label="Username:"
                                placeholder="Enter Your Username"
                                size='lg'
                                name='username'
                                value={username || ''}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}

                            />
                            
                            <TextInput
                                variant='filled'
                                label="Password:"
                                placeholder="Enter Your Password"
                                size='lg'
                                name='password'
                                value={password || ''}
                                onChange={(e) => setPassword(e.target.value)}
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

export default Login;

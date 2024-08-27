import { useState } from 'react';
import { Burger, Box, Anchor, Drawer, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { clearCurrentUser } from '../redux/slices/usersSlice';

const Navbar: React.FC = () => {

    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const [opened, setOpened] = useState<boolean>(false);
    const currentUser = useSelector((state: RootState) => state.users.currentUser);
    const dispatch = useDispatch();

    const toggleDrawer = () => setOpened((o) => !o);

    const handleLogout = () => {

        dispatch(clearCurrentUser());

    };

    return (

        <>
            <Box
                bg="#163020"
                w='100%'
                h="5rem"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "sticky",
                    top: 0,
                    zIndex: 1
                }}
            >
                <Box
                    h="5rem"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: isSmallScreen ? '100vw' : '90vw',
                        gap: '10px',
                        justifyContent: isSmallScreen ? 'flex-start' : 'space-between'
                    }}
                >
                    <Burger opened={opened} onClick={toggleDrawer} aria-label="Toggle navigation" hiddenFrom='sm' color="white" />

                    <Title order={1} c="white">H O S P I T A L</Title>

                    <Box
                        style={{
                            display: isSmallScreen ? 'none' : 'flex',
                            gap: '40px'
                        }}
                    >
                        {currentUser?.role === 'admin' && (
                            <Anchor href="/add-report" c="white" size='lg'>
                                Add A New Report
                            </Anchor>
                        )}

                        <Anchor href="/reports" c="white" size='lg'>
                            List Report
                        </Anchor>

                        <Anchor href="/" c="white" size='lg' onClick={handleLogout}>
                            Logout
                        </Anchor>
                    </Box>
                </Box>
            </Box>

            <Drawer
                opened={opened}
                onClose={toggleDrawer}
                title="Navigation"
                padding="md"
                size="md"
            >
                {currentUser?.role === 'admin' && (
                    <Anchor href="/add-report" size='lg'>
                        Add A New Report
                    </Anchor>
                )}
                <Anchor href="/reports" style={{ display: 'block', marginBottom: '10px' }}>
                    List Report
                </Anchor>

                <Anchor href="/" style={{ display: 'block', marginBottom: '10px' }} onClick={handleLogout}>
                    Logout
                </Anchor>
            </Drawer>
        </>
    );
};

export default Navbar;



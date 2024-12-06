import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography, Box, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your theme

// Components for each route


const Logout = () => (
    <Typography variant="h6" align="center">
        You have been logged out.
    </Typography>
);

const DashboardHome = () => {
    const [activeComponent, setActiveComponent] = useState('Home'); // State to track active component
    const [username, setUsername] = useState(''); // State to store username
    const navigate = useNavigate(); // Hook for navigation

    // Retrieve the username from localStorage when the component mounts
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const Home = () => (
      <Box
          sx={{
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: 'background.paper',
              borderRadius: '8px',
              boxShadow: 3,
          }}
      >
          <Typography variant="h4" gutterBottom>
             Hi, {username} Welcome to the Admin Panel
          </Typography>
  
      </Box>
  );
    // Function to render the selected component
    const renderComponent = () => {
        switch (activeComponent) {
            case 'Home':
                return <Home />;
            case 'EmployeeList':
                return <EmployeeList />;
            case 'Logout':
                return <Logout />;
            default:
                return <Home />;
        }
    };

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem('auth-token'); // Remove auth token from local storage
        localStorage.removeItem('username'); // Remove username from local storage
        navigate('/'); // Navigate to the home or login page
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.default',
                    padding: '0',
                    margin: '0',
                    color: 'text.primary',
                }}
            >
                {/* Navigation Bar */}
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                            Dashboard
                        </Typography>
                        <Typography variant="h6" sx={{ marginRight: '16px' }}>
                            {username ? `Welcome, ${username}` : 'Welcome, Guest'}
                        </Typography>
                        <Button
                            color="secondary"
                            onClick={() => setActiveComponent('Home')}
                            sx={{
                                margin: '0 8px',
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            color="secondary"
                            onClick={() => setActiveComponent('EmployeeList')}
                            sx={{
                                margin: '0 8px',
                            }}
                        >
                            Employee List
                        </Button>
                        <Button
                            color="secondary"
                            onClick={handleLogout}
                            sx={{
                                margin: '0 8px',
                            }}
                        >
                          
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* Render the active component */}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem',
                    }}
                >
                    {renderComponent()}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default DashboardHome;

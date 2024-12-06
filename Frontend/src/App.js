// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './Login';
// import EmployeeList from './EmployeeList'; // Assuming EmployeeList is your dashboard
// import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute
// import DashboardHome from './Home';


// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 {/* Redirect root path to /login */}
//                 <Route path="/" element={<Navigate to="/login" />} />

//                 {/* Public route for login */}
//                 <Route path="/login" element={<Login />} />

//                 {/* Protected route for dashboard */}
//                 <Route path="/home" element={<DashboardHome />} />
                
//                 <Route
//                     path="/dashboard"
//                     element={
//                         <ProtectedRoute>
//                             <EmployeeList />
//                         </ProtectedRoute>
//                     }
//                 />
//             </Routes>
//         </Router>
//     );
// };

// export default App;

import React from 'react';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import EmployeeList from './EmployeeList';
import ProtectedRoute from './ProtectedRoute';
import DashboardHome from './Home';

// Create a custom theme (optional)
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Customize primary color
        },
        secondary: {
            main: '#dc004e', // Customize secondary color
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Customize font
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<DashboardHome />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <EmployeeList />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;



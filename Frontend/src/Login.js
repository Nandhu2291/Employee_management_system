// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {
//     Container,
//     Typography,
//     TextField,
//     Button,
//     Box,
//     Alert,
//     InputAdornment,
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// const Login = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const [errorMessage, setErrorMessage] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//     const onSubmit = async (data) => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/auth/login', data);
//             const token = response.data.token;

//             // Store token and username in localStorage
//             localStorage.setItem('auth-token', token);
//             localStorage.setItem('username', data.username);

//             // Redirect to dashboard or home page
//             navigate('/home');
//         } catch (err) {
//             setErrorMessage('Invalid login credentials');
//         }
//     };

//     // Function to toggle password visibility
//     const handleClickShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <Container
//             maxWidth="sm"
//             sx={{
//                 marginTop: '150px',
//                 padding: '20px',
//                 backgroundColor: '#f9f9f9',
//                 borderRadius: '8px',
//                 boxShadow: 3,
//             }}
//         >
//             <Typography
//                 variant="h4"
//                 component="h2"
//                 align="center"
//                 sx={{
//                     marginBottom: '20px',
//                     color: 'black', // Set text color to white for better contrast
//                     padding: '10px',
//                     borderRadius: '4px',
//                 }}
//             >
//                 Login
//             </Typography>
            
//             {/* Error message in Alert */}

//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <Box sx={{ marginBottom: '20px' }}>
//                     <TextField
//                         fullWidth
//                         id="username"
//                         label="Username"
//                         variant="outlined"
//                         {...register('username', { required: 'Username is required' })}
//                         error={!!errors.username}
//                         helperText={errors.username ? errors.username.message : ''}
//                     />
//                 </Box>

//                 <Box sx={{ marginBottom: '20px' }}>
//                     <TextField
//                         fullWidth
//                         id="password"
//                         label="Password"
//                         type={showPassword ? 'text' : 'password'}
//                         variant="outlined"
//                         {...register('password', { required: 'Password is required' })}
//                         error={!!errors.password}
//                         helperText={errors.password ? errors.password.message : ''}
//                         InputProps={{
//                             endAdornment: (
//                                 <InputAdornment position="end">
//                                     <Button
//                                         onClick={handleClickShowPassword}
//                                         style={{ color: 'primary.main' }} // Use primary color for the icon
//                                     >
//                                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                                     </Button>
//                                 </InputAdornment>
//                             ),
//                         }}
//                     />
//                 </Box>
//                 {errorMessage && <Alert severity="error">{errorMessage}</Alert>}


//                 <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                         backgroundColor: 'primary.main', // Use primary color for the button
//                         '&:hover': { backgroundColor: 'primary.dark' }, // Darker shade on hover
//                         color: 'white', // Set text color to white for better contrast
//                         marginTop: '20px',
//                     }}
//                 >
//                     Login
//                 </Button>
//             </form>

//         </Container>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Alert,
    InputAdornment,
    Paper,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5001/api/auth/login', data);
            const token = response.data.token;

            // Store token and username in localStorage
            localStorage.setItem('auth-token', token);
            localStorage.setItem('username', data.username);

            // Redirect to dashboard or home page
            navigate('/home');
        } catch (err) {
            setErrorMessage('Invalid login credentials');
        }
    };

    // Function to toggle password visibility
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container
            maxWidth="false"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '100vh', // Full viewport height
                backgroundImage: 'url(https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg)', // Image background
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Bubbles Animation */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -2, // Make sure bubbles are in the background
                    pointerEvents: 'none', // Prevent bubbles from interfering with form interactions
                }}
            >
            </Box>

            {/* Background Blur Layer */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay for the blur effect
                    backdropFilter: 'blur(10px)', // Glassmorphism blur effect
                    zIndex: -1, // Ensures it's behind the content
                }}
            />

            {/* Right Side - Login Form */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                    color: 'white',
                }}
            >
                <Paper
                    elevation={24}
                    sx={{
                        padding: 4,
                        width: '100%',
                        maxWidth: '45%',
                        borderRadius: '15px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(5px)', // Glassmorphism effect
                        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s ease-in-out',
                        marginRight:'35%',
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        align="center"
                        sx={{
                            marginBottom: '20px',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        Login
                    </Typography>

                    {/* Error message in Alert */}
                    {errorMessage && (
                        <Alert severity="error" sx={{ marginBottom: '20px' }}>
                            {errorMessage}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ marginBottom: '16px' }}>
                            <TextField
                                fullWidth
                                id="username"
                                label="Username"
                                variant="outlined"
                                {...register('username', { required: 'Username is required' })}
                                error={!!errors.username}
                                helperText={errors.username ? errors.username.message : ''}
                                sx={{
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderColor: '#ff4081',
                                        '&:hover fieldset': {
                                            borderColor: '#ff4081',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#ff4081',
                                        },
                                        '& input': {
                                            color: 'white',
                                        },
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ marginBottom: '16px' }}>
                            <TextField
                                fullWidth
                                id="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                {...register('password', { required: 'Password is required' })}
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ''}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button
                                                onClick={handleClickShowPassword}
                                                sx={{
                                                    color: '#7032A9',
                                                }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </Button>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderColor: '#ff4081',
                                        '&:hover fieldset': {
                                            borderColor: '#ff4081',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#ff4081',
                                        },
                                        '& input': {
                                            color: 'white',
                                        },
                                    },
                                }}
                            />
                        </Box>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#7032A9',
                                '&:hover': {
                                    backgroundColor: '#f50057',
                                },
                                color: 'white',
                                padding: '12px',
                                fontWeight: 'bold',
                                borderRadius: '8px',
                                marginTop: '20px',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Login
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default Login;

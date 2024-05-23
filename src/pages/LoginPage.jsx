import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';
import Box from '@mui/material/Box';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            setError('Both username and password are required');
            return;
        }
        console.log('Logging in with:', username, password);
        
        // Navega a la página Home después de la lógica de inicio de sesión
        navigate('/home');
        
        setError('');  // Limpiar errores si todo está correcto
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
            <Box
              width="100%"
              maxWidth={360}
              p={2}
              boxShadow={3}
              sx={{
                bgcolor: 'background.paper', // Fondo claro del formulario
                borderRadius: '16px' // Bordes redondeados
              }}
            >
                <h2>Login</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <InputField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <InputField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    <StyledButton>Log In</StyledButton>
                </form>
            </Box>
        </Box>
    );
}

export default LoginPage;

import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
      <Container maxWidth="md">
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            textAlign="center"
            gap={3}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Bem-vindo à Home Page!
          </Typography>
          <Typography variant="body1">
            Esta é uma página inicial que demonstra a navegação entre as telas de listagem e cadastro de pessoas.
          </Typography>
          <Box display="flex" gap={2}>
            <Button variant="contained" color="primary" size="large" onClick={() => navigate('/people')}>
              Listar Pessoas
            </Button>
            <Button variant="contained" color="secondary" size="large" onClick={() => navigate('/people/add')}>
              Cadastrar Nova Pessoa
            </Button>
          </Box>
        </Box>
      </Container>
  );
}

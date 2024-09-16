import { Box, Button, Container, Typography } from "@mui/material";

export default function HomePage(): JSX.Element {
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
          Esta é uma página inicial melhorada para demonstrar como podemos utilizar 
          Material-UI para construir uma interface mais amigável e bonita.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Saiba Mais
        </Button>
      </Box>
    </Container>
  );
}

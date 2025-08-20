import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

function App() {
  return (
    <Container style={{ marginTop: '2em' }}>
      <Header as='h1' textAlign='center'>
        Aplicación de Rick and Morty
      </Header>
    </Container>
  );
}

export default App;

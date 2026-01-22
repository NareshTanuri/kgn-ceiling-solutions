import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sections from './feactures/Section';

function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <Sections />
      <Footer />
    </Box>
  );
}

export default App;

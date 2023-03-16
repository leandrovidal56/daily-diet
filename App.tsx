import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';
import { Routes } from '@routes/index';

export default function App() {
  return (  
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}


import { ThemeProvider } from 'styled-components';
import { Home } from '@screens/Home';
import theme from '@theme/index';
import { Statistic } from '@screens/Statistics';
import { NewEat } from '@screens/NewEat';

export default function App() {
  return (  
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      {/* <Statistic /> */}
      <NewEat />
    </ThemeProvider>
  );
}


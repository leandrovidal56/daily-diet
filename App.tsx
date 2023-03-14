import { ThemeProvider } from 'styled-components';
import { Home } from '@screens/Home';
import theme from '@theme/index';
import { Statistic } from '@screens/Statistics';
import { NewEat } from '@screens/NewEat';
import { FeedBack } from '@screens/FeedBack';
import { FeedBackBad } from '@screens/FeedBackBad';
import { Eat } from '@screens/Eat';
import { EditEat } from '@screens/EditEat';

export default function App() {
  return (  
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      {/* <Statistic /> */}
      {/* <NewEat /> */}
      {/* <FeedBack/> */}
      {/* <FeedBackBad/> */}
      {/* <Eat/> */}
      <EditEat/>
    </ThemeProvider>
  );
}


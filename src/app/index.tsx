import { ThemeProvider } from 'styled-components';
import MainPage from '../pages/MainPage';
import theme from '../theme';
import './styles.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;

import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import MainApp from './Components/MainApp';
import { DarkModeProvider } from './context/mode';

const theme = createTheme({
  palette:{
    secondary:{
      main: '#000000',
    },
  },
})


function App() {
  return (
    <DarkModeProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <MainApp/>
        </div>
      </ThemeProvider>
    </DarkModeProvider>
  );
}

export default App;

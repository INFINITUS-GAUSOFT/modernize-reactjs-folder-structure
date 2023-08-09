import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from './common/config/routes/Router';

import { baselightTheme } from "./common/config/theme/DefaultColors";

function App() {
  const routing = useRoutes(Router);
  const theme = baselightTheme;
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      {routing}

    </ThemeProvider>
  );
}

export default App;

import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import Header from './components/header/Header.tsx'
import { appTheme } from './themes/theme.ts'

function App() {

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <>
        <Header/>
      </>
    </ThemeProvider>
    
  )
}

export default App

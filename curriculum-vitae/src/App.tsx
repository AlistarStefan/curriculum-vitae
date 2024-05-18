import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import Header from './components/header/Header.tsx'
import { appTheme } from './themes/theme.ts'
import About from './components/about/About.tsx'
import Experience from './components/experience/Experience.tsx'

function App() {

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <>
        <Header/>
        <About/>
        <Experience/>
      </>
    </ThemeProvider>
    
  )
}

export default App

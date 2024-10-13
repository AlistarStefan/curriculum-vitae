import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header.tsx";
import { appTheme } from "./themes/theme.ts";
import About from "./components/about/About.tsx";
import Experience from "./components/experience/Experience.tsx";
import Education from "./components/education/Education.tsx";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import { useRef } from "react";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const scrollRefList = [aboutRef, experienceRef, contactRef];

  return (
    // TODO: refactor all sx into css files
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <>
        <Header refList={scrollRefList}/>
        <About refName={aboutRef}/>
        <Experience refName={experienceRef}/>
        <Education />
        <Contact refName={contactRef}/>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

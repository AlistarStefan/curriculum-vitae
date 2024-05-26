import reactLogo from "../../assets/techstack/react.svg";
import celeryLogo from "../../assets/techstack/celery.png";
import cssLogo from "../../assets/techstack/css-3.svg";
import flaskLogo from "../../assets/techstack/flask.svg";
import gitLogo from "../../assets/techstack/git-icon.svg";
import htmlLogo from "../../assets/techstack/html-5.svg";
import javaLogo from "../../assets/techstack/java.svg";
import javascriptLogo from "../../assets/techstack/javascript.svg";
import mavenlogo from "../../assets/techstack/maven.svg";
import pandasLogo from "../../assets/techstack/pandas-icon.svg";
import pythonLogo from "../../assets/techstack/python.svg";
import springLogo from "../../assets/techstack/spring-icon.svg";
import typescriptLogo from "../../assets/techstack/typescript.svg";
import { Grid } from "@mui/material";

function TechStack() {
  const logos = [
    reactLogo,
    typescriptLogo,
    javascriptLogo,
    htmlLogo,
    cssLogo,
    pythonLogo,
    flaskLogo,
    celeryLogo,
    pandasLogo,
    springLogo,
    javaLogo,
    mavenlogo,
    gitLogo,
  ];
  const logoItems = logos.map((logo) => (
    <Grid item xs={3} sx={{ height: 100 }}>
      <img src={logo} />
    </Grid>
  ));
  return (
    <>
      <Grid container spacing={0} sx={{ paddingLeft: 10, paddingRight: 30 }}>
        {logoItems}
        
      </Grid>
    </>
  );
}

export default TechStack;

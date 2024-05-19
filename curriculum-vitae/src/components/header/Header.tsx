import { AppBar, Avatar, Box, Link, Toolbar, Typography } from "@mui/material";
import HeaderCard from "./HeaderCard";
import githubLogo from "../../assets/githubLogo.png";
import linkedinLogo from "../../assets/linkedinLogo.png";
import instaLogo from "../../assets/instaLogo.png";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="a"
              sx={{
                flexGrow: 1,
                paddingLeft: "1em",
              }}
            >
              Alistar Stefan
            </Typography>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Link href="https://github.com/AlistarStefan" target="_blank">
                <img
                  src={githubLogo}
                  alt="GitHub"
                  style={{
                    width: 30,
                    height: 30,
                    cursor: "pointer",
                    marginLeft: 7,
                  }}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/stefan-alistar-8344bb208/"
                target="_blank"
              >
                <img
                  src={linkedinLogo}
                  alt="Linkedin"
                  style={{
                    width: 30,
                    height: 30,
                    cursor: "pointer",
                    marginLeft: 7,
                  }}
                />
              </Link>

              <Link href="https://www.instagram.com/alistarstefan02?igsh=MXZhdjc5Y3h6eTlpdA==" target="_blank">
                <img
                  src={instaLogo}
                  alt="Instagram"
                  style={{
                    width: 30,
                    height: 30,
                    cursor: "pointer",
                    marginLeft: 7,
                  }}
                />
              </Link>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <HeaderCard name="About me" />
              <HeaderCard name="Experience and Education" />
              <HeaderCard name="Contact" />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;

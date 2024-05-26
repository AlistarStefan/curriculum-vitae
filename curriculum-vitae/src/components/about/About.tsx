import { Avatar, Box, Typography } from "@mui/material";
import profilePic from "../../assets/profilePic.png";
import TechStack from "./TechStack";

function About() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10 }}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            marginLeft: 10,
            justifyContent: "center",
            flexGrow: 1
          }}
        >
          <Avatar
            src={profilePic}
            sx={{ width: 250, height: 250, marginRight: 2 }}
          />
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              flexGrow: 1,
              maxWidth: 400,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <TechStack />
        </Box>
      </Box>
    </>
  );
}

export default About;

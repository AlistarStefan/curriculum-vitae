import { CardProject } from "../../mui-treasury/card-project";
import developerLogo from "../../assets/developerLogo.png";
import { Box } from "@mui/material";

function Experience({refName}: any) {
  return (
    <>
    <Box ref={refName}>
      <CardProject
        headerTitle="Experience"
        company="Codemart"
        role="Full-stack Developer"
        logo={developerLogo}
        description="Ce am facut la job, despre proiecte etc."
      />
    </Box>
    </>
  );
}

export default Experience;

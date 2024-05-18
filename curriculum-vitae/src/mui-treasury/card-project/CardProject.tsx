import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoN04Styles } from "../info-n04";

type CardProjectProps = {
  headerTitle: string;
  company: string;
  role: string;
  logo: string;
  description: string;
};

export function CardProject({headerTitle, company, role, logo, description}: CardProjectProps) {
  return (
    <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10, 
        }}>
      <Card
        sx={{
          maxWidth: 600,
          borderRadius: "20px",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          transition: "0.3s",
          alignItems: "center",
          
        }}
      >
        <Box sx={{ minWidth: 256 }}>
          <Box
            sx={{
              padding: `4px 24px 0`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Avatar
              alt={"brand logo"}
              src={logo}
              sx={(theme) => ({
                width: 48,
                height: 48,
                transform: "translateY(50%)",
                "& > img": {
                  margin: 0,
                  backgroundColor: "common.white",
                },
                [theme.breakpoints.up("sm")]: {
                  width: 60,
                  height: 60,
                },
              })}
            />
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: 14,
                color: "grey.500",
                letterSpacing: "1px",
              }}
            >
              {headerTitle}
            </Typography>
          </Box>
          <Box
            component="hr"
            sx={(theme) => ({
              backgroundColor: "grey.200",
              marginBottom: `${24 - 1}px`, // minus 1 due to divider height
              [theme.breakpoints.up("sm")]: {
                marginBottom: `${30 - 1}px`, // minus 1 due to divider height
              },
            })}
          />
        </Box>
        <CardContent sx={{ p: 3 }}>
          <Info useStyles={getInfoN04Styles}>
            <InfoEyebrow>{company}</InfoEyebrow>
            <InfoTitle>{role}</InfoTitle>
            <InfoSubtitle>
              {description}
            </InfoSubtitle>
          </Info>
        </CardContent>
      </Card>
    </Box>
  );
}

import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import HeaderCard from './HeaderCard'

function Header() {

    return(
        <>
        
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6'
                                component='a'
                                sx={{
                                    flexGrow: 1,
                                    paddingLeft: '1em'
                                }}>
                        Alistar Stefan
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
                        <HeaderCard name="About me"/>
                        <HeaderCard name="Experience and Education"/>
                        <HeaderCard name="Contact"/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )

}

export default Header
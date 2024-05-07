import Typography from '@mui/material/Typography'
import './Header.css'

function HeaderCard({name, link}: any) {
    
    return(
        <>
            <Typography variant="h6"
                        component="a"
                        href={link}
                        sx={{ 
                            flexGrow: 0,
                            paddingLeft: "1.5em"
                            }}>
                {name}
            </Typography>
        </>
    )

}

export default HeaderCard
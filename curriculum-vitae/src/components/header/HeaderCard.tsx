import './Header.css'
import { Button } from '@mui/material'

function HeaderCard({name}: any) {
    
    return(
        <>
            <Button sx={{color: '#fff'}}>
                {name}
            </Button>
        </>
    )
}

export default HeaderCard
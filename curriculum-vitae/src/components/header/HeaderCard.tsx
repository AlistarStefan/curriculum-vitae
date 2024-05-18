import { Button } from '@mui/material'

type HeaderCardProps = {
    name: string;
};

function HeaderCard({name}: HeaderCardProps) {
    
    return(
        <>
            <Button sx={{color: '#fff'}}>
                {name}
            </Button>
        </>
    )
}

export default HeaderCard
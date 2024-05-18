import { Box, Card, CardContent, Grid, TextField, Typography } from "@mui/material"

function Contact() {
    return(

        <>
        <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10
                }}>
            <Card sx={{width: 500}}>
                <CardContent>
                    <Typography variant='h5' sx={{paddingBottom: 1}}>
                        Contact
                    </Typography>
                <form>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField label='First name' placeholder='Enter first name' variant='outlined' fullWidth required></TextField>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField label='Last name' placeholder='Enter last name' variant='outlined' fullWidth required></TextField>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label='Email' placeholder='Enter email name' variant='outlined' fullWidth required></TextField>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label='Phone number' placeholder='Enter phone number name' variant='outlined' fullWidth required></TextField>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label='Message' placeholder='Leave me a message' variant='outlined' fullWidth required></TextField>
                        </Grid>
                    </Grid>
                </form>
                </CardContent>
            </Card>
        </Box>
        </>
    )
}

export default Contact
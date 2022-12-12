import React from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import DoneIcon from '@mui/icons-material/Done';

type props = {
    isDone?: boolean
}

export const AdminCartItem:React.FC<props> = ({isDone = true}: props) => {
    return (
        <Grid xs={12} md={3}>
            <Card>
                <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography gutterBottom variant="h5" component="div">
                            Order: 213
                        </Typography>
                        {isDone && <DoneIcon color='success' fontSize='large'/>}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        customer: asdfaslk fdfgd
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        pohone: 12456789
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        payment: card(success)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        date: 23, 32
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">show details</Button>
                    <Button size="small">done!</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};


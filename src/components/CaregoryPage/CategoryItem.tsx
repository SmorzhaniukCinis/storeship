import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import {useNavigate} from "react-router-dom";
import {Paper, styled} from "@mui/material";

type props = {
    category: { name: string, url: string, pageLink: string },
}

export const CategoryItem: React.FC<props> = ({category}: props) => {

    const navigate = useNavigate()

    const Category = styled(Paper)(({theme}) => ({
        color: 'black',
        padding: theme.spacing(1),
        height: 200,
        textAlign: 'center',
        cursor: 'pointer',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: `${theme.transitions.create(['background-color', 'transform', 'opacity'], {
            duration: theme.transitions.duration.standard,
        })}`,
        opacity: 0.6,
        '&:hover': {
            transitions: '0.5 s',
            opacity: 0.8,
            backgroundColor: 'rgb(26,32,39, 0.8)',
            transform: `scale(1.03)`
        }
    }));

    return (
        <Grid key={category.name} xs={12} sm={6}>
            <Category onClick={() => navigate(category.pageLink)} elevation={20}
                      sx={{backgroundImage: `url(${category.url})`}}>
                <Typography sx={{fontSize: 45, backgroundColor: 'rgba(252,248,248,0.5)'}}>
                    {category.name}
                </Typography>
            </Category>
        </Grid>
    );
};


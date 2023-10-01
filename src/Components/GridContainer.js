import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const imgsrcs = ["./nike.jpeg", "./adidas.jpg", "./tommy.jpg"];
export default function ResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 0 }} columns={{ xs: 4, sm: 4, md: 40 }}>
                {imgsrcs.map((imgsrc) => (
                    <Grid item xs={10} sm={40} md={10}>
                        <Item>
                            <img
                                style={{
                                    borderRadius: "10px",
                                    aspectRatio: "1/1",
                                    objectFit: "contain",
                                    height: "90px",
                                }}

                                src={imgsrc} alt="img" width="100%" height="100%" />
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

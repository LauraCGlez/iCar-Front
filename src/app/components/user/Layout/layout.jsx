import React from 'react'
import {Grid} from "@mui/material";

const layout = ({children}) => {
    return (
        <div className='h-screen'>
            <Grid container>
                <Grid item xs={12} md={8} lg={5}>left part</Grid>
                <Grid className='h-screen w-full' xs={0} md={4} lg={7}>
                    <img className='w-full h-full object-cover object-right-top' src={} alt={}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default layout;
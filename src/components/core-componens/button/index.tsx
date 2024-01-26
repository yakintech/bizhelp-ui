import React from 'react'
import { Button as MuiButton } from '@mui/material'


//Mui buttondaki tüm propları alıp ButtonProps a miras veriyorum
interface ButtonProps extends React.ComponentProps<typeof MuiButton> {
    //Add additional prop definitions here
    backColor?: 'red' | 'blue' | 'green';
}



const BYZButton = (props: ButtonProps) => {

    return (
        <MuiButton
            style={
                { backgroundColor: props.backColor }
            }
            variant='outlined'
            {...props}
        >
            {props.children}
        </MuiButton>
    )
}


export default BYZButton
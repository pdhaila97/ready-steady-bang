import React from "react";
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
import StyledButton from "./StyledButton";

interface ITwoPlayerProps {
    [x:string]: any;
}

function TwoPlayer (props: ITwoPlayerProps) {


    return (
        <Box height={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography variant="h4">Coming Soon...</Typography>
            <Box py={1} />
            <StyledButton 
            variant="contained"
            color="secondary" onClick={() => props.history.goBack()}>
                <Typography variant="h6">Go Back</Typography>
            </StyledButton>
        </Box>
    )
} 

export default TwoPlayer;
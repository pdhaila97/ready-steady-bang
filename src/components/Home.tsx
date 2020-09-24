import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
import StyledButton from "./StyledButton";
interface IHomeProps {
    [x: string] : any;
}


function Home (props: IHomeProps) {

    const [showOptions, setShowOptions] = useState(false);

    const handleClick = (mode: "start" | "1P" | "2P") => {
        switch (mode) {
            case "start":
                setShowOptions(true);
                break;

            case "1P":
                props.history.push("/1P");
                break;

            case "2P":
                props.history.push("/2P");
                break;

            default:
                break;
        }
    }

    return (
        <>
        {!showOptions && <FirstPage handleClick={handleClick} />}
        {showOptions && <SecondPage handleClick={handleClick} />}
        </>
    )
} 

function FirstPage(props: {handleClick: (mode: any) => void}) {
    return (
        <Box height={1} display="flex" justifyContent="center" alignItems="center">
            <StyledButton
                variant="contained"
                color="secondary"
                onClick={() => props.handleClick("start")}
            >
                <Typography variant="h6">
                    Let's Go!
                </Typography>
            </StyledButton>
        </Box>
    )
}

function SecondPage(props: {handleClick: (mode: any) => void}) {
    return (
        <Box height={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box pb={5}>
                <Typography variant="h4">
                    Choose Mode: 
                </Typography>
            </Box>
            <StyledButton
                variant="contained"
                color="secondary"
                onClick={() => props.handleClick("1P")}
            >
            <Typography variant="h6">
                1 Player
            </Typography>
            </StyledButton>
            <Box py={1}/>
            <StyledButton
                variant="contained"
                color="secondary"
                onClick={() => props.handleClick("2P")}
            >
            <Typography variant="h6">
                2 Player
            </Typography>
            </StyledButton>
        </Box>
    )
}

export default Home;
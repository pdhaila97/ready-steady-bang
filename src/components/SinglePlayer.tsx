import React, { useEffect, useState } from "react";
import Box from '@material-ui/core/Box';
import ClientMessage from "./ClientMessage";
import { Typography, useTheme } from "@material-ui/core";
import ReadySteadyBang from "./ReadySteadyBang";
import { showClientMessage } from "../services/client";
import { getAvgTime } from "../services/calcs";
import StyledButton from "./StyledButton";

interface ISinglePlayerProps {
    [x:string]: any;
}

function SinglePlayer (props: ISinglePlayerProps) {

    return (
        showClientMessage() ? (
            <ClientMessage {...props}/>) 
            : 
            <SinglePlayerGame {...props}/>
    )
}

function SinglePlayerGame(props: ISinglePlayerProps) {
    const theme = useTheme();
    const [isClickScoreable, setIsClickScoreable] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(0);
    const [reactionTime, setReactionTime] = useState<number>(0);
    const [illegalMove, setIllegalMove] = useState<boolean>(false);
    const [reactionTimes, setReactionTimes] = useState<Array<number>>([]);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const attemptsLimit = 5;

    const handleClick = () => {
        if(!gameOver) {
            if(isClickScoreable && !illegalMove) {
                const rTime = Date.now() - timer;
                setReactionTime(rTime);
                setIsClickScoreable(false);
            } else {
                setIllegalMove(!illegalMove);
                setReactionTime(0);
            }
        }
    }

    useEffect(() => {
        if(isClickScoreable) {
            setTimer(Date.now());
        }
    }, [isClickScoreable]);

    useEffect(() => {
        if(reactionTime !== 0) {
            setReactionTimes((reactionTimes) => [...reactionTimes, reactionTime]);
        }
        if(reactionTimes.length === attemptsLimit) {
            setGameOver(true);
        }
    }, [reactionTime]);

    return (
    <Box height={1} display="flex" justifyContent="center" alignItems="center" onClick={handleClick}>
        {!gameOver && <Box width={1} height="10%" textAlign="center" display="flex" alignItems="center" justifyContent="center" minHeight={8}>
            {reactionTime === 0 && !illegalMove && <ReadySteadyBang bgcolor={theme.palette.grey[200]} setIsClickScoreable={setIsClickScoreable}/>}
            {reactionTime !== 0 && !isClickScoreable && <Typography variant="subtitle1">{reactionTime} ms</Typography>}
        </Box>}
        {gameOver && <Box width={1} textAlign="center">
            <Typography variant="subtitle1">Your average reaction time was {getAvgTime(reactionTimes)} ms</Typography>
            <Box pt={1} pb={3}>
                <Typography variant="h6">{getAvgTime(reactionTimes) > 300 ? "You can do better!" : "Well Done!"}</Typography>
            </Box>
            <StyledButton variant="contained"
            disableRipple 
            color="secondary"
            onClick={() => props.history.go(0)}
            >
                <Typography variant="h6">Try Again</Typography>
            </StyledButton>
        </Box>}
    </Box>
    )
}

export default SinglePlayer;
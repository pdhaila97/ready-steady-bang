import { Box, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";

interface IReadySteadyBang {
    timer?: number;
    bgcolor?: string;
    randomTimerLimit?: number;
    setIsClickScoreable: any;
}

function ReadySteadyBang(props: IReadySteadyBang) {
    const [state, setState] = useState<"Ready" | "Steady" | "Bang!">("Ready");
    const defaultTimer = props.timer || 2000;
    const randomTimerLimit = 200 + Math.random()*((props.randomTimerLimit || 5000) - 200);
    const setIsClickScoreable = props.setIsClickScoreable;

    useEffect(() => {
        setTimeout(() => {
            setState("Steady");
        }, defaultTimer);
    }, [defaultTimer]);

    useEffect(() => {
        let timer: number;
        if(state === "Steady") {
            timer = setTimeout(() => {
                setIsClickScoreable(true);
                setState("Bang!");
            }, randomTimerLimit)
        }
        return function() {
            timer && clearTimeout(timer);
        }
    }, [state, randomTimerLimit, setIsClickScoreable]);

    return (
        <Box minHeight={8} bgcolor={props.bgcolor} height={1} width={1} display="flex" justifyContent="center" alignItems="center">
            <Typography variant={state === "Bang!" ? "h3" : "h6"}>{state}</Typography>
        </Box>
    )

}

export default ReadySteadyBang;
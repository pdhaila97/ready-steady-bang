
import React from "react";
import { Box, Button, MobileStepper, Typography, useTheme } from "@material-ui/core";
import SwipeableViews from 'react-swipeable-views';
import clientMessages from "../utils/clientMessages";
import styled from 'styled-components';
import Icon from "./Icon";
import IconName from "../utils/icon-enum";
import { setClientInfo } from '../services/client'

const StyledSwipeableViews = styled(SwipeableViews)`
    height: 100%;
    display: flex;
    justify-content: center;
`;

const StyledMobileStepper = styled(MobileStepper)`
width:100%;
`;

function ClientMessage(props: any) {
    
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = clientMessages.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleBegin = () => {
        setClientInfo();
        props.history.go(0);
    }
  
    const handleStepChange = (step: number) => {
      setActiveStep(step);
    };
  
    return (
      <Box height={1} display="flex" flexDirection="column" justifyContent="space-around" alignItems="center">
        <Box height="100%" px={2}>
          <StyledSwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
          >
              {clientMessages.map((step, index) => (
              <Box textAlign="center" height="60%" display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center">
                <Box pb={4} display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center">
                    {step.label}
                </Box>
                {activeStep !== maxSteps - 1 && <Box pt={4}>
                    {step.icon}
                </Box>}
                {activeStep === maxSteps - 1 && <Box pt={4} onClick={handleBegin}><Typography variant="h6">Start Playing</Typography></Box>}
              </Box>
              ))}
          </StyledSwipeableViews>
        </Box>
        <StyledMobileStepper
          steps={maxSteps}
          position="bottom"
          variant="progress"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps-1}>
              {theme.direction === 'rtl' ? <Icon item={IconName.KeyboardArrowLeft} /> : <Icon item={IconName.KeyboardArrowRight} />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <Icon item={IconName.KeyboardArrowRight} /> : <Icon item={IconName.KeyboardArrowLeft} />}
            </Button>
          }
        />
      </Box>
    );
  }

  export default ClientMessage;
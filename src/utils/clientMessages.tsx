import { List, Typography } from "@material-ui/core";
import React from "react";
import Icon from "../components/Icon";
import IconName from "./icon-enum";

interface IClientMessage {
    label: any;
    icon: any;
}
const clientMessages: Array<IClientMessage>= [
    {
      label: <Typography variant="body1">Hey there! Lets begin by teaching you how to play this game on your own!</Typography>,
      icon: <Icon item={IconName.PanToolIcon} fontSize="large" />
    },
    {
      label: <Typography variant="body1">You'll only get to read all this once... So pay attention! It's really simple.</Typography>,
      icon: <Icon item={IconName.DonutLargeRoundedIcon} fontSize="large"/>
    },
    {
      label: <Typography variant="body1">You'll see the following words on screen<List>'Ready', 'Steady', 'Bang!'</List></Typography>,
      icon: <Icon item={IconName.AirlineSeatReclineExtraIcon} fontSize="large"/>
    },
    {
      label: <Typography variant="body1">'Ready', 'Steady' will appear at a fixed interval of 2 seconds. 'Bang!' however, will come after a random interval of time. Tap on the screen as soon as you see 'Bang!'</Typography>,
      icon: <Icon item={IconName.TimelineRoundedIcon} fontSize="large"/>
    },
    {
      label: <Typography variant="body1">Have fun playing and smash that screen of yours! All the best!</Typography>,
      icon: <Icon item={IconName.ThumbUpIcon} fontSize="large"/>
    }
];

export default clientMessages;
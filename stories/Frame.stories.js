import React from "react";
import { select, text } from "@storybook/addon-knobs";
import Frame from "../components/Queue/Frame";

export default {
    title: "Frame",
    component: Frame,
};

export const frame = () => {
    const trackID = text(
      "Track ID",
      "4sPmO7WMQUAf45kwMOtONw"
    );
    return <Frame trackID={trackID} />;
};
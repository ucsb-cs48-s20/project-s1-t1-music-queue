import React from "react";
import { select, text } from "@storybook/addon-knobs";
import RoomCode from "../components/Page/RoomCode";


export default {
    title: "RoomCode",
    component: RoomCode,
  };


  export const roomcode = () => {
    
    const choose = select("roomKey", [0, 1222222], 0);

    return <RoomCode roomKey={choose} />;
  };
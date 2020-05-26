import React from "react";
import { select, text } from "@storybook/addon-knobs";
import TableRow from "../components/Queue/TableRow";

export default {
    title: "TableRow",
    component: TableRow,
};

export const tablerow = () => {
    const key = 1
    const name = text("Name", "Hello");
    const trackID = text(
        "Track ID",
        "4sPmO7WMQUAf45kwMOtONw"
    );
    const score = text("Score", "5");
    const imgUrl = text(
        "Image URL",
        "https://i.scdn.co/image/ab67616d0000b2734c3bbcff5e7248e415548f12"
    );
    const rank = text("Rank", "0");
    
    return <TableRow
                key={key}
                name={name}
                trackID={trackID}
                score={score}
                img={imgUrl}
                mutate={async () => await mutate()}
                rank={rank}
            />;
};
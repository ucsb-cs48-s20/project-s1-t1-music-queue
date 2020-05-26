import React from "react";
import { select, text } from "@storybook/addon-knobs";
import Results from "../components/Search/Results";

export default {
    title: "Results",
    component: Results,
};

export const results = () => {
    const index = 0
    const name = text("Name", "Hello");
    const imgUrl = text(
      "Image URL",
      "https://i.scdn.co/image/ab67616d0000b2734c3bbcff5e7248e415548f12"
    );
    return <Results key={index} imageURL={imgUrl} name={name} />;
};
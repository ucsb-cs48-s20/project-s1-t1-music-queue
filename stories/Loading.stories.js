import React from "react";
import Loading from "../components/Page/Loading";
import { select, text } from "@storybook/addon-knobs";

export default {
    title: "Loading",
    component: Loading,
  };


  export const loading = () => {
    const choose = select("message", ["Loading Songs ... ", "Deleting MusicQ ..."] , "Loading Songs ... ");
    return <Loading message={choose} />;
  };
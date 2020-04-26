import React from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Retrieve from "../pages/Retrieve";

const index = () => {
  return (
    <Layout>
      <Input />
      <Retrieve />
    </Layout>
  );
};

export default index;

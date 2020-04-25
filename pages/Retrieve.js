import Layout from "../components/Layout";
import useSWR from "swr";
import { fetch } from "../utils/fetch";

export default function Retrieve() {
  // swr returns a data and error parameter
  const { data, error } = useSWR("/api/all", fetch, {
    // By default, useSWR will call the endpoint we specified (in this case, /api/all) every time we click away from
    // the page. This can be really useful if we want to make sure the web app is always showing the latest data,
    // but in this case, we don't need that behavior. See what happens if you set these options to true or remove them!
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  if (error) {
    return (
      <Layout>
        {" "}
        <div>Failed to load</div>
      </Layout>
    );
  }

  if (!data) {
    return (
      <Layout>
        {" "}
        <div>Loading</div>
      </Layout>
    );
  }

  // {data} can't do this with Javascript objects
  return (
    <Layout>
      <div>{JSON.stringify(data)}</div>
    </Layout>
  );
}

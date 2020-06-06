import Head from "next/head";
import Icon from "./Icon";

const Layout = props => (
  <div>
    {/*imports css from bootstrap */}
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
          rel="stylesheet"
        />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.bundle.min.js"></script>
      {/*<script src="https://sdk.scdn.co/spotify-player.js"></script>
      <script>
         window.onSpotifyWebPlaybackSDKReady = () =>{" "}
        {
          // You can now initialize Spotify.Player and use the SDK
        }
        ; 
      </script>*/}
    </Head>
  </div>
    {/* Icon renders MusicQ icon */}
    <Icon />

    {/* Render search functionality */}
    <div className="container">
      <div className="col-md-12 mt-5">{props.children}</div>
    </div>
  </div>
);

export default Layout;

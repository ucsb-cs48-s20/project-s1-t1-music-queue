import { render } from "react-dom";
import Router from "next/router";

function Logout()
{
    const logout = async () => {
        // Go back to the login screen
        Router.push({
          pathname: "/Login",
        });
    };

return(
    <button className = "btn btn-outline-success btnLogout"
          style={{
            padding: 16,
            display: "block",
            textAlign: "center",
            position: "absolute",
            top: 20,
            right: 20
          }}
          onClick={() => logout()}>
          Logout of Spotify
        </button>
    )
}

export default Logout;
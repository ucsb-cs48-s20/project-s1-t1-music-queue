import Router from "next/router";

export function getAccessToken() {
    
    let url = window.location.href;
    if (url.indexOf("_token") > -1) {
      let access_token = url
        .split("_token=")[1]
        .split("&")[0]
        .trim();
        return (access_token);
    }
    
  }

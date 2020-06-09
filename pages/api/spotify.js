import { fetch } from "../../utils/fetch";

export default async function (req, res) {
  console.log(req.body.trackID);
  // authCode is the access token
  const authCode = req.body.access_token;

  const headers = {
    Authorization: "Bearer " + authCode,
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  const body = {
    // req.query.id is the trackID of the song we now want to play
    uris: [
      "spotify:track:" + req.body.trackID,
      "spotify:track:" + req.body.trackID
    ]
    // offset: {
    //     position: 3,
    // },
  };

  const options = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: headers
  };

  const response = await fetch(
    "https://api.spotify.com/v1/me/player/play",
    options
  );

  const output = { status: "Success" };

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(output));
}

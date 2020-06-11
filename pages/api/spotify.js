import { fetch } from "../../utils/fetch";

export default async function (req, res) {
  // authCode is the access token
  const authCode = req.body.access_token;

  const headers = {
    Authorization: "Bearer " + authCode,
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  const body = {
    // req.body.trackID is the trackID of the song we now want to play
    uris: ["spotify:track:" + req.body.trackID]
  };

  const options = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: headers
  };

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/play",
      options
    );
  } catch (err) {}

  const output = { status: "Success" };
  console.log(output);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(output));
}

import { initDatabase } from "../../utils/mongodb";
import { reject } from "q";

// async api endpoint to create a new song
// handles the case where a dupicate song is attempted to be added
export default async function (req, res) {
  const song = req.body.song;
  const collection = req.body.collection;
  // if the song passed is null
  // deal with this edge case
  if (!song) {
    throw {
      status: 400,
      message: "song was not found"
    };
  }
  // create MongoDB client as well as reference to MongoDB collection
  const client = await initDatabase();
  const users = client.collection(collection + "");

  // delete the song from the database
  try {
    users.deleteOne({ trackID: song.trackID }); // Unhandled Promise Rejection
  } catch (err) {
    console.log("err with deleting song ");
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({}));
}

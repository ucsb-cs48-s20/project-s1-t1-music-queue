import { initDatabase } from "../../utils/mongodb";
import { reject } from "q";

// async api endpoint to create a new song
// handles the case where a dupicate song is attempted to be added
async function deleteSong(req, res) {
  const song = req.body;
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
  const users = client.collection(song.collection + "");

  // delete the song from the database

  try {
    users.deleteOne({ trackID: song.trackID });
  } catch (err) {
    console.log("err with deleting song ");
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end();
}

async function performAction(req, res) {
  if (req.method == "DELETE") {
    return deleteSong(req, res);
  }
  // request is not a DELTE;
  // in the context of this spike throw an exception but
  // in the full application you should also write out a delete
  // note: status 405 stands for indicating that the specified request HTTP method was received and recognized by the server,
  // but the server has rejected that particular method for the requested resource.
  throw { status: 405 };
}

export default performAction;

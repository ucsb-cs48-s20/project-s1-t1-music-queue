import { initDatabase } from "../../utils/mongodb";

// async api endpoint to create a new song
// handles the case where a dupicate song is attempted to be added
async function updateSong(req, res) {
  const query = req.body.song;
  // if the song passed is null
  // deal with this edge case
  if (!query) {
    throw {
      status: 400,
      message: "song was not found"
    };
  }

  // create MongoDB client as well as reference to MongoDB collection
  const client = await initDatabase();
  const users = client.collection("song_name");

  // first search for document in MongoDB database that matches query.
  // Query is the name of the song.
  // If none is found, document with mutation is added as it is simply
  // either adding a tag to an exisiting document or creating a new one.
  const result = await users.updateOne(
    { song: { song: query } },
    {
      $set: { score: req.body.score }
    }
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ result }));
}

async function performAction(req, res) {
  if (req.method == "PUT") {
    return updateSong(req, res);
  }
  // request is not a GET or PUT;
  // in the context of this spike throw an exception but
  // in the full application you should also write out a delete
  // note: status 405 stands for indicating that the specified request HTTP method was received and recognized by the server,
  // but the server has rejected that particular method for the requested resource.
  throw { status: 405 };
}

export default performAction;

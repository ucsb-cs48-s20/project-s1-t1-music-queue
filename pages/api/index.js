import { initDatabase } from "../../utils/mongodb";

// async api endpoint to retrieve all songs
export async function getSongs() {
  const client = await initDatabase();
  const users = client.collection("song_name");
  return users.find({}).toArray(); // { } document returns ALL documents in database
}

// async api endpoint to create a new song
// handles the case where a dupicate song is attempted to be added
async function createSong(req) {
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
  const users = client.collection("song_name");

  // set name to be of song
  const toAdd = {
    song,
    _id: song.song
  };

  const mutation = {
    // if a document with this song already exisits, simply over-write it for now;
    // this is functionality only for the spike
    $setOnInsert: {
      song
    }
  };

  // first search for document in MongoDB database that matches query.
  // If none is found, document with mutation is added as it is simply
  // either adding a tag to an exisiting document or creating a new one.
  const result = await users.findOneAndUpdate(toAdd, mutation, {
    upsert: true, // allows for insertion of new document
    returnOriginal: false
  });
  console.log(result.value);
  return result.value; // return the song object
}

async function performAction(req) {
  console.log("server got the request! " + req.method);
  if (req.method == "GET") {
    return getSongs();
  } else if (req.method == "POST") {
    return createSong(req);
  }
  console.log("requesting endpoing " + req.method);

  // request is not a GET or POST;
  // in the context of this spike throw an exception but
  // in the full application you should also write out a delete
  // note: status 405 stands for indicating that the specified request HTTP method was received and recognized by the server,
  // but the server has rejected that particular method for the requested resource.
  throw { status: 405 };
}

export default performAction;

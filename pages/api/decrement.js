import { initDatabase } from "../../utils/mongodb";

// async api endpoint to create a new song
// handles the case where a dupicate song is attempted to be added
async function decrementSong(req, res) {
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

  // let doc = await users.find({ trackID: song.trackID });
  // console.log(doc);
  // upvoteArr = doc.upvoteArr;
  // downvoteArr = doc.downvoteArr;
  // console.log(upvoteArr);
  // console.log(downvoteArr);

  // var index = array.indexOf(song.userID);
  // if (index !== -1) array.splice(index, 1);

  // find document with song name and decrement the score
  const result = await users.findOneAndUpdate(
    { trackID: song.trackID },
    {
      $inc: { score: -1 },
      $pull: { upvote: { $in: [song.userID] } }, // pull userID from upvoteArray
      $push: { downvote: song.userID }
    }
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ result }));
}

async function performAction(req, res) {
  if (req.method == "PUT") {
    return decrementSong(req, res);
  }
  // request is not a GET or POST;
  // in the context of this spike throw an exception but
  // in the full application you should also write out a delete
  // note: status 405 stands for indicating that the specified request HTTP method was received and recognized by the server,
  // but the server has rejected that particular method for the requested resource.
  throw { status: 405 };
}

export default performAction;

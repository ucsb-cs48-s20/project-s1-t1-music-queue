import { initDatabase } from "../../utils/mongodb";

// async api endpoint to retrieve all songs
export default async function(req, res) {
  console.log("requesting all documents ... ");

  const client = await initDatabase();
  const users = client.collection("song_name");
  const result = await users.find().toArray(); // { } document returns ALL documents in database

  console.log(result);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ result }));
}

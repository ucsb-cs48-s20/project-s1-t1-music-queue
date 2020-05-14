import { initDatabase } from "../../utils/mongodb";

// async api endpoint to retrieve all songs
export default async function(req, res) {
  const client = await initDatabase();
  const users = client.collection(req.query.id + "");
  const result = await users.find().toArray();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ result }));
}

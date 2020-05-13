import { initDatabase } from "../../utils/mongodb";

// async endpoint that queries if collection is within MongoDB database
// returns true if song does exist; false otherwise
export default async function(req, res) {
  const db = await initDatabase();
  const collections = await db.listCollections().toArray();
  // map all names of collections to be returned
  const result = collections.map(item => item.name);

  console.log("collections api endpoint respose: " + result);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ result }));
}

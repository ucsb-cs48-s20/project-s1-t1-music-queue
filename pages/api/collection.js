import { initDatabase } from "../../utils/mongodb";

// async endpoint that queries if collection is within MongoDB database
// returns true if song does exist; false otherwise
export default async function(req, res) {
  const db = await initDatabase();
  const collections = await db.listCollections().toArray();
  // map all names of collections to be returned
  const collectionArr = collections.map(item => item.name);
  let result = false;
  if (collectionArr.includes(req.query.id)) {
    result = true;
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ result }));
}

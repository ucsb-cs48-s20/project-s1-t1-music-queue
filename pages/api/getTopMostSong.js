import { initDatabase } from "../../utils/mongodb";

export default async function(req, res) {
  const client = await initDatabase();
  let result = client.collection(req.body.collection).findOne({$query:{},$orderby:{score:-1}});
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ result }));
}
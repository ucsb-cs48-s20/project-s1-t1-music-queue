import { initDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const name = req.body.name;
    const user = await initDatabase();
  //db.createCollection('test', function(err, collection) {});
  await user.createCollection(String(name));
  res.end("{}");
}
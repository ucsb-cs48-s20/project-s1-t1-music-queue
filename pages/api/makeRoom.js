import { initDatabase } from "../../utils/mongodb";

export default async function makeRoom(req, res) {
  const name = req.body.name;
    console.log("name" + name);
    const user = await initDatabase();
  //db.createCollection('test', function(err, collection) {});
  user.createCollection((name) => {
    if (name) console.log("Collection added");
  });
  res.end();
}
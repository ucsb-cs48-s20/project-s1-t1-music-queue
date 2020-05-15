import { initDatabase } from "../../utils/mongodb";

export default async function (req, res) {
    console.log("name" + name);
    const client = await initDatabase();
  //db.createCollection('test', function(err, collection) {});
  client.createCollection((name) => {
    if (name) console.log("Collection added");
  });
  res.end();
}
import { initDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const client = await initDatabase();
  client.collection(req.body.collection).drop((err, delOK) => {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
  });
  res.end();
}

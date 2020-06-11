import { initDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const client = await initDatabase();
  client.collection(req.body.collection).drop((err, delOK) => {
    if (err) {
      console.log("");
    }
  });
  res.end();
}

import dbConnect from "@/db/conn";
import Tournament from "@/models/Tournament";


export default async function handler(req, res) {
  try {
    const { method, query } = req;
    await dbConnect();

    switch (method) {
      case 'GET':
        let tournaments;

        tournaments = await Tournament.find()
        return res.json(tournaments)

      case 'POST':
        // Create Tournament
        return await createTournament(req, res);

      default:
        return res.status(404).end(`Method ${method} Not Allowed`)
    }
  } catch (error) {
    console.log({ error })
    return res.status(401).end(error?.message || "Something went wrong")
  }
}

const createTournament = async (req, res) => {
  const data = req.body;
  let newTournament = await Tournament.create({ ...data });
  return res.json(newTournament)
}


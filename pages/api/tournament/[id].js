import dbConnect from "@/db/conn";
import Tournament from "@/models/Tournament";


export default async function handler(req, res) {
  try {
    const { method, query } = req;
    const { id } = query;

    await dbConnect();

    switch (method) {
      case 'GET':
        let tournaments;

        tournaments = await Tournament.findOne({ _id: id })
        if (!tournaments) {
          return res.status(401).json({
            message: "Invalid Tournament Id"
          })
        }

        return res.json(tournaments)

      case 'PATCH':
        return await updateTournament(req, res)

      default:
        return res.status(404).end(`Method ${method} Not Allowed`)
    }
  } catch (error) {
    console.log({ error })
    return res.status(401).end(error?.message || "Something went wrong")
  }
}

const updateTournament = async (req, res) => {
  const data = req.body;
  const { id } = req.query
  await Tournament.updateOne({ _id: id }, { ...data });
  return res.end("Update Successfully")
}
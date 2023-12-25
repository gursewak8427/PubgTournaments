import dbConnect from "@/db/conn";
import Tournament from "@/models/Tournament";
import User from "@/models/User";


export default async function handler(req, res) {
    try {
        const { method, query } = req;
        await dbConnect();

        switch (method) {
            case 'GET':
                let users;

                users = await User.find()
                return res.json(users)

            case 'POST':
                // Create Tournament
                return await createUser(req, res);

            default:
                return res.status(404).end(`Method ${method} Not Allowed`)
        }
    } catch (error) {
        console.log({ error })
        return res.status(401).end(error?.message || "Something went wrong")
    }
}

const createUser = async (req, res) => {
    const data = req.body;
    let newTournament = await User.create({ ...data });
    return res.json(newTournament)
}


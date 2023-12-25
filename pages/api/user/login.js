import dbConnect from "@/db/conn";
import Tournament from "@/models/Tournament";
import User from "@/models/User";


export default async function handler(req, res) {
    try {
        const { method, query } = req;
        await dbConnect();

        switch (method) {
            case 'POST':
                // Create Tournament
                return await loginUser(req, res);

            default:
                return res.status(404).end(`Method ${method} Not Allowed`)
        }
    } catch (error) {
        console.log({ error })
        return res.status(401).end(error?.message || "Something went wrong")
    }
}


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: "User not found" })
    }
    if (user?.password != password) {
        return res.status(401).json({ message: "Password is wrong" })
    }

    return res.json(user)
}


import dbConnect from "@/db/conn";
import PaymentOrders from "@/models/PaymentOrders";
import Tournament from "@/models/Tournament";
import User from "@/models/User";


export default async function handler(req, res) {
    try {
        const { method, query } = req;

        await dbConnect();

        switch (method) {
            case 'PATCH':
                // Add participent
                return await updateParticipent(req, res)

            default:
                return res.status(404).end(`Method ${method} Not Allowed`)
        }
    } catch (error) {
        console.log({ error })
        return res.status(401).end(error?.message || "Something went wrong")
    }
}

const updateParticipent = async (req, res) => {
    try {
        let {
            tournamnetId,
            participentPubgId,
            kills,
            transactionId,
            transactionStatus
        } = req.body;

        let tournament = await Tournament.findOne({_id: tournamnetId})
        if(!tournament) return res.status(401).end("Invalid Tournament Id")

        tournament.participents.map(p => {
            if(p.pubg_id == participentPubgId){
                p.payment = {
                    paymentId: transactionId,
                    status: transactionStatus
                }
                p.kills = kills

                return p
            }
            return p;
        })

        await tournament.save();

        return res.json({ message: "Participent Update" })
    } catch (error) {
        console.log({ error })
    }
}
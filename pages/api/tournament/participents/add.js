import dbConnect from "@/db/conn";
import PaymentOrders from "@/models/PaymentOrders";
import Tournament from "@/models/Tournament";
import User from "@/models/User";


export default async function handler(req, res) {
    try {
        const { method, query } = req;

        await dbConnect();

        switch (method) {
            case 'POST':
                // Add participent
                return await addParticipent(req, res)

            default:
                return res.status(404).end(`Method ${method} Not Allowed`)
        }
    } catch (error) {
        console.log({ error })
        return res.status(401).end(error?.message || "Something went wrong")
    }
}

const addParticipent = async (req, res) => {
    try {
        let data = req.body;
        let paymentEntity = data.payload.payment.entity;
        if (paymentEntity?.entity != "payment") return res.end("OK");
        if (paymentEntity?.status != "captured") return res.end("OK");
        console.log("paymentEntity?.status", paymentEntity?.status)
        let orderId = paymentEntity?.order_id
        let paymentId = paymentEntity?.id
        let paymentStatus = paymentEntity?.status === "captured" ? "PAID" : "FAILED"

        let orderDetails = await PaymentOrders.findOne({ orderId })
        let { userId, tournamentId } = orderDetails;

        let t = await Tournament.findOne({ _id: tournamentId })
        let u = await User.findOne({ pubg_id: userId })

        t.participents.push({
            pubg_id: u?.pubg_id,
            pubg_id_name: u?.pubg_id_name,
            entery_fees: {
                paymentId: paymentId,
                status: paymentStatus,
            },
            payment: {
                paymentId: "",
                status: "Pending",
            },
            upi_id: u?.upi_id,
        })

        await t.save();

        return res.json({ message: "Payment Successfull and Participent Added" })
    } catch (error) {
        console.log({ error })
    }
}
import dbConnect from "@/db/conn";
const Razorpay = require('razorpay');
import PaymentOrders from "@/models/PaymentOrders";
const razorpay = new Razorpay({
    key_id: 'rzp_test_9ro9jeq39STheq',
    key_secret: 'vmgBBqbJ7sK4nggECVpOCeEh',
});

export default async function handler(req, res) {
    try {
        const { method, query } = req;
        await dbConnect();

        switch (method) {
            case 'GET':
                // Create Tournament
                let data = await PaymentOrders.find();
                return res.json(data)

            case 'POST':
                // Create Tournament
                return await createOrder(req, res);

            default:
                return res.status(404).end(`Method ${method} Not Allowed`)
        }
    } catch (error) {
        console.log({ error })
        return res.status(401).end(error?.message || "Something went wrong")
    }
}

const createOrder = async (req, res) => {
    try {
        const { userId, amount, tournamentId } = req.body;
        console.log({ body: req.body })
        const options = {
            amount: amount * 100, // amount in paise
            currency: "INR",
        };
        var order = await razorpay.orders.create(options);
        console.log({ order })
        order = await PaymentOrders.create({
            orderId: order.id,
            amount: amount,
            userId: userId,
            tournamentId
        });

        return res.json(order)
    } catch (error) {
        console.log({ error })
        return res.status(401).end(error?.message || "Something went wrong")
    }
}


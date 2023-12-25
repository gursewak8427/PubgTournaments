const mongoose = require("mongoose");

const PaymentOrdersS = new mongoose.Schema({
    orderId: {
        type: String,
    },
    amount: {
        type: Number
    },
    userId: {
        type: String,
    },
    tournamentId: {
        type: mongoose.Types.ObjectId,
    },
    pubg_id: String,
    pubg_id_name: String,
    upi_id: String,
    phone: String
}, {
    timestamps: true,
});

export default mongoose.models.PaymentOrders || mongoose.model('PaymentOrders', PaymentOrdersS)
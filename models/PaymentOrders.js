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
    }
}, {
    timestamps: true,
});

export default mongoose.models.PaymentOrders || mongoose.model('PaymentOrders', PaymentOrdersS)
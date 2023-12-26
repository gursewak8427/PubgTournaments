import mongoose from 'mongoose'

export interface IParticipents extends mongoose.Document {
    pubg_id: string
    pubg_id_name: string
    entery_fees: {
        paymentId: string
        status: string
    }
    payment: {
        paymentId: string
        status: string
    }
    upi_id: string
}

export interface ITournaments extends mongoose.Document {
    roomId: string
    roomPass: string
    name: string
    date: string
    time: string
    price: number
    entery_fees: number
    max_participents: number
    min_participents: number
    participents: IParticipents
    status: string
}


const TournamentsSchema = new mongoose.Schema<ITournaments>({
    roomId: String,
    roomPass: String,
    name: String,
    date: String,
    time: String,
    price: Number,
    entery_fees: Number,
    max_participents: Number,
    min_participents: Number,
    participents: [{
        pubg_id: String,
        pubg_id_name: String,
        entery_fees: {
            paymentId: String,
            status: String,
        },
        payment: {
            paymentId: String,
            status: String,
        },
        kills: {
            type: Number,
            default: 0,
        },
        upi_id: String,
    }],
    status: {
        type: String,
        default: "PENDING",
        enum: ["PENDING", "OPEN", "END", "START"]
    }

})

export default mongoose.models.Tournaments || mongoose.model<ITournaments>('Tournaments', TournamentsSchema)
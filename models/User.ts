import mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
    pubg_id: string
    pubg_id_name: string
    upi_id: string
    email: string
    password: string
}

const UsersSchema = new mongoose.Schema<IUser>({
    pubg_id: String,
    pubg_id_name: String,
    upi_id: String,
    email: String,
    password: String
})

export default mongoose.models.Users || mongoose.model<IUser>('Users', UsersSchema)
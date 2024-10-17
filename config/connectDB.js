import mongoose from 'mongoose';
const MONGODB_URI = "mongodb+srv://consignment:iDwW0egHJDxXNPsf@cluster0.e8sm3.mongodb.net/Logistics?retryWrites=true&w=majority"

const connectDB = async () => mongoose.connect(MONGODB_URI);

export default connectDB;

 


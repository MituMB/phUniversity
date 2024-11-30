import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
    // const mongoURI = 'your-mongodb-connection-string-here';
    try {
        // await mongoose.connect(process.env.PORT as string, {useNewUrlParser: true,useUnifiedTopology: true,});
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('Connected to MongoDB Atlas');
        console.log(process.env.MONGO_URI)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // process.exit(1);
    }
};

export default connectDB;



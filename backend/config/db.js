import mongoose from "mongoose";

    export const connectDB = async () => {
        await mongoose.connect('mongodb+srv://fuzen:yufa27022547@cluster0.oiawf.mongodb.net/food-delivery').then(() =>
            console.log("DB Connected"));
    }

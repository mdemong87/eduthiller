import { model, models, Schema } from "mongoose";
import userSchema from "../schema/userSchema";

// user Schema import from another file
const UserSchema = new Schema(userSchema);


// student model
export default const User = models.User || model("User", UserSchema);

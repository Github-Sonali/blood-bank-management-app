import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    role: {
      type: String,
      required: [true, "Please Enter Your Role"],
      enum: ["admin", "organisation", "donor", "hospital"],
      lowercase: true, // Ensure role is stored in lowercase
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "admin" || this.role === "donor") {
          return true;
        }
        return false;
      },
    },
    organisationName: {
      type: String,
      required: function () {
        if (this.role === "organisation") {
          return true;
        }
        return false;
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        if (this.role === "hospital") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"], // Email format validation
    },
    password: {
      type: String,
      required: [true, "Enter Your Password"],
    },
    website: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[\w-]+\.[a-z]+(\/[\w-]*)*/,
        "Please enter a valid website URL",
      ], // Website URL validation
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone Number is required"],
      match: [
        /^\+?\d{1,4}?[ -]?\(?\d{1,3}?\)?[ -]?\d{1,3}?[ -]?\d{1,4}$/,
        "Please enter a valid phone number",
      ], // Phone number format validation
    },
  },
  { timestamps: true }
);

// Pre-save hook to validate the role before saving
userSchema.pre("save", function (next) {
  if (!["admin", "organisation", "donor", "hospital"].includes(this.role)) {
    return next(new Error("Invalid role"));
  }
  next();
});

export default model("users", userSchema);

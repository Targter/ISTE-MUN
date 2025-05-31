const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    university: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    delegateType: { type: String, required: true },
    committeePreference1: { type: String },
    committeePreference2: { type: String },
    accommodationRequired: { type: Boolean, default: false },
    agreeToTerms: { type: Boolean, required: true },
    previousExperience: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Registration", registrationSchema);

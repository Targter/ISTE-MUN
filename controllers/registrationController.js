const asyncHandler = require("express-async-handler");
const Registration = require("../models/Registration");
const { sendConfirmationEmail } = require("../utils/emailService");

const registerUser = asyncHandler(async (req, res) => {
  const registrationData = req.body;

  // Save registration to DB
  const newRegistration = await Registration.create(registrationData);
  console.log("called........");

  // Send confirmation email
  try {
    await sendConfirmationEmail(
      newRegistration.email,
      newRegistration.fullName
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    // Optional: you can still return success response if email fails
    return res.status(201).json({
      message: "Registration successful, but email failed to send.",
      registration: newRegistration,
    });
  }

  res.status(201).json({
    message: "Registration successful, confirmation email sent.",
    registration: newRegistration,
  });
});

// module.exports = { registerUser };
module.exports = { registerUser };

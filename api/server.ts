import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import getIdForPan from "./utils/getIdForPan";
import getPanDetails from "./utils/getPanDetails";
import getOtp from "./utils/getOtp";
import validateOtp from "./utils/validateOtp";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/pan/:PAN_NUMBER", async (req, res) => {
  const panNumber = req.params.PAN_NUMBER;
  const { id, accessToken } = await getIdForPan();
  const details = await getPanDetails(id, accessToken, panNumber);
  res.status(200).json({ ...details });
});

app.get("/generateOtp/:MOBILE_NUMBER", async (req, res) => {
  const mobileNumber = req.params.MOBILE_NUMBER;
  const {referenceId} = await getOtp(mobileNumber);
  res.status(200).json({referenceId});
})

app.post("/validateOtp", async (req, res) => {
  console.log(req.body);
  const {mobileNumber, dob, otp, referenceId} = req.body;

  const {dob: dateOfBirth} = await validateOtp(mobileNumber, referenceId, otp);
  console.log(dateOfBirth);
  const isValid = dateOfBirth === dob;
  res.status(200).json({ isValid });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

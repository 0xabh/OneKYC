import  validateOtp  from '../../../utils/validateOtp';

export default async function handler(req: any, res: any) {
  const { mobileNumber, dob, otp, referenceId } = req.body;
  const { dob: dateOfBirth } = await validateOtp(mobileNumber, referenceId, otp);
  console.log(dob, dateOfBirth, "dob", "dateofbirth");
  const isValid = dateOfBirth === dob;
  res.status(200).json({ isValid });
}
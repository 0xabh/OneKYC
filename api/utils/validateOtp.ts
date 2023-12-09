import axios from "axios";

const validateOtp = async (
  phoneNumber: string,
  referenceId: string,
  otp: string
): Promise<{
  dob: string;
  name: string;
}> => {
  console.log(phoneNumber, referenceId, otp);
  try {
    const res = await axios.post(
      `https://preproduction.signzy.tech/api/v2/patrons/${process.env.USER_ID}/phones`,
      {
        task: "mobile",
        essentials: {
          task: "submitOtp",
          countryCode: "91",
          mobileNumber: `${phoneNumber}`,
          referenceId: `${referenceId}`,
          otp: `${otp}`,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${process.env.ACCESS_TOKEN}`,
        },
      }
    );
    const response = res.data.result
    return {
      name: response.name,
      dob: response.dob,
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      name: "",
      dob: "",
    };
  }
};

export default validateOtp;

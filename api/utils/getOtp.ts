import axios from "axios";

const getOtp = async (
  phoneNumber: string
): Promise<{
  referenceId: string;
}> => {
  try {
    const res = await axios.post(
      `https://preproduction.signzy.tech/api/v2/patrons/${process.env.USER_ID}/phones`,
      {
        task: "mobile",
        essentials: {
          task: "generateOtp",
          countryCode: "91",
          mobileNumber: phoneNumber,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${process.env.ACCESS_TOKEN}`,
        },
      }
    );
    return {
      referenceId: res.data.result.referenceId,
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      referenceId: "",
    };
  }
};

export default getOtp;

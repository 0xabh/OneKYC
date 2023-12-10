import axios from "axios";

const getUpiVpa = async (
  upiId: string
): Promise<{
  nameAtBank: string;
  verified: string;
  message: string;
}> => {
  try {
    const res = await axios.post(
      `https://preproduction.signzy.tech/api/v2/patrons/${process.env.USER_ID}/upis`,
      {
        task: "vpaFetch",
        essentials: {
          vpa: upiId,
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
      nameAtBank: res.data.result.nameAtBank,
      verified: res.data.result.verified,
      message: res.data.result.message,
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      nameAtBank: "",
      verified: "",
      message: "",
    };
  }
};

export default getUpiVpa;

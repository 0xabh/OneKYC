import axios from "axios";

const getPanDetails = async (
  itemId: string,
  accessToken: string,
  panNumber: string
): Promise<{
  number: string;
  name: string;
  fatherName: string;
  dob: string;
}> => {
  try {
    const res = await axios.post(
      `https://preproduction.signzy.tech/api/v2/snoops`,
      {
        service: "Identity",
        task: "fetch",
        itemId: itemId,
        accessToken: accessToken,
        essentials: {
          number: panNumber,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${process.env.ACCESS_TOKEN}`,
        },
      }
    );
    const response = res.data.response.result;
    return {
      number: response.number,
      name: response.name,
      fatherName: response.fatherName,
      dob: response.dob,
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      number: "",
      name: "",
      fatherName: "",
      dob: "",
    };
  }
};

export default getPanDetails;

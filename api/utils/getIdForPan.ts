import axios from "axios";

const getIdForPan = async (): Promise<{
  id: string;
  accessToken: string;
}> => {
    try{
        const res = await axios.post(
            `https://preproduction.signzy.tech/api/v2/patrons/${process.env.USER_ID}/identities`,
            {
              type: "individualPan",
              email: "admin@signzy.com",
              callbackUrl: "https://www.w3schools.com",
              images: []
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `${process.env.ACCESS_TOKEN}`,
              },
            }
          );
          return {
            id: res.data.id,
            accessToken: res.data.accessToken,
          };
    } catch (e: any) {
        console.log(e.message);
        return {
            id: "",
            accessToken: "",
        }
    }
  
};

export default getIdForPan;

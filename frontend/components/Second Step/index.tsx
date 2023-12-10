import { Center, Box, TextInput, Group, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import StepButtons from "../StepButtons";

const SecondStep = ({
  nextStep,
  prevStep,
}: {
  nextStep: any;
  prevStep: any;
}) => {
  const form = useForm({
    initialValues: {
      otp: "",
    },
    validate: {
      otp: (value) =>
        value.length == 4 && /^\d+$/.test(value)
          ? null
          : "Please enter a valid OTP",
    },
  });

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(form.values);
          const res = form.validate();
          console.log(res);
          if (!res.hasErrors) {
            // send a post request to http://localhost:3001/validateOtp
            const userInfo = localStorage.getItem("userDetails") as string;
            const parseData = JSON.parse(userInfo);
            const otpRef = localStorage.getItem("otpRef");
            const data = {
              mobileNumber: parseData.phone,
              referenceId: otpRef,
              otp: form.values.otp,
              // dob: "2001-09-08",
              dob: parseData.dob.substring(0,10)
            };
            console.log(data);
            const validateOtp = await fetch("/api/validateOtp", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const checkValidOtp = await validateOtp.json();
            console.log(checkValidOtp, "otp check");
            // post body should be { mobileNumber, referenceId, dob, otp}
            // dob should be in YYYY-MM-DD format
            // response is of 2 types
            // 1 is true
            // 2 is false - if not match or if mobile didn't return dob
            // if true, then pan, dob, age is valid
            nextStep();
          }
        }}
      >
        <Center mih={600}>
          <Box
            miw={340}
            mx="auto"
            style={{
              border: "1px solid black",
              padding: "60px 30px",
            }}
          >
            <TextInput
              label="OTP"
              required
              {...form.getInputProps("otp")}
              styles={{
                label: {
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "29px",
                  marginBottom: "8px",
                },
                input: {
                  backgroundColor: "transparent",
                  borderRadius: "0px",
                  borderColor: "black",
                },
                required: {
                  display: "none",
                },
              }}
            />
          </Box>
        </Center>
        <StepButtons
          nextStep={nextStep}
          prevStep={prevStep}
          action={() => console.log("action")}
        />
      </form>
    </>
  );
};

export default SecondStep;

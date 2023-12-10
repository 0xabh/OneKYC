import { Group, Button } from "@mantine/core";

const StepButtons = ({
  nextStep,
  prevStep,
  action,
}: {
  nextStep: any;
  prevStep: any;
  action: any;
}) => {
  return (
    <Group justify="end" pb={"lg"} pr={"lg"}>
      <Button
        style={{
          background: "white",
          color: "black",
          borderWidth: "1px 5px 5px 1px",
          borderStyle: "solid",
          borderColor: "rgba(16, 17, 17, 1)",
          borderRadius: "0px",
          width: "95px",
          height: "50px",
          fontSize: "24px",
          fontWeight: 400,
        }}
        onClick={prevStep}
      >
        Back
      </Button>
      <Button
        type="submit"
        style={{
          background: "white",
          color: "black",
          borderWidth: "1px 5px 5px 1px",
          borderStyle: "solid",
          borderColor: "rgba(16, 17, 17, 1)",
          borderRadius: "0px",
          width: "100px",
          height: "50px",
          fontSize: "24px",
          fontWeight: 400,
        }}
        onClick={action}
      >
        Next
      </Button>
    </Group>
  );
};

export default StepButtons;

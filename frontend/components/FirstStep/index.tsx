import {
  Center,
  Box,
  TextInput,
  Group,
  Button,
  Container,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { BigNumber, ethers } from "ethers";
import StepButtons from "../StepButtons";

const FirstStep = ({
  nextStep,
  prevStep,
}: {
  nextStep: any;
  prevStep: any;
}) => {
  const form = useForm({
    initialValues: {
      pan: "",
      phone: "",
      dob: "",
    },
    validate: {
      pan: (value) =>
        value.length == 10 ? null : "Please enter a valid PAN number",
      phone: (value) =>
        value.length == 10 && /^\d+$/.test(value)
          ? null
          : "Please enter a valid phone number",
    },
  });
  // console.log(ethers.utils.arrayify("014738654b49c022c905bd562e6b9b83a7061d4ce20b74578756036adfd5175204cdcf9b633482a0fa11f79f36ed72dbb0518d7dcdd5bdb985f7ec47d7ddf9561b1aafb41b7400132734aac5a50e7451ad9d08bbb8808cff40f8f229f0a03cbf0819fcb64f2a0001426ead42d5dd5e6322d17ccb70eed68a2d7abb58877676af0504cbef3298866d7e5a08c2d1d9c104e7ac9295cc36ce26b1daddd51cdef45c02f03de7dbc38a7b8e43c03a7e0efc4b2225aec8c2ac1de3657207cd52b1ce3006667e761d2e59de832eec9016c8d3975dd2f1f3f11bfea0a3de15fc75aa5bc307434316c45c85fef69da35a946533a6eb1f04e0b7cc702a3f8e6103e347dea02a80f7088120f0e02fa0fdaf986b9f4ac4ca99d8678d134b5e9a3a1f9d978861063fb7de8ae0646d2ec1f4e864226636fb01e7401233b10c4a6e60f93f4849d50a365cccf836c73b3947497ce59278d0fb7e046ca76f77f9ca1075756995fdc3081f27b01d639fe27e62c0f9d7dcf207753cb91027ef0e61654fde16641bf6f9093ef80f3d100b3bc7d222f2018f96d6fb9c0140a0c31a85b883baf2651812a126ad26ecc430f8d8dfff1e941c58002f5fc82c6240c31b5eaa3e1d564288e8ab2383a8587c3e20f0e3ba59a7e7742c726ee9db449b7227a53b1b5734dbd597e81d47b41a849d5c0fbef65c3a3f347de3a8a65b4e8458e813475e96803d3c338b088db5f223e254185e84ce038dda739ca56084fa05b1058d51ae191374306def2a6f8ace93e7ef7284af43692b51e099ab5ea79daebe3f8b411c60251b8c97961ed9ff85490ea6290f93ddc56e33b3fe322af664bd72274bf442f3c45097ed4e1a8a2eb234641f9f7c8749dd564e1345e015595c0ed8c201826b1b6c0cc41a182f8752b2b34546a171db2d3cc1e837082b4f5922b3c88a19e1549c6a20e1cc831b067cbc2946b25d0771e19c6e4531b6d77e730c5b2c3216fd13d30609ac1afc2de64d7a7466321ac564a8721593ff13f246815d2f2e0d075be213f2872a8f9c18ef0c820150f1f0f68ea26a2ace2a7badacf856f8d8facd283d840f6aed19fb2e94f605c87a09e213454bfdd6ee85ea953c095483da0b39ec7dc16813de0397156d28a2d627a54a887814f09dcdabc10daea4618f99d48393b106f2c6e8b7672558044e54f5a98ebdefc4af709176881e49c079bb089b7369b5895fbe28a3910b2aed3ba44f1f19d4e3459249d54ed27255cde27a396baf9029684e5574741800f85ef3338e9e782bebb95d5facf3d16b4bb2d1e30e13bfb4f04be144ea616f054a0edcd6ebc65a6a6d5e1b90aec7afb1a1f7b15038f559e649d7adbae3297323766bda96e298cd2bf0a354c6e1687a9b27a4a5cee976dc63b0377a2df1b4a21a945e2b54e3ff694c18d72feb37a4f5f26f253df43efae3109c4a001757a4d2163794836c07ac0f9cda8de1cd28e77ae7ae316f0cc0168d065b27af52692c2f2c0784caf8554cd00911fc6863729ae21d72f479923a8c3b39a0d3432b11875e1277b7bbfb3a658242f4e11cec29ac86ea49c230d3df56eee833a4008f25a0f6243b36b014ac191d65c47e9999f52a20aed210be2bf6d493012743fe972946e8213115239a069a396e1c8201b5790199b155aac5f0d1525dd9c9b3e1afa12e220921378bb172b2028f1fb1f772fcaf09c76b56025643698ae797c0bd039dc24604c46de3c8965ea8dfe168a954edf18ebcaa62336ec48534dd569e6c3eaf49a32548c9aee55a35a0c5c22a681289cec4ce93adf6cde91f7408c966e7bef578551868fd758f6179a9f928c2657b80b45b91e460b130698a8a279fae5b52cf0ce71c85ef80ca1735ecd21ccc719090c4c2bacaf58cb90814a98460c889cb59f6611d98389764cc91344d1d2fc204d49afaf1c3172331947ff88197c364007a96432c6f2906d80f581f39b51bc39a51cef5cf5c62de19802d1a0cb64f5ea4d2585e28125f5eef3304c58a76d2757c43117ac49b6f0f320148c402752d0ddfe3dfbb23b595b70656b16bdb3889275e3453ffb9da7b404a82646df8340abd1af567181f58cc0f1d7a5e122bfa3fd940259684af19877163038017edf2e86c5606ee750067a43bdfba0b4f30a31f5b36df3413b1e96e648745a0ded3157c1b79c0d10014a28806ca22606813c50e446bf7e8307789d7485c41b0c8c6b1e113cad3b316272c72d9e4e0b390f8d7b7002cc6a3bf825345c291ea60421a78c1955f8f40b42b1fd0cda342cdabaa75e7c7efb19e25baabd12971adc1d4a862c9be55c7215d037bea435791c3273decb2177fc5d601205c2dc085a65cbca2687995be1c9a54215e48b4e1b7625ffd38c21666285f990b9ccebf2450eaa5eb1d060c0ee6451310b37805c59c1701ce82eaf5c537a6c7eeb606468857641186d5b485917ba53c2ad4d2eb82c96f285ad2cbbaf1307682e2deae60fff76512a177d94e86c76dcf24b0a9eeace2f6eac818de0c5b7024812b0e6cbc0300ff0fec654327cf23eef72177f1a3a42916fc307a6f66a7140092df674021b18c76a5f07b96161dbf1c65246714718fb31187286d8a8eb34d27191f8c7fd429b293f373dd311222325069022dc7e6cf7a4ab9942b673339824807032f47a4088fd374554d0736fd72932604fa0adc4e3670e825a48f8bf5c68ff753875529780f8ff4f97d52d1ab4a861c1585a5ea4a762fb410e25d69cac2396afd393f05154eac247a3dc0e9c990bbf4261140f846b5ee7ffc202b479fbde2dea6eb28e0b28dc853fafe2f01e7d6f1cc06388d9361c40d222f0db36ef33833f528692a73d61373f237dca786161d27a329d265dfe272b835044bed5aa65ff1ffd81f2645d573d6dfd9ab21fa77942c9f21a602d83ed6cd6b9f9c64e420478379f721018a74102e0cb66e10207f0aca8a14a0207ae6bb3e19e62e674681f4324847d53616dc69b62e02d75ba01f889cd0097acb2a8d13e7426cf1e09401f517b2f2d6eece0f4672242b1e49b889b3a709"))
  console.log(
    ethers.utils.arrayify(
      BigNumber.from(
        "0x014738654b49c022c905bd562e6b9b83a7061d4ce20b74578756036adfd5175204cdcf9b633482a0fa11f79f36ed72dbb0518d7dcdd5bdb985f7ec47d7ddf9561b1aafb41b7400132734aac5a50e7451ad9d08bbb8808cff40f8f229f0a03cbf0819fcb64f2a0001426ead42d5dd5e6322d17ccb70eed68a2d7abb58877676af0504cbef3298866d7e5a08c2d1d9c104e7ac9295cc36ce26b1daddd51cdef45c02f03de7dbc38a7b8e43c03a7e0efc4b2225aec8c2ac1de3657207cd52b1ce3006667e761d2e59de832eec9016c8d3975dd2f1f3f11bfea0a3de15fc75aa5bc307434316c45c85fef69da35a946533a6eb1f04e0b7cc702a3f8e6103e347dea02a80f7088120f0e02fa0fdaf986b9f4ac4ca99d8678d134b5e9a3a1f9d978861063fb7de8ae0646d2ec1f4e864226636fb01e7401233b10c4a6e60f93f4849d50a365cccf836c73b3947497ce59278d0fb7e046ca76f77f9ca1075756995fdc3081f27b01d639fe27e62c0f9d7dcf207753cb91027ef0e61654fde16641bf6f9093ef80f3d100b3bc7d222f2018f96d6fb9c0140a0c31a85b883baf2651812a126ad26ecc430f8d8dfff1e941c58002f5fc82c6240c31b5eaa3e1d564288e8ab2383a8587c3e20f0e3ba59a7e7742c726ee9db449b7227a53b1b5734dbd597e81d47b41a849d5c0fbef65c3a3f347de3a8a65b4e8458e813475e96803d3c338b088db5f223e254185e84ce038dda739ca56084fa05b1058d51ae191374306def2a6f8ace93e7ef7284af43692b51e099ab5ea79daebe3f8b411c60251b8c97961ed9ff85490ea6290f93ddc56e33b3fe322af664bd72274bf442f3c45097ed4e1a8a2eb234641f9f7c8749dd564e1345e015595c0ed8c201826b1b6c0cc41a182f8752b2b34546a171db2d3cc1e837082b4f5922b3c88a19e1549c6a20e1cc831b067cbc2946b25d0771e19c6e4531b6d77e730c5b2c3216fd13d30609ac1afc2de64d7a7466321ac564a8721593ff13f246815d2f2e0d075be213f2872a8f9c18ef0c820150f1f0f68ea26a2ace2a7badacf856f8d8facd283d840f6aed19fb2e94f605c87a09e213454bfdd6ee85ea953c095483da0b39ec7dc16813de0397156d28a2d627a54a887814f09dcdabc10daea4618f99d48393b106f2c6e8b7672558044e54f5a98ebdefc4af709176881e49c079bb089b7369b5895fbe28a3910b2aed3ba44f1f19d4e3459249d54ed27255cde27a396baf9029684e5574741800f85ef3338e9e782bebb95d5facf3d16b4bb2d1e30e13bfb4f04be144ea616f054a0edcd6ebc65a6a6d5e1b90aec7afb1a1f7b15038f559e649d7adbae3297323766bda96e298cd2bf0a354c6e1687a9b27a4a5cee976dc63b0377a2df1b4a21a945e2b54e3ff694c18d72feb37a4f5f26f253df43efae3109c4a001757a4d2163794836c07ac0f9cda8de1cd28e77ae7ae316f0cc0168d065b27af52692c2f2c0784caf8554cd00911fc6863729ae21d72f479923a8c3b39a0d3432b11875e1277b7bbfb3a658242f4e11cec29ac86ea49c230d3df56eee833a4008f25a0f6243b36b014ac191d65c47e9999f52a20aed210be2bf6d493012743fe972946e8213115239a069a396e1c8201b5790199b155aac5f0d1525dd9c9b3e1afa12e220921378bb172b2028f1fb1f772fcaf09c76b56025643698ae797c0bd039dc24604c46de3c8965ea8dfe168a954edf18ebcaa62336ec48534dd569e6c3eaf49a32548c9aee55a35a0c5c22a681289cec4ce93adf6cde91f7408c966e7bef578551868fd758f6179a9f928c2657b80b45b91e460b130698a8a279fae5b52cf0ce71c85ef80ca1735ecd21ccc719090c4c2bacaf58cb90814a98460c889cb59f6611d98389764cc91344d1d2fc204d49afaf1c3172331947ff88197c364007a96432c6f2906d80f581f39b51bc39a51cef5cf5c62de19802d1a0cb64f5ea4d2585e28125f5eef3304c58a76d2757c43117ac49b6f0f320148c402752d0ddfe3dfbb23b595b70656b16bdb3889275e3453ffb9da7b404a82646df8340abd1af567181f58cc0f1d7a5e122bfa3fd940259684af19877163038017edf2e86c5606ee750067a43bdfba0b4f30a31f5b36df3413b1e96e648745a0ded3157c1b79c0d10014a28806ca22606813c50e446bf7e8307789d7485c41b0c8c6b1e113cad3b316272c72d9e4e0b390f8d7b7002cc6a3bf825345c291ea60421a78c1955f8f40b42b1fd0cda342cdabaa75e7c7efb19e25baabd12971adc1d4a862c9be55c7215d037bea435791c3273decb2177fc5d601205c2dc085a65cbca2687995be1c9a54215e48b4e1b7625ffd38c21666285f990b9ccebf2450eaa5eb1d060c0ee6451310b37805c59c1701ce82eaf5c537a6c7eeb606468857641186d5b485917ba53c2ad4d2eb82c96f285ad2cbbaf1307682e2deae60fff76512a177d94e86c76dcf24b0a9eeace2f6eac818de0c5b7024812b0e6cbc0300ff0fec654327cf23eef72177f1a3a42916fc307a6f66a7140092df674021b18c76a5f07b96161dbf1c65246714718fb31187286d8a8eb34d27191f8c7fd429b293f373dd311222325069022dc7e6cf7a4ab9942b673339824807032f47a4088fd374554d0736fd72932604fa0adc4e3670e825a48f8bf5c68ff753875529780f8ff4f97d52d1ab4a861c1585a5ea4a762fb410e25d69cac2396afd393f05154eac247a3dc0e9c990bbf4261140f846b5ee7ffc202b479fbde2dea6eb28e0b28dc853fafe2f01e7d6f1cc06388d9361c40d222f0db36ef33833f528692a73d61373f237dca786161d27a329d265dfe272b835044bed5aa65ff1ffd81f2645d573d6dfd9ab21fa77942c9f21a602d83ed6cd6b9f9c64e420478379f721018a74102e0cb66e10207f0aca8a14a0207ae6bb3e19e62e674681f4324847d53616dc69b62e02d75ba01f889cd0097acb2a8d13e7426cf1e09401f517b2f2d6eece0f4672242b1e49b889b3a709"
      )
    )
  );

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(form.values);
          const res = form.validate();
          console.log(res);
          if (!res.hasErrors) {
            // first thing is to store form values in local storage
            localStorage.setItem("userDetails", JSON.stringify(form.values));
            // next step is to hit http://localhost:3001/pan/<pan>
            const fetchPan = await fetch(`/api/pan/${form.values.pan}`);
            const panDetails = await fetchPan.json();
            console.log(panDetails);
            // store the name returned from response in local storage
            localStorage.setItem("userName", panDetails.name);
            // send an otp via http://localhost:3001/generateOtp/<phone-number>
            const generateOtp = await fetch(
              `/api/generateOtp/${form.values.phone}`
            );
            const parseRef = await generateOtp.json();
            console.log(parseRef);
            localStorage.setItem("otpRef", parseRef.referenceId);
            // store referenceId from res in localStorage
            // push to next step
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
              required
              label="PAN"
              {...form.getInputProps("pan")}
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
            <TextInput
              mt="md"
              required
              label="Your Phone Number"
              {...form.getInputProps("phone")}
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
            <DateInput
              valueFormat="YYYY-MM-DD"
              required
              mt="md"
              label="Date Of Birth"
              maxDate={new Date()}
              {...form.getInputProps("dob")}
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

export default FirstStep;

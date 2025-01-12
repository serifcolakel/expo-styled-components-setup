import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { StatusBar } from "expo-status-bar";
import { Alert, Platform } from "react-native";
import { faker } from "@faker-js/faker";
import { FormProvider, useForm } from "react-hook-form";
import { InputField } from "@/components/ui/form-fields/input";
import { View } from "react-native";
import { Mask } from "react-native-mask-input";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/button";
import styled from "styled-components/native";
import Icon from "@/components/ui/icon";
import { isWeb } from "@/utils/platform.utils";

const paragraphs = faker.lorem.paragraphs();

type BaseMask = {
  mask: Mask;
  validator: RegExp;
  placeholder?: string;
};

const turkishPhone: BaseMask = {
  mask: [
    "+",
    "(",
    "9",
    "0",
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ],
  validator: /^\+\(\d{2}\)\s\d{3}\s\d{3}-\d{2}-\d{2}$/,
  placeholder: "+(90) 555 555-55-55",
};

const creditCard: BaseMask = {
  mask: [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  validator: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
  placeholder: "4242-4242-4242-4242",
};

const cvc: BaseMask = {
  mask: [/\d/, /\d/, /\d/],
  validator: /^\d{3}$/,
  placeholder: "123",
};

const schema = zod.object({
  email: zod.string().email(),
  phone: zod.string().regex(turkishPhone.validator, {
    message: "Invalid phone number",
  }),
  creditCard: zod.string().regex(creditCard.validator, {
    message: "Invalid credit card number",
  }),
  cvc: zod.string().regex(cvc.validator, {
    message: "Invalid CVC",
  }),
});

type Form = zod.infer<typeof schema>;

const InputWrapper = styled(View)`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
`;

const ButtonWrapper = styled(View)`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  height: 32px;
`;

export default function ModalScreen() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  return (
    <Container>
      <Text my="xl">Modal</Text>
      <Text>{paragraphs}</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      <FormProvider {...form}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: 16,
          }}
        >
          <InputWrapper>
            <InputField<Form>
              name="email"
              label="Email"
              aria-disabled={form.formState.isSubmitting}
              info="We will never share your email with anyone else."
            />
          </InputWrapper>
          <InputWrapper>
            <InputField<Form>
              name="phone"
              label="Phone"
              mask={turkishPhone.mask}
              placeholder={turkishPhone.placeholder}
              aria-disabled={form.formState.isSubmitting}
            />
          </InputWrapper>
          <InputWrapper>
            <InputField<Form>
              mask={creditCard.mask}
              placeholder={creditCard.placeholder}
              name="creditCard"
              label="Credit Card"
              aria-disabled={form.formState.isSubmitting}
            />
          </InputWrapper>
          <InputWrapper>
            <InputField<Form>
              mask={cvc.mask}
              placeholder={cvc.placeholder}
              name="cvc"
              label="CVC"
              aria-disabled={form.formState.isSubmitting}
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button
              variant="primary"
              textVariant="link"
              testID="submit"
              loading={form.formState.isSubmitting}
              onPress={form.handleSubmit(async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                if (isWeb()) {
                  alert(JSON.stringify(values, null, 2));
                } else {
                  Alert.alert("Form Data", JSON.stringify(values, null, 2));
                }
              })}
            >
              <Text color="white">Submit</Text>
              <Icon name="send" color="white" />
            </Button>
          </ButtonWrapper>
        </View>
      </FormProvider>
    </Container>
  );
}

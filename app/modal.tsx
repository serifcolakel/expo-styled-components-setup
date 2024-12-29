import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { faker } from "@faker-js/faker";

export default function ModalScreen() {
  return (
    <Container>
      <Text my="xl">Modal</Text>
      <Text>{faker.lorem.paragraphs()}</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Container>
  );
}

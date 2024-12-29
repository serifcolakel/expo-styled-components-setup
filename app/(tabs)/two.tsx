import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Icon from "@/components/ui/icon";
import { Flex } from "@/components/ui/layout";
import Text from "@/components/ui/text";
import { faker } from "@faker-js/faker";

export default function TabTwoScreen() {
  return (
    <Container my="xl" scrollable>
      <Flex direction="column" p="lg" my="xl" align="center" gap="lg">
        <Text>{faker.lorem.paragraphs()}</Text>
        <Text color="info" variant="2xl">
          {faker.lorem.paragraphs(3)}
        </Text>
        <Button loading>
          <Text color="border">Primary Button</Text>
        </Button>
        <Button disabled>
          <Text color="border">Primary Button</Text>
        </Button>
        <Button>
          <Text color="border">Primary Button</Text>
          <Icon name="code" color="white" />
        </Button>
        <Button variant="primary" gap="sm" size="md">
          <Icon name="code" color="white" />
          <Text color="white">Primary Button</Text>
        </Button>
        <Button variant="primary" gap="sm" size="lg">
          <Icon name="code" color="white" />
          <Text color="white">Primary Button</Text>
        </Button>
        <Button variant="primary" gap="sm" size="xl">
          <Icon name="code" color="white" />
          <Text color="white">Primary Button</Text>
        </Button>
      </Flex>
    </Container>
  );
}

import { Flex, FlexItem } from "@/components/ui/layout";
import React from "react";
import { faker } from "@faker-js/faker";
import Text from "@/components/ui/text";
import { View } from "react-native";
import { useColors } from "@/hooks/useColors";
import Icon from "@/components/ui/icon";

export default function LayoutExample() {
  const colors = useColors();
  return (
    <Flex
      direction="row"
      p="lg"
      justify="space-evenly"
      align="center"
      wrap="wrap"
      bg="tint"
    >
      <FlexItem
        p="lg"
        bg="error"
        alignItems="center"
        grow={1}
        rounded="xxl"
        justify="center"
        basis="50%"
      >
        <Icon
          style={{
            marginRight: 10,
          }}
          name="code"
          color={colors.primary}
        />
        <Text>{faker.lorem.paragraph()}</Text>
        <Text>{faker.lorem.paragraph()}</Text>
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={2} basis="50%">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="25%">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="25%">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="100%">
        <View style={{ height: 1, backgroundColor: colors.border }} />
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="25%">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="25%" rounded="xxl" bg="disabled">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="50%">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="100%">
        <View style={{ height: 1, backgroundColor: colors.border }} />
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="25%">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="25%">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="100%">
        <View style={{ height: 1, backgroundColor: colors.border }} />
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="10%">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="40%">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="50%">
        <Text>{faker.lorem.paragraph()}</Text>
      </FlexItem>
      <FlexItem p="sm" grow={1} basis="100%">
        <View style={{ height: 1, backgroundColor: colors.border }} />
      </FlexItem>
    </Flex>
  );
}

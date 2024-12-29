Here's an updated version of your README.md file with more specific details about your Expo with styled-components setup:

````markdown
# Expo with Styled Components Setup

A comprehensive setup guide and boilerplate for using styled-components with Expo and TypeScript.

## Features

- 🎨 Styled Components with TypeScript
- 📱 Expo Router for navigation
- 🌓 Dark/Light theme support
- 🎯 Pre-configured UI components
- 📏 Consistent spacing and typography
- 🔍 Type-safe theme usage

## Quick Start

### 1. Create a new Expo project

```bash
npx create-expo-app styled-setup --template

# Choose template: › Blank (TypeScript)
```

### 2. Install Dependencies

```bash
# Install styled-components
npm install styled-components

# Install dev dependencies
npm install @types/styled-components-react-native --save-dev
```

## Project Structure

```
├── app/                     # Expo Router app directory
│   ├── (tabs)/              # Tab navigation
│   │   ├── index.tsx        # First tab screen
│   │   ├── two.tsx          # Second tab screen
│   │   └── _layout.tsx      # Tab layout configuration
│   ├── _layout.tsx          # Root layout
│   ├── modal.tsx            # Modal screen
│   └── +not-found.tsx       # 404 screen
├── components/
│   ├── ui/                  # UI components
│   │   ├── button/
│   │   ├── container/
│   │   ├── text/
│   │   └── layout/
│   └── ExternalLink.tsx
├── themes/                  # Theme configuration
│   ├── colors.ts           # Color definitions
│   ├── sizes.ts            # Size scales
│   ├── spacing.ts          # Spacing system
│   ├── styles.ts           # Common styles
│   ├── theme.d.ts          # Theme type definitions
│   └── index.ts            # Theme export
└── hooks/                  # Custom hooks
    └── useColors.ts        # Theme colors hook
```

## Core Components

### Button Component

```typescript
import Button from "@/components/ui/button";

// Usage
<Button variant="primary" size="lg" shape="rounded" loading={false}>
  Click Me
</Button>;
```

Available props:

- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `shape`: 'square' | 'rounded' | 'roundedLg' | 'circular'
- `loading`: boolean
- `disabled`: boolean

### Flex Layout

```typescript
import { Flex, FlexItem } from "@/components/ui/layout";

// Usage
<Flex direction="row" justify="space-between" align="center" gap="md">
  <FlexItem grow={1}>
    <Text>Content</Text>
  </FlexItem>
</Flex>;
```

Available props:

- `direction`: 'row' | 'column'
- `justify`: 'start' | 'center' | 'end' | 'between' | 'around'
- `align`: 'start' | 'center' | 'end'
- `gap`: 'sm' | 'md' | 'lg' | 'xl'
- `wrap`: 'wrap' | 'nowrap'

## Theme System

### Colors

```typescript
const colors = {
  primary: "#3b82f6",
  secondary: "#22c55e",
  success: "#16a34a",
  error: "#dc2626",
  warning: "#f59e0b",
  info: "#0ea5e9",
  // ... more colors
};
```

### Spacing

```typescript
const spacing = {
  padding: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  // ... margin and gap
};
```

### Typography

```typescript
const fontSizes = {
  xs: 8,
  sm: 12,
  base: 14,
  md: 16,
  lg: 20,
  xl: 24,
  // ... more sizes
};
```

## Dark Mode Support

The theme automatically adapts to system dark mode preferences:

```typescript
function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      theme={{
        ...themes,
        isDark: colorScheme === "dark",
      }}
    >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
```

## Type Safety

### Theme Types

```typescript
// themes/theme.d.ts
import "styled-components/native";
import theme from ".";

export type AppTheme = typeof theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends AppTheme {}
}
```

### Component Props

```typescript
type ButtonProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  shape?: keyof typeof buttonShapes;
  gap?: keyof typeof buttonGap;
} & TouchableOpacityProps;
```

## Best Practices

1. **Theme Usage**

   - Always use theme values instead of hard-coded values
   - Access theme values through props: `${({ theme }) => theme.colors.primary}`
   - Use semantic color names

2. **Component Organization**

   - Keep styled components in separate `style.tsx` files
   - Group related components in folders
   - Use index.tsx for component logic

3. **TypeScript**

   - Define proper interfaces for all props
   - Use theme type definitions
   - Extend existing React Native types

4. **Performance**
   - Define styled components outside of render functions
   - Use memoization for complex components
   - Avoid unnecessary prop changes

## Conclusion

This setup provides a solid foundation for building styled-components with Expo and TypeScript. It includes a theme system, dark mode support, and type-safe components. Feel free to customize and extend this setup to fit your project requirements.

Feel free to customize this template further to include any additional details or sections you find relevant to your Expo project setup. If you have any questions or need further assistance, please don't hesitate to ask! 🚀
````

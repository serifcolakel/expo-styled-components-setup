This guide walks you through setting up an Expo project using styled-components and TypeScript. The project supports a theme system, dark mode, and type-safe UI components, making it a robust foundation for modern React Native applications.

[Code](https://github.com/serifcolakel/expo-styled-components-setup)

---

## 🚀 Features

- **Styled Components**: Leverage the power of styled-components with TypeScript.
- **Expo Router**: Simplified navigation management.
- **Dark/Light Themes**: Built-in theme switching based on system preferences.
- **Pre-configured Components**: Ready-to-use, customizable UI elements.
- **Consistent Design**: Standardized spacing and typography systems.
- **Type Safety**: Fully typed themes and components.

---

## 🛠️ Quick Start

### Step 1: Create a New Expo Project

Run the following command to initialize a new Expo project:

```bash
npx create-expo-app styled-setup --template

# Choose template: ➟ Blank (TypeScript)
```

### Step 2: Install Dependencies

Install the required dependencies for styled-components:

```bash
# Install styled-components
npm install styled-components

# Install type definitions for styled-components
npm install @types/styled-components-react-native --save-dev
```

---

## 📂 Project Structure

Organize your project with the following structure:

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
│   ├── colors.ts            # Color definitions
│   ├── sizes.ts             # Size scales
│   ├── spacing.ts           # Spacing system
│   ├── styles.ts            # Common styles
│   ├── theme.d.ts           # Theme type definitions
│   └── index.ts             # Theme export
└── hooks/                   # Custom hooks
    └── useColors.ts         # Theme colors hook
```

---

## ✨ Core Components

### Button Component

The Button component is a flexible, styled button supporting variants, sizes, and loading states.

```typescript
import Button from "@/components/ui/button";

// Usage
<Button variant="primary" size="lg" shape="rounded" loading={false}>
  Click Me
</Button>;
```

**Props:**

- `variant`: `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'`
- `size`: `'sm' | 'md' | 'lg' | 'xl'`
- `shape`: `'square' | 'rounded' | 'roundedLg' | 'circular'`
- `loading`: `boolean`
- `disabled`: `boolean`

---

### Flex Layout

The Flex and FlexItem components offer a flexible layout system inspired by CSS flexbox.

```typescript
import { Flex, FlexItem } from "@/components/ui/layout";

// Usage
<Flex direction="row" justify="space-between" align="center" gap="md">
  <FlexItem grow={1}>
    <Text>Content</Text>
  </FlexItem>
</Flex>;
```

**Props:**

- `direction`: `'row' | 'column'`
- `justify`: `'start' | 'center' | 'end' | 'between' | 'around'`
- `align`: `'start' | 'center' | 'end'`
- `gap`: `'sm' | 'md' | 'lg' | 'xl'`
- `wrap`: `'wrap' | 'nowrap'`

---

## 🎨 Theme System

### Colors

Define a consistent color palette in `themes/colors.ts`:

```typescript
const colors = {
  primary: "#3b82f6",
  secondary: "#22c55e",
  success: "#16a34a",
  error: "#dc2626",
  warning: "#f59e0b",
  info: "#0ea5e9",
  // Additional colors...
};
```

---

### Spacing

Standardize spacing in `themes/spacing.ts`:

```typescript
const spacing = {
  padding: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  // Margin and gap definitions...
};
```

---

### Typography

Define font sizes in `themes/styles.ts`:

```typescript
const fontSizes = {
  xs: 8,
  sm: 12,
  base: 14,
  md: 16,
  lg: 20,
  xl: 24,
  // Additional sizes...
};
```

---

## 🌙 Dark Mode Support

The app adapts to system dark mode preferences dynamically:

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

---

## 🛡️ Type Safety

### Theme Types

Ensure theme type safety with `themes/theme.d.ts`:

```typescript
import "styled-components/native";
import theme from ".";

export type AppTheme = typeof theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends AppTheme {}
}
```

---

### Component Props

Define props for the Button component:

```typescript
type ButtonProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  shape?: keyof typeof buttonShapes;
  gap?: keyof typeof buttonGap;
} & TouchableOpacityProps;
```

---

## 🔑 Best Practices

1. **Theming**:

   - Use theme values instead of hardcoding.
   - Access values via props: `${({ theme }) => theme.colors.primary}`.

2. **Component Organization**:

   - Separate styled components into `style.tsx` files.
   - Group related components in folders with an `index.tsx` entry point.

3. **TypeScript**:

   - Type all props and components explicitly.
   - Extend existing React Native types where applicable.

4. **Performance**:
   - Define styled components outside render functions.
   - Memoize complex components.
   - Minimize prop changes.

---

## 🏁 Conclusion

This guide provides a comprehensive setup for using styled-components with Expo and TypeScript. With a robust theme system, dark mode support, and type-safe components, this foundation ensures a scalable and maintainable codebase. Customize and extend this setup to meet your project’s unique requirements.

Have questions or feedback? Drop a comment or reach out! 🚀

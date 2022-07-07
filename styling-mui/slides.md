---
marp: true
title: "Styling MaterialUI"
_class: lead
theme: gaia
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---

# **Styling Material UI**

## 🤷‍♂️

---

# What I Expected

"Its going to be so hard to build this home page and style the editor 😬"

---

# What happened

- There are soo many ways to do it! 🤯

---

# How to do it

- Material UI provides theming utilities in `ThemeProvider`, which uses Reacts Context.
- Material UI supports emotion based styling (Library that allows you to write style in JSX/TSX)

---

# ThemeProvider set up

```jsx
import { createTheme } from "@mui/material/styles";

const theme = createTheme({ /* Create and set up your theme */});

export default function App() {}
  <div >
    <ThemeProvider theme={theme}> // Use the theme
      <CssBaseline /> // Override the default CSS
      <MyThemedApp /> // Everyone here has access to the theme, since it uses React's Context
    </ThemeProvider>
  </div>
);
```

---

# Customizing things

```jsx
const theme = createTheme({
  palette: {
    // Modify the colors of the theme
    primary: {
      main: "#ff0000",
    },
  },
  typography: {
    // Modify text styles
    fontSize: 12,
  },
  breakpoints: {
    // Modify breakpoints to define how thing will change in size
  },
});
```

---

# Customizing more things

```jsx
const theme = createTheme({
  components: {
    MuiLink: {
      // Modify <Link>
      styleOverrides: {
        root: {
          color: colors.text.main,
        },
        underlineAlways: {
          textDecoration: "underline",
        },
      },
    },
  },
});
```

---

# If you used CSS

```css
.MuiSlider-root {
  color: #20b2aa;
}

.MuiSlider-root:hover {
  color: #2e8b57;
}
```

---

# One off customization?

- Use the `sx` prop

```jsx
<Box
  sx={{
    bgcolor: "background.paper",
    boxShadow: 1,
    borderRadius: 2,
    p: 2,
    minWidth: 300,
  }}
>
  {something}
</Box>
```

---

# One off customization?

- Use emotion styling

```jsx
import * as React from "react";
import { styled } from "@mui/system";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});
```

---

# Conclusions

- Again, There are soo many ways to do it ahhhh 😂
- I settled with the `ThemeProvider` and `sx` props.

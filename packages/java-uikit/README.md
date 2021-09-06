# ☕ Java UIkit

[![Version](https://img.shields.io/npm/v/@javaswap-libs/uikit)](https://www.npmjs.com/package/@javaswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@javaswap-libs/uikit)](https://www.npmjs.com/package/@javaswap-libs/uikit)

Java UIkit is a set of React components and hooks used to build pages on Java's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @javaswap-libs/uikit`

## Setup

### Theme

Before using Java UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@javaswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@javaswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://javaswap.github.io/java-uikit/)

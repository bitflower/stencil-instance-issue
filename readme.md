# Stencil instance not defined repro

## Setup my-component-lib

```terminal
cd my-componentlib
npm i
npm run build
npm link
```

## Setup consumer-app

```terminal
cd consumer-app
npm i
npm link my-componentlib
npm run build
```

## Error

![alt text](error.png)
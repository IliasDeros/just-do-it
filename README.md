# React + Tailwind + Typescript

Boilerplate code for a [React](https://reactjs.org/) + [Tailwind](https://tailwindcss.com/) + [Typescript](https://www.typescriptlang.org/) Front-End application. Additional features include:

- [x] [Parcel] dev server
- [x] [Continuous Delivery](./.github/workflows/deploy.yml) 

[![Demo](https://i.ibb.co/7kyVSZX/image.png)](https://rttemplate.vercel.app/)

## Getting Started

This application uses [Parcel].
Use this command to install dependencies and start a live-reload server:

```
yarn && yarn start
```

Visit your app at http://127.0.0.1:1234/

[parcel]: https://parceljs.org/

## Folder Structure

This Front-End application groups code by feature.
It is inspired by the [Vertical Slice Architecture].

```
src/
  core/             // Business logic global to the entire app
  shared/           // No business logic
  Feature/
    components/     // UI elements
      Feature.tsx
    modules/        // Logic that doesn't impact the UI
    constant.ts     // Put magic values here
    utils.ts        // Extract functions here
```

[vertical slice architecture]: https://www.youtube.com/watch?v=cVVMbuKmNes

## Deploying

See [DEPLOYING.md](./DEPLOYING.md) for instructions on how to enable automatic deployments to [vercel]

[vercel]: https://vercel.com/

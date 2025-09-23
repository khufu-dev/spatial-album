# Spatial Album

Spatial Album displays images in a 3D carousel. The user interface is called
Cover Flow which was popularized by iTunes and Mac OS X in the 2000s. The user
scrolls horizontally through the images (demo) while the images animate in 3D
space.

![Screenshot](./doc/screenshot.png)

# Getting Started

## Requirements

- [Deno](https://deno.com)
- [WebSpatial](https://webspatial.dev)
- [Safari 26](https://developer.apple.com/documentation/safari-release-notes/safari-26-release-notes)
- [Xcode 26](https://developer.apple.com/xcode/) with Vision Pro simulator

## Vision OS

Run development server

```sh
deno task dev:avp
```

Package and run in Vision Pro simulator connecting to content from development
server

```sh
deno task avp
```

### Deploy to Vision Pro

1. [Create an Apple Developer account](https://developer.apple.com/programs/enroll/)
2. [Register a team and App ID](https://developer.apple.com/help/account/identifiers/register-an-app-id/)
   in the Apple Developer portal
3. Replace the `teamId` and `bundle-id` values in the `build:avp` Deno task from
   the values obtained in step 2
4. Build and bundle visionOS app

```sh
deno task build:avp
```
5. Open the Xcode project in `node_modules/@webspatial/platform-visionos` and deploy the app to the Simulator or device

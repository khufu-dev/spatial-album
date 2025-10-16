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

5. Open the Xcode project in `node_modules/@webspatial/platform-visionos` and
   deploy the app to the Simulator or device

### Publish to Apple App Store

1. First
   [create a new App record](https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app/)
   in [App Store Connect](https://appstoreconnect.apple.com/apps). Make sure to
   match the paramaters in the `publish` command
2. [Install and setup 1Password CLI](https://developer.1password.com/docs/cli/get-started/).
   The username and password for the next step will be securely fetched from
   1Password
3. Run the publish command to submit the app to App Store Connect

```sh
deno task publish
```

4. Submit the app to Test Flight to verify with testers or submit for App Store
   review.

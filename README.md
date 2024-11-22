# Expo Test App with Trip Planner Component

This project demonstrates a cross-platform (mobile + web) application with a focus on creating reusable components that can work both as standalone web elements and as part of a mobile app.

## Key Features

### Trip Planner Component

The main feature is a Trip Planner component that:

- Works in both mobile app and web contexts
- Can be embedded in external websites via iframe
- Supports deep linking and URL parameters
- Maintains consistent functionality across platforms

### Deep Linking Support

The app demonstrates deep linking capabilities:

**Mobile Deep Links:**

```bash
# for Android
npx uri-scheme open myapp://trip-planner --android  # Opens blank planner
npx uri-scheme open "myapp://trip-planner?destination=adelaide" --android # Opens with Adelaide pre-filled

# for iOS
npx uri-scheme open myapp://trip-planner --ios  # Opens blank planner
npx uri-scheme open "myapp://trip-planner?destination=adelaide" --ios # Opens with Adelaide pre-filled
```

**Web URLs:**

```bash
https://your-domain.com/trip-planner  # Opens blank planner
https://your-domain.com/trip-planner?destination=adelaide  # Opens with Adelaide pre-filled
```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

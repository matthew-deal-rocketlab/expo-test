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


#### Windows / WSL
<details>
<summary>Android development with Ubuntu v20 (WSL2) on Windows 11</summary>  
<br>

**Ubuntu:**
 - Install Android Studio
 - Install at least `open-jdk17`

**Android:**
 - Enable Developer mode
 - Enable WiFI debugging
 - Tap WiFI debugging > Pair via code (or QR)

**Windows:**
 - Update/Create `%USERPROFILE/.wslconfig`
	```
	[wsl2]
	networkingMode=mirrored
	[experimental]
	hostAddressLoopback=true
	```
 - Restart WSL:
	- `wsl --shutdown`
	- Open a new WSL Terminal
 - Download and extract ADB
 - run: `adp pair [ip]:[port]` then use the code from the phone
 - [need to kill winnat](https://stackoverflow.com/questions/26952483/adb-server-not-running):  
 	- `net stop winnat`
 - `adb start-server`
 - `adb connect [ip]:[port]`
 	Not the same port as the pairing...go back one screen on the phone, to the root of the "Wifi debugging" menu, and observe that port
 	Also had to turn off and on, and `adb kill-server`/`adb start-server` a couple times
 - Open Firewall ports:
 	- I opened 8091-8090 for good measure
 	- Selected only Private networks for a little safety
 	- Need to allow all connections, not just secured ones.


**Back in Ubuntu:**
 - Needed to update `app.json`:
	```
	{
		"expo": {
			"android": {
				"runtimeVersion": "~52.0.9"
			}
		}
	}
	```
- run: `expo run:android` to build a package
</details>

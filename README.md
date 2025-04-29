# Comments App

A React Native mobile application built with Expo for managing and displaying comments. This app allows users to view, add, and interact with comments in a user-friendly interface.

## Features

- View and manage comments
- Add new comments
- Rating system integration
- Offline storage support
- Redux state management
- TypeScript support

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac users) or Android Studio (for Android development)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd comments-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Available Scripts

- `npm start` or `yarn start` - Start the Expo development server
- `npm run android` or `yarn android` - Start the app on Android emulator
- `npm run ios` or `yarn ios` - Start the app on iOS simulator
- `npm run web` or `yarn web` - Start the app in web browser

## Technologies Used

- React Native
- Expo
- TypeScript
- Redux Toolkit
- React Redux
- AsyncStorage
- Axios
- React Native Ratings

## Project Structure

```
comments-app/
├── src/            # Source code directory
├── assets/         # Static assets
├── .expo/          # Expo configuration
├── .vscode/        # VS Code settings
├── App.tsx         # Main application component
├── app.json        # Expo configuration
├── index.ts        # Entry point
└── package.json    # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

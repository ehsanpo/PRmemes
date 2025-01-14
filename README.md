# PRmemes

# PR Meme Reviewer

A browser extension that lets you quickly add memes to your GitHub pull request reviews. Available for both Chrome and Firefox browsers.

![PR Meme Reviewer](https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)

## Features

- 🖼️ Quick meme insertion in PR comments
- ⭐ Favorite your most-used memes
- 🔍 Search functionality
- 🎯 Lazy loading for better performance
- 💾 Sync favorites across devices
- ⌨️ Command-based meme insertion

## Installation

### Chrome

1. Download the latest release
2. Go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select the `dist` folder

### Using .crx

Open Chrome, navigate to chrome://extensions/, and enable Developer mode.
They can drag and drop the .crx file onto the Extensions page.
Chrome will prompt them to confirm the installation, and they should click Add Extension.

### Firefox

1. Download the latest release
2. Go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select the `dist` folder

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for Chrome
npm run build:chrome

# Build for Firefox
npm run build:firefox
```

## Usage

### In GitHub PR Reviews

1. Type a meme command (e.g., `/acceptit`)
2. The command will automatically be replaced with the corresponding meme

### Extension Popup

1. Click the extension icon
2. Search for memes using the search bar
3. Star your favorite memes for quick access
4. Click the copy button to copy the meme markdown
5. Use the favorites filter to show only starred memes

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

## License

MIT License - feel free to use this project for any purpose.

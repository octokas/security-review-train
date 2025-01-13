# Emoji Converter Script

A Node.js script that watches Markdown files and automatically converts emoji shortcodes (`:emoji:`) to their corresponding Unicode emojis.

## Features

- Real-time file watching
- Converts emoji shortcodes to Unicode emojis
- Only updates files when changes are detected
- Preserves unknown emoji shortcodes
- Handles nested directories
- Console feedback for processed files

## Installation

Make sure you have [Yarn](https://yarnpkg.com/) installed, then run:

```bash
yarn install
```

## Usage

Start the watcher:

```bash
yarn watch
```

The script will automatically:
1. Watch all Markdown files in the `content` directory and subdirectories
2. Convert emoji shortcodes to actual emojis when files are saved
3. Show console output for processed files

### Example Conversions

- `:wave:` → 👋
- `:tada:` → 🎉
- `:smile:` → 😄

## Configuration

The script is configured to watch `content/**/*.md` by default. To modify the watch pattern or other settings, edit the `scripts/emoji-converter.js` file.

## Troubleshooting

If you encounter any issues:
1. Make sure all dependencies are installed
2. Check file permissions in the content directory
3. Verify the watch path matches your project structure

## Contributing

Feel free to submit issues and enhancement requests!

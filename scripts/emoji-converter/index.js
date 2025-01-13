const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const emoji = require('node-emoji');

// Configure the watcher to look in content directory from project root
const contentDir = path.join(process.cwd(), '..', '..', 'content');
const watcher = chokidar.watch(path.join(contentDir, '**/*.md'), {
    persistent: true,
    ignoreInitial: false
});

// Function to convert emoji shortcodes to actual emojis
function convertEmojis(content) {
    return emoji.emojify(content);
}

// Process a file
function processFile(filePath) {
    try {
        console.log(`Processing ${filePath}...`);
        const content = fs.readFileSync(filePath, 'utf8');
        const updatedContent = convertEmojis(content);

        // Only write if content has changed
        if (content !== updatedContent) {
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`✓ Updated emojis in ${filePath}`);
        } else {
            console.log(`No emoji updates needed in ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
}

// Watch for changes
watcher
    .on('add', processFile)
    .on('change', processFile)
    .on('error', error => console.error(`Watcher error: ${error}`))
    .on('ready', () => console.log('Initial scan complete. Ready for changes...'));

console.log(`👀 Watching for Markdown files in ${contentDir}...`);
// console.log('👀 Watching for Markdown files...');

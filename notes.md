# Key Takeaways

## Manifest.json notes

### Scripts
* array containing all js files to be access in the background
* May want more than one js file loaded on background page

Persistent: false sets page to be an event (only alive when needed); default to true - the page will continue to use up resources

## Debugging
* chrome://extensions/ > "Inspect views" - background page > right click extension > Inspect Popup

## notifications
* make sure your notification ID is unique or it will update old notification instead of creating a new one 

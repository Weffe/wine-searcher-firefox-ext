// This must match the name value in manifest.json#chrome_settings_overrides#search_provider
const wsEngineName = 'wine-searcher';

// Should be the same as manifest.json#icons
const icons = {
    "16": "./icons/ws-16.png",
    "32": "./icons/ws-32.png",
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/create
 */
browser.menus.create({
    id: wsEngineName,
    title: `Search ${wsEngineName} for "%s"`,
    contexts: ['selection'],
    icons,
})

browser.menus.onClicked.addListener((info) => {
    if (info.menuItemId === wsEngineName) {
        /**
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/search/search
         */
        browser.search.search({
            query: info.selectionText,
            engine: wsEngineName,
            disposition: 'NEW_TAB'
        });
    }
});

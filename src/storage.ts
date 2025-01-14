// Browser storage wrapper
const storage = {
  get: async (keys: string | string[] | Record<string, any>) => {
    if (typeof browser !== 'undefined') {
      // Firefox
      return browser.storage.sync.get(keys);
    } else if (typeof chrome !== 'undefined') {
      // Chrome
      return new Promise((resolve) => {
        chrome.storage.sync.get(keys, resolve);
      });
    }
    // Fallback for development/testing
    return {};
  },

  set: async (items: Record<string, any>) => {
    if (typeof browser !== 'undefined') {
      // Firefox
      return browser.storage.sync.set(items);
    } else if (typeof chrome !== 'undefined') {
      // Chrome
      return new Promise((resolve) => {
        chrome.storage.sync.set(items, resolve);
      });
    }
    // Fallback for development/testing
    return Promise.resolve();
  }
};

export default storage;
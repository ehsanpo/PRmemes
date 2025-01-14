// Browser storage wrapper
const storage = {
  get: async (keys: string | string[] | Record<string, any>) => {
    if (typeof window !== "undefined") {
      if ("browser" in window && window.browser?.storage?.sync) {
        // Firefox
        return window.browser.storage.sync.get(keys);
      } else if ("chrome" in window && window.chrome?.storage?.sync) {
        // Chrome
        return new Promise((resolve) => {
          chrome.storage.sync.get(keys, resolve);
        });
      }
    }
    // Fallback for development/testing
    return Promise.resolve({ favorites: [] });
  },

  set: async (items: Record<string, any>) => {
    if (typeof window !== "undefined") {
      if ("browser" in window && window.browser?.storage?.sync) {
        // Firefox
        return window.browser.storage.sync.set(items);
      } else if ("chrome" in window && window.chrome?.storage?.sync) {
        // Chrome
        return new Promise((resolve) => {
          chrome.storage.sync.set(items, resolve);
        });
      }
    }
    // Fallback for development/testing
    return Promise.resolve();
  },
};

export default storage;

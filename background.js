chrome.windows.onFocusChanged.addListener((newFocusedWindowId) => {
  console.log('onFocusChanged', newFocusedWindowId)
})
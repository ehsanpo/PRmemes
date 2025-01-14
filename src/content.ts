// Import memes data
const memesData = [
    {
        "name": "/3dayslater",
        "link": "https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/WjlTemxb6oA4PgZFmj08/17a7a068-16a0-40e0-ae2e-689b352b7779/3dayslater.png"
    },
    {
        "name": "/???",
        "link": "https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/default-memes/questionmarks.gif"
    },
    {
        "name": "/abandonship",
        "link": "https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/WjlTemxb6oA4PgZFmj08/9ad7d584-1c9e-43ae-8e60-56fe2bf7d5ca/abandonship.gif"
    },
    {
        "name": "/acceptit",
        "link": "https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/WjlTemxb6oA4PgZFmj08/8488a0d6-7bb9-488a-90cd-060d546900aa/acceptit.gif"
    },
    {
        "name": "/andthenitoldthem",
        "link": "https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/WjlTemxb6oA4PgZFmj08/aa083882-aab1-46aa-8c1c-3e17fa906a4b/andthenitoldthem.png"
    }
];

// Create a map for faster lookups
const memeMap = new Map(memesData.map(meme => [meme.name, meme.link]));

function handleTextChange(element: HTMLTextAreaElement) {
  const text = element.value;
  const cursorPosition = element.selectionStart;
  
  // Find the last word being typed (from the last space/newline to the cursor)
  const lastWord = text.substring(0, cursorPosition).split(/[\s\n]/).pop() || '';
  
  // Check if it matches a meme command
  if (memeMap.has(lastWord)) {
    const memeLink = memeMap.get(lastWord);
    const markdownImage = `![${lastWord}](${memeLink})`;
    
    // Replace the command with the markdown image
    const beforeCommand = text.substring(0, cursorPosition - lastWord.length);
    const afterCommand = text.substring(cursorPosition);
    
    element.value = beforeCommand + markdownImage + afterCommand;
    
    // Move cursor after the inserted markdown
    const newPosition = beforeCommand.length + markdownImage.length;
    element.selectionStart = newPosition;
    element.selectionEnd = newPosition;
    
    // Trigger input event to ensure GitHub's preview updates
    element.dispatchEvent(new Event('input', { bubbles: true }));
  }
}

function initMemeListener() {
  // GitHub uses both textarea and rich-text div elements
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLElement) {
          // Find textareas and rich-text editors
          const textareas = node.querySelectorAll('textarea');
          textareas.forEach(textarea => {
            if (!textarea.dataset.memeEnabled) {
              textarea.dataset.memeEnabled = 'true';
              textarea.addEventListener('input', (e) => {
                handleTextChange(e.target as HTMLTextAreaElement);
              });
            }
          });
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Handle existing textareas
  document.querySelectorAll('textarea').forEach(textarea => {
    if (!textarea.dataset.memeEnabled) {
      textarea.dataset.memeEnabled = 'true';
      textarea.addEventListener('input', (e) => {
        handleTextChange(e.target as HTMLTextAreaElement);
      });
    }
  });
}

// Initialize when the page loads
initMemeListener();
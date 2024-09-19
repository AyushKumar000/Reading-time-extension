const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("div");
  // Use the same styling as the publish information in an article's header
  //   badge.classList.add("color-secondary-text", "type--caption");
  //   badge.textContent = `⏱️ ${readingTime} min read`;
  badge.style.width = "160px";
  badge.style.height = "90px";
  badge.style.backgroundColor = "#f0f0f0";
  badge.style.border = "1px solid #ccc";
  badge.style.padding = "10px";
  badge.style.margin = "10px";

  var newParagraph = document.createElement("p");
  newParagraph.textContent = `⏱️ ${readingTime} min read`;
  newParagraph.classList.add("color-secondary-text", "type--caption");

  // Append the paragraph to the div
  badge.appendChild(newParagraph);

  // Append the paragraph to the div
  badge.appendChild(newParagraph);

  // Create a new button element
  var newButton = document.createElement("button");

  // Add text to the button
  newButton.textContent = "Start Reading";

  // Style the button
  newButton.style.borderRadius = "25px";
  newButton.style.backgroundColor = "#1b8918";
  newButton.style.color = "white";
  newButton.style.border = "none";
  newButton.style.padding = "10px 20px";
  newButton.style.cursor = "pointer";
  newButton.style.fontSize = "16px";
  newButton.style.marginTop = "5px";

  // Append the button to the div, next to the paragraph
  badge.appendChild(newButton);

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}

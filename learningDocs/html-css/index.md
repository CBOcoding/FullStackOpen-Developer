source: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content

<!doctype html>: The doctype is a required preamble. In the mists of time, when HTML was young (around 1991/92), doctypes were meant to act as links to a set of rules that the HTML page had to follow to be considered good HTML, which could mean automatic error checking and other useful things. However, these days, they don't do much and are basically just needed to make sure your document behaves correctly. That's all you need to know for now.

<html></html>: The <html> element wraps all the content on the entire page and is sometimes known as the root element. It also includes the lang attribute, which sets the primary language of the document.

<head></head>: The <head> element acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers. This includes things like keywords and a page description that you want to appear in search results, CSS to style the content, character set declarations, and more.

<meta charset="utf-8">: This element sets the character set your document should use to UTF-8, which includes most characters from the vast majority of written languages. Essentially, it can now handle any textual content you might put on it. There is no reason not to set this, and it can help avoid some problems later on.

<meta name="viewport" content="width=device-width">: This viewport element ensures the page renders at the width of the browser viewport, preventing mobile browsers from rendering pages wider than the viewport and then shrinking them down.

<title></title>: The <title> element sets the title of your page, which is the title that appears in the browser tab the page is loaded in. It is also used to describe the page when you bookmark/favorite it.

<body></body>: The <body> element contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else. At the moment it only contains a single <img> element, but we'll add more content later on.
____
Note: Most HTML elements consist of an opening tag (for example, <body>), followed by the element's content, followed by a closing tag (for example, </body>). Some HTML elements also have attributes, which contain extra settings or information about the element — see for example charset, name, and src in the our code sample.


<img src="" alt="My test image" />
This embeds an image into our page in the position it appears. It does this via the src (source) attribute, which contains the path to the image file we want to embed.

We have also included an alt (alternative) attribute. In the alt attribute, you specify descriptive text for users who cannot see the image, possibly because of the following reasons:

They are visually impaired. Users with significant visual impairments often use tools called screen readers to read out the alt text to them.

Something has gone wrong, causing the image not to display. If the src attribute does not contain a valid path to an image, the alt text will be displayed instead:

The words: my test image

The alt text you write should provide the reader with enough information to have a good idea of what the image conveys. In this example, our current text of "My test image" is not good because it doesn't convey descriptive information about the image. A much better alternative for our Firefox logo would be "The Firefox logo: a flaming fox surrounding the Earth."
____
Note: Elements such as <img> have no content or closing tag, and are therefore called empty (or void) elements. They are sometimes written with a trailing slash at the end of their single tag (<img />), but this is optional.



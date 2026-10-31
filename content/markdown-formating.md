# Markdown Formatting Guide

This guide explains how to format your fanfiction chapters using Markdown. You don't need any special software – simply edit your `.md` file using a text editor or Visual Studio Code.

## 1. Headings

Use `#` to create headings. The more `#` symbols you use, the smaller the heading becomes.

```md
# Heading 1
## Heading 2
### Heading 3
```

For chapter titles, use a level-one heading:

```md
# Chapter 1: The Beginning
```

## 2. Text Formatting

You can make text **bold**, *italic* or ~~strikethrough~~.

```md
**This text is bold.**

*This text is italic.*

~~This text is crossed out.~~
```

You can also combine formatting:

```md
***Bold and italic text.***
```

## 3. Paragraphs and Line Breaks

Leave an empty line between paragraphs.

```md
This is the first paragraph.

This is the second paragraph.
```

If you want a line break without starting a new paragraph, add two spaces at the end of a line.

```md
The first line.  
The second line.
```

## 4. Lists

You can create unordered lists using `-`:

```md
- First item
- Second item
- Third item
```

Or numbered lists:

```md
1. First item
2. Second item
3. Third item
```

## 5. Blockquotes

Use `>` to display quoted text or dialogue in a separate block.

```md
> "I never thought I would see you again."
```

## 6. Links

You can add clickable links:

```md
[Visit my website](https://example.com)
```

## 7. Horizontal Lines

Use three hyphens to create a horizontal divider:

```md
---
```

## 8. Special Characters

Some characters have a special meaning in Markdown. If you want to display them as normal text, add a backslash before them.

```md
\*This will not be italic.\*
```

## 9. Adding Chapters

Every chapter must start with the chapter marker:

```md
<!-- chapter -->
```

Add your chapter title underneath using `#`.

Example:

```md
<!-- chapter -->
# Chapter 1: The Beginning

Your story starts here.

<!-- chapter -->
# Chapter 2: The Journey

Your next chapter starts here.
```

**Important:**
- Every chapter needs its own `<!-- chapter -->` marker.
- Always add a chapter title starting with `#`.
- Keep the chapter markers exactly as shown.
- Don't put the chapter marker inside a code block in your actual story.

---

**Tip:** You can use this guide as a reference whenever you edit your fanfiction files. Experiment with the formatting to make your stories easier and more enjoyable to read!
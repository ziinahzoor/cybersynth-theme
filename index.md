---
title: Demo
layout: default
---

# Headers (Level 1)

## This is how (Level 2)

### The six (Level 3)

#### Levels (Level 4)

##### Of headers (Level 5)

###### Look like (Level 6)

# Lists

This is a paragraph

## Here is some text examples on an unordered list:

-   _This is Italic_, mamma mia!
-   **Here's the Bold text** (he opens two Chrome instances at the same time)
    -   Just here to show some nesting
        -   More nesting
-   ~~This is a Strikethrough text~~ (maybe it isn't anymore)
-   [This one is a link, please click on it](https://rafaelrosa.dev)
    -   Here's a simple footnote[^1], and here's another one[^anothernote]

## If you want an ordered one:

1. We
2. Also
3. Have
4. It

## And definition lists:

<dl>
<dt>Name</dt>
<dd>Rafael</dd>
<dt>Birthday</dt>
<dd>15/11</dd>
<dt>Country</dt>
<dd>Brazil</dd>
<dt>Job</dt>
<dd>Developer</dd>
</dl>

## Task lists too?

-   [x] Yes, we support them
-   [ ] No, unfortunately

# Code

`One-line code`

## And multiline code:

```js
// Javascript code with syntax highlighting.
var aFuncionVariable = function aFunction(anArgument) {
	aVariable.aProperty = anotherFunction('someString' + anArgument);
	return true;
};
```

```csharp
// C# code with syntax highlighting
public static AReturnType AFunction(float anArgument) {
	var aVariable = AnotherFunction(anArgument);
	return aVariable.ToReturnType();
}
```

```xml
<!--XML code with synxtax highlighting-->
<aTag aProperty="aValue">
	someContent
</aTag>
```

```
This is a long code block just to show that it should scroll horizontally instead of showing the overflow. Anyway, here's a bunch of z's: zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
```

# Blockquotes

> -   Here are them with a list
>
> > and `nested` blockquotes!

# Images

You can also use images (as expected):

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

# Tables

| left           | centralized  |         right |
| :------------- | :----------: | ------------: |
| you            |     can      |           use |
| it             |     with     |        `code` |
| or             |     just     |           use |
| it             |   normally   |            :) |
| this last line | is here just | to take space |

## Horizontal lines, like this one down here:

---

# Other features

## GitHub's Markdown alerts

> [!IMPORTANT]
> We support them. See the usage bellow.

```markdown
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

## Look to the left side of the screen

There are a navigation menu so you can quickly navigate through the headers of your page. (Not on mobile, but I'm planning to add that soon).

[^1]: This is the first footnote.
[^anothernote]: Here's the second one.

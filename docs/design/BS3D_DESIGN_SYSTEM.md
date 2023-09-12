# BS3D Design System

![Black Swan Docs header](/.github/docs_header.png)

Welcome to the BS3D Design System docs. Here, I'll go through how some of the components in the website are designed to reference later, or if a future developer may need to be caught up to date.

⚠️ This documentation is under development. Things may change.

## Tools

All components are created in HTML and [Sass](https://sass-lang.com/).

If you haven't used Sass before, I recommend [this video by Fireship](https://www.youtube.com/watch?v=akDIJa0AP5c) and [this cheatsheet](https://quickref.me/sass). If you already know CSS, you're going to love Sass!

## Repeated Sass code

Sass is amazing because it lets us reuse code in a very efficient way. I recommend adding this piece on the top of every Sass file since we might be using it:

```scss
// Constants
$YELLOW: #F4E04D;
$DARKBLUE: #050E36;
$BLACK: black;
$WHITE: white;
$FONT: Georgia, 'Times New Roman', Times, serif;

@mixin clickable($color_on_hover: $YELLOW) {
    // Default value is yellow if not specified
    color: $color_on_hover;
    cursor: pointer;
}

@mixin clear_link_defaults($text_color: $WHITE) {
    color: $text_color;
    text-decoration: none;
}
```

## Header

```html
<header>
    <img src="..." width="100" height="100">
    <div id="header-menu">
        <div class="header-button">
            <a href="/about/">
                <p>About</p>
            </a>
        </div>
        <div class="header-button">
            <a href="/showcase/">
                <p>Our Work</p>
            </a>
        </div>
        <div class="header-button">
            <a href="/our-team/">
                <p>Our Team</p>
            </a>
        </div>
    </div>
</header>
```

```scss
// Actual code
#header-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.header-menu-button {
    margin: 0 10px; // Keep buttons 10px from each other
    border: none;
    background-color: transparent;
    color: $WHITE;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;

    &:hover {
        @include clickable();
    }
}
```

## Footer

```html
<footer>
    <div id="footer-socials">
        <div class="footer-socials-logo"><a class="footer-socials-colors" href="..." target="_blank" rel="noopener noreferrer"><img src="..." alt="Our Etsy shop" height="29" width="auto"></a></div>
        <div class="footer-socials-logo"><a class="footer-socials-colors" href="..." target="_blank" rel="noopener noreferrer"><img src="..." alt="Our Instagram page" height="29" width="auto"></a></div>
        <div class="footer-socials-logo"><a class="footer-socials-colors" href="..." target="_blank" rel="noopener noreferrer"><img src="..." alt="Our LinkedIn page" height="29" width="auto"></a></div>
        <div class="footer-socials-logo"><a class="footer-socials-colors" href="..." target="_blank" rel="noopener noreferrer"><img src="..." alt="Our TikTok page" height="29" width="auto"></a></div>
    </div>
    
    <br>

    <div id="footer-contact">
        <p><strong>Contact us!</strong></p>
        <p>Irvine, CA 92617</p>
        <p><a href="tel:+19313025988">(931) 302-5988</a></p>
        <p><a href="mailto:contact@blackswan3d.com">contact@blackswan3d.com</a></p>
    </div>
</footer>
```

```scss
footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    a {
        @include clear_link_defaults();
        &:hover {
            @include clickable();
        }
    }
}

.footer-socials-colors {
    filter: brightness(0) invert(1);

    &:hover {
        // Makes images of social media yellow!
        filter: brightness(0) saturate(100%) invert(81%) sepia(98%) saturate(400%) hue-rotate(333deg) brightness(104%) contrast(91%);
    }
}

#footer-socials {
    display: flex;
    align-items: center;
  }
  
.footer-socials-logo {
    margin: 0 25px;
}
```

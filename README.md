# My Portofolio Web

## Design

The design of this portfolio website is clean and modern, with a focus on showcasing my projects and skills. The color scheme is minimalistic, using shades of gray and white to create a professional look. The layout is responsive, ensuring that the website looks great on both desktop and mobile devices.

Design Source: [Figma](https://www.figma.com/make/yTCUUTWPLvVGriBScBYOI3/Portfolio-Website-Design?t=QVOrKTwv6ZSmUFHA-1)

## Features

- Responsive design
- Project showcase with images and descriptions
- Contact form for potential clients or employers to reach out
- Smooth scrolling and animations for a better user experience
- SEO optimized for better visibility on search engines
- Cross-browser compatibility to ensure it works well on all major browsers
- Accessibility features to make the website usable for everyone, including those with disabilities
- Performance optimization to ensure fast loading times and a smooth user experience
- Integration with social media platforms to allow visitors to connect with me on various channels
- Regular updates to keep the content fresh and relevant, showcasing new projects and skills as they are developed.

## Technologies Used

- HTML5
- CSS3 => CSS4
- JavaScript

### About CSS Level 4

CSS Level 4 refers to the ongoing development of CSS specifications that are being worked on by the W3C CSS Working Group. Here are some notable features:

#### 🎨 Selectors Level 4

- **`:has()` pseudo-class** – "parent selector" (now widely supported)
- **`:is()` and `:where()`** – forgiving selector lists
- **`:not()` with multiple arguments** – e.g., `:not(.a, .b)`

#### 📐 New Layout & Visual Features

- **`@container` queries** – respond to parent container size (not just viewport)
- **`@layer`** – cascade layers for better specificity management
- **`color-mix()`** – mix two colors together
- **`oklch()` / `oklab()`** – new perceptually uniform color spaces

#### 🌊 CSS Nesting (Native)

- Write nested rules like Sass/LESS — now natively supported!

```css
.card {
    color: red;

    &:hover {
        color: blue;
    }
}
```

#### 🔢 Math Functions

- **`round()`**, **`mod()`**, **`rem()`**, **`sin()`**, **`cos()`** etc.
- Extends the existing `calc()`, `min()`, `max()`, `clamp()`

#### 🎭 Animations & Transitions

- **`@starting-style`** – animate elements on first render
- **`transition-behavior: allow-discrete`** – animate `display: none`

#### 📦 Other Highlights

- **`anchor()` positioning** – position elements relative to other elements
- **`text-wrap: balance`** – balanced text wrapping
- **`light-dark()`** function for theming

---

> 💡 Most of these features are already supported in modern browsers like Chrome, Firefox, and Safari.

---

### What changed (same look, new syntax)

| Old CSS              | CSS Level 4 Equivalent                       |
| -------------------- | -------------------------------------------- |
| `margin-left/right`  | `margin-inline` (logical properties)         |
| `padding-top/bottom` | `padding-block` (logical properties)         |
| Repeated selectors   | `:is()` grouping                             |
| `rgba(0,0,0,0.5)`    | `color-mix(in srgb, black 50%, transparent)` |
| `#10b981` hex colors | `oklch()` perceptual color space             |
| Separate hover rules | **CSS Nesting** `&:hover {}`                 |
| `@media` only        | `@layer` cascade management                  |
| No parent detection  | `:has()` for label focus highlight           |

---

### What was cleaned up

| Issue                                           | Fix                                                                |
| ----------------------------------------------- | ------------------------------------------------------------------ |
| 4× separate `@media (min-width: 1024px)` blocks | **Merged** into one block                                          |
| `rgba(0,0,0,0.2)` / `rgba(0,0,0,0.5)`           | Replaced with `color-mix()`                                        |
| `right: -100%` / `border-left`                  | Replaced with logical `inset-inline-end` / `border-inline-start`   |
| `.img__inatrade` duplicate `width/height`       | Removed redundant properties already set by `.project-card__image` |
| Unused `--border-primary` token                 | Removed                                                            |
| responsive.css as separate file                 | **Merged** into `@layer responsive`                                |

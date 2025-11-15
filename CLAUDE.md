# CLAUDE.md - Utility Classes Framework

**Last Updated**: 2025-11-15

## Project Overview

This is a **Tailwind CSS-inspired utility classes framework** implemented as a single, dependency-free CSS file. The framework provides a comprehensive set of utility classes for rapid prototyping and development with responsive, fluid typography and spacing.

### Key Characteristics
- **Pure CSS**: No JavaScript, no build process, no dependencies
- **Fluid Responsive Design**: Uses CSS `min()`, `max()`, and `calc()` for fluid scaling
- **Tailwind-Inspired**: Familiar class naming conventions for developers used to Tailwind CSS
- **Lightweight**: Single CSS file that can be linked directly

## Repository Structure

```
/
├── .git/              # Git repository metadata
└── framework.css      # Main and only framework file (1454 lines)
```

### File Overview

**framework.css** - The complete utility framework containing:
- Base HTML font-size reset (62.5% for easy rem calculations)
- Typography utilities
- Spacing utilities (margin, padding, space-between)
- Layout utilities (width, height, overflow, z-index, scale)
- Border utilities (width, radius)
- Visual effects (opacity, shadows, cursor)
- Component classes (buttons)

## CSS Framework Categories

### 1. Typography (Lines 7-291)

**Heading Classes** (.h1 - .h6)
- Fluid responsive sizing using viewport-based calculations
- Example: `.h1` scales from 3.6rem to 6rem based on viewport

**Text Size Classes** (.text-xs through .text-9xl)
- Small sizes (xs, sm, base) use fixed sizing
- Larger sizes use fluid scaling formulas

**Font Utilities**
- Weights: `.font-thin` to `.font-black` (100-900)
- Families: `.font-sans`, `.font-serif`, `.font-mono`
- Letter spacing: `.tracking-d3` to `.tracking-u5`
- Text alignment: `.text-left`, `.text-center`, `.text-right`, `.text-justify`
- Text transform: `.uppercase`, `.lowercase`, `.capitalize`
- Text decoration: `.underline`, `.line-through`, `.hover-underline:hover`
- Line height: `.leading-none` to `.leading-loose`
- Text overflow: `.truncate`, `.overflow-ellipsis`, `.break-words`

### 2. Visual Effects (Lines 292-383)

**Opacity** (.opacity-1 to .opacity-full)
- Scale from 0.1 to 1.0

**Box Shadows** (.shadow-* variants)
- From `.shadow-sx` (extra small) to `.shadow-2xl`
- Special: `.shadow-inner`, `.shadow-none`

**Cursor**
- `.cursor-pointer`

### 3. Spacing System (Lines 385-990)

The framework uses a **fluid spacing system** based on the formula:
```css
min(max(baseRem, calc(baseRem + ((1vw - 0.32rem) * multiplier))), maxRem)
```

**Max Width** (.max-w-*)
- Predefined: xs (32rem), sm (48rem), md (64rem), lg (72rem), xl (96rem), 2xl (112rem)
- Special: `.max-w-full`, `.max-w-prose` (40ch)

**Width** (.w-*)
- Percentage-based: 10, 20, 30, 40, 50, 60, 70, 80, 90, full (100%)
- Fractional: 16 (16.666%), 33 (33.333%), 66 (66.666%)
- Special: `.w-auto`, `.w-screen` (100vw)

**Height** (.h-*)
- `.h-auto`, `.h-full` (100%), `.h-screen` (100vh)

**Padding/Margin** (p-*, py-*, px-*, m-*, mt-*, mr-*, mb-*, ml-*)
- Scale: 0, 1, 2, 3, 4, 5, 6, 8, 12, 16, 20, 24
- All use fluid responsive calculations

**Margin Auto** (.mx-auto, .my-auto, .ml-auto, etc.)
- For centering elements

**Owl Spacing** (.owl-spacing--s/m/l/xl)
- Uses lobotomized owl selector (`>*+*`) with viewport-based margins
- Applies to direct children with automatic spacing

**Space Between** (.space-y-*)
- Similar to owl spacing but with fixed scale values
- Scale: 0, 1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 20
- Supports `.ct-section` wrapper pattern

### 4. Borders (Lines 991-1157)

**Border Width**
- `.border-none`, `.border-px`, `.border-2`
- Directional: `.border-t`, `.border-r`, `.border-b`, `.border-l`
- Thicker variants: `.border-t2`, `.border-r2`, etc.
- Axis variants: `.border-y1`, `.border-y2`, `.border-x1`, `.border-x2`

**Border Radius**
- Sizes: `.rounded-sm` (0.2rem), `.rounded` (0.4rem), `.rounded-md` (0.6rem), `.rounded-lg` (0.8rem)
- Special: `.rounded-full` (999.901rem)
- Directional: `.rounded-t`, `.rounded-r`, `.rounded-b`, `.rounded-l` (and -lg variants)

### 5. Buttons (Lines 1159-1295)

Three button sizes with responsive behavior and hover effects:

**.btn-s** (Small Button)
- Font: 1.4rem, weight 600
- Padding: 0.8rem vertical, 2.4rem horizontal
- Hover: translateY(-5px)
- Responsive breakpoints at 1168px, 767px, 479px

**.btn-m** (Medium Button)
- Font: 1.6rem, weight 600
- Padding: 1.2rem vertical, 3.2rem horizontal
- Hover: translateY(-5px)
- Responsive breakpoints at 1168px, 767px, 479px

**.btn-l** (Large Button)
- Font: 1.8rem, weight 600
- Padding: 1.2rem vertical, 6.4rem horizontal
- Hover: translateY(-5px)
- Responsive breakpoints at 1168px, 991px, 767px, 479px

**Note**: All buttons become full-width on mobile (479px breakpoint)

### 6. Layout (Lines 1297-1453)

**Overflow**
- `.overflow-hidden`, `.overflow-y-scroll`

**Object Fit**
- `.object-cover`, `.object-contain`, `.object-scale-down`, `.object-none`
- Position: `.object-top`, `.object-bottom`, `.object-left`, `.object-right`

**Z-Index**
- Scale: 0, 10, 20, 30, 40, 50, 100, 1000, 2000, 5000, 9999
- `.z-auto`

**Scale/Transform**
- Scale down: `.scale-down-4` (0.125) to `.scale-down-1` (0.75)
- Normal: `.scale-none` (1)
- Scale up: `.scale-up-1` (1.125) to `.scale-up-4` (1.75)
- Hover variants: `.hover-scale-up-*`, `.hover-scale-down-*`

## Development Workflow

### Code Style Conventions

1. **Organization**: Classes are organized by category with clear comment headers
2. **Naming**: Tailwind-style naming conventions (e.g., `.text-center`, `.p-4`, `.rounded-lg`)
3. **Comments**: Section headers use format: `/* Tailwind CSS inspired utility classes */`
4. **Indentation**: 2-space indentation
5. **Line Numbers**: The file is 1454 lines long

### Fluid Typography Formula

The framework uses a sophisticated fluid scaling formula:
```css
min(max(minSize, calc(minSize + ((1vw - 0.32rem) * scaleFactor))), maxSize)
```

**Breaking it down:**
- `1vw - 0.32rem`: Viewport-based scaling starting at 320px viewport
- `scaleFactor`: Determines rate of growth
- `min()` and `max()`: Clamps values between minimum and maximum sizes

### Git Workflow

**Branch Strategy:**
- Main development happens on feature branches
- Current working branch: `claude/claude-md-mi01a8hp3tmr8002-01RTTRZKFn1GAeRyey3TMGrV`
- Branch naming convention: `claude/<session-id>`

**Commit Message Patterns:**
- Direct, action-based: "Update framework.css", "Delete framework1.css"
- Simple and clear
- Typically describe file-level changes

**When Committing:**
```bash
git add framework.css
git commit -m "Update framework.css - [describe specific changes]"
git push -u origin <branch-name>
```

### Making Changes to the Framework

#### Adding New Utility Classes

1. **Identify the correct section** based on the utility type
2. **Follow the existing naming pattern**
3. **Maintain consistent spacing and indentation**
4. **Add appropriate comments** if starting a new category

Example:
```css
/* NEW CATEGORY */

.new-utility-class {
  property: value;
}
```

#### Adding New Responsive Utilities

For fluid scaling, use the established formula:
```css
.new-class {
  property: min(max(baseRem, calc(baseRem + ((1vw - 0.32rem) * factor))), maxRem);
}
```

#### Adding New Button Variants

Follow the existing button pattern:
```css
.btn-variant:hover {
  transform: translateY(-5px);
}

.btn-variant {
  /* Base styles */
  transition-duration: 0.4s;
  transition-property: all;
}

@media (max-width: XXXpx) {
  .btn-variant {
    /* Responsive adjustments */
  }
}
```

### Common Tasks for AI Assistants

#### Task: Add a New Utility Class

1. Read framework.css to understand current structure
2. Find the appropriate section for the new class
3. Use Edit tool to add the class following existing patterns
4. Ensure consistent formatting and naming
5. Commit the change with clear message

#### Task: Modify Existing Classes

1. Read the relevant section of framework.css
2. Use Edit tool to make precise changes
3. Preserve the fluid scaling formulas unless specifically changing them
4. Test that changes don't break existing patterns
5. Commit with descriptive message

#### Task: Add Responsive Breakpoints

Current breakpoints used:
- 479px (mobile)
- 767px (tablet)
- 991px (small desktop)
- 1168px (desktop)

Follow existing media query patterns when adding new responsive utilities.

#### Task: Refactor or Reorganize

1. **Never** create new files unless explicitly required
2. Keep everything in framework.css
3. Maintain the existing category structure
4. Update section comments if reorganizing
5. Test thoroughly before committing

## Important Notes for AI Assistants

### What NOT to Do

1. **Don't create additional files** - This is intentionally a single-file framework
2. **Don't add build processes** - This is pure CSS, no preprocessing
3. **Don't create documentation files** unless explicitly requested
4. **Don't add JavaScript** - This is CSS-only
5. **Don't remove the fluid scaling formulas** - They're core to the framework's design
6. **Don't change the base font-size** - The 62.5% reset is intentional for rem calculations

### What TO Do

1. **Preserve the fluid scaling system** - It's the framework's key feature
2. **Follow Tailwind naming conventions** - Keep class names consistent
3. **Maintain section organization** - Keep utilities grouped logically
4. **Use Edit tool for changes** - Always read the file first
5. **Write clear commit messages** - Follow the existing pattern
6. **Test responsive behavior** - Consider all breakpoints
7. **Keep it simple** - The framework's strength is its simplicity

### Testing Changes

Since there's no test suite, when making changes:

1. **Verify syntax** - Ensure valid CSS
2. **Check consistency** - Compare with similar existing classes
3. **Consider responsive behavior** - Think about all viewport sizes
4. **Validate fluid formulas** - Ensure min/max values make sense
5. **Review specificity** - Ensure classes can be properly overridden

### Understanding the Math

**Base font-size calculation:**
- `html { font-size: 62.5%; }` means 1rem = 10px (at default 16px browser setting)
- Makes rem calculations intuitive: 1.6rem = 16px, 2.4rem = 24px

**Fluid scaling starting point:**
- `1vw - 0.32rem` means scaling starts effectively at 320px viewport
- At 320px: 1vw = 3.2px, so 3.2px - 3.2px = 0 (minimum value)
- As viewport grows, the scaling factor increases

## Quick Reference

### File Locations
- Main CSS: `/framework.css`

### Class Count by Category
- Typography: ~70 classes
- Spacing: ~200+ classes (padding, margin, space-between)
- Layout: ~40 classes
- Borders: ~35 classes
- Visual: ~20 classes
- Buttons: 3 variants with responsive styles

### Common Patterns
- Directional spacing: `{property}-{direction}-{size}` (e.g., `mt-4`, `px-6`)
- Responsive text: `.text-{size}` with fluid scaling
- Hover states: `.hover-{property}:hover`
- Size scales: 0, 1, 2, 3, 4, 5, 6, 8, 12, 16, 20, 24

## Version Control

**Current Branch**: `claude/claude-md-mi01a8hp3tmr8002-01RTTRZKFn1GAeRyey3TMGrV`

**Push Command**:
```bash
git push -u origin claude/claude-md-mi01a8hp3tmr8002-01RTTRZKFn1GAeRyey3TMGrV
```

**Remote**: `beleancristian/utility-classes-framework`

## Known Issues / Typos

- Line 948: `.space-y-3` has typo `min(ax(0.84rem` instead of `min(max(0.84rem` (missing 'm' in 'max')

## Future Considerations

When extending this framework, consider:
- Color utilities (currently missing)
- Display utilities (flex, grid, block, etc.)
- Position utilities (relative, absolute, fixed, sticky)
- Transition/animation utilities
- Background utilities
- Additional component classes beyond buttons

## Contact & Support

This is a personal utility framework. For questions or contributions, refer to the repository owner.

---

**For AI Assistants**: This file serves as your primary reference when working with this codebase. Always consult it before making changes. Keep this file updated when significant changes are made to the framework.

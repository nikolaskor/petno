<!-- File: frontend-guidelines.md -->

# Frontend Guidelines

## 1. Coding Conventions

- **TypeScript** strict mode
- **ESLint** + **Prettier**
- **Functional components** with hooks only

## 2. Component Design

- **Single Responsibility**: one concept per component
- **Props drilling** minimized; use context or state management sparingly
- **Testable**: each component should have accompanying unit tests

## 3. Styling

- **Tailwind CSS** utility classes only
- No custom CSS files unless absolutely necessary
- Responsive design via mobile‑first breakpoints

## 4. Accessibility (a11y)

- All interactive elements must have `aria-*` attributes
- Semantic HTML tags only
- Keyboard‑navigable

## 5. Testing

- **Jest** + **React Testing Library**
- Aim for >=80% coverage on core components

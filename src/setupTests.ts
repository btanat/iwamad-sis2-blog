// Runs before every test file. The /vitest entry both registers the jest-dom
// matchers (for example toBeInTheDocument) at runtime AND extends Vitest's
// expect types, so the matchers are known during `npm run build` too.
import '@testing-library/jest-dom/vitest'

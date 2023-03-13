import screenSizes from "./screenSizes";

export const greaterThan =
  (key: "mobile" | "tablet" | "desktop") => (args: TemplateStringsArray) =>
    `@media (min-width: ${screenSizes[key]}) {${args}}`;

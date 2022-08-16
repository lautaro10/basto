export const searchValue = (stringValue: string): string[] =>
  stringValue
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value !== "");

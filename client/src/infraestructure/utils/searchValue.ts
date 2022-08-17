// Transform param value to array value
export const transformValueToArray = (stringValue: string): string[] =>
  stringValue
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value !== "");

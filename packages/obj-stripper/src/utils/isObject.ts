export function isObject(obj: any): obj is Record<PropertyKey, unknown> {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
}
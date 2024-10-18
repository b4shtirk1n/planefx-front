export default function handleInputNumeric(value: string, prev: string): string {
  const re = RegExp("[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)");
  const res = re.exec(value)?.[0];
  return value === "" || res ? (res ? res : "") : prev;
}
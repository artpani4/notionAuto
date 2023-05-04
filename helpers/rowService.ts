export function getNumberFromSquareBrackets(
  inputString: string,
): number {
  const regex = /\[(\d+)\]/g;
  let total = 0;
  let match;

  while ((match = regex.exec(inputString)) !== null) {
    total += parseInt(match[1], 10);
  }

  return total;
}

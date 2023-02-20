export default function sum(...numbers: number[]) {
  return numbers.reduce((n, acc) => acc + n);
}

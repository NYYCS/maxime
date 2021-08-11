
export default function compareDate(a, b) {
  return (a && b) && (a.getFullYear() == b.getFullYear()) && (a.getMonth() == b.getMonth()) && (a.getDate() == b.getDate());
}
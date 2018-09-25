export default function convertStringToIntArray (array) {
  return array.map(element => parseInt(element, 10))
}

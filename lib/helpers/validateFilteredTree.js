export default function validateFilteredTree (tree, indicatorIds) {
  const indicators = []
  for (let node of tree) {
    for (let subTheme of node.sub_themes) {
      for (let category of subTheme.categories) {
        indicators.push(category.indicators)
      }
    }
  }
  const filteredIndicatorLength = indicators.reduce((acc, element) => acc + element.length, 0)
  return filteredIndicatorLength === indicatorIds.length
}

import convertStringToIntArray from './convertStringToIntArray'
import filterSubThemes from './filterSubThemes'

export default function filterTreeHelper (tree, indicatorIds) {
  let transformedIndicatorIds = convertStringToIntArray(indicatorIds) // Transform query array string values to integer base 10
  const filteredTree = filterSubThemes(tree, transformedIndicatorIds)
  const prunedTree = filteredTree.filter(node => node.sub_themes.length > 0)
  return prunedTree
}

import filterSubThemeCategory from './filterSubThemeCategory'

export default function filterSubThemes (tree, indicatorIds) {
  const filteredTree = tree.map(element => {
    const filteredSubThemes = element.sub_themes.map(subTheme => {
      const filteredSubThemeCategory = filterSubThemeCategory(subTheme, indicatorIds)
      return filteredSubThemeCategory
    })
    return Object.assign({}, element, { 'sub_themes': filteredSubThemes.filter(s => s.categories.length > 0) })
  })
  return filteredTree
}

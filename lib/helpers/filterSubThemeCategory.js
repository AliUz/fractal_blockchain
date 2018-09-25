export default function filterSubThemeCategory (subTheme, indicatorIds) {
  const filteredCategories = subTheme.categories.map(category => {
    const filteredIndicators = category.indicators.filter(indicator => indicatorIds.includes(indicator.id))
    if (filteredIndicators.length > 0) {
      return Object.assign({}, category, { 'indicators': filteredIndicators })
    }
  })
  return Object.assign({}, subTheme, { 'categories': filteredCategories.filter(c => c !== undefined) })
}

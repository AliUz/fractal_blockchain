function errorHandler (error, req, res, next) {
  if (error.name && error.message && (error.message === 'REQUESTED TREE DOES NOT EXIST' || error.message === 'MISSING_INDICATORS')) {
    const name = error.name
    const message = error.message
    res.status(404).json({ name, message })
  } else if (error.name && error.message && error.name === 'StatusCodeError') {
    const name = error.name
    const message = error.message
    res.status(500).json({ name, message })
  }
  next(error)
}

export default errorHandler

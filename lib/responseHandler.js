function genericResponseHandler (res, code, body) {
  res.status(code).json(body)
}

export default genericResponseHandler

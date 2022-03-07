export default (req, res) => {
  res.status(200).json({
    timestamp: +new Date(),
    message: 'test api',
  })
}

function dateFormat(dateStr) {
  const dt = new Date(dateStr)

  const y = dt.getFullYear()
  const m = dt.getMonth() + 1
  const d = dt.getDay()

  const HH = dt.getHours()
  const MM = dt.getMinutes()
  const SS = dt.getSeconds()
}
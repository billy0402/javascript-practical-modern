function has (list, item) {
  return list.includes(item)
}

function union (list, item) {
  if (has(list, item)) {
    return list
  }

  return [...list, item]
}

module.exports = union

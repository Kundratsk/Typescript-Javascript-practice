function chunkArrayInGroups(arr,num) {
  let chunk = []
  while (arr.length > 0) {
    chunk.push(arr.splice(0, num))
  }
  return chunk
}


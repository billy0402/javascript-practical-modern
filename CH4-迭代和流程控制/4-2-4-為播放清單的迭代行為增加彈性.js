function playlist (inputSongs, repeat, shuffle) {
  const songs = shuffle ? shuffleSongs(inputSongs) : inputSongs
  return {
    [Symbol.iterator] () {
      let index = 0
      return {
        next () {
          if (index >= songs.length) {
            repeat--
            index = 0
          }

          if (repeat < 1) {
            return { done: true }
          }

          const song = songs[index]
          index++
          return {
            done: false,
            value: song
          }
        }
      }
    }
  }
}

function shuffleSongs () {
  return songs.slice().sort(() => Math.random() > 0.5 ? 1 : -1)
}

function player (sequence) {
  const g = sequence[Symbol.iterator]()
  more()

  function playSong (song) {
    console.log(song)
    more()
  }

  function more () {
    const item = g.next()

    if (item.done) {
      return
    }

    playSong(item.value, more)
  }
}

const songs = [
  '1: Bad moon rising – Creedence',
  '2: Don’t stop me now – Queen',
  '3: The Scientist – Coldplay',
  '4: Somewhere only we know – Keane'
]
const sequence = playlist(songs, Infinity, true)
// const sequence = playlist(shuffleSongs(songs), 3)
// console.log([...sequence])
player(sequence) // 無限迴圈

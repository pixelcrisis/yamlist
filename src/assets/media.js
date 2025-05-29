import axios from "axios"

const __key = import.meta.env.VITE_OMDB_KEY
const __api = `https://www.omdbapi.com/?apikey=${ __key }`

export function search(str, cb) {
  if (!str) return cb({ error: true })

  axios.post(`${ __api }&t=${ str }`)
    .then(res => cb({ first: res.data }))
    .catch(() => cb({ error: true }))

  axios.post(`${ __api }&s=${ str }`)
    .then(res => cb({ found: res.data }))
    .catch(() => cb({ error: true }))
}

export function detail(str, cb) {
  if (!str) return cb({ error: true })
  
  axios.post(`${ __api }&i=${ str }`)
    .then(res => cb({ data: res.data }))
    .catch(() => cb({ error: true }))
}

export function formatOMDB(data) {
  let obj = {}
  obj.id = data.imdbID
  obj.type = data.Type
  obj.title = data.Title
  obj.photo = data.Poster
  obj.genre = data.Genre
  obj.blurb = data.Plot
  obj.years = data.Year
  obj.rated = data.Rated
  obj.timer = data.Runtime
  obj.score = data.imdbRating
  obj.votes = data.imdbVotes
  obj.parts = data.totalSeasons

  if (data.Runtime) {
    obj.timer = Number(data.Runtime.split(' ')[0])
  }
  if (data.Genre) {
    obj.genre = data.Genre.split(", ")
  }

  return obj
}
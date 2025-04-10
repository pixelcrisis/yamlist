import axios from "axios"

const __key = import.meta.env.VITE_OMDB_KEY
const __api = `https://www.omdbapi.com/?apikey=${ __key }`

export function colorize() {
  const colors = [ 
    'btn-primary', 'btn-secondary', 'btn-accent',
    'btn-success', 'btn-warning', 'btn-info'
   ]
  let selected = colors[Math.floor(Math.random() * colors.length)]
  return `btn btn-lg ${ selected }`
}

export function format(data) {
  let obj = {}
  obj.id = data.imdbID
  obj.title = data.Title
  obj.photo = data.Poster
  obj.blurb = data.Plot
  obj.years = data.Year
  obj.rated = data.Rated
  obj.score = data.imdbRating
  obj.votes = data.imdbVotes
  obj.parts = data.totalSeasons
  return obj
}

export function search(str, cb) {
  if (!str) return cb({ error: true })

  axios.post(`${ __api }&t=${ str }`)
    .then(res => cb({ first: res.data }))
    .catch(() => cb({ error: true }))

  axios.post(`${ __api }&s=${ str }`)
    .then(res => cb({ found: res.data }))
    .catch(() => cb({ error: true }))
}
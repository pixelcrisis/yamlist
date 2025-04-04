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
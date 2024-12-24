export function colorize() {
  const colors = [ 
    'btn-primary', 'btn-secondary', 'btn-accent',
    'btn-success', 'btn-warning', 'btn-info'
   ]
  let selected = colors[Math.floor(Math.random() * colors.length)]
  return `btn btn-lg ${ selected }`
}
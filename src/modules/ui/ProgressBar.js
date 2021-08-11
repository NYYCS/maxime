
function ProgressBar ({ percent }) {
  return (
    <span className="flex w-full bg-gray-800 rounded-full">
      <span className="flex transition-all duration-500 bg-gray-400 rounded-full" style={{ height: "1px", width: `${Math.trunc(percent * 100)}%`}}/>
    </span>
  )
}

export default ProgressBar;
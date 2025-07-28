const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Array.from({ length: 18 }).map((_, index) => (
        <div key={index} className="relative h-48 w-full rounded-lg bg-gray-200 overflow-hidden animate-shimmer-pulse">
          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
        </div>
      ))}
    </div>
  )
}

export default Shimmer

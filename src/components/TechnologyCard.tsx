type Technology = {
    id: string
    name: string
    category: string
    description: string
    icon: string
    rating: number
    difficulty: string
    badge: string
}

type Props = {
    technology: Technology
    isAdded: boolean
    onAdd: (technology: Technology) => void
}

function TechnologyCard({
    technology,
    isAdded,
    onAdd,
}: Props) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col h-full">

            {/* Icon + Badge */}
            <div className="flex justify-between items-start">

                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-12 h-12 object-contain"
                />

                <span className="text-xs bg-pink-100 text-pink-500 px-2 py-1 rounded-full">
                    {technology.badge}
                </span>

            </div>

            {/* Name */}
            <h2 className="text-lg font-bold mt-3">
                {technology.name}
            </h2>

            {/* Description */}
            <p className="text-xs text-gray-500 mt-2">
                {technology.description}
            </p>

            {/* Category + Rating */}
            <div className="flex justify-between items-center mt-3">

                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {technology.category}
                </span>

                <span className="text-xs">
                    ⭐ {technology.rating}
                </span>

            </div>

            {/* Difficulty */}
            <p className="text-xs text-gray-500 mt-2 mb-2">
                Difficulty: {technology.difficulty}
            </p>

            {/* Button */}
            <button
                onClick={() => onAdd(technology)}
                disabled={isAdded}
                className={`w-full mt-auto py-2 rounded-lg text-xs font-semibold ${isAdded
                    ? "bg-gray-300 text-gray-500"
                    : "bg-gray-900 text-white cursor-pointer"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>

        </div>
    )
}

export default TechnologyCard
type Technology = {
    id: string
    name: string
    category: string
    icon: string
}

type Props = {
    stack: Technology[]
    onRemove: (id: string) => void
    onRemoveAll: () => void
}

function YourStack({
    stack,
    onRemove,
    onRemoveAll,
}: Props) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4">

            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">
                    Your Stack
                </h2>

                <span className="text-sm text-gray-500">
                    {stack.length}
                </span>
            </div>

            {stack.length === 0 ? (
                <p className="text-sm text-gray-500 mt-4">
                    Your stack is empty.
                </p>
            ) : (
                <>
                    <div className="space-y-3 mt-4">

                        {stack.map((technology) => (
                            <div
                                key={technology.id}
                                className="flex items-center gap-3 border-b pb-3"
                            >

                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="w-8 h-8 object-contain"
                                />

                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold">
                                        {technology.name}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        {technology.category}
                                    </p>
                                </div>

                                <button
                                    onClick={() => onRemove(technology.id)}
                                    className="text-red-500 font-bold"
                                >
                                    ✕
                                </button>

                            </div>
                        ))}

                    </div>

                    <button
                        onClick={onRemoveAll}
                        className="w-full mt-4 py-2 bg-red-500 text-white rounded-lg text-sm"
                    >
                        Remove All
                    </button>
                </>
            )}

        </div>
    )
}

export default YourStack
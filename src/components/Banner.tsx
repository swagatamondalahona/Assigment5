import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto flex min-h-[420px] max-w-6xl items-center px-4 py-8 md:px-6 lg:px-8">

                {/* Content */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                        Build Your Ideal
                        <br />

                        <span className="brand-gradient">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-3">
                        <button className="btn-gradient rounded-md px-5 py-3 text-sm font-medium text-white cursor-pointer">
                            Explore Technologies
                        </button>

                        <button className="rounded-md border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-600 cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Banner Image */}
                <div className="flex w-full md:w-1/2 items-center justify-center">
                    <img
                        src={bannerImage}
                        alt="Development Stack"
                        className="w-[330px] object-contain lg:w-[370px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
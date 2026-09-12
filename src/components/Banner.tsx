import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto flex min-h-[420px] max-w-6xl flex-col items-center px-4 py-10 md:px-6 lg:flex-row lg:px-8">

                {/* Content */}
                <div className="w-full text-center lg:w-1/2 lg:text-left">
                    <h1 className="text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                        Build Your Ideal
                        <br />

                        <span className="brand-gradient">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 lg:mx-0">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                        <button className="btn-gradient cursor-pointer rounded-md px-5 py-3 text-sm font-medium text-white">
                            Explore Technologies
                        </button>

                        <button className="cursor-pointer rounded-md border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-600">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Banner Image */}
                <div className="mt-10 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
                    <img
                        src={bannerImage}
                        alt="Development Stack"
                        className="w-[300px] object-contain sm:w-[360px] lg:w-[370px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
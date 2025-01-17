
const Stats = () => {
    return (

        <section className="bg-black">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-orange-500 sm:text-4xl">
                        Fiber Connectivity
                    </h2>

                    <p className="mt-4 text-white sm:text-xl">
                    We provide Broadband service that allows subscriber computers and phones to access the Internet and the Web from anywhere within the zone of our coverage.
                    </p>
                </div>

                <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div
                            className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center dark:bg-orange-500"
                        >
                            <dt
                                className="order-last text-lg font-medium text-white dark:text-white/75"
                            >
                                Total Connections
                            </dt>

                            <dd
                                className="text-4xl font-extrabold text-blue-600 dark:text-white md:text-5xl"
                            >
                                5K
                            </dd>
                        </div>

                        <div
                            className="flex flex-col rounded-lg bg-orange-500 px-4 py-8 text-center dark:bg-orange-500"
                        >
                            <dt
                                className="order-last text-lg font-medium text-white dark:text-white/75"
                            >
                                Active Users
                            </dt>

                            <dd
                                className="text-4xl font-extrabold text-white dark:text-white md:text-5xl"
                            >
                                5K
                            </dd>
                        </div>

                        <div
                            className="flex flex-col rounded-lg bg-orange-500 px-4 py-8 text-center dark:bg-orange-500"
                        >
                            <dt
                                className="order-last text-lg font-medium text-white dark:text-white/75"
                            >
                                Daily Signups↘︎ 90 (14%)
                            </dt>

                            <dd
                                className="text-4xl font-extrabold text-blue-600 dark:text-white md:text-5xl"
                            >
                                20
                            </dd>

                        </div>
                    </dl>
                </div>

            </div>
        </section>

    )
}

export default Stats;
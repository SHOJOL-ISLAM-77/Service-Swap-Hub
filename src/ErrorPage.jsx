import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <section className="flex items-center bg-cover p-16 dark:bg-gray-900 dark:text-gray-100 bg-no-repeat h-screen bg-[url('https://media.istockphoto.com/id/1705779494/photo/error-404-page-not-fond-futuristic-modern-3d-background.jpg?s=1024x1024&w=is&k=20&c=Hd60ck6dPzBIih7lh1Eg-5Ecskzjs1RQRii7lRPbXdo=')]">
        <div className="container flex flex-col items-center justify-center  backdrop-blur-sm bg-white/30 px-5 mx-auto my-8 h-screen w-screen">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded btn dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
            </div>
        </div>
    </section>
    );
}


import Link from "next/link";

const NotFoundPage = () => {
    return (
        <main className="container flex items-center justify-center min-h-screen">
            <div className="flex flex-col gap-8 items-center">
                <div className="text-3xl text-center">404 Page Not Found</div>
                <Link className="text-2xl text-center button" href="/">
                    Return Home
                </Link>
            </div>
        </main>
    );
};

export default NotFoundPage;

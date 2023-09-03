import Container from "../componnent/Container";

export default function page() {
    return (
        <div className="bg-gray-300">
            <Container>
                <div className="w-full py-8">
                    <div className="py-5 px-5 bg-gray-200 sm:w-96 m-auto rounded-lg">
                        <h1 className="text-gray-800 text-3xl text-center engFont font-semibold">Login</h1>
                    </div>
                </div>
            </Container>
        </div>
    )
}

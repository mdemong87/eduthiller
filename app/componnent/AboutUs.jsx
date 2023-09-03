import Link from "next/link";
import { GrOverview } from "react-icons/gr";
import Container from "./Container";


export default function AboutUs() {
    return (
        <div className="bg-gray-300 py-3">
            <Container>
                <div>
                    <h1 className="text-4xl font-semibold text-gray-900 text-center py-5 underline decoration-4 underline-offset-8 
                    decoration-yellow-500">আমাদের সম্পর্কে</h1>
                    <div className=" py-3 md:flex md:justify-between Md:items-center">
                        <div className="w-full border">gsdfgsdf</div>
                        <div className="w-full">
                            <p className="text-gray-800 text-xl font-semibold py-4">
                                যারা ডাক্তার হবার স্বপ্ন শৈশব থেকে নিজেদের মধ্যে লালন করে থাকে তাদের সেই স্বপ্নকে বাস্তবতায় রুপ দানের লক্ষ্যে সারথি হিসেবে কাজ করে যাচ্ছে মেডিলজি। তুমুল প্রতিযোগিতামূলক এই ভর্তিযুদ্ধে টিকে থাকতে একজন শিক্ষার্থীর পরিশ্রমের পাশাপাশি প্রয়োজন সঠিক দিক নির্দেশনা। আর সেই দিকনির্দেশনা এবং সঠিক পদ্ধতিতে মূল বই ভিত্তিক প্রস্তুতিকে গুরুত্ব দিয়ে সাজানো হয় মেডিলজি’র প্রতিটি কোর্স। তাই তো সূচনালগ্ন থেকেই মেডিলজি মেডিকেল ভর্তিচ্ছু শিক্ষার্থীদের কাছে এতোটা আপন একটি প্রতিষ্ঠান।
                            </p>
                            <Link href={"/about"}>
                                <button className="cbg text-xl text-gray-900 font-semibold rounded-md py-2 px-4 flex items-center gap-1">
                                    আরো দেখুন
                                    <GrOverview />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

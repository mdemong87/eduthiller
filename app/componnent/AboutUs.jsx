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
                                অনলাইনে একাডেমিক ও ভর্তি প্রস্তুতির দেশসেরা প্ল্যাটফর্ম <b className="cc">এডুথ্রিলার</b>।শুধুমাত্র আমাদের কাছে পড়ে অসংখ্য শিক্ষার্থী একাডেমিক ও ভর্তি প্রস্তুতিতে দেশসেরা সাফল্য অর্জন করেছে ভবিষ্যতেও সাফল্যের ধারা অব্যাহত থাকবে ইনশাআল্লাহ । মূল বই ভিত্তিক ও প্রশ্ন প্যার্টানের উপর গুরুত্ব দিয়ে প্রতিটি ক্লাস ও এক্সাম সাজানো হয় যাতে একজন শিক্ষার্থী'র তার লক্ষ্যে সবচেয়ে এগিয়ে থাকে। এডুথ্রিলারের প্রতিটা ক্লাস ও এক্সামের প্রশ্নপত্র দেশসেরা অভিজ্ঞ মেন্টরদের সমন্বয়ে হয়ে থাকে। তাই ক্লাস কোয়ালিটিতে কম্প্রোমাইজ কখনোই হয় না। এছাড়া এডুথ্রিলারের ভাইয়াদের তৈরী করা প্রশ্নপত্রে ও পরীক্ষা দেওয়ার সুযোগ স্টুডেন্টকে অন্যদের তুলনায় একধাপ এগিয়ে রাখে।
                            </p>
                            <Link href={"/"}>
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

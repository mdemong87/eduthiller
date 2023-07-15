import AboutUs from "./componnent/AboutUs";
import Courses from "./componnent/Courses";
import Hero from "./componnent/Hero";


export default function Home() {
  return (
    <main className='h-fit'>
      <Hero />
      <AboutUs />
      <Courses />
    </main>
  )
}

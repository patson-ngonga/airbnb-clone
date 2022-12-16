import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import Meduim from "../components/Meduim";
import SmallCards from "../components/SmallCards";
import { cardsData, exploreData } from "../utils/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb-clone</title>
      </Head>

      {/* header */}
      <Header />

      {/* banner */}
      <Banner />

      <main className="max-w-[1024px] px-8 sm:px-16 mx-auto">
        {/* small cards */}
        <section className="pt-6">
          <h2 className="text-2xl font-semibold pb-4">Explore nearby</h2>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCards img={img} distance={distance} location={location} />
            ))}
          </div>
        </section>

        {/* medium card */}
        <section className="pt-6">
          <h2 className="text-2xl font-semibold pb-4">Live Anywhere</h2>

          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3">
            {cardsData?.map(({ img, title }) => (
              <Meduim key={title} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* large card */}
        <div>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest outdoors"
            description="Explore great places to spend your quality time"
            buttonText="Explore places"
          />
        </div>
      </main>

      <footer className="bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
}

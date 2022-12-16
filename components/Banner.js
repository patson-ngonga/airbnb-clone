import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] ">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-lg md:text-2xl font-bold italic mb-4 hover:scale-105 transition transform duration-200 ease-out">
          Travel the world without worring where to stay
        </p>
        <button className="text-white font-semibold px-10 py-2 bg-gray-800 rounded-full hover:scale-105 transition transform duration-200 shadow-lg">
          Explore places
        </button>
      </div>
    </div>
  );
}

export default Banner;

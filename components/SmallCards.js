import Image from "next/image";

function SmallCards({ img, distance, location }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* right */}
      <div>
        <p>{location}</p>
        <p className="text-sm text-gray-600">{distance}</p>
      </div>
    </div>
  );
}

export default SmallCards;

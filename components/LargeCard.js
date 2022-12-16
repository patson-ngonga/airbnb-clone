import Image from "next/image";

function LargeCard({ title, description, img, buttonText }) {
  return (
    <section className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt="banner"
        />
      </div>

      <div className="absolute top-32 left-12 transition transform hover:scale-105 duration-300 ease-out">
        <h3 className="text-4xl mb-3 w-64 font-bold">{title}</h3>
        <p>{description}</p>

        <button className="bg-gray-900 text-white text-sm rounded-full mt-4 p-2 px-4 font-semibold ">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;

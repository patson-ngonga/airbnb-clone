import Image from "next/image";

function Meduim({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transtion transfrom duration-300 ease-out">
      <div className="relative h-60 w-60">
        <Image src={img} layout="fill" className="rounded-xl" alt="banner" />
      </div>
      <h2 className="text-2xl font-semibold tex-gray-400 mt-3 text-center">
        {title}
      </h2>
    </div>
  );
}

export default Meduim;

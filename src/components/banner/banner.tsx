import Image from "next/image";

const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,#FEECFF,#FECAFF,#FEB5FF,#FFDBE7,#FFF4D6,#F3FCD7,#D2F5EE,#C3EFFF,#FBEFFF)]">
      <div>
        <a
          href="#"
          className="font-medium flex items-center gap-2 justify-center"
        >
          <div>
            <span className="hidden md:inline-block">
              This page is included in a free SaaS Kit.
            </span>
            <span className="inline-flex gap-2 ml-1">
              {" "}
              View the complete Kit{" "}
              <Image
                src="/vector-black.svg"
                alt="arrow"
                width={15}
                height={15}
              />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Banner;

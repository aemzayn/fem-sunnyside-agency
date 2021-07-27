import { useState } from "react";

function Section({
  title,
  subtitle,
  reverse,
  imgSrc,
  mobileImgSrc,
  alt,
  variant,
}) {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[50%] flex items-center justify-center">
        <div className="w-[85%] md:w-[60%] flex flex-col gap-5 text-center md:text-left py-16 md:py-0">
          <h2 className="text-3xl md:text-4xl font-black text-desaturate-blue">
            {title}
          </h2>
          <p className="text-grayish-blue text-lg">{subtitle}</p>
          <button
            className="about-btn relative font-bold md:self-start uppercase"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <span className="relative z-10">Learn more</span>
            <div
              className={`absolute inset-x-0 -left-2 h-2 w-32 rounded-full ${
                variant === "red" ? "bg-soft-red" : "bg-primary-yellow"
              } bottom-[0.9px] -z-10 ${hover ? "opacity-100" : "opacity-25"}`}
            />
          </button>
        </div>
      </div>
      <img
        className={`w-[50%] hidden md:block ${reverse && "order-first"}`}
        src={imgSrc}
        alt={alt}
      />
      <img
        src={mobileImgSrc}
        alt={alt}
        className="block md:hidden order-first"
      />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="w-full">
      <Section
        title="Transform your brand"
        subtitle="We are serving a full-creative agency spealizing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you."
        imgSrc="/images/desktop/image-transform.jpg"
        mobileImgSrc="/images/mobile/image-transform.jpg"
        alt="Transform your brand"
      />
      <Section
        title="Stand out to the right audience"
        subtitle="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we\'ll build and extend your brand in digital places."
        imgSrc="/images/desktop/image-stand-out.jpg"
        mobileImgSrc="/images/mobile/image-stand-out.jpg"
        alt="Stand out to the right audience"
        reverse
        variant="red"
      />
    </section>
  );
}

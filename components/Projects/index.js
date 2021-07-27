function Section({ title, subtitle, imgSrc, mobileImgSrc, textColor }) {
  return (
    <div className="relative">
      <img src={imgSrc} alt={title} className="w-full hidden md:block" />
      <img src={mobileImgSrc} alt={title} className="w-fulll md:hidden" />
      <div className="absolute inset-x-0 z-10 bottom-28">
        <div
          className={`flex flex-col items-center max-w-[85%] md:max-w-[50%] mx-auto text-center gap-5 ${textColor}`}
        >
          <h3 className="text-3xl md:text-2xl font-black">{title}</h3>
          <p className="">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="grid grid-cols-1 md:grid-cols-2">
      <Section
        title="Graphic Design"
        subtitle="Great design makes you memorable. We deliver artwork that
            underscores your brand message and capture potential clients'
            attention"
        imgSrc="/images/desktop/image-graphic-design.jpg"
        mobileImgSrc="/images/mobile/image-graphic-design.jpg"
        textColor="text-desaturated-cyan"
      />
      <Section
        title="Photography"
        subtitle="Increase your creadibility by getting the most stunning, high-quality photos that improve your business image."
        imgSrc="/images/desktop/image-photography.jpg"
        mobileImgSrc="images/mobile/image-photography.jpg"
        textColor="text-dark-blue"
      />
    </section>
  );
}

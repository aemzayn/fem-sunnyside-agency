function Testimony({ imgSrc, name, testimony, role }) {
  return (
    <div className="flex flex-col gap-20 items-center text-center">
      <img src={imgSrc} alt={name} className="w-20 h-20 rounded-full" />
      <p className="md:max-w-[90%] text-desaturate-blue text-lg">{testimony}</p>
      <div className="flex flex-col gap-2">
        <h2 className="font-black text-xl">{name}</h2>
        <p className="text-gray-400 font-bold">{role}</p>
      </div>
    </div>
  );
}

export default function Testimonies() {
  return (
    <section
      id="testimonies"
      className="py-16 md:py-36 px-8 md:px-28 bg-warmGray-100"
    >
      <h1 className="font-black text-center text-lg md:text-xl uppercase tracking-[0.2em] text-grayish-blue">
        Client Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 md:mt-24">
        <Testimony
          imgSrc="/images/image-emily.jpg"
          name="Emily R."
          role="Marketing Director"
          testimony="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
        />
        <Testimony
          imgSrc="/images/image-thomas.jpg"
          name="Thomas S."
          role="Chief Operating Officer"
          testimony="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
        />
        <Testimony
          imgSrc="/images/image-jennie.jpg"
          name="Jennie F."
          role="Business Owner"
          testimony="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
        />
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="flex relative items-center justify-center bg-blue-400">
      <img
        src="/images/desktop/image-header.jpg"
        alt="hero image"
        className="w-full hidden md:block"
      />

      {/* Mobile */}
      <img
        src="/images/mobile/image-header.jpg"
        alt="hero image mobile"
        className="w-full md:hidden"
      />

      <div className="absolute inset-x-0 flex items-center gap-28 md:gap-36 flex-col max-h-full">
        <h1 className="uppercase text-5xl md:text-6xl -mb-16 md:-mt-24 text-white tracking-wide text-center">
          We are creatives
        </h1>
        <img
          className="h-28 w-10"
          src="/images/icon-arrow-down.svg"
          role="presentation"
        />
      </div>
    </section>
  );
}

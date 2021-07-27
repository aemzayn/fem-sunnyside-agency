function Image({ imgSrc, alt, imgSrcMobile }) {
  return (
    <>
      <img src={imgSrc} alt={alt} className="hidden md:block" />
      <img src={imgSrcMobile} alt={alt} className="md:hidden" />
    </>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="grid grid-cols-2 md:grid-cols-4">
      <Image
        imgSrc="/images/desktop/image-gallery-milkbottles.jpg"
        imgSrcMobile="/images/mobile/image-gallery-milkbottles.jpg"
        alt="milk bottle"
      />
      <Image
        imgSrc="/images/desktop/image-gallery-orange.jpg"
        imgSrcMobile="/images/mobile/image-gallery-orange.jpg"
        alt="orange"
      />
      <Image
        imgSrc="/images/desktop/image-gallery-cone.jpg"
        imgSrcMobile="/images/mobile/image-gallery-cone.jpg"
        alt="cone"
      />
      <Image
        imgSrc="/images/desktop/image-gallery-sugarcubes.jpg"
        imgSrcMobile="/images/mobile/image-gallery-sugarcubes.jpg"
        alt="sugar cubes"
      />
    </section>
  );
}

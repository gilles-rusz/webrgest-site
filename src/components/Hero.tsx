import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-v7 relative w-full">
      <Image
        src="/hero-bg.jpg"
        alt="Gilles Ruszczycki — développeur web Web RG Est"
        width={1672}
        height={941}
        priority
        className="w-full h-auto block"
      />
      <h1 className="sr-only">
        Votre activit&eacute; m&eacute;rite un site qui vous appartient.
      </h1>
    </section>
  );
}

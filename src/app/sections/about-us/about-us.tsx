import Image from "next/image";
import styles from "./about-us.module.css";

const AboutUs = () => {
  return (
    <section id="sobre-nos" className={styles.container}>
      <div className={styles.leftContent}>
        <span className={styles.title}>nossa missão</span>
        <h1>
          Harpa & Taça -
          <br />
          Oração e adoração
        </h1>
        <span className={styles.description}>
          Como João Batista (Lucas 1:76-79) e a profetiza Ana (Lucas 2:36-38), que eram precursores
          de Jesus Cristo na Terra, o primeiro preparando o caminho com a palavra revelada no
          deserto e a segunda estabelecendo um trono ao Salvador com orações e consagração dia e
          noite - nossa missão é preparar o caminho para a volta de Jesus.
        </span>
        <div className={styles.cardboard}>
          <div className={styles.verticalLine} />
          <div className={styles.cardContent}>
            <span>
              "Estabelecer a oração e adoração dia e noite, a fim de conectar nossos corações ao
              coração do Noivo."
            </span>
            <p>modelo harpa & taça</p>
          </div>
        </div>
      </div>
      <Image
        className={styles.image}
        src={"/images/calice.jpg"}
        alt="Harpa e Taça"
        width={430}
        height={580}
      />
    </section>
  );
};

export default AboutUs;

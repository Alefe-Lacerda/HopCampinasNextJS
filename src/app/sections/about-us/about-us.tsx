import styles from "./about-us.module.css";

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <span>Casa de oração - Campinas</span>
      <h1>House of Prayer</h1>
      <p className={styles.subtitle}>Precursores do reino dos céus</p>
      <blockquote className={styles.description}>
        “E tu, ó menino, serás chamado profeta do Altíssimo, Porque hás de ir ante a face do Senhor,
        a preparar os seus caminhos;
        <br />
        <br />
        Para dar ao seu povo conhecimento da salvação, Na remissão dos seus pecados;Pelas entranhas
        da misericórdia do nosso Deus, Com que o oriente do alto nos visitou;
        <br />
        <br />
        Para iluminar aos que estão assentados em trevas e na sombra da morte; A fim de dirigir os
        nossos pés pelo caminho da paz.”
        <br />
        <br />- Lucas 1:76-79
      </blockquote>
    </section>
  );
};

export default AboutUs;

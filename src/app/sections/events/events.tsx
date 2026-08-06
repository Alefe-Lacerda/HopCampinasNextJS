import InteractiveCard from "../../components/interactive-card";
import styles from "./events.module.css";

const Events = () => {
  return (
    <section id="events" className={styles.container}>
      <div>
        <span className={styles.subtitle}>agenda</span>
        <h1>Próximos eventos</h1>
      </div>
      <div className={styles.cardsGrid}>
        <InteractiveCard
          className={styles.card}
          title={"Treinamento Harpa e Taça"}
          datetime={"2026-05-31T19:00:00"}
          description={
            "Uma imersão no modelo de oração e adoração Harpa & Taça. Venha aprender a interceder e adorar em unidade, em espírito e verdade."
          }
        />
        <InteractiveCard
          className={styles.card}
          title={"Treinamento Harpa e Taça"}
          datetime={"2026-05-31T19:00:00"}
          description={
            "Uma imersão no modelo de oração e adoração Harpa & Taça. Venha aprender a interceder e adorar em unidade, em espírito e verdade."
          }
        />
        <InteractiveCard
          className={styles.card}
          title={"Treinamento Harpa e Taça"}
          datetime={"2026-05-31T19:00:00"}
          description={
            "Uma imersão no modelo de oração e adoração Harpa & Taça. Venha aprender a interceder e adorar em unidade, em espírito e verdade."
          }
          formLink={"https://mockform.com/inscricao-evento"} // Exemplo de link para inscrição
        />
      </div>
    </section>
  );
};

export default Events;

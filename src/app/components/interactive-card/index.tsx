import styles from "./interactive-card.module.css";
import { InteractiveCardProps } from "./interface";
import { formatEventDates } from "@/src/lib/formatEventDates";

const InteractiveCard = ({
  datetime,
  title,
  description,
  formLink,
  className,
}: InteractiveCardProps) => {
  const formattedDate =
    formatEventDates(datetime) || (Array.isArray(datetime) ? datetime.join(", ") : datetime);

  return (
    <>
      <div className={`${styles.container} ${className || ""}`}>
        <div>
          <span className={styles.datetime}>{formattedDate}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p className={styles.description}>{description}</p>
        {formLink ? (
          <a
            style={{ textDecoration: "none" }}
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.button}>inscreva-se</span>
          </a>
        ) : (
          <a
            style={{ textDecoration: "none" }}
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.button}>em breve</span>
          </a>
        )}
      </div>
    </>
  );
};

export default InteractiveCard;

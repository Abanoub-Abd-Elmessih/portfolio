import { IconType } from "react-icons";
import styles from "./AboutCard.module.css";

interface AboutCardProp {
  icon: IconType;
  title: string;
  description: string;
}

export const AboutCard = ({
  icon: Icon,
  title,
  description,
}: AboutCardProp) => {
  return (
    <div className="col-md-6 col-xl-3 p-2">
      <div className={styles.about_card}>
        <span className="fs-4">
          <Icon />
        </span>
        <h3 className="h3">{title}</h3>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
};

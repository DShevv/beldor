import clsx from "clsx";
import styles from "./VideoBlock.module.scss";

const VideoBlock = ({ title }: { title?: string }) => {
  return (
    <section className={styles.container}>
      <h2
        className={clsx(styles.title, {
          ["h3"]: !title,
          ["h2"]: title,
          [styles.block]: title,
        })}
      >
        {title || "Видео:"}
      </h2>

      <div className={styles.video}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/jfKfPfyJRdk?si=D4RRFQ2cCfsUbQ9I"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoBlock;

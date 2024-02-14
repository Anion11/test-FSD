import styles from './task.module.scss';

type TaskProps = {
  title: string;
  descr: string;
  timeStart?: Date;
  timeEnd?: Date;
  titleHref: string;
};

const Task = ({ titleHref, data }: any) => {
  const { title } = data;

  return (
    <div className={styles.card}>
      <div className={styles.title}>{'title: ' + title}</div>
      <div className={styles.link}>{'titleHref: ' + titleHref}</div>
    </div>
  );
};

export default Task;

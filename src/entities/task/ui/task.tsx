import styles from './task.module.scss';

const Task = ({ titleHref, data }: any) => {
  const { title } = data;

  return (
    <div className={styles.card} onClick={ () => console.log('qwe')}>
      <div className={styles.title}>{'title: ' + title}</div>
      <a href={titleHref} className={styles.link}>{'titleHref: ' + titleHref}</a>
    </div>
  );
};

export default Task;

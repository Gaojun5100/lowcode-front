import styles from './style.module.scss'
import avatarImg from './avatar.jpeg'
const  Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.person}>
        <img className={styles.avatar} src={avatarImg} alt="gj"/>
        <div className={styles.title}>高俊 的个人小站</div>
        <div className={styles.desc}>从编程到生活，每一天的点滴收获，每一行代码，都在相互印证着，推动着我们向着好的方向发展。
        从编程学习到的各种思想，能够在生活中运用，让我们走的更远！</div>
      </div>
      
    </div>
  );
}

export default Banner;

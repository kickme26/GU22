// block.jsx
import styles from "../block/block.module.css";
const Block = () => {

  return  (
    <>
    <div className={styles['body-nav']}>
      <h3 className={styles['inner-body-nav']}>Start Bootstrap</h3>
    </div>
    <div className={styles['body-comp']}>
      <h1 className={styles['inner-header-comp']}>Shop in Style</h1>
      <p className={styles['inner-text-body-comp']}>With this shop hompeage template</p>
    </div>
    </>
  )
}

export default Block;

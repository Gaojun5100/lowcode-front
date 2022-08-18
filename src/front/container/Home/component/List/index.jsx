import styles from './style.module.scss'
const  List = ({ schema }) => {
  const { children = [] } = schema;
  return (
    <div className="wrapper">
      <ul className={styles.list}>
        {
          children.map((item, index) => {
            const { attributes = {} } = item;
            const { title, description, imageUrl, link } = attributes;
            return (
              <li className={styles.item} key={index}>
                <a className={styles.link} href={link} target="_blank" rel="noreferrer">
                  <img className={styles.img} src={imageUrl} alt={title} />
                  <h4 className={styles.title}>{title || '暂无标题'}</h4>
                  <p className={styles.desc}>{description || '暂无描述'}</p>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
  // return (
  //   <div className='wrapper'>
  //     <ul className={styles.list}>
  //       <li className={styles.item}>
  //         <img className={styles.img} src='https://s0.lgstatic.com/i/image6/M00/41/5A/Cgp9HWCrqJeAfHpMAAEhcFmUStA456.png' alt=''/>
  //         <h4 className={styles.title}>Vue.js 框架源码与进阶</h4>
  //         <p className={styles.desc}>围绕当下国内最主流的前端核心框架 Vue.js 展开，深入框架内部，通过解读源码或者
  //         手写实现的方式，剖析 Vue.js 框架的内部实现原理，让你做到知其所以然。同时我们还会介绍 Vue.js 的进阶用法、周
  //         边生态以及性能优化，让你轻松应对更加复杂的项目业务需求。
  //         </p>
  //       </li>
  //       <li className={styles.item}>
  //         <img className={styles.img} src='https://s0.lgstatic.com/i/image6/M00/41/5A/Cgp9HWCrqJeAfHpMAAEhcFmUStA456.png' alt=''/>
  //         <h4 className={styles.title}>Vue.js 框架源码与进阶</h4>
  //         <p className={styles.desc}>围绕当下国内最主流的前端核心框架 Vue.js 展开，深入框架内部，通过解读源码或者
  //         手写实现的方式，剖析 Vue.js 框架的内部实现原理，让你做到知其所以然。同时我们还会介绍 Vue.js 的进阶用法、周
  //         边生态以及性能优化，让你轻松应对更加复杂的项目业务需求。
  //         </p>
  //       </li>
  //       <li className={styles.item}>
  //         <img className={styles.img} src='https://s0.lgstatic.com/i/image6/M00/41/5A/Cgp9HWCrqJeAfHpMAAEhcFmUStA456.png' alt=''/>
  //         <h4 className={styles.title}>Vue.js 框架源码与进阶</h4>
  //         <p className={styles.desc}>围绕当下国内最主流的前端核心框架 Vue.js 展开，深入框架内部，通过解读源码或者
  //         手写实现的方式，剖析 Vue.js 框架的内部实现原理，让你做到知其所以然。同时我们还会介绍 Vue.js 的进阶用法、周
  //         边生态以及性能优化，让你轻松应对更加复杂的项目业务需求。
  //         </p>
  //       </li>
  //       <li className={styles.item}>
  //         <img className={styles.img} src='https://s0.lgstatic.com/i/image6/M00/41/5A/Cgp9HWCrqJeAfHpMAAEhcFmUStA456.png' alt=''/>
  //         <h4 className={styles.title}>Vue.js 框架源码与进阶</h4>
  //         <p className={styles.desc}>围绕当下国内最主流的前端核心框架 Vue.js 展开，深入框架内部，通过解读源码或者
  //         手写实现的方式，剖析 Vue.js 框架的内部实现原理，让你做到知其所以然。同时我们还会介绍 Vue.js 的进阶用法、周
  //         边生态以及性能优化，让你轻松应对更加复杂的项目业务需求。
  //         </p>
  //       </li>
  //       <li className={styles.item}>
  //         <img className={styles.img} src='https://s0.lgstatic.com/i/image6/M00/41/5A/Cgp9HWCrqJeAfHpMAAEhcFmUStA456.png' alt=''/>
  //         <h4 className={styles.title}>Vue.js 框架源码与进阶</h4>
  //         <p className={styles.desc}>围绕当下国内最主流的前端核心框架 Vue.js 展开，深入框架内部，通过解读源码或者
  //         手写实现的方式，剖析 Vue.js 框架的内部实现原理，让你做到知其所以然。同时我们还会介绍 Vue.js 的进阶用法、周
  //         边生态以及性能优化，让你轻松应对更加复杂的项目业务需求。
  //         </p>
  //       </li>
  //       <li className={styles.item}>
  //         <img className={styles.img} src='https://s0.lgstatic.com/i/image6/M00/41/5A/Cgp9HWCrqJeAfHpMAAEhcFmUStA456.png' alt=''/>
  //         <h4 className={styles.title}>Vue.js 框架源码与进阶</h4>
  //         <p className={styles.desc}>围绕当下国内最主流的前端核心框架 Vue.js 展开，深入框架内部，通过解读源码或者
  //         手写实现的方式，剖析 Vue.js 框架的内部实现原理，让你做到知其所以然。同时我们还会介绍 Vue.js 的进阶用法、周
  //         边生态以及性能优化，让你轻松应对更加复杂的项目业务需求。
  //         </p>
  //       </li>
  //     </ul>      
  //   </div>
  // );
}

export default List;

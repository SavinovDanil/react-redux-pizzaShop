import React from 'react';

import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        Корзина пустая <br />
        <span>😕</span>
      </h1>
      <p className={styles.description}>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
        главную страницу.
      </p>
    </div>
  );
}

export default NotFoundBlock;

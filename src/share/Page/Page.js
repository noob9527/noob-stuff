import React from 'react';

import styles from './Page.less';

const Page = ({ children }) => (
  <div className={styles.page}>
    {children}
  </div>
);

export default Page;

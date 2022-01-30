import * as React from 'react';
import * as styles from './styles.css';
import * as classNames from 'classnames';

interface Props {
  row: Array<0 | 1>
}

export const Row = (props: Props) => {
  return (
    <div className={styles.root}>
      {
        props.row.map((cell, index) => {
          const className = classNames(styles.cell, { [styles.alive]: cell })

          return <div className={className} key={index} />
        })
      }
    </div>
  );
}






import React from "react";
import styles from './Item.module.css'

interface FillProps {
  item:any
}

function Item({item}:FillProps) {
  return (
    <div className={`${styles.back} flex items-center justify-center h-24 w-28 rounded bg-gray-50 dark:bg-white`}>
      <p className={`${styles.fontSec} text-md`}>
       {item.name}
      </p>
    </div>
  );
}

export default Item;

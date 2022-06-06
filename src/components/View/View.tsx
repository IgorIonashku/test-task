import { FC } from "react"
import styles from "./View.module.css"
import  React from "react";

interface ViewProps {
    children: JSX.Element[] | JSX.Element
  }

export const View:FC<ViewProps> = ({children}) =>{
    return <div className={styles.view}>{children}</div>
}
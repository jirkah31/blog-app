import React from "react";
import { PathsT } from "../../api/paths";
import Button from "../Button/Button";
import styles from "./TableLine.module.scss";
import { ArticleType } from "../../helpers_hooks/useAllArticles";

interface TableLineT {
  article: ArticleType;
  handleDeleteArticle: () => void;
}

const TableLine = ({ article, handleDeleteArticle }: TableLineT) => {
  const { articleId, title, perex } = article;
  return (
    <tr key={articleId}>
      <td className={styles.td}>
        {" "}
        <input type="checkbox" />{" "}
      </td>
      <td className={styles.td}>{title}</td>
      <td className={styles.td}>{perex}</td>
      <td className={styles.td}>Elisabeth Straingth</td>
      <td className={styles.td}>4</td>
      <td className={styles.td}>
        <Button small path={`/${PathsT.EditArticlePathT}/${articleId}`}>
          edit
        </Button>
        <Button small onClick={handleDeleteArticle}>
          delete
        </Button>
      </td>
    </tr>
  );
};

export default TableLine;

import React, { useContext, useState } from "react";
import styles from "./Add.module.css";
import { AlbumContext } from "../../context/AlbumContext";

const Add = ({ setAddAlbumModal }) => {
  const { albums, addAlbum } = useContext(AlbumContext);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const handleAddNewAlbum = async () => {
    if (newTitle && newBody) {
      await addAlbum({
        title: newTitle,
        body: newBody,
        userId: albums[albums.length - 1].userId + 1,
      });
      setAddAlbumModal(false);
      setNewTitle("");
      setNewBody("");
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    } else {
      alert("Please fill both Title and Description");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleInputContainer}>
          <label className={styles.inputLabel} htmlFor="title">
            Add Title
          </label>
          <textarea
            type="text"
            name="title"
            id="title"
            className={styles.inputTextArea}
            required
            value={newTitle}
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
          />
        </div>

        <div className={styles.bodyInputContainer}>
          <label htmlFor="body" className={styles.inputLabel}>
            Add Description
          </label>
          <textarea
            type="text"
            name="body"
            id="body"
            className={styles.inputTextArea}
            required
            value={newBody}
            onChange={(event) => {
              setNewBody(event.target.value);
            }}
          />
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.updatebtn} onClick={handleAddNewAlbum}>
            ADD
          </button>

          <button
            className={styles.cancelbtn}
            onClick={() => {
              setAddAlbumModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;

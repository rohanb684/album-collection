import React, { useContext, useState } from "react";
import styles from "./Modify.module.css";
import { AlbumContext } from "../../context/AlbumContext";

const Modify = ({ currentAlbum, setModifyAlbum }) => {
  const { updateAlbum } = useContext(AlbumContext);

  const [newTitle, setNewTitle] = useState(currentAlbum.title);
  const [newBody, setNewBody] = useState(currentAlbum.body);

  const handleUpdateAlbum = async () => {
    if (newTitle && newBody) {
      await updateAlbum(currentAlbum.id, {
        id: currentAlbum.id,
        title: newTitle,
        body: newBody,
        userId: currentAlbum.userId,
      });
      setModifyAlbum(false);
      setNewTitle("");
      setNewBody("");
    } else {
      alert("Please fill both Title and Description");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleInputContainer}>
          <label className={styles.inputLabel} htmlFor="title">
            Update Title
          </label>
          <textarea
            type="text"
            name="title"
            id="title"
            defaultValue={currentAlbum.title}
            className={styles.inputTextArea}
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
          />
        </div>

        <div className={styles.bodyInputContainer}>
          <label htmlFor="body" className={styles.inputLabel}>
            Update Description
          </label>
          <textarea
            type="text"
            name="body"
            id="body"
            defaultValue={currentAlbum.body}
            className={styles.inputTextArea}
            onChange={(event) => {
              setNewBody(event.target.value);
            }}
          />
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.updatebtn} onClick={handleUpdateAlbum}>
            Update
          </button>

          <button
            className={styles.cancelbtn}
            onClick={() => {
              setModifyAlbum(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modify;

import React, { useContext, useEffect, useState } from "react";
import { AlbumContext } from "../../context/AlbumContext";
import styles from "./Home.module.css";
import Modify from "../modify/Modify";
import Add from "../add/Add";

const Home = () => {
  const [modifyAlbum, setModifyAlbum] = useState(false);

  const [addAlbumModal, setAddAlbumModal] = useState(false);

  const [currentTitle, setCurrentTitle] = useState("");
  const [currentID, setCurrentId] = useState("");
  const [currentBody, setCurrentBody] = useState("");

  const [currentAlbum, setCurrentAlbum] = useState("");

  const { albums, addAlbum, updateAlbum, deleteAlbum } =
    useContext(AlbumContext);
  // console.log(albums);
  const [newAlbumTitle, setNewAlbumTitle] = useState("");

  const handleUpdateAlbum = (album) => {
    setCurrentAlbum(album);
    setModifyAlbum(true);
  };

  return (
    <div>
      <h1 className={styles.header}>Album List</h1>

      <div className={styles.addAlbumContainer}>
        <button
          onClick={() => {
            setAddAlbumModal(true);
          }}
          className={styles.addbtn}
        >
          Add Album
        </button>
      </div>

      <div className={styles.cardContainer}>
        {albums.map((album) => (
          <div key={album.id} className={styles.card}>
            <div className={styles.titleContainer}>
              <h2 className={styles.titleHeader}>Title:</h2>
              <p className={styles.title}>{album.title}</p>
            </div>

            <div className={styles.bodyContainer}>
              <h2 className={styles.bodyHeader}>Description:</h2>
              <p className={styles.body}>{album.body}</p>
            </div>
            <div className={styles.btnContainer}>
              <button
                onClick={() => deleteAlbum(album.id)}
                className={styles.delbtn}
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdateAlbum(album)}
                className={styles.updatebtn}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.updateModal}>
        {modifyAlbum && (
          <Modify currentAlbum={currentAlbum} setModifyAlbum={setModifyAlbum} />
        )}
      </div>

      <div className={styles.addModal}>
        {addAlbumModal && <Add setAddAlbumModal={setAddAlbumModal} />}
      </div>
    </div>
  );
};

export default Home;

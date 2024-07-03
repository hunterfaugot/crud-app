import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '../firebase.config';  // Ensure this path is correct

const animeCollectionRef = db ? collection(db, "anime") : null;

export const getAnimeList = async () => {
  if (!animeCollectionRef) {
    console.error("Anime collection reference is null");
    return [];
  }
  const querySnapshot = await getDocs(animeCollectionRef);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addAnime = async (anime) => {
  if (!animeCollectionRef) {
    console.error("Anime collection reference is null");
    return;
  }
  await addDoc(animeCollectionRef, anime);
};

export const updateAnime = async (id, updatedAnime) => {
  if (!animeCollectionRef) {
    console.error("Anime collection reference is null");
    return;
  }
  const animeDoc = doc(db, "anime", id);
  await updateDoc(animeDoc, updatedAnime);
};

export const deleteAnime = async (id) => {
  if (!animeCollectionRef) {
    console.error("Anime collection reference is null");
    return;
  }
  const animeDoc = doc(db, "anime", id);
  await deleteDoc(animeDoc);
};

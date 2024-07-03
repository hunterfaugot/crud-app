import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from './firebase.config';

const animeCollectionRef = collection(db, "anime");

export const getAnimeList = async () => {
  const querySnapshot = await getDocs(animeCollectionRef);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addAnime = async (anime) => {
  await addDoc(animeCollectionRef, anime);
};

export const updateAnime = async (id, updatedAnime) => {
  const animeDoc = doc(db, "anime", id);
  await updateDoc(animeDoc, updatedAnime);
};

export const deleteAnime = async (id) => {
  const animeDoc = doc(db, "anime", id);
  await deleteDoc(animeDoc);
};

import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '../firebase.config';  // Ensure this path is correct

let animeCollectionRef = null;

if (typeof window !== "undefined" && db) {
  animeCollectionRef = collection(db, "anime");
}

export const getAnimeList = async () => {
  if (!animeCollectionRef) {
    console.error("Anime collection reference is null");
    return [];
  }
  const querySnapshot = await getDocs(animeCollectionRef);
  console.log("Fetched anime list:", querySnapshot.docs.map(doc => doc.data()));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addAnime = async (anime) => {
  if (!animeCollectionRef) {
    console.error("Anime collection reference is null");
    return;
  }
  const docRef = await addDoc(animeCollectionRef, anime);
  console.log("Added new anime with ID:", docRef.id);
};

export const updateAnime = async (id, updatedAnime) => {
  if (!animeCollectionRef) {
    console.error("Anime collection reference is null");
    return;
  }
  const animeDoc = doc(db, "anime", id);
  await updateDoc(animeDoc, updatedAnime);
  console.log("Updated anime with ID:", id);
};

export const deleteAnime = async (id) => {
  if (!animeCollectionRef) {
    console.error("Anime collection reference is null");
    return;
  }
  const animeDoc = doc(db, "anime", id);
  await deleteDoc(animeDoc);
  console.log("Deleted anime with ID:", id);
};

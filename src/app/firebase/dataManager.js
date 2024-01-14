import { ref, push, set, getDatabase } from "firebase/database";
import { app } from "./firebase.config";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const db = getDatabase(app);

export const addProspect = async (prospectData) => {
  const prospectsRef = ref(db, "googleads");

  try {
    const newProspectRef = push(prospectsRef);

    // Formattez la date actuelle en format français
    const currentDate = format(new Date(), "dd/MM/yyyy", { locale: fr });

    const updatedProspectData = {
      ...prospectData,
      dateAdded: currentDate, // Ajoutez la date formatée
    };

    await set(newProspectRef, updatedProspectData);
    console.log(`Added new prospect successfully.`);
  } catch (error) {
    console.error("Failed to add new prospect: ", error);
  }
};

import db from "./databaseConfig";

import {
  doc,
  setDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";

// add score to database

export function addScore(userName: string, time: string) {
  const scoreRef = doc(collection(db, "scores"));
  setDoc(scoreRef, {
    name: userName,
    time: time,
  })
    .then(() => {})
    .catch((error) => {
      console.error("Error adding score: ", error);
    });
}

// get scores from database and display on scoreboard

export function updateScoreboard() {
  const scoreRef = query(
    collection(db, "scores"),
    orderBy("time", "asc"),
    limit(5)
  );

  getDocs(scoreRef).then((querySnapshot) => {
    const scoreboardDiv = document.querySelector(
      ".scoreboard-modal__content div"
    );

    if (scoreboardDiv) {
      scoreboardDiv.innerHTML = "";

      querySnapshot.docs.forEach((doc, i) => {
        const score = doc.data();
        const scoreParagraph = document.createElement("p");
        scoreParagraph.className = "scoreboard-modal__player-score";
        scoreParagraph.textContent = `${i + 1}. ${score.name} - ${score.time}`;
        scoreboardDiv.appendChild(scoreParagraph);
      });
    }
  });
}

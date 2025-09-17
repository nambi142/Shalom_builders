// src/UploadProjects.jsx
import { useEffect } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

const ProjectsData = [
  {
    title: "Parsonage Samathanapuram",
    description:
      "Good communication is crucial in the construction industry. A construction company maintains open collaboration.",
    coverImage: "/project-img/3.jpg",
    images: ["/project-img/3.jpg"],
    category: "General Construction",
  },
 
];

export default function UploadProjects() {
  useEffect(() => {
    const upload = async () => {
      try {
        const colRef = collection(db, "Project-data"); // collection name
        for (const project of ProjectsData) {
          await addDoc(colRef, project);
          console.log("✅ Uploaded:", project.title);
        }
        console.log("🎉 All projects uploaded!");
      } catch (err) {
        console.error("❌ Upload failed:", err);
      }
    };

    //upload();
  }, []);

  return null; // No UI
}

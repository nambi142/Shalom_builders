// src/UploadProjects.jsx
import { useEffect } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

const ProjectsData = [
  {
    title: "Thachanallur",
    description:
      "At Thachanallur, we focused on renovating an existing house with high-quality painting and interior remodeling. The project was carefully planned to improve functionality, enhance visual appeal, and ensure long-lasting durability, creating a refreshed living space that combines comfort with a modern finish.",
    coverImage: "/ShalomBuilderswork/Thachanallur/IMG20260331164604.jpg",
    images: [
      "/ShalomBuilderswork/Thachanallur/IMG20260316112809.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260316123502.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260316160335.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260318112018.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260320162838.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260320162844.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260325132742.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260326175548.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260326175550.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260331164604.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260401160513.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260403162549.jpg",
      "/ShalomBuilderswork/Thachanallur/IMG20260403180109.jpg",
    ],
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

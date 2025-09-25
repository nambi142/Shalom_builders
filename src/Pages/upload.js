// src/UploadProjects.jsx
import { useEffect } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

const ProjectsData = [
  {
    title: "Muthalali Nager",
    description:
      "This project involved the construction of a compact yet fully functional house on the terrace. Despite the limited space, our team ensured smart planning, efficient use of materials, and strong structural support. The design reflects practicality, safety, and comfort, turning unused terrace space into a modern living area.",
    coverImage: "/ShalomBuilderswork/MuthalaiNager/IMG202411211130.jpg",
    images: [
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112602.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112604.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112613.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112620.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112623.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112636.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112640.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112642.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112650.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112660.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112670.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112680.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112690.jpg",
      "/ShalomBuilderswork/MuthalaiNager/IMG20241121112700.jpg"
    ],
    category: "General Construction",
  },
  {
    title: "Roja Nager",
    description:
      "At Roja Nager, we focused on building a durable and well-structured compound wall around an empty land. The wall was carefully designed to ensure security, stability, and aesthetic appeal, combining strength with a clean finish that enhances the overall property value.",
    coverImage: "/ShalomBuilderswork/RojaNaagar/IMG20240503125122.jpg",
    images: [
      "/ShalomBuilderswork/RojaNaagar/IMG20240402124217.jpg",
      "/ShalomBuilderswork/RojaNaagar/IMG20240402124236.jpg",
      "/ShalomBuilderswork/RojaNaagar/IMG20240402124251.jpg",
      "/ShalomBuilderswork/RojaNaagar/IMG20240402124254.jpg",
      "/ShalomBuilderswork/RojaNaagar/IMG20240402124301.jpg",
      "/ShalomBuilderswork/RojaNaagar/IMG20240402124304.jpg",
      "/ShalomBuilderswork/RojaNaagar/IMG20240503125127.jpg",
      "/ShalomBuilderswork/RojaNaagar/IMG20240503125140.jpg"
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

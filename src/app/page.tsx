import Image from "next/image";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "50px", height: "100vh" }}>
      <iframe
        src="/CV Quiroz Anibal.pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </main>
  );
}

/* import Image from "next/image";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <h1>Mi CV</h1>
      <p>Puedes descargar mi CV en el siguiente enlace:</p>
      <a href="/CV Quiroz Anibal.pdf" download target="_blank" rel="noopener noreferrer">
        Descargar CV (PDF)
      </a>
    </main>
  );
} */


// export default function Home() {
//   return (
//     <main style={{ textAlign: "center", padding: "50px" }}>
//       <h1>Mi CV</h1>
//       <p>Puedes ver o descargar mi CV en los siguientes enlaces:</p>

//       {/* Botón para abrir el PDF en una nueva pestaña */}
//       <a
//         href="/CV Quiroz Anibal.pdf"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           display: "block",
//           margin: "10px auto",
//           padding: "10px 20px",
//           backgroundColor: "#0070f3",
//           color: "white",
//           borderRadius: "5px",
//           textDecoration: "none",
//         }}
//       >
//         Ver CV en el navegador
//       </a>

//       {/* Botón para descargar el PDF */}
//       <a
//         href="/CV Quiroz Anibal.pdf"
//         download="CV Quiroz Anibal.pdf"
//         style={{
//           display: "block",
//           margin: "10px auto",
//           padding: "10px 20px",
//           backgroundColor: "#28a745",
//           color: "white",
//           borderRadius: "5px",
//           textDecoration: "none",
//         }}
//       >
//         Descargar CV (PDF)
//       </a>
//     </main>
//   );
// }







// import React, { useEffect, useRef, useState } from "react";
// import styles from "./MoonPhases.module.css";

// function MoonPhases() {
//     const [phase, setPhase] = useState<number>(25);
//     const [auto, setAuto] = useState<boolean>(false);
//     const timerRef = useRef<number | null>(null);

//     useEffect(() => {
//         if (!auto) {
//             if (timerRef.current) clearInterval(timerRef.current);
//             return;
//         }
//         timerRef.current = window.setInterval(() => {
//             setPhase((p) => (p >= 100 ? 0 : p + 1));
//         }, 120);
//         return () => {
//             if (timerRef.current) clearInterval(timerRef.current);
//         };
//     }, [auto]);

//     const prev = () => setPhase((p) => (p <= 0 ? 100 : p - 1));
//     const next = () => setPhase((p) => (p >= 100 ? 0 : p + 1));

//     const label = (() => {
//         if (phase === 0 || phase === 100) return "🌑 Luna nueva";
//         if (phase > 0 && phase < 25) return "🌒 Creciente inicial";
//         if (phase === 25) return "🌓 Cuarto creciente";
//         if (phase > 25 && phase < 50) return "🌔 Gibosa creciente";
//         if (phase === 50) return "🌕 Luna llena";
//         if (phase > 50 && phase < 75) return "🌖 Gibosa menguante";
//         if (phase === 75) return "🌗 Cuarto menguante";
//         return "🌘 Menguante final";
//     })();

//     return (
//         <div className={styles.wrap}>
//             <h2 className={styles.title}>Fases de la Luna (CSS + React)</h2>
//             <div className={styles.sky}>
//                 <div
//                     className={styles.moon}
//                     // 👇 hacemos cast a React.CSSProperties para poder usar la variable CSS
//                     style={{ ["--phase" as any]: phase } as React.CSSProperties}
//                     aria-label={label}
//                     title={label}
//                 />
//                 <div className={styles.stars} aria-hidden />
//             </div>

//             <div className={styles.panel}>
//                 <button className={styles.btn} onClick={prev}>◀</button>
//                 <input
//                     className={styles.range}
//                     type="range"
//                     min="0"
//                     max="100"
//                     value={phase}
//                     onChange={(e) => setPhase(parseInt(e.target.value, 10))}
//                 />
//                 <button className={styles.btn} onClick={next}>▶</button>
//             </div>

//             <div className={styles.info}>
//                 <span>{label}</span>
//                 <span>{phase}%</span>
//             </div>

//             <div className={styles.actions}>
//                 <button
//                     className={`${styles.btn} ${auto ? styles.primary : ""}`}
//                     onClick={() => setAuto((a) => !a)}
//                 >
//                     {auto ? "⏸ Pausar" : "▶ Auto"}
//                 </button>
//                 <button className={styles.btn} onClick={() => setPhase(50)}>Luna llena</button>
//                 <button className={styles.btn} onClick={() => setPhase(0)}>Luna nueva</button>
//             </div>
//         </div>
//     );
// }

// export default MoonPhases;

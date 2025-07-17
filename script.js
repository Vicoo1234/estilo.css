// script.js

const ramosPorAnio = {
  primeraño: [
    { nombre: "Epistemología De La Cs. Sociales", requisitos: [] },
    { nombre: "Teoría Del Estado", requisitos: [] },
    { nombre: "Historia Del Derecho", requisitos: [] },
    { nombre: "Introducción Al Derecho", requisitos: [] },
    { nombre: "Derecho Constitucional", requisitos: [] },
    { nombre: "Instituciones De Derecho Privado", requisitos: [] },
    { nombre: "Taller De Escritura Jurídica", requisitos: [] },
  ],
  segundoaaño: [
    { nombre: "Historia Social Y Política De Las Instituciones - Americana Y Argentina-", requisitos: ["Teoría Del Estado"] },
    { nombre: "Derechos Humanos Y Garantías", requisitos: ["Derecho Constitucional"] },
    { nombre: "Economía", requisitos: [] },
    { nombre: "Derecho De Las Obligaciones", requisitos: ["Instituciones De Derecho Privado"] },
    { nombre: "Derecho De Daños", requisitos: ["Derecho De Las Obligaciones"] },
    { nombre: "D. Penal: Parte General Y Teoría Del Hecho Punible", requisitos: ["Derechos Humanos Y Garantías"] },
    { nombre: "Introducción A La Sociología", requisitos: [] },
    { nombre: "Taller De Oratoria", requisitos: [] },
    { nombre: "Taller De Argumentación Jurídica", requisitos: ["Introducción Al Derecho"] },
  ],
  terceroaño: [
    { nombre: "Teoría De La Responsabilidad Penal", requisitos: ["D. Penal: Parte General Y Teoría Del Hecho Punible"] },
    { nombre: "Derecho Penal Parte Especial", requisitos: ["Teoría De La Responsabilidad Penal"] },
    { nombre: "Derecho Internacional Público", requisitos: ["Derechos Humanos Y Garantías"] },
    { nombre: "Ética Aplicada Y De La Abogacía", requisitos: ["Introducción Al Derecho"] },
    { nombre: "Teoría General Del Proceso", requisitos: ["Derechos Humanos Y Garantías", "Derecho De Las Obligaciones"] },
    { nombre: "Derecho Procesal Civil Y Comercial", requisitos: ["Teoría General Del Proceso"] },
    { nombre: "Derecho De Los Contratos Parte General", requisitos: ["Derecho De Las Obligaciones"] },
    { nombre: "Derecho De Los Contratos Parte Especial", requisitos: ["Derecho De Los Contratos Parte General"] },
    { nombre: "Instituciones De Derecho Administrativo", requisitos: ["Derecho Constitucional", "Derecho De Daños", "Economía"] },
    { nombre: "Taller De Litigio En Casos De Interés Público", requisitos: ["Derechos Humanos Y Garantías", "Taller De Oratoria", "Taller De Argumentación Jurídica"] },
  ],
  cuartoaño: [
    { nombre: "Derechos Reales E Intelectuales", requisitos: ["Derecho De Los Contratos Parte Especial"] },
    { nombre: "Derecho Procesal Penal", requisitos: ["Teoría General Del Proceso", "Teoría De La Responsabilidad Penal"] },
    { nombre: "Derecho Laboral Y De La Seguridad Social", requisitos: ["Derecho De Los Contratos Parte General"] },
    { nombre: "Filosofía Del Derecho", requisitos: ["Epistemología De La Cs. Sociales", "Introducción Al Derecho"] },
    { nombre: "Personas Jurídicas", requisitos: ["Derecho De Los Contratos Parte Especial"] },
    { nombre: "Derecho Administrativo Parte Especial", requisitos: ["Instituciones De Derecho Administrativo", "Derecho Procesal Civil Y Comercial", "Derecho De Los Contratos Parte General"] },
    { nombre: "Derecho Del Consumidor Y Del Usuario", requisitos: ["Derecho De Los Contratos Parte Especial"] },
    { nombre: "Medios De Solución De Controversia", requisitos: ["Teoría General Del Proceso"] },
    { nombre: "Metodología De La Investigación Científica", requisitos: ["Epistemología De La Cs. Sociales"] },
    { nombre: "Taller De Estrategia Del Caso Y De La Prueba", requisitos: ["Derecho Procesal Civil Y Comercial", "Teoría De La Responsabilidad Penal"] },
  ],
  quintoaño: [
    { nombre: "Derecho De Familias", requisitos: ["Derechos Reales E Intelectuales"] },
    { nombre: "Derecho Sucesorio", requisitos: ["Derecho De Familias"] },
    { nombre: "Derecho Concursal", requisitos: ["Personas Jurídicas", "Derecho Procesal Civil Y Comercial", "Derecho Laboral Y De La Seguridad Social", "Derechos Reales E Intelectuales"] },
    { nombre: "Derecho Financiero Y Tributario", requisitos: ["Derecho Administrativo Parte Especial"] },
    { nombre: "Derecho Privado Internacional", requisitos: ["Derecho Concursal"] },
    { nombre: "Teoría General Del Derecho", requisitos: ["Introducción Al Derecho", "Derecho De Familias", "Derecho Penal Parte Especial"] },
    { nombre: "Derecho Ambiental Y De Los Recursos Naturales", requisitos: ["Derecho Administrativo Parte Especial", "Derecho De Los Contratos Parte Especial", "Derecho Internacional Público"] },
  ],
  extra: [
    { nombre: "Introducción A La Criminología", requisitos: ["Derechos Humanos Y Garantías", "Teoría De La Responsabilidad Penal"] },
    { nombre: "Seminario De Profundización E Investigación: Problemáticas Actuales Derecho Penal Juvenil", requisitos: ["D. Penal: Parte General Y Teoría Del Hecho Punible", "Teoría De La Responsabilidad Penal", "Derecho Procesal Penal"] },
    { nombre: "Inglés I", requisitos: [] },
    { nombre: "Inglés II", requisitos: ["Inglés I"] },
    { nombre: "Sistema Informático", requisitos: [] },
  ]
};

const estado = {};

function renderRamos() {
  Object.keys(ramosPorAnio).forEach(anio => {
    const container = document.getElementById(anio);
    container.innerHTML = "";
    ramosPorAnio[anio].forEach(ramo => {
      const requisitosCumplidos = ramo.requisitos.every(req => estado[req]);
      const div = document.createElement("div");
      div.className = "ramo";
      if (!requisitosCumplidos && ramo.requisitos.length > 0) {
        div.classList.add("bloqueado");
      } else if (estado[ramo.nombre]) {
        div.classList.add("aprobado");
      }
      div.textContent = ramo.nombre;
      div.addEventListener("click", () => {
        if (!requisitosCumplidos) return;
        estado[ramo.nombre] = !estado[ramo.nombre];
        renderRamos();
      });
      container.appendChild(div);
    });
  });
}

renderRamos();

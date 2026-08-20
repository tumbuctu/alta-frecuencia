import Image from "next/image";

const services = [
  { number: "01", title: "Fisioterapia", copy: "Valoramos el origen, tratamos la lesión y te acompañamos hasta recuperar seguridad en el movimiento.", tags: ["Valoración", "Tratamiento", "Readaptación"] },
  { number: "02", title: "Entrenamiento personal", copy: "Sesiones diseñadas alrededor de tu punto de partida, tus objetivos y la vida que quieres llevar.", tags: ["Fuerza", "Movilidad", "Rendimiento"] },
  { number: "03", title: "Recuperación activa", copy: "El puente entre la camilla y el entrenamiento para volver a hacer lo que te gusta con confianza.", tags: ["Progresión", "Control", "Vuelta a la actividad"] },
];

const steps = [
  ["01", "Te escuchamos", "Entendemos tu historia, tus síntomas y qué quieres volver a hacer."],
  ["02", "Valoramos", "Analizamos cómo te mueves y definimos un punto de partida real."],
  ["03", "Trazamos el plan", "Unimos tratamiento y ejercicio con objetivos claros y medibles."],
  ["04", "Evolucionamos", "Ajustamos el proceso contigo para que el progreso se mantenga."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Alta Frecuencia, inicio"><Image src="/brand/logo-color.png" alt="Alta Frecuencia" width={700} height={154} priority /></a>
        <nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#metodo">Método</a><a href="#centro">El centro</a></nav>
        <a className="button button-small" href="#contacto">Pide cita</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Fisioterapia · Entrenamiento personal</p>
          <h1>Tu cuerpo no para<br /><span>Nosotros tampoco</span></h1>
          <p className="hero-text">Recupera, entrena y vuelve más fuerte con un plan hecho para ti.</p>
          <div className="hero-actions"><a className="button" href="#contacto">Empieza hoy <span aria-hidden="true">↗</span></a><a className="text-link" href="#servicios">Descubre el centro <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-art" aria-hidden="true"><p>ALTA<br />FRECUENCIA</p><span>01 — MOVIMIENTO</span></div>
        <p className="hero-index" aria-hidden="true">AF / 01</p>
      </section>

      <section className="intro section" id="centro">
        <div className="section-label"><span>02</span> UNA MISMA DIRECCIÓN</div>
        <div className="intro-content">
          <p className="big-statement">Moverte sin miedo<br />Entrenar con sentido<br /><em>Vivir a tu ritmo</em></p>
          <div className="intro-aside"><p>En Alta Frecuencia conectamos fisioterapia y entrenamiento para que no tengas que elegir entre recuperarte y avanzar.</p><p>No trabajamos solo donde duele. Miramos el conjunto, explicamos el proceso y construimos contigo una solución que encaje en tu día a día.</p></div>
        </div>
      </section>

      <section className="services section" id="servicios">
        <div className="section-head"><div className="section-label light"><span>03</span> QUÉ HACEMOS</div><h2>Todo lo que necesitas para<br />volver a moverte</h2></div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="card-top"><span>{service.number}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
              <h3>{service.title}</h3><p>{service.copy}</p>
              <ul aria-label={`Incluye ${service.title}`}>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="signal" aria-label="Nuestro enfoque"><p>Tu progreso tiene una frecuencia<br /><span>Vamos a encontrarla</span></p></section>

      <section className="method section" id="metodo">
        <div className="section-label"><span>04</span> EL MÉTODO</div>
        <div className="method-layout">
          <div className="method-title"><h2>Un plan claro<br />Un equipo contigo</h2><p>Menos recetas genéricas. Más decisiones basadas en ti.</p></div>
          <ol className="steps">{steps.map(([number, title, copy]) => <li key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
        </div>
      </section>

      <section className="principles section">
        <div className="section-label light"><span>05</span> ALTA FRECUENCIA ES</div>
        <div className="principles-list"><p><span>Precisión</span><small>Sabemos por qué hacemos cada cosa.</small></p><p><span>Cercanía</span><small>Te explicamos y te escuchamos.</small></p><p><span>Continuidad</span><small>Del dolor al rendimiento, sin saltos.</small></p></div>
      </section>

      <section className="contact section" id="contacto">
        <div className="contact-copy"><div className="section-label"><span>06</span> EMPEZAMOS</div><h2>¿Hablamos<br />de tu objetivo?</h2><p>Cuéntanos qué necesitas y te ayudaremos a elegir el mejor punto de partida.</p></div>
        <div className="contact-panel"><p className="contact-kicker">Primera valoración</p><h3>Da el primer paso</h3><p>Próximamente podrás reservar directamente desde aquí.</p><a className="button contact-button" href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a><div className="contact-details"><span>Teléfono y WhatsApp<br /><strong>Por confirmar</strong></span><span>Dirección del centro<br /><strong>Por confirmar</strong></span></div></div>
      </section>

      <footer><div className="footer-main"><Image src="/brand/logo-tag.png" alt="Alta Frecuencia" width={700} height={154} /><div className="footer-services"><span>Fisioterapia</span><span>Entrenamiento personal</span><span>Recuperación activa</span></div></div><p>© {new Date().getFullYear()} Alta Frecuencia</p></footer>
    </main>
  );
}

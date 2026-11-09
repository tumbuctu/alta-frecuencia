import Image from "next/image";

const paths = [
  { number: "01 / RECUPERA", title: "Fisioterapia", copy: "Valoración, tratamiento y ejercicio terapéutico para abordar tu problema y recuperar tu función.", link: "Conoce cómo trabajamos", href: "#fisioterapia" },
  { number: "02 / MUÉVETE", title: "Entrenamiento personal", copy: "Individual, en pareja o semiprivado. Entrena con una planificación y atención adaptadas a tus objetivos.", link: "Encuentra tu formato", href: "#entrenamiento" },
  { number: "03 / VUELVE MÁS FUERTE", title: "Readaptación deportiva", copy: "Un proceso progresivo entre la rehabilitación y las exigencias reales de tu deporte.", link: "Prepara tu vuelta", href: "#readaptacion" },
];

const physioServices = [
  { kicker: "Valoración y tratamiento", title: "Sesión de fisioterapia", price: "40 €", unit: "/ 60 minutos", copy: "Un tratamiento individualizado que puede combinar terapia manual, ejercicio terapéutico, valoración ecográfica, punción seca, neuromodulación invasiva y radiofrecuencia Winback, según la valoración clínica.", note: "Las técnicas indicadas están incluidas en el precio de la sesión.", cta: "Reserva tu sesión" },
  { kicker: "Movimiento y autonomía", title: "Fisioterapia neurológica", price: "40 €", unit: "/ sesión", copy: "Atención individualizada para personas con alteraciones del movimiento asociadas a una condición neurológica. Trabajamos movilidad, fuerza, equilibrio y coordinación con objetivos orientados a mejorar la autonomía y facilitar las actividades cotidianas.", cta: "Consulta tu caso" },
];

const methodSteps = [
  ["01", "Entender qué necesitas", "Empezamos con tu historia, tus síntomas y una valoración funcional. La ecografía musculoesquelética puede complementar la exploración cuando está indicada."],
  ["02", "Un plan con sentido", "Combinamos ejercicio terapéutico y las técnicas que requiera tu caso: terapia manual, punción seca o neuromodulación, según la valoración clínica."],
  ["03", "Medir para progresar", "Valoramos la fuerza con dinamometría Active Force 2 y seguimos tu evolución para ajustar las cargas y orientar tu vuelta a la actividad y al deporte."],
];

const faqs = [
  ["¿Puedo empezar si nunca he entrenado?", "Sí. Partimos de tu nivel actual y organizamos una progresión adaptada para que empieces con seguridad y confianza."],
  ["¿Y si tengo una lesión o dolor?", "Valoramos tu situación y adaptamos el ejercicio. Cuando está indicado, integramos fisioterapia en el mismo proceso."],
  ["¿Qué diferencia hay entre personal y semiprivado?", "En el entrenamiento personal toda la sesión se centra en ti. En el semiprivado compartes espacio con un máximo de cuatro personas, manteniendo tu propio plan."],
  ["¿El entrenamiento incluye fisioterapia en camilla?", "Sí, cuando está indicada se integra en el programa de entrenamiento personal o en pareja sin coste adicional."],
  ["¿Quién supervisa el entrenamiento semiprivado?", "Un profesional con doble titulación en Fisioterapia y Ciencias de la Actividad Física y del Deporte (CAFYD)."],
  ["¿Puedo recuperar una sesión?", "Sí, con un preaviso mínimo de 24 horas, según disponibilidad y dentro de la vigencia del bono."],
  ["¿Cómo se prepara la vuelta al deporte?", "Con una progresión de fuerza, movilidad, control del movimiento y tareas específicas, ajustada a tu lesión, evolución y deporte."],
];

function Arrow() { return <span className="arrow-icon" aria-hidden="true" />; }

function CtaLink({ children, href = "#contacto", dark = false }: { children: React.ReactNode; href?: string; dark?: boolean }) {
  return <a className={`pill-link${dark ? " pill-link-dark" : ""}`} href={href}><span>{children}</span><Arrow /></a>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-left">
          <a className="brand" href="#inicio" aria-label="Alta Frecuencia, inicio"><Image src="/brand/logo-color.png" alt="Alta Frecuencia" width={700} height={154} priority /></a>
        </div>
        <nav className="desktop-nav" aria-label="Navegación principal"><a href="#que-hacemos">Qué hacemos</a><a href="#tarifas">Servicios y tarifas</a><a href="#entrenamiento">Entrenamiento</a></nav>
        <CtaLink href="#contacto" dark>Empezamos</CtaLink>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-meta"><span>Fisioterapia y entrenamiento · Murcia</span><span>Tu siguiente paso empieza aquí</span></div>
        <div className="hero-copy">
          <h1>Muévete<br />Recupera<br /><span>Vuelve más fuerte</span></h1>
          <div className="hero-bottom"><p>Unimos fisioterapia y ejercicio para ayudarte a recuperar la confianza en tu cuerpo y avanzar hacia tus objetivos.</p><CtaLink href="#que-hacemos">Encuentra tu camino</CtaLink></div>
        </div>
      </section>

      <div className="marquee" aria-label="Servicios de Alta Frecuencia"><span>Fisioterapia</span><i /><span>Entrenamiento personal</span><i /><span>Readaptación deportiva</span><i /><span>Alta Frecuencia</span></div>

      <section className="intro section" id="que-hacemos">
        <div className="split-intro"><p className="overline">01 / Nuestra forma de entenderlo</p><div><h2>No se trata solo<br />de entrenar<br />Se trata de <em>avanzar</em></h2><p className="lead">Recuperarte de una lesión. Volver a practicar tu deporte. Empezar a entrenar con acompañamiento. En Alta Frecuencia conectamos el tratamiento con el movimiento para construir un proceso adaptado a ti.</p></div></div>
        <div className="section-heading line-heading"><h3>Tres caminos. Un equipo.</h3><a href="#fisioterapia">Encuentra el tuyo <Arrow /></a></div>
        <div className="path-grid">{paths.map((path) => <article className="path-card" key={path.number}><small>{path.number}</small><div><h3>{path.title}</h3><p>{path.copy}</p><a href={path.href}>{path.link}<Arrow /></a></div></article>)}</div>
      </section>

      <section className="physio section" id="fisioterapia">
        <p className="overline">Tratamiento / Recupera movimiento</p><h2>Fisioterapia<br />adaptada a ti</h2><p className="lead wide">Valoramos tu situación y elegimos el abordaje que necesitas para aliviar molestias, recuperar tu función y moverte con mayor confianza.</p>
        <div className="price-card-grid" id="tarifas">{physioServices.map((service) => <article className="price-card" key={service.title}><p className="card-kicker">{service.kicker}</p><h3>{service.title}</h3><p className="price"><strong>{service.price}</strong> <span>{service.unit}</span></p><p>{service.copy}</p>{service.note && <p className="info-note">{service.note}</p>}<CtaLink>{service.cta}</CtaLink></article>)}</div>
      </section>

      <section className="method section" id="metodo">
        <div className="method-intro"><p className="overline">02 / El método Alta Frecuencia</p><h2>Escuchamos<br />Planificamos<br /><em>Avanzamos</em></h2><CtaLink href="#contacto">Hablemos de tu objetivo</CtaLink></div>
        <ol className="method-steps">{methodSteps.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
      </section>

      <section className="space section">
        <div className="space-photo"><Image src="/installations/training-room-wide.jpeg" alt="Sala de entrenamiento de Alta Frecuencia" width={1200} height={1600} priority unoptimized /></div>
        <div className="space-copy"><p className="overline">03 / Tu espacio para mejorar</p><h2>Tu objetivo<br />Tu ritmo<br />Nuestra atención</h2><p className="lead">La fuerza se entrena. La confianza, también. Elige cómo quieres empezar y te acompañamos con una programación adaptada a tu punto de partida.</p><ul className="tags"><li>Entrenamiento individual</li><li>Entrenamiento en pareja</li><li>Semiprivado · máximo 4</li><li>Ejercicio terapéutico</li></ul><p>En el semiprivado entrenas en un grupo de máximo 4 personas, con tu propio plan y la supervisión de un profesional con doble titulación en Fisioterapia y CAFYD.</p><CtaLink href="#entrenamiento">Ver modalidades y tarifas</CtaLink></div>
      </section>

      <section className="training section" id="entrenamiento">
        <div className="section-heading line-heading"><h2>Elige cómo avanzar</h2><span>Entrenamiento / Modalidades y tarifas</span></div><p className="lead wide">Para ganar fuerza, mejorar tu composición corporal, retomar el ejercicio o mantenerte activo. Tú marcas el objetivo; nosotros organizamos el camino y adaptamos la progresión.</p>
        <div className="training-grid">
          <article className="training-card"><p className="card-kicker">Atención individual</p><h3>Entrenamiento personal</h3><p>Una sesión centrada en ti, con supervisión continua y un programa adaptado a tu nivel, necesidades y evolución.</p><p className="info-note"><strong>Fisioterapia en camilla incluida</strong> cuando esté indicada, integrada en tu programa y sin coste adicional.</p><table><thead><tr><th>Frecuencia</th><th>Sesiones</th><th>Precio</th></tr></thead><tbody><tr><td>1/semana</td><td>4</td><td>160 €</td></tr><tr><td>2/semana</td><td>8</td><td>280 €</td></tr><tr><td>3/semana</td><td>12</td><td>380 €</td></tr></tbody></table><CtaLink>Empieza tu programa</CtaLink></article>
          <article className="training-card training-card-wide"><p className="card-kicker">Dos personas / Atención personalizada</p><h3>Entrenamiento personal en pareja</h3><p>Entrenad juntos con un plan adaptado a cada uno. Ajustamos ejercicios, cargas y progresión a las capacidades y objetivos de cada persona.</p><p className="info-note"><strong>Fisioterapia en camilla incluida para ambos</strong> cuando esté indicada, integrada en el programa y sin coste adicional.</p><table><thead><tr><th>Frecuencia</th><th>Sesiones</th><th>Total pareja</th></tr></thead><tbody><tr><td>1/semana</td><td>4</td><td>245 €</td></tr><tr><td>2/semana</td><td>8</td><td>360 €</td></tr><tr><td>3/semana</td><td>12</td><td>530 €</td></tr></tbody></table><small>Precios totales por pareja, no por persona.</small><CtaLink>Empezad juntos</CtaLink></article>
        </div>
        <article className="semi-private"><div><p className="card-kicker">Máximo 4 personas / Plan individualizado</p><h3>Tu propio plan<br />La energía del grupo</h3><p><strong>Entrenamiento personal semiprivado</strong> con un profesional que reúne las dos titulaciones: Fisioterapia y Ciencias de la Actividad Física y del Deporte (CAFYD).</p><p>Comparte espacio y motivación, con ejercicios, cargas y adaptaciones ajustados a ti. Tú vienes a entrenar; nosotros planificamos, te guiamos y ajustamos el trabajo según tu evolución.</p><ul className="feature-list"><li>Supervisión cercana</li><li>Progresión organizada</li><li>Adaptado a tu nivel</li></ul></div><div><p className="info-note">Para empezar, retomar el ejercicio o seguir mejorando con un seguimiento cercano y objetivos claros.</p><table><thead><tr><th>Frecuencia</th><th>Cuota por persona</th></tr></thead><tbody><tr><td>1 sesión / semana</td><td>60 € / mes</td></tr><tr><td>2 sesiones / semana</td><td>120 € / mes</td></tr><tr><td>3 sesiones / semana</td><td>160 € / mes</td></tr></tbody></table><small>Modalidad sujeta a pago mensual.</small><CtaLink>Consulta horarios y disponibilidad</CtaLink></div></article>
      </section>

      <section className="readaptation section" id="readaptacion">
        <div><p className="overline">Readaptación deportiva / Return to play</p><h2>Prepara tu vuelta<br />al deporte</h2><p className="lead">Un proceso progresivo para recuperar la fuerza, la movilidad y la confianza necesarias para volver a entrenar tras una lesión.</p><p>Partimos de una valoración y combinamos fuerza, control del movimiento y tareas específicas de tu deporte. Ajustamos las cargas según tu respuesta y las exigencias de tu actividad.</p><p className="info-note"><strong>Medir para progresar.</strong> Utilizamos dinamometría Active Force 2 para valorar la fuerza y seguir tu evolución, apoyando las decisiones sobre la progresión y la vuelta al deporte.</p><CtaLink>Consulta tu readaptación</CtaLink></div>
        <div className="readaptation-table"><h3>Sesiones de readaptación</h3><table><thead><tr><th>Modalidad</th><th>Precio</th></tr></thead><tbody><tr><td>Sesión individual</td><td>40 €</td></tr><tr><td>2/semana · 8 sesiones</td><td>280 €</td></tr><tr><td>3/semana · 12 sesiones</td><td>380 €</td></tr></tbody></table><p>Una planificación adaptada a tu lesión, tu evolución y tu deporte.</p></div>
      </section>

      <section className="assessment section"><p className="overline">Tu punto de partida</p><h2>Valoración y seguimiento</h2><p className="lead wide"><strong>Valoración inicial: 50 €.</strong> Conocemos tus antecedentes, tu situación actual y tus objetivos para orientar el programa. Incluimos un control mensual de composición corporal mediante bioimpedancia en los programas de entrenamiento.</p><div className="conditions"><h3>Condiciones de los programas</h3><ul><li>Los bonos tienen una caducidad de un mes desde la fecha de contratación.</li><li>Posibilidad de recuperar sesiones con un preaviso mínimo de 24 horas, según disponibilidad y dentro de la vigencia del bono.</li><li>El entrenamiento semiprivado se contrata mediante cuota mensual.</li><li>Los precios del entrenamiento en pareja corresponden al total de las dos personas.</li></ul></div></section>

      <section className="gallery section" id="centro"><div className="section-heading line-heading"><h2>Dentro de Alta Frecuencia</h2><span>Un espacio para ti</span></div><div className="gallery-grid"><figure><Image src="/installations/training-room-wide.jpeg" alt="Vista general de la sala de entrenamiento" width={1200} height={1600} loading="eager" unoptimized /><figcaption>01 / Vista general de la sala de entrenamiento</figcaption></figure><figure><Image src="/installations/physio-room.jpeg" alt="Consulta de fisioterapia con camilla" width={1536} height={2048} loading="eager" unoptimized /><figcaption>02 / Consulta de fisioterapia con camilla</figcaption></figure><figure><Image src="/installations/rack-and-bench.jpeg" alt="Banco y rack para trabajo de fuerza" width={1200} height={1600} loading="eager" unoptimized /><figcaption>03 / Banco y rack para trabajo de fuerza</figcaption></figure><figure><Image src="/installations/strength-area.jpeg" alt="Material de fuerza de Alta Frecuencia" width={1200} height={1600} loading="eager" unoptimized /><figcaption>04 / Material de fuerza y discos de Alta Frecuencia</figcaption></figure></div></section>

      <section className="faq section"><div><p className="overline">Antes de dar el paso</p><h2>Resolvemos<br />tus dudas</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

      <section className="contact section" id="contacto">
        <div className="contact-heading">
          <p className="overline">Alta Frecuencia · Murcia</p>
          <h2>El siguiente<br />paso es tuyo</h2>
          <p className="contact-intro">Cuéntanos qué quieres recuperar, mejorar o conseguir.<br />Encontraremos el punto de partida.</p>
        </div>
        <div className="contact-column">
          <div className="contact-map">
            <iframe
              title="Ubicación de Alta Frecuencia en Murcia"
              src="https://www.google.com/maps?q=Gran+V%C3%ADa+Alfonso+X+el+Sabio,+11,+30008+Murcia,+Espa%C3%B1a&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="contact-details">
            <div className="contact-address">
              <span>Centro de fisioterapia y entrenamiento</span>
              <strong>Alta Frecuencia</strong>
              <a href="https://www.google.com/maps/search/?api=1&query=Gran+V%C3%ADa+Alfonso+X+el+Sabio+11+30008+Murcia" target="_blank" rel="noreferrer">
                Gran Vía Alfonso X el Sabio, 11, entresuelo A<br />30008 Murcia
              </a>
            </div>
            <div className="contact-links" aria-label="Datos de contacto">
              <a href="https://wa.me/34630533323" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>630 533 323</strong><Arrow /></a>
              <a href="tel:+34630533323"><span>Teléfono</span><strong>630 533 323</strong><Arrow /></a>
              <a href="mailto:altafrecuencia@gmail.com"><span>Correo</span><strong>altafrecuencia@gmail.com</strong><Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <footer><div className="footer-top"><Image src="/brand/logo-color.png" alt="Alta Frecuencia" width={700} height={154} /><p>Fisioterapia. Fuerza. Movimiento.<br />Murcia, España.</p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Alta Frecuencia</span><span>Muévete, recupera, vuelve más fuerte.</span><a href="#inicio">Volver arriba <Arrow /></a></div></footer>
    </main>
  );
}

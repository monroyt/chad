"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SmartImage } from "./ui/smart-image";

type TextBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "highlight"; text: string }
  | { kind: "image"; name: string; alt: string }
  | { kind: "imageRow"; images: { name: string; alt: string }[] }
  | { kind: "caption"; text: string }
  | { kind: "note"; text: string };

const blocks: TextBlock[] = [
  {
    kind: "paragraph",
    text: "Pienso que, en realidad, no somos tan malos, ni siquiera un poco tontos, tampoco creo que estemos totalmente desubicados, ni zombificados como el resto de la población.",
  },
  {
    kind: "paragraph",
    text: "Creo más bien que... simplemente somos adictos al progreso.",
  },
  { kind: "paragraph", text: "Si..." },
  {
    kind: "paragraph",
    text: "Me atrevo a diagnosticarnos de esa manera. Mira bien cómo funcionamos.",
  },
  {
    kind: "paragraph",
    text: "Creo que nos encanta jugar porque sentimos una sensación constante de progreso que nos genera cierta satisfacción.",
  },
  {
    kind: "paragraph",
    text: "Y si, realmente es satisfactorio compartir un momento gracioso y sentir que \"avanzamos\".",
  },
  {
    kind: "paragraph",
    text: "Lamentablemente la realidad es que no lo hacemos.",
  },
  {
    kind: "paragraph",
    text: "Estamos constantemente en un ciclo sin fin de sentir que avanzamos sin avanzar a ningún lado realmente.",
  },
  { kind: "paragraph", text: "No hay progreso, hermano. En esto no lo hay." },
  {
    kind: "paragraph",
    text: "Necesitamos despejar nuestra mente de la tan adictiva dosis visual y sensación ficticia de avanzar. Una falacia vil y maligna creada para mentes débiles de frágil voluntad.",
  },
  {
    kind: "paragraph",
    text: "Esa es la realidad. Los juegos son una adicción, y somos adictos a ellos.",
  },
  {
    kind: "paragraph",
    text: "Las empresas millonarias crean todo tipo de estrategias para mantenernos viciados, gastan miles de dólares en grupos de psicólogos especializados en la atención humana cuyo único fin es descubrir constantemente formas, cada vez más audaces, que nos mantengan cada vez más enganchados a sus creaciones.",
  },
  {
    kind: "paragraph",
    text: "Es verdaderamente macabro, pero también sumamente inteligente y, sobre todo, remunerable.",
  },
  {
    kind: "paragraph",
    text: "Sus bolsas se llenan a montones mientras jóvenes y adolescentes con poca capacidad de autocontrol nos embobamos cada que sale algo nuevo.",
  },
  { kind: "paragraph", text: "Somos víctimas de eso..." },
  {
    kind: "paragraph",
    text: "Colores, formas, sonidos, \"logros\", la estrategia perfecta.",
  },
  {
    kind: "paragraph",
    text: "No es conspiración infundada, puedes investigar, aunque hace falta tener una neurona para notarlo sin hacerlo. Es así.",
  },
  { kind: "paragraph", text: "Pero regresando a nosotros..." },
  { kind: "paragraph", text: "Y, sobre todo a mí." },
  { kind: "quote", text: "en medida que me entiendo, te entiendo" },
  {
    kind: "paragraph",
    text: "Cada que voy a dormir luego de haber pasado mi día jugando, perdiendo lo más valioso que poseemos (el tiempo), me siento defraudado de mí mismo...",
  },
  {
    kind: "paragraph",
    text: "Es una sensación de culpa constante... saber que pude haber leído, pude haber adelantado un trabajo, creado algo nuevo, pensado en una solución inteligente para sacarnos de la mierda en la que vivimos...",
  },
  { kind: "paragraph", text: "Es horrible..." },
  {
    kind: "paragraph",
    text: "Y aunque admito que me divierto y paso un buen momento con mi hermano, esa culpa sigue ahí y no se va al día siguiente, al contrario, es la peor cruda que puede haber, la moral.",
  },
  {
    kind: "paragraph",
    text: "Me imagino que experimentas algo parecido. Yo sé que aprendemos a insensibilizarnos al respecto, créeme que sé de ello... Pero no hemos de voltear a otro lado y hacer como que no sabemos la realidad. No hemos de mirar hacia la nada pensando, bueno \"qué más da...\"",
  },
  { kind: "paragraph", text: "Porque, ¿eso en qué nos convierte?" },
  {
    kind: "paragraph",
    text: "Lo sabemos, nos hace iguales al resto de nuestra generación.",
  },
  { kind: "paragraph", text: "Hombres de poca voluntad y autocontrol." },
  {
    kind: "paragraph",
    text: "Suena brusco, ¿no? Incluso se siente un pequeño hueco en el estómago.",
  },
  {
    kind: "paragraph",
    text: "Sé que tienes la conciencia y la madurez suficiente para entenderlo a la perfección.",
  },
  {
    kind: "paragraph",
    text: "De otro modo, definitivamente no me molestaría en intentar compartir esto.",
  },
  {
    kind: "paragraph",
    text: "Pocas veces escribo con tal detenimiento, las veces que lo hago es porque expreso con mucha más claridad y exactitud de la que podría hacerla hablando, aún habiendo pensado mi discurso previamente.",
  },
  {
    kind: "paragraph",
    text: "Pero cuando escribo es porque sé que vale la pena. He de admitir que me daría pereza hacerlo si no fuese por eso.",
  },
  {
    kind: "paragraph",
    text: "Porque sí, hermano. Vale la pena intentar hacerte (y hacerme, claro) entrar en razón. Al menos sembrar la duda, porque no se cosecha tan rápido como se siembra, ¿o sí?",
  },
  {
    kind: "paragraph",
    text: "Dice James Clear que \"El éxito es el producto de nuestros hábitos cotidianos, NO de transformaciones drásticas que se realizan una vez en la vida\"",
  },
  {
    kind: "paragraph",
    text: "Pero al menos, quizá, esto pueda ser el inicio de una mejor construcción colectiva de buenos hábitos, al menos mejores que ahora. Basta ser un 0.2% mejor cada día para ser un 100% mejor al final del año.",
  },
  {
    kind: "paragraph",
    text: "Es difícil hacerlo, pero se vuelve más fácil con el tiempo. ¿no viste esa escena de BoJack Horseman?",
  },
  { kind: "image", name: "bojackhorseman", alt: "Escena de BoJack Horseman" },
  {
    kind: "paragraph",
    text: "Yo lo he soñado, ¿sabes? Incluso sé con cierto nivel de seguridad absurdo que se hará realidad... y es que, tendremos más éxito del que ahora podemos imaginar.",
  },
  {
    kind: "paragraph",
    text: "En ese momento tendré que sermonearte nuevamente con no malgastar tu dinero o con que no compartas tu vida con todo mundo, que te alejes de las falsas amistades y sobre todo de las mujeres interesadas y vacías, pero... jajaja, será para luego, en este momento, lo que acontece.",
  },
  {
    kind: "paragraph",
    text: "Hará falta que mejoremos bastante, pero, no estamos tan mal, de todas las cualidades que agradezco tengamos es que definitivamente no somos tan \"simios\" como el 90% de la población.",
  },
  {
    kind: "paragraph",
    text: "Míralos, ellos también son adictos (xd), pero la gran diferencia es que son incapaces, no sólo de salir, sino tan sólo de darse cuenta de ello.",
  },
  {
    kind: "paragraph",
    text: "Decía Neale Donald Wasch que conocer (y, sobre todo, poder entender) los secretos de la vida y el universo depende en gran manera de la capacidad intelectual del individuo.",
  },
  {
    kind: "paragraph",
    text: "Toda mi vida he sentido que la gente es realmente estúpida, y lo he observado en gran manera. Sé que tú también y no es simplemente un comentario vacío, racial, elitista o algo por el estilo, es la verdad.",
  },
  {
    kind: "paragraph",
    text: "Tampoco somos genios, eso está más que claro. Hace falta ser sólo un 1% mejor para destacar. Sólo se tiene que saber aprovechar.",
  },
  { kind: "paragraph", text: "Pero entonces, aquí está la clave y también el problema." },
  {
    kind: "paragraph",
    text: "Se requerirá mayor fuerza de voluntad para ponernos en marcha realmente. La consciencia ya está presente, sino te habías detenido a analizarlo ahora lo has hecho.",
  },
  {
    kind: "paragraph",
    text: "El punto bueno ahora es que, no debemos sentir más culpa al respecto...",
  },
  {
    kind: "paragraph",
    text: "La vida es verdaderamente como un juego de ajedrez, no importa si la cagas en uno o varios movimientos, es más importante el siguiente movimiento. Aún podemos ganar esta partida, este juego aún no termina, de hecho, apenas comenzó.",
  },
  {
    kind: "paragraph",
    text: "Y, si como dije al principio, somos tan adictos al progreso ficticio.",
  },
  {
    kind: "paragraph",
    text: "Podemos entonces volvernos adictos al progreso real.",
  },
  {
    kind: "imageRow",
    images: [
      { name: "YT_AUTOMATION", alt: "Proyecto YT Automation" },
      { name: "ENTERPRISE", alt: "Proyecto Enterprise" },
    ],
  },
  { kind: "caption", text: "(xd)" },
  {
    kind: "paragraph",
    text: "No digo que no recaigamos nunca, al final, es sumamente difícil dejar un vicio tan arraigado. Y... ¿quién no se echaría un porrito con su hermano para recordar viejos vicios de vez en cuando?, habría que estar locos también...",
  },
  { kind: "paragraph", text: "Pero digo..." },
  { kind: "paragraph", text: "Un 0.2% mejor cada día..." },
  { kind: "paragraph", text: "Sólo un 0.2%..." },
  {
    kind: "paragraph",
    text: "Y si un día no pude mejorar, entonces puedo mejorar un 0.4% al día siguiente...",
  },
  {
    kind: "paragraph",
    text: "Y mejorar es un concepto totalmente subjetivo, lo sé, pero...",
  },
  { kind: "paragraph", text: "Sabes a lo que me refiero." },
  {
    kind: "paragraph",
    text: "La conciencia es la guía, en el fondo sabemos más de lo que creemos saber. Sólo hace falta escuchar con un poco más de atención.",
  },
  { kind: "paragraph", text: "Logremos beneficios." },
  {
    kind: "paragraph",
    text: "Construyamos cosas de verdad y no sólo en cubos dentro de un monitor.",
  },
  { kind: "paragraph", text: "Hagamos un imperio real, vívido, tangible." },
  {
    kind: "highlight",
    text: "No para mostrarlo al mundo, sino para que ese sea nuestro mundo.",
  },
  {
    kind: "note",
    text: "Antes de presionar el siguiente botón, sube un poco el volumen de la PC...",
  },
];

function AnimatedBlock({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  const fromRight = index % 2 === 0;

  return (
    <motion.div
      className={`motion-block ${className}`}
      initial={{
        opacity: 0,
        x: fromRight ? 86 : -86,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: false, amount: 0.34 }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="document-page">
      <section className="opening" aria-labelledby="main-title">
        <motion.h1
          id="main-title"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          ADICTOS AL PROGRESO
        </motion.h1>
      </section>

      <section className="reading-flow" aria-label="Texto principal">
        {blocks.map((block, index) => (
          <AnimatedBlock
            key={`${block.kind}-${index}`}
            index={index}
            className={`block-${block.kind}`}
          >
            {block.kind === "paragraph" && <p>{block.text}</p>}
            {block.kind === "quote" && <blockquote>{block.text}</blockquote>}
            {block.kind === "highlight" && <p className="highlight">{block.text}</p>}
            {block.kind === "caption" && <p className="image-caption">{block.text}</p>}
            {block.kind === "note" && <p className="note">{block.text}</p>}
            {block.kind === "image" && (
              <SmartImage name={block.name} alt={block.alt} className="single-image" />
            )}
            {block.kind === "imageRow" && (
              <div className="image-row">
                {block.images.map((image) => (
                  <SmartImage key={image.name} name={image.name} alt={image.alt} />
                ))}
              </div>
            )}
          </AnimatedBlock>
        ))}
      </section>

      <motion.section
        className="final-action"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link className="chad-button" href="/chad" prefetch>
          VAvaVaBAva Awb, awb
        </Link>
      </motion.section>
    </main>
  );
}

import React, { useEffect } from "react";
import logoD from "../../assets/img/logo.png";
import creerProjet from "../../assets/img/creerProjet.png";
import ScrollReveal from "scrollreveal";
import { Link, useNavigate } from "react-router-dom";

const Presentation = () => {
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-presentation", {
      deley: 100,
      origin: "left",
      interval: 300,
    });
  }, []);
  const navigate = useNavigate();
  const redirectionPage = (e, section, url) => {
    e.preventDefault();
    navigate(url, { state: { scrollTo: section } });
  };
  return (
    <div className="px-8 md:px-[10rem] grid md:grid-cols-2 gap-y-4 gap-x-4 md:gap-y-[5rem]">
      <div>
        <h1
          className="text-[40px] font-bold text-center md:text-start"
          id="slide-presentation"
        >
          Pourquoi ce projet ?
        </h1>
        <div className="w-[30%] h-[0.5rem] rounded-full bg-bleuRoi my-6"></div>
        <div
          className="flex items-center justify-center md:block"
          id="slide-presentation"
        >
          <img src={creerProjet} width={270} alt="" srcset="" />
        </div>
      </div>

      <div id="slide-presentation">
        A travers son université, Fianarantsoa est le leader naturel en
        numérique à Madagascar. Toutefois, très peu d'entreprises sont créées
        dans ce domaine, plus particulièrement dans le domaine de la finance
        numérique et de celui de l’Intelligence artificielle.
        <br />
        <br />
        Partant de ce constat, une petite équipe formée d’enseignants et
        d'étudiants à l'université s’est penché sur ce projet afin de créer une
        plateforme qui offre des formations en finance et en informatique.
        L’objectif n’est pas de compléter les formations à l’université ni de
        les concurrencer, mais d’offrir la possibilité à nos jeunes de
        transformer leurs compétences scientifiques ou techniques en
        opportunités d’affaires. Digithèque se tâche également de créer un
        réseau de professionnels et de mise en relation d’opportunités pour les
        jeunes certifiés par nos formations à étendre leurs réseaux.
      </div>

      <br className="block md:hidden" />
      <br className="block md:hidden" />
      <br className="block md:hidden" />

      <div>
        <h1
          className="text-[30px] font-bold text-center md:text-start"
          id="slide-presentation"
        >
          Pourquoi l’appelle-t-on
          <br /> Digitheque ?
        </h1>
        <div
          className="w-[30%] h-[0.5rem] rounded-full bg-bleuRoi my-6"
          id="slide-presentation"
        ></div>

        <div
          className="flex items-center justify-center md:block"
          id="slide-presentation"
        >
          <img src={logoD} width={300} alt="" srcset="" />
        </div>
      </div>

      <div id="slide-presentation">
        Une <strong>Digithèque</strong> est une banque de ressources numériques
        éducatives. Elle désigne un lieu physique ou virtuel qui donne accès à
        un ensemble d’outils numériques pour favoriser l’apprentissage en
        autonomie et renforcer les compétences en numérique. On peut faire
        référence à la bibliothèque qui dispose d’un ensemble de livres et de
        documents pour favoriser l’apprentissage et améliorer la culture de ses
        usagers ou à la médiathèque qui offre un ensemble d’outils en média pour
        les mêmes raisons.
        <br />
        <br />
        La digithèque Andrainjato dispose de plusieurs outils en numérique comme
        les ordinateurs, les Rasberry etc. Elle se spécialise plus
        particulièrement dans le domaine de l’informatique, de la finance
        numérique et de l'intelligence artificielle. Elle est également dotée
        d’applications en gestion de portefeuilles en analyse de risques et
        d’autres simulations en finance. D’autres applications en Intelligence
        artificielle générative, applications pour apprendre des langues
        étrangères etc sont également installées sur les machines de digithèque
        Andrainjato.
      </div>

      <br className="block md:hidden" />
      <br className="block md:hidden" />
      <br className="block md:hidden" />

      <div>
        <h1
          className="text-[40px] font-bold text-center md:text-start"
          id="slide-presentation"
        >
          Quel est l’intérêt <br />
          <span className="text-gray-500 text-[25px]">
            de rejoindre Digithèque{" "}
          </span>{" "}
          ?
        </h1>
        <div
          className="w-[30%] h-[0.5rem] rounded-full bg-bleuRoi my-6"
          id="slide-presentation"
        ></div>
      </div>

      <div id="slide-presentation">
        La digithèque Andrainjato se caractérise par la compétence de son équipe
        pédagogique et de ses connaissances du marché international dans son
        domaine d’intervention. L’une des priorités de la Digithèque priorités
        est l’accompagnement des jeunes afin que ceux-ci connaissent les
        opportunités dans leurs domaines de spécialisation et qu’ils aient les
        capacités de se positionner sur le marché.
      </div>

      <br className="block md:hidden" />
      <br className="block md:hidden" />
      <br className="block md:hidden" />

      <div>
        <h1
          className="text-[40px] font-bold text-center md:text-start"
          id="slide-presentation"
        >
          Comment bénéficier <br />
          <span className="text-gray-500 text-[25px]">
            de ces opportunités ?{" "}
          </span>{" "}
          ?
        </h1>
        <div
          className="w-[30%] h-[0.5rem] rounded-full bg-bleuRoi my-6"
          id="slide-presentation"
        ></div>
      </div>

      <div id="slide-presentation">
        <li className="text-bleuRoi font-bold"> Formations certifiantes</li>
        <p>
          Nous proposons en priorité aux jeunes de suivre des formations
          certifiantes en finance numérique, en informatique ou en intelligence
          artificielle. Ces formations sont très exigeantes et nécessitent un
          background solide en mathématiques et informatiques. Ces formations
          s’adressent à des jeunes diplômés à des professionnels ou à des
          personnes désireuses d’acquérir des compétences techniques dans ces
          domaines.{" "}
          <Link
            to="#"
            onClick={(e) =>
              redirectionPage(e, "pres-formation", "/site/formation-digital")
            }
            className="text-blue-500 underline cursor-pointer hover:text-blue-700"
          >
            plus d'information
          </Link>
        </p>
        <li className="text-bleuRoi mt-4 font-bold"> Formations en autonomie</li>
        <p>
          Nous ouvrons également notre site aux personnes qui souhaitent
          travailler en autonomie. Avec un abonnement auprès de la Digithèque
          Andrainjato, nos outils sont à vos dispositions dont les applications
          et logiciels installées dans non machines.
          <Link
            to="/site/digitheque"
            className="text-blue-500 underline cursor-pointer hover:text-blue-700"
          >
            plus d'information
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Presentation;

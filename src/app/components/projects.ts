import { Injectable } from '@angular/core';
import {ProjectInfo} from './projectinfo';

@Injectable({
  providedIn: 'root',
})
export class Projects {
  readonly baseUrl = '../assets/screenshots';
  projectList: ProjectInfo[] = [
    {
      id: 0,
      name: "Run Glowry",
      presentation:
      [
        "“Votre mission, si vous l’acceptez, sera d’aller toujours plus vite, d’utiliser votre drone à bon escient pour déjouer les obstacles devant vous, et surtout de battre les scores de vos amis dans un jeu inspiré de Ghost Runner.”", 
        "Run Glowry est un jeu de plateformes disponible sur PC, développé par une équipe composée de cinq artistes, trois développeurs, un game designer et deux sound designers."
      ],
      languages: 
      [
        "Unreal Engine 4", 
        "C++", 
        "Blueprints"
      ],
      contribution:
      [
        "User Interface", 
        "Système de sauvegarde (progression et paramètres)", 
        "Wallrun", 
        "Checkpoints", 
        "Level Streaming"
      ], 
      icon: `${this.baseUrl}/RunGlowry_0.png`,
      photos: 
      [
        `${this.baseUrl}/RunGlowry_1.png`,
        `${this.baseUrl}/RunGlowry_2.png`,
        `${this.baseUrl}/RunGlowry_3.png`,
        `${this.baseUrl}/RunGlowry_4.png`,
        `${this.baseUrl}/RunGlowry_5.png`,
        `${this.baseUrl}/RunGlowry_6.png`,
      ],
      exe: "https://drive.google.com/file/d/1wjwE_u0fTCCdGhgsCd0InJM7VNnAR5_f/view?usp=sharing"
    },
    {
      id: 1,
      name: "Scenarium",
      presentation:
      [
        "Cette application est conçue à destination des joueurs de jeu de rôle (type Donjons et Dragons). Elle permet la centralisation de toutes les données liés à leur univers de jeu, telles que le nom des joueurs, les mondes, les statistiques des personnages, etc.", 
        "Projet mené sur le long terme en équipe variable (participation personnelle sur un an)."
      ],
      languages: 
      [
        "Javascript", 
        "HTML/CSS",
        "VueJS",
        "Express",
        "MySQL"
      ],
      icon:`${this.baseUrl}/Scenarium_0.png`,
      photos: 
      [
        `${this.baseUrl}/Scenarium_1.png`,
        `${this.baseUrl}/Scenarium_2.png`
      ]
    },
    {
      id: 2,
      name: "Module NormSaas",
      presentation:
      [
        "Ce projet développé au sein de l'entreprise NORMAD1 est un client léger de traitement de fichiers d’adresses postales. Il permet de réaliser des traitements RNVP (Restructuration, Normalisation et Validation postale) en mode SaaS (Software As A Service) : analyse, détection et correction si possible des erreurs d’une adresse conformément à la norme postale en vigueur."
      ],
      languages: 
      [
        "Javacript", 
        "HTML/CSS",
        "PHP",
        "MySQL"
      ],
      icon:`${this.baseUrl}/NSaas_0.png`,
      photos: 
      [
        `${this.baseUrl}/NSaas_1.png`,
        `${this.baseUrl}/NSaas_2.png`,
        `${this.baseUrl}/NSaas_3.png`
      ]
    },
    {
      id: 3,
      name: "Doodle Clone",
      presentation:
      [
        "Doodle Clone est un jeu de plateformes en 2D développé en solo.", 
        "Basé sur le jeu “Doodle Jump”, cette version inclut l’ajout d’une ombre reproduisant exactement les mouvements du joueur, à l’image de l’ombre de Mario dans Mario Galaxy. L’ombre ne doit pas toucher le joueur, ou c’est un game over."
      ],
      languages: 
      [
        "C#", 
        "Unity"
      ],
      icon:`${this.baseUrl}/DoodleClone_1.png`,
      photos: 
      [
        `${this.baseUrl}/DoodleClone_1.png`,
        `${this.baseUrl}/DoodleClone_2.png`
      ],
      code: "https://github.com/Peaulhynes/DoodleClone",
      exe: "https://drive.google.com/file/d/1zuyNyUdwVwjUla-1PIQrt_ymu6NxYZdG/view?usp=sharing"
    },
    {
      id: 4,
      name: "Mad Forest",
      presentation:
      [
        "Mad Forest est un jeu de plateformes en 2D sur PC, développé par une équipe de deux développeurs.", 
        "Le jeu reprend une partie des mécaniques phares des jeux Mario en 2D : plateformes, ennemis à tuer en sautant dessus, pièces, drapeau de fin de niveau."
      ],
      languages: 
      [
        "C++", 
        "SFML"
      ],
      contribution:
      [
        "Création du moteur de jeu", 
        "Gestion des assets",
        "Sélecteur de niveau",
        "User Interface",
        "Récupération de collectionnables",
      ], 
      icon:`${this.baseUrl}/MadForest_1.png`,
      photos: 
      [
        `${this.baseUrl}/MadForest_1.png`,
        `${this.baseUrl}/MadForest_2.png`
      ],
      code: "https://github.com/Peaulhynes/MarioSFML",
      exe: "https://drive.google.com/file/d/1eVCkaDcFG67tRsOmWQMKnIC-JJwwytP8/view?usp=sharing"
    },
    {
      id: 5,
      name: "Ze Orbitale Nation Escape",
      presentation:
      [
        "“Entouré d'une bulle de protection de plus en plus petite, vous devrez ramasser suffisamment de combustible pour repartir de la planète radioactive où vous êtes coincé. Attention, les aliens ne vous laisseront sûrement pas récolter tranquillement sans rien faire.”", 
        "ZONE est un jeu survival sur PC développé par une équipe de quatre artistes, trois développeurs et un game designer, pendant une Game Jam de 72h sur le thème “Limited Space”."
      ],
      languages: 
      [
        "Unreal Engine 4", 
        "C++", 
        "Blueprints"
      ],
      contribution:
      [
        "User Interface", 
        "Système de score", 
        "Récolte de collectionnables"
      ], 
      icon: `${this.baseUrl}/ZONE_0.png`,
      photos: 
      [
        `${this.baseUrl}/ZONE_1.png`,
        `${this.baseUrl}/ZONE_2.png`,
        `${this.baseUrl}/ZONE_3.png`
      ],
      exe: "https://drive.google.com/file/d/1yurQtzcP12uqgUZFB6dnssnvvkR06WyU/view?usp=sharing",
      code: "https://drive.google.com/file/d/1TZuDVbcjtA8NMNLYmI28YMzAd_sCSPXE/view?usp=sharing"
    },
    {
      id: 6,
      name: "Big Sword of the Hell",
      presentation:
      [
        "“Tout est arme. Vos ennemis sont des armes, vous êtes une arme. Votre but : éliminer vos ennemis et passer le plus de vagues possible sans tomber au combat.”", 
        "BSOTH est un jeu sur PC de type Beat Them All développé par une équipe de trois artistes et deux développeurs, pendant une Game Jam de 48h sur le thème “Tout est arme”."
      ],
      languages: 
      [
        "Unreal Engine 4", 
        "C++", 
        "Blueprints"
      ],
      contribution:
      [
        "Système de combat et de vagues d'ennemis", 
        "Mise en place d'un tutoriel"
      ], 
      icon:`${this.baseUrl}/BSOTH_0.png`,
      photos: 
      [
        `${this.baseUrl}/BSOTH_1.png`,
        `${this.baseUrl}/BSOTH_2.png`,
        `${this.baseUrl}/BSOTH_3.png`,
        `${this.baseUrl}/BSOTH_4.png`
      ],
      exe: "https://drive.google.com/file/d/1l1DEjYfTqgL9HHWFcbwQ-H7xlebV3z7Y/view?usp=sharing"
    },
    {
      id: 7,
      name: "Défense de fuir",
      presentation:
      [
        "“Vous incarnez un personnage à toutes les périodes de sa vie, dans des environnements de plus en plus grands, avec pour seul but … de sortir.”", 
        "Défense de fuir est un jeu de type puzzle en 2D développé en équipe de cinq développeurs, pendant la Jamming Assembly 2019 sur le thème “Spacieux”."
      ],
      contribution:
      [
        "Création d'assets 2D",
        "Gestion des collisions"
      ], 
      languages: 
      [
        "LUA", 
        "LÖVE"
      ],
      icon:`${this.baseUrl}/DDF_1.png`,
      photos: 
      [
        `${this.baseUrl}/DDF_1.png`,
        `${this.baseUrl}/DDF_2.png`,
        `${this.baseUrl}/DDF_3.png`
      ],
      code: "https://framagit.org/prouby/defense-de-fuir"
    },
    {
      id: 8,
      name: "L'accessibilité dans les jeux vidéo",
      presentation:
      [
        "Ce document présente les différents types de handicap majeurs (visuel, auditif, moteur, cognitif), et dépeint une analyse sociale, législative et économique de la question du handicap dans les jeux vidéo. Des solutions logicielles adaptées aux types de handicaps les plus courants sont ensuite proposées."
      ],
      icon:`${this.baseUrl}/Memoire_1.png`,
      photos: 
      [
        `${this.baseUrl}/Memoire_1.png`,
        `${this.baseUrl}/Memoire_2.png`,
        `${this.baseUrl}/Memoire_3.png`
      ],
      exe: "../../../assets/documents/PreMemoire_PaulineWargny.pdf"
    },
    
  ];
  getAllProjects(): ProjectInfo[] {
    return this.projectList;
  }
  getProjectById(id: number): ProjectInfo | undefined {
    return this.projectList.find((project) => project.id === id);
  }
}

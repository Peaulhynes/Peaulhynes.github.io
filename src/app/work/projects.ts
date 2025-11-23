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
      photos: 
      [
        `${this.baseUrl}/RunGlowry_0.png`,
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
      photos: 
      [
        `${this.baseUrl}/ZONE_0.png`,
        `${this.baseUrl}/ZONE_1.png`,
        `${this.baseUrl}/ZONE_2.png`,
        `${this.baseUrl}/ZONE_3.png`
      ],
      exe: "https://drive.google.com/file/d/1yurQtzcP12uqgUZFB6dnssnvvkR06WyU/view?usp=sharing",
      code: "https://drive.google.com/file/d/1TZuDVbcjtA8NMNLYmI28YMzAd_sCSPXE/view?usp=sharing"
    },
    
    
  ];
  getAllProjects(): ProjectInfo[] {
    return this.projectList;
  }
  
}

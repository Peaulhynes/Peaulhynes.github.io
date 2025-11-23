import { Injectable } from '@angular/core';
import {ProjectInfo} from './projectinfo';

@Injectable({
  providedIn: 'root',
})
export class Projects {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  projectList: ProjectInfo[] = [
    {
      id: 0,
      name: "RUN GLOWRY",
      presentation: [
        "Votre mission, si vous l’acceptez, sera d’aller toujours plus vite, d’utiliser votre drone à bon escient pour déjouer les obstacles devant vous, et surtout de battre les scores de vos amis dans un jeu inspiré de Ghost Runner.", 
        "Run Glowry est un jeu de plateformes disponible sur PC, développé par une équipe composée de cinq artistes, trois développeurs, un game designer et deux sound designers."
      ],
      languages: [],
      contribution:["pouet"], 
      photos: ["test"],
      exe: "test",
      code: "test"
    },
    
  ];
  getAllProjects(): ProjectInfo[] {
    return this.projectList;
  }
  getProjectById(id: number): ProjectInfo | undefined {
    return this.projectList.find((ProjectInfo) => ProjectInfo.id === id);
  }
  
}

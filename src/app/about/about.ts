import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
     <section class="section-about">
    <div class="presentation">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 about">
            <img src="assets/photo.jpg" class="photo">
          </div>
          <div class="col-lg-7">
            <p>Je suis Pauline Wargny, développeuse logiciel et jeu vidéo de 25 ans.</p>
            <p>Depuis toute petite les jeux vidéo comblent mon temps libre. Toujours très curieuse de comprendre
              comment ils fonctionnent et peuvent être améliorés, ce sont eux qui m’ont mis sur le chemin du
              développement.
              Cette curiosité m’a amenée à me diversifier dans mes compétences, que ce soit en développement logiciel,
              jeu vidéo,
              ou même web comme le montre ce portfolio.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="center">
      <div class="line"></div>
    </div>

    <div class="heading1">
      <h2>COMPETENCES</h2>
      <div class="sub-heading">
        <h3>LANGAGES</h3>
        <h3>TECHNOLOGIES</h3>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-7 skills">
          <div data-aos="zoom-in" data-aos-once="true">
            <p class="competences-title">Systèmes d'exploitation</p>
            <div class="competences">
              <div class="langage">
                <abbr title="Windows">
                  <img src="assets/logo/logo_windows.png">
                </abbr>
              </div>
              <div class="langage">
                <abbr title="Linux">
                  <img src="assets/logo/logo_linux.png">
                </abbr>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-once="true">
            <p class="competences-title">Langages</p>
            <div class="competences">
              <div class="langage">
                <abbr title="C">
                  <img src="assets/logo/logo_c.png">
                </abbr>
              </div>
              <div class="langage">
                <abbr title="C++">
                  <img src="assets/logo/logo_c++.png">
                </abbr>
              </div>
              <div class="langage">
                <abbr title="C#">
                  <img src="assets/logo/logo_cs.png">
                </abbr>
              </div>
              <div class="langage">
                <abbr title="Python">
                  <img src="assets/logo/logo_python.png">
                </abbr>
              </div>
              <div class="langage">
                <abbr title="HTML">
                  <img src="assets/logo/logo_html.png">
                </abbr>
              </div>
              <div class="langage">
                <abbr title="Javascript">
                  <img src="assets/logo/logo_js.png">
                </abbr>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-once="true">
            <p class="competences-title">Moteurs de jeu</p>
            <div class="competences">
              <div class="langage">
                <abbr title="Unreal Engine 4">
                  <img src="assets/logo/logo_unreal.png">
                </abbr>
              </div>
              <div class="langage">
                <abbr title="Unity">
                  <img src="assets/logo/logo_unity.png">
                </abbr>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 cv" data-aos="zoom-in" data-aos-once="true">
          <img src="assets/cv.png" class="photo">
          <button class="raise"><a href="CV_Pauline_Wargny.pdf" target="_blank"><img class='logo-windows'
                src="assets/download.png">CV</a></button>
        </div>
      </div>
    </div>
  </section>
  `,
  styleUrls: ["about.css"],
})
export class About {
  route: ActivatedRoute = inject(ActivatedRoute);
}

import {Component, input} from '@angular/core';
import {ProjectInfo} from '../projectinfo';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projectpresentation',
  imports: [RouterLink],
  template: `
    <div class="item" data-bs-toggle="modal" data-bs-target="#popup-notitleyet" data-aos="zoom-in" data-aos-once="true">
      <figure class="projectimage" style="background-image:url('{{ projectPresentation().photos[0] }}')">
        <figcaption>{{ projectPresentation().name }}</figcaption>
      </figure>
    </div>

    <div class="modal fade">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="modal-button" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <h1>{{ projectPresentation().name }}</h1>
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="description">
                    <h3>Présentation</h3>
                    @for(projectPresentationLine of projectPresentation().presentation; track $index) {
                      <p>{{ projectPresentationLine }}</p>
                    }
                    <br>

                    @if(projectPresentation().contribution){
                      <h3>Contribution personnelle</h3>
                      <ul>
                      @for(projectPresentationContribution of projectPresentation().contribution; track $index) {
                        <li>{{ projectPresentationContribution }}</li>
                      }
                      </ul>
                    }
                  
                    <div class="liste-langages">

                      @for(projectPresentationLanguage of projectPresentation().languages; track $index) {
                        <div class="langage-encadre">{{ projectPresentationLanguage }}</div>
                      }
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                    <div class="carousel-inner">

                      @for(projectPresentationPhoto of projectPresentation().photos; track $index) {
                        <div class="carousel-item active">
                        <img src="{{ projectPresentationPhoto }}" class="d-block w-100" alt="...">
                        </div>
                      }
                    </div>

                  <div id="carousel-notitle" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-notitle"
                      data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-notitle"
                      data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>


                    <div class="carousel-indicators">

                      @for(projectPresentationPhoto of projectPresentation().photos; track $index) {
                        <button type="button" data-bs-target="#carousel-notitle" class="active"
                        aria-current="true" aria-label="Slide {{ $index }}"></button>
                      }
                    </div>
                  </div>
                </div>
              </div>

              @if(projectPresentation().code){
                <button class="raise"><a href="{{projectPresentation().code}}" target="_blank">Code</a></button>
              }

              @if(projectPresentation().exe){
                <button class="raise"><a href="{{projectPresentation().exe}}" target="_blank">Download</a></button>
              }
              
            </div>
          </div>
        </div>
      </div>
  `,
  styleUrls: ['./projectpresentation.css'],
})
export class ProjectPresentation {
  projectPresentation = input.required<ProjectInfo>();
}
  

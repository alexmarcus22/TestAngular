import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ToastrModule} from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InformationComponent } from './components/information/information.component';
import { InformationModalComponent } from './components/information/information-modal/information-modal.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { PersoaneComponent } from './components/confirm-dialog/persoane/persoane.component';
import { PersoanaComponent } from './components/persoana/persoana.component';
import { MasinaComponent } from './components/masina/masina.component';
import { MasinaModalComponent } from './components/masina/masina-modal/masina-modal.component';
import { PersoanaModalComponent } from './components/persoana/persoana-modal/persoana-modal.component';
import { FilterCarsPipe } from './filter-cars.pipe';
import { FilterTablePipe } from './filter-table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationComponent,
    InformationModalComponent,
    ConfirmDialogComponent,
    MasinaComponent,
    PersoaneComponent,
    PersoanaComponent,
    MasinaComponent,
    MasinaModalComponent,
    PersoanaModalComponent,
    FilterCarsPipe,
    FilterTablePipe,
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbModule,
    NgSelectModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    MatTooltipModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut: 3000,
      extendedTimeOut: 3000,
      progressBar: true,
      closeButton: true,
      enableHtml: true
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: { disableTooltipInteractivity: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }

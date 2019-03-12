import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { AddWordComponent } from './components/add-word/add-word.component';
import { SeeWordComponent } from './components/see-word/see-word.component';
import { HttpRequestComponent } from './components/http-request/http-request.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { InputComponent } from './components/input/input.component';
import { RadioComponent } from './components/radio/radio.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ChipsComponent } from './components/chips/chips.component';
import { IconComponent } from './components/icon/icon.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { BottomSheetOverviewComponent } from './components/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { UppercaseDirective } from './directivas/uppercase.directive';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { RowHoverDirective } from './directivas/row-hover.directive';

@NgModule({
  // declaramos todos los componentes q usaremos
  declarations: [
    AppComponent,
    ButtonComponent,
    AutocompleteComponent,
    AddWordComponent,
    SeeWordComponent,
    HttpRequestComponent,
    CheckboxComponent,
    DatepickerComponent,
    InputComponent,
    RadioComponent,
    BadgeComponent,
    ChipsComponent,
    IconComponent,
    BottomSheetComponent,
    BottomSheetOverviewComponent,
    DialogComponent,
    SnackbarComponent,
    UppercaseDirective,
    SelectComponent,
    TableComponent,
    RowHoverDirective
  ],
  // importamos todos los modulos los cuales necesitaremos
  imports: [
    // Para integrar con angular firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // Para el ejemplo de la nube de palabras
    TagCloudModule,
    // Modulo que permite el manejo de formularios
    FormsModule,
    // Modulo que permite realizar peticiones sobre http
    HttpClientModule,
    // el modulo donde definimos nuestra rutas(es mejor mantenerlas por separado)
    AppRoutingModule,
    // Modulo que permite el manejo de formulario reactivos
    ReactiveFormsModule,
    // Modulo que permite animations en Angular material
    BrowserAnimationsModule,
    // Configuracion básica para el Date de Angular Material
    MatNativeDateModule,
    // Modulo que permite cargar todos los modulos de Angular Material
    MaterialModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    BottomSheetOverviewComponent
  ]
})
export class AppModule { }

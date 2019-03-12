import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ButtonComponent } from './components/button/button.component';
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
import { DialogComponent } from './components/dialog/dialog.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';

// Rutas del proyecto
// cata ruta se define mediante la palabra path
// una vez q la url haga un match con el path
// entonces redenrizara el componente asignado en la propiedad component

const routes: Routes = [
  {
    path: 'autocomplete-material', component: AutocompleteComponent
  },
  {
    path: 'button-material', component: ButtonComponent
  },
  {
    path: 'add-words', component: AddWordComponent
  },
  {
    path: 'see-words', component: SeeWordComponent
  },
  {
    path: 'http-request', component: HttpRequestComponent
  },
  {
    path: 'checkbox-material', component: CheckboxComponent
  },
  {
    path: 'datepicker-material', component: DatepickerComponent
  },
  {
    path: 'input-material', component: InputComponent
  },
  {
    path: 'radio-material', component: RadioComponent
  },
  {
    path: 'badge-material', component: BadgeComponent
  },
  {
    path: 'chips-material', component: ChipsComponent
  },
  {
    path: 'icon-material', component: IconComponent
  },
  {
    path: 'bottom-sheet-material', component: BottomSheetComponent
  },
  {
    path: 'dialog-material', component: DialogComponent
  },
  {
    path: 'snackbar-material', component: SnackbarComponent
  },
  {
    path: 'select-material', component: SelectComponent
  },
  {
    path: 'table-material', component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

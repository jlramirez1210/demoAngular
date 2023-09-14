import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Formulario3Component } from './formulario3/formulario3.component';
import { ChildrenComponent } from './children/children.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
  {
    path:'form1',
    component: FormularioComponent
  },
  {
    path: 'form2', //form2/phone
    component: Formulario2Component,
    children:[
      {
        path: 'contador',
        component: ContadorComponent
      }
    ]
  },
  {
    path: 'form3',
    component: Formulario3Component
  },
  {
    path: 'message',
    component: AddMessagesComponent
  },
  {
    path: 'message/:message',
    component: ListMessagesComponent
  },
  {
    path: '', //
    redirectTo: '/form1',
    pathMatch:'full'
  },
  {
    path: '**', //cualquier otra pagina
    component: BuclesComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    Formulario3Component,
    ChildrenComponent,
    AddMessagesComponent,
    ListMessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) //enrutador principal
  ],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppRoutingModule { }

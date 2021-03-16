import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharDetailsComponent } from './components/char-details/char-details.component';
import { CharEditorComponent } from './components/char-editor/char-editor.component';
import { FormComponent } from './components/form/form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TableComponent } from './components/table/table.component';


const routes: Routes = [{path:'addChar', component: FormComponent},
{path:'charEditor/:id',component: CharEditorComponent},
{path:'charList',component: TableComponent},
{path:'details/:id', component: CharDetailsComponent},
{path:'', redirectTo:'charList', pathMatch:'full'},
{path:'**', component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

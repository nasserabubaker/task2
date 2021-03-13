import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentServes } from './student/student.service';
import { newForm } from './new-form/new-form.component';
import { EditForm } from './edit-form/edit-form.component';
import { ListItem } from './list-item/list-item.component';
import { List } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteForm } from './delete-form/delete-form.component';


@NgModule({
  declarations: [
    AppComponent,
    List,
    ListItem,
    EditForm,
    newForm,
    DeleteForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StudentServes],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Person } from './Person';
import { ComponentTwoComponent } from './component-two/component-two.component';


@Injectable({
  providedIn: 'root'
})
export class PersonService{

  constructor(private component: ComponentTwoComponent) { }

  getPerson() {
    return ["Roald", "Dahl"];
  }

}

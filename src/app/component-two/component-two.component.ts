import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../Person';


@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
  person: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.person = this.personService.getPerson();
  }

}

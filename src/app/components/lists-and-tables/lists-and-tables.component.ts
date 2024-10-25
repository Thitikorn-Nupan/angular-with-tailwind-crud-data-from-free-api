import {Component, OnInit} from '@angular/core';
import {Actor} from "../../entities/actor";

@Component({
  selector: 'app-lists-and-tables',
  templateUrl: './lists-and-tables.component.html',
  styleUrl: './lists-and-tables.component.css'
})
export class ListsAndTablesComponent implements OnInit{

  protected declare actors : Actor[]

  protected option : string = ""

  ngOnInit(): void {
    this.actors = []
    this.actors.push({id : 1, fullname : "Jhon", image : "https://i.imgur.com/LDOO4Qs.jpg",followers:955000})
    this.actors.push({id : 2, fullname : "Maria", image : "https://i.imgur.com/DTfowdu.jpg",followers:995000})
    this.actors.push({id : 3, fullname : "Admin", image : "https://i.imgur.com/yhW6Yw1.jpg",followers:915000})
  }

  protected onOptionClicked(option : string) {
    this.option = option
  }
}

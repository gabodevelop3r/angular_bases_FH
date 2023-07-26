import { Component, EventEmitter, Input, Output } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public  characterList: Character[]= [
    {
      id: uuidv4(),
      name: 'Trunks',
      power: 1000
    }
  ]

  // onDelete = index value : number
  @Output()
  public onDelete: EventEmitter < string > = new EventEmitter()

  onDeleteCharacter( id?: string): void {

    if ( !id ) return
    this.onDelete.emit( id )

  }

}

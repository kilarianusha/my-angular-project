import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isCollapsed = false;
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }
  
  onSelect(feature :string){
    this.featureSelected.emit(feature);
    

    }
    onMenuClick(){

    }
  }


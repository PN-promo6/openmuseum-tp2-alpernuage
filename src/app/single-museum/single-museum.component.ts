import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Museum } from '../models/museum/museum';

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})
export class SingleMuseumComponent implements OnInit {
  // museum: Museum;
  @Input() museum: Museum;
  // @Input() museumRef: string;
  // @Input() museumName: string;
  // @Input() museumAdress: string;
  // @Input() museumZipCode: string;
  // @Input() museumCity: string;
  // @Input() museumPhone: string;
  // @Input() museumWebSite: string;
  // @Input() museumOpening: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}

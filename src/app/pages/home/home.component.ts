import { Component, OnInit } from '@angular/core';
import { noticiasJogos, newsType } from 'src/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: newsType[] = [...noticiasJogos]
  constructor() { }

  ngOnInit(): void {
  }

}

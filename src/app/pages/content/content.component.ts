import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { noticiasJogos } from '../../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0'

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => this.id = value.get('id'))

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const news = noticiasJogos.find(news => news.id.toString() === id)

    if (news) {
      this.photoCover = news.image;
      this.contentTitle = news.title;
      this.contentDescription = news.description;
    }
  }

}

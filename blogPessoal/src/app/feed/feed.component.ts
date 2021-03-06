import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  nome: String = localStorage.getItem('nome');

  key = 'data';
  reverse = true;

  listaPostagens: Postagem[]
  postagem: Postagem = new Postagem
  alerta: boolean = false;

  titulo: string;

  exemploTag: string = 'post1';
  numLike: number = 0;
  postLike: string[];

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {

    this.findAllPostagens();

    let item: string = localStorage.getItem('delOk');

    if (item == "true") {
      this.alerta = true
      localStorage.removeItem('delOk');
    }

    window.scroll(0, 0);
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    })
  }

  publicar() {
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      location.assign('/feed')
    })
  }

  pesquisarTitle() {
    this.postagemService.findByTitulo(this.titulo).subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }
}
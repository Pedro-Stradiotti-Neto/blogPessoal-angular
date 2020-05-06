import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  /* CRUD - Create (POST), Read (GET), Update (PUT) e Delete (DELETE) */

  getAllPostagens() {
    return this.http.get('http://31.220.57.14:8080/postagens')
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://31.220.57.14:8080/postagens', postagem)
  }

  putPostagem(postagem: Postagem) {
    return this.http.put('http://31.220.57.14:8080/postagens', postagem)
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://31.220.57.14:8080/postagens/${id}`)
  }

}

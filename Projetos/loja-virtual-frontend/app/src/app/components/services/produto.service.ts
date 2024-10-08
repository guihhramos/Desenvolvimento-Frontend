import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  public baseUrl: string = "http://localhost:8080/produtos";
  constructor(private http: HttpClient) {}

  public buscarProdutos(): Observable<any[]> {
   return this.http.get<any[]>(this.baseUrl)
  }
}



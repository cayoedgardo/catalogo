import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable()

export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;


  //http cliente para realizar peticiones archivos res server externo etc
  constructor( private http: HttpClient) { 

  

    //Leer el json
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) =>{

        this.cargada = true;
        this.info = resp;
        console.log(resp);
        //en caso de mostrar solo un parametro
        //console.log( resp['facebook'])
      });
  }

}

import { Turniej } from './turniej.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TurniejService {

  private listaTurniejow: Turniej[] =
  [
      {
          id: 1,
          name: 'Pierwszy Turniej',
          opis: 'Opis Turnieju blabla',
          miasto: 'Wroclaw',
          nrkonta:'111111111111111111',
          wpisowe:'90',
          kategoria:'Gi',
          dataturnieju: new Date('10/25/1988'),
          datakonca: new Date('11/10/1999')
          
          },
          {
          id: 2,
          name: 'Drugi Turniej',
          opis: 'Opis Turnieju blabla',
          miasto: 'Jaroszow',
          nrkonta:'3333333333333333',
          wpisowe:'70',
          kategoria: 'No Gi',
          dataturnieju: new Date('11/20/1979'),
          datakonca: new Date('11/10/1999')
          
          },
          {
          id: 3,
          name: 'Trzeci Turniej',
          opis: 'Opis Turnieju blabla',
          miasto: 'Warszawa',
          nrkonta:'222222222222222',
          wpisowe:'50',
          kategoria:'Gi oraz No Gi',
          dataturnieju: new Date('11/10/1999'),
          datakonca: new Date('11/10/1999')
         
            }
  ];
  getTurnieje(): Turniej[]{
      return this.listaTurniejow;
  }

  save(turniej: Turniej){
      this.listaTurniejow.push(turniej);
  }

}

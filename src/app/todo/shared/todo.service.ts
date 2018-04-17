import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TodoService {
  /* al ser del tipo AngularFireList puede traer, pushear, etc a firebase */
  toDoList: AngularFireList<any>;

  /* inyecta en el constructor AngularFireDatabase */
  constructor(private firebasedb: AngularFireDatabase) { }

  /* para poder obtener todos los items de la base de datos usa esta funcion */
  getToDoList() {
    /* en todo.component.ts en ngOnInit utiliza este metodo para traer la data
    al pasarle titles a list, cuando guarda un item, la lista en firebase comienza con titles */
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

  addTitle(title: string) {
    /* pushea a firebase */
    this.toDoList.push({
      title: title,
      isChecked: false
    });
  }

  checkOrUncheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, { isChecked: flag });
  }

  removeTitle($key: string) {
    this.toDoList.remove($key);
  }
}

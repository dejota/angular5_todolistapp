import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  /* al declarar el servicio aca, solo tiene alcance aca y en los hijos
  para que tenga alcance global, hay que declararlo en app.module.ts */
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  /* crea variable de un array pero lo inicializa en el ngOnInit dentro del subscribe */
  toDolistArray: any[];
  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    /* devuelve AngularFirelist y hay que convertirlo en un observer para poder subscribir */
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      /* inicializa el array */
      this.toDolistArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDolistArray.push(x);
      });
    });

    // ordenar array isChecked falsos quedan arriba y abajo los que estan en true
    this.toDolistArray.sort((a,b) => {
      return a.isChecked - b.isChecked;
    });
  }

  onAdd(itemTitle) {
    /* pasa por parametro del metodo addTitle del servicio el valor del input con la referencia itemTitle */
    this.toDoService.addTitle(itemTitle.value);
    /* una vez guardado el dato, le pasa null al input asi se limpia */
    itemTitle.value = null;
  }

  alterCheck($key: string, isChecked) {
    /* si hace clic en check le cambia el valor con un update desde el servicio */
    this.toDoService.checkOrUncheckTitle($key, !isChecked);
  }

  onDelete($key: string) {
    this.toDoService.removeTitle($key);
  }

}

import { DatosService } from './../../services/datos.service';
import { CiclosService } from './../../services/ciclos.service';
import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/utils/Asignatura';
import { Ciclo } from 'src/utils/Ciclo';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignturasBuscarNombre : Asignatura[];
  asignaturasPintar: Asignatura[];
  cursoArray : Ciclo[];
  asignaturasDeDam : Asignatura[];
  asignaturasDeDaw : Asignatura[];

  constructor(private servicioAsignatura: DatosService,private servicioCiclos: CiclosService) { }

  ngOnInit(): void {
    this.asignaturasPintar = this.servicioAsignatura.getAsignaturas()
    this.cursoArray = this.servicioCiclos.getCiclos();
    this.asignaturasDeDam = this.servicioAsignatura.getAsignaturaDam();
    this.asignaturasDeDaw = this.servicioAsignatura.getAsignaturaDaw();
  }
  buscarAsignaturaNombre(nombre:string,curso:string){
    this.asignturasBuscarNombre = [];
    if(curso == "DAM"){
      this.asignaturasDeDam.forEach((Asign) =>{
        if (Asign.nombre.toLowerCase().includes(nombre.toLowerCase())){
          this.asignturasBuscarNombre.push(Asign);
        }   
      });
    }else{
      this.asignaturasDeDaw.forEach((Asign) =>{
        if (Asign.nombre.toLowerCase().includes(nombre.toLowerCase())){
          this.asignturasBuscarNombre.push(Asign);
        }   
      });
    }
  }
}
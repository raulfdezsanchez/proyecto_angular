import { CiclosService } from './../../services/ciclos.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ciclo } from 'src/utils/Ciclo';
import { DatosService } from 'src/app/services/datos.service';
import { Asignatura } from 'src/utils/Asignatura';


@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {
  @Input() ciclo: Ciclo;
  ciclosPintar: Ciclo[] = [];
  asignaturaPintarDaw: Asignatura[] = [];
  asignaturaPintarDam: Asignatura[] = []; 

  //ActivatedRouted
  numero:number;
  constructor(private gestorRutasActivas: ActivatedRoute, private servicioCiclos: CiclosService,private servicioAsignatura: DatosService) { }

  ngOnInit(): void {
    this.ciclosPintar = this.servicioCiclos.getCiclos();
    this.asignaturaPintarDam = this.servicioAsignatura.getAsignaturaDam();
    this.asignaturaPintarDaw = this.servicioAsignatura.getAsignaturaDaw();
    /*
    //console.log(this.gestorRutasActivas.snapshot.paramMap.get('id')); 
    //this.numero =  parseInt(this.getorRutasActivas.snapshot.paramMap.get('id'));
    this.gestorRutasActivas.paramMap.subscribe(param=>{
      //console.log(param.get('id'));
      this.numero = parseInt(param.get('id'));
      console.log(this.numero);
      
      switch (this.numero) {
        case 1:
        
        break;
   
        case 2:
          
        break;  
      }
        
    })
    //console.log(this.numero);
    
    //console.log(this.servicioDatos.getArrayUno());
    */
  }

}
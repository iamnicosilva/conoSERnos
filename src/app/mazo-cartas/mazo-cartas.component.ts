import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mazo-cartas',
  templateUrl: './mazo-cartas.component.html',
  styleUrls: ['./mazo-cartas.component.css']
})
export class MazoCartasComponent implements OnInit {

  csvData: any[] = [];
  sacadas: any[] = [];
  isGirada: boolean = false;
  progressValue = 0;
  interval: any;
  spinnerColor:string = '#0B5A85';
  
  constructor() {


   }

  ngOnInit(): void {
    this.loadCSV();

    
  }


  loadCSV() {
    const csvFilePath = 'assets/csv/conosernos.csv';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', csvFilePath, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const lines = xhr.responseText.split('\n');
        const headers = lines[0].split(',');
        const data = [];
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',');
          const row: any = {}; // Usamos "any" para flexibilidad en los tipos
          for (let j = 0; j < headers.length; j++) {
            const key = headers[j].trim(); // Eliminamos espacios en blanco alrededor del encabezado
            const value = values[j].trim(); // Eliminamos espacios en blanco alrededor del valor
            row[key] = value;
          }
          data.push(row);
        }
        this.csvData = data;
        // console.log('Datos del CSV cargados:', this.csvData);
      }
    };
    xhr.send();


  }

  resultadoCarta: string = '';

  obtenerCarta() {
    let random = Math.floor(Math.random() * 99);
    this.resultadoCarta = this.csvData[random].pregunta;
    this.startProgress();

  }


  girarTarjeta() {
    this.isGirada = !this.isGirada;
    if (this.isGirada) {
      this.obtenerCarta();
     };
  }

  
  startProgress() {
    this.progressValue = 0;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.progressValue += 1;
      if (this.progressValue >= 100) {
        if (this.isGirada){
          this.girarTarjeta();
        }
      }
    }, 100); // 100ms interval for 10 seconds
  }


}

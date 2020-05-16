import {Component, OnInit} from '@angular/core';
import * as Chartist from "chartist";
import {OktaAuthService} from "@okta/okta-angular";
import Swal from "sweetalert2";
import {RegistroUsuarioService} from "../../services/registro-usuario.service";

@Component({
    selector: 'app-graficas-campus-bici',
    templateUrl: './graficas-campus-bici.component.html',
    styleUrls: ['./graficas-campus-bici.component.css']
})
export class GraficasCampusBiciComponent implements OnInit {
    private lables: any;

    constructor(private authService: RegistroUsuarioService) {
    }

    ngOnInit(): void {
      this.velocidadPromedio();
      this.distanciaPromedio();
      this.tiempoPromediio();
    }


    velocidadPromedio() {

        this.authService.getRecorridos().subscribe(data => {
            console.log('Recorrido Exitoso ',  data);
            let labels  = [];
            let seriies =[];

            for (const datos of data) {
              labels.push(datos.activityDate);
              seriies.push(datos.averageVelocity);
            }

            var datawebsiteViewsChart = {
              labels,
              series: [seriies
          ]
            };
            var optionswebsiteViewsChart = {
                axisX: {
                    showGrid: false
                },
                low: 0,
                high: 100,
                chartPadding: {top: 0, right: 5, bottom: 0, left: 0}
            };
            var responsiveOptions: any[] = [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
            ];
            var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);


        }, error => {
            console.log('Error registrandose-> ', error);
        });
    }

    distanciaPromedio(){

            this.authService.getRecorridos().subscribe(data => {
            console.log('Recorrido Exitoso ',  data);
            let labels  = [];
            let seriies =[];

            for (const datos of data) {
              labels.push(datos.activityDate);
              seriies.push(datos.distance);
            }

            var datawebsiteViewsChart = {
              labels,
              series: [seriies
          ]
            };
            var optionswebsiteViewsChart = {
                axisX: {
                    showGrid: false
                },
                low: 0,
                high: 1000,
                chartPadding: {top: 0, right: 5, bottom: 0, left: 0}
            };
            var responsiveOptions: any[] = [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
            ];
            var distanceChart = new Chartist.Bar('#distanceChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);


        }, error => {
            console.log('Error registrandose-> ', error);
        });

    }

    tiempoPromediio(){

            this.authService.getRecorridos().subscribe(data => {
            console.log('Recorrido Exitoso ',  data);
            let labels  = [];
            let seriies =[];

            for (const datos of data) {
              labels.push(datos.activityDate);
              seriies.push(datos.time / 60 );
            }

            var datawebsiteViewsChart = {
              labels,
              series: [seriies
          ]
            };
            var optionswebsiteViewsChart = {
                axisX: {
                    showGrid: false
                },
                low: 0,
                high: 100,
                chartPadding: {top: 0, right: 5, bottom: 0, left: 0}
            };
            var responsiveOptions: any[] = [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
            ];
            var tiempoChart = new Chartist.Bar('#tiempoChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);


        }, error => {
            console.log('Error registrandose-> ', error);
        });

    }
}

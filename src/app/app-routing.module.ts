import { NgModule } from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from "./pages/catalogo/catalogo.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProductoDetalleComponent } from "./pages/producto-detalle/producto-detalle.component";
//espesificar rutas de la app

const app_routes: Routes = [
    { path: 'home', component: CatalogoComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto-detalle', component: ProductoDetalleComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];




@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, {useHash: true} )
      ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

    
}




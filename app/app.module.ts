import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { SocketComponent }      from './socket.component';
import { GraphComponent }       from './graph.component';
import { GraphDirective }       from './graph.directive';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        SocketComponent,
        GraphComponent,
        GraphDirective
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
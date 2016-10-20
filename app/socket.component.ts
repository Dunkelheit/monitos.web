import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService }                from './socket.service';

@Component({
    moduleId: module.id,
    selector: 'socket',
    template: `<div *ngFor="let message of messages">{{message}} </div>`,
    providers: [SocketService]
})
export class SocketComponent implements OnInit, OnDestroy {
    messages = [];
    connection;

    constructor(private socketService:SocketService) {
    }

    ngOnInit() {
        this.connection = this.socketService.getMessages().subscribe(message => {
            this.messages.push(message);
        })
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }
}
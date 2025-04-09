import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RemoteEntryComponent} from './entry.component';
import {remoteRoutes} from './entry.routes';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(remoteRoutes), RemoteEntryComponent],
    providers: []
})
export class RemoteEntryModule {}

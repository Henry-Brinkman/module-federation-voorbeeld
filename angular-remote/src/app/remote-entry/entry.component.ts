import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-entry-root',
    template: `
        Remote Angular Entry Component
        <router-outlet></router-outlet>
    `,
    standalone: true,
    imports: [RouterOutlet]
})
export class RemoteEntryComponent {
}


import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from "@angular/common";
import {init, loadRemote} from '@module-federation/enhanced/runtime';

init({
  name: 'React webcomponent',
  remotes: [
    {
      name: 'myReactRemote',
      entry: 'https://localhost:4201/remoteEntry.js',
    },
  ],
});
loadRemote('myReactRemote/Module');

@Component({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-web-component-wrapper',
  templateUrl: 'web.component.html',
  standalone: true
})
export class WebComponent {}

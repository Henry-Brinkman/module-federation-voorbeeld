import {Route} from '@angular/router';
import {loadRemoteModule} from "@nx/angular/mf";
import {WebComponent} from "./react-webcomponent-wrapper/web.component";

export const appRoutes: Route[] = [
  {
    path: 'angularRemote',
    loadChildren: () =>
      loadRemoteModule('angularRemote', './Module')
        .then((c) => c.RemoteEntryModule)
  },
  {
    path: 'myReactRemote',
    component: WebComponent
  }
];

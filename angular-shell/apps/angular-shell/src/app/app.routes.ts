import {Route} from '@angular/router';
import {loadRemoteModule} from "@nx/angular/mf";

export const appRoutes: Route[] = [
  {
    path: 'angularRemote',
    loadChildren: () =>
      loadRemoteModule('angularRemote', './Module')
        .then((c) => c.RemoteEntryModule)
  }
];

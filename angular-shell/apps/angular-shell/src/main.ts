import {setRemoteDefinitions} from "@nx/angular/mf";

const defaultMicroFrontendManifestPath = 'module-federation-local.manifest.json';

fetch(defaultMicroFrontendManifestPath)
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDjqCzr5_XHvAUtblZdoojqmPhtUQPjMlU",
    authDomain: "todolistapp-59c9d.firebaseapp.com",
    databaseURL: "https://todolistapp-59c9d.firebaseio.com",
    projectId: "todolistapp-59c9d",
    storageBucket: "todolistapp-59c9d.appspot.com",
    messagingSenderId: "519455451428"
  }
};

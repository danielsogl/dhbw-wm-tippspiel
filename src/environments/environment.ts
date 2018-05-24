// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCkgQLtZX9I5kll1rZRGhDVJ5Sp5X2bfEA',
    authDomain: 'dhbw-tippspiel.firebaseapp.com',
    databaseURL: 'https://dhbw-tippspiel.firebaseio.com',
    projectId: 'dhbw-tippspiel',
    storageBucket: '',
    messagingSenderId: '1001626493678'
  },
  endpoint:
    'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

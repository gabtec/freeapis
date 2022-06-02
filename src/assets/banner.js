require("colors"); 

const banner = "\n" + 
" _____         _      _                _       ______                      ___  ______  _____  _           \n" +
"|  __ \\       | |    | |              ( )      |  ___|                    / _ \\ | ___ \\|_   _|( )          \n" +
"| |  \\/  __ _ | |__  | |_   ___   ___ |/  ___  | |_    _ __   ___   ___  / /_\\ \\| |_/ /  | |  |/  ___      \n" +
"| | __  / _` || '_ \\ | __| / _ \\ / __|   / __| |  _|  | '__| / _ \\ / _ \\ |  _  ||  __/   | |     / __|     \n" +
"| |_\\ \\| (_| || |_) || |_ |  __/| (__    \\__ \\ | |    | |   |  __/|  __/ | | | || |     _| |_    \\__ \\     \n" +
" \\____/ \\__,_||_.__/  \\__| \\___| \\___|   |___/ \\_|    |_|    \\___| \\___| \\_| |_/\\_|     \\___/    |___/";

  function print(suffix) {
    const append = suffix ? suffix : "";
    const fullBanner = banner + " " + append + "\n";
    console.log(fullBanner.brightMagenta);
   };
   
  module.exports = { print };
  
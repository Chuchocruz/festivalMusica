
import { src, dest, watch } from "gulp";
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

// export function hola( done ){
//     console.log("Hola desde Gulpfile.js");

//     done()
    
// }

const sass = gulpSass(dartSass);

export function css(done) {
    
    src('src/scss/app.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(dest('build/css'))


    done()
}

export function dev() {//va estar observando el archivo y cuando alla cambios ejecuta el archivo css
    watch("src/scss/**/*.scss", css)    //Va ir buscando todos los que tenga este patron
}



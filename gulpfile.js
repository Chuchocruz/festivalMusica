
import { src, dest, watch } from "gulp";
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

// export function hola( done ){
//     console.log("Hola desde Gulpfile.js");

//     done()
    
// }

const sass = gulpSass(dartSass);

export function css(donde) {
    
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))


    donde()
}

export function dev() {
    watch("src/scss/app.scss", css)
    watch()
}



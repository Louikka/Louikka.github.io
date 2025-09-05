import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import scss from 'rollup-plugin-scss';

import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';


export default {
    input : 'src/main.ts',
    output : {
        file : 'public/bundle.js',
        format : 'iife',
    },
    plugins : [
        typescript(),
        terser(),
        scss({
            fileName : 'bundle.css',
            processor : () => postcss([
                autoprefixer(),
                cssnano({ preset : 'default', })
            ]),
        }),
    ],
};

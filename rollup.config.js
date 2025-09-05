import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import scss from 'rollup-plugin-scss';

import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';



export default [
    {
        input : 'src/global.ts',
        output : {
            file : 'public/bundle-global.js',
            format : 'es',
        },
        plugins : [
            typescript(),
            terser({
                module : false,
            }),
        ],
        treeshake : false,
    },
    {
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
    },
];

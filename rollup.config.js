import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import scss from 'rollup-plugin-scss';

import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';



export default [
    {
        input : 'src/ie.ts',
        output : {
            file : 'public/bundle-ie.js',
            format : 'cjs',
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
            format : 'cjs',
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

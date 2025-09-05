import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

import scss from 'rollup-plugin-scss';

import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';



const terserConfig = {
    parse : {},
    compress : {},
    mangle : false,
    format : null,
    sourceMap : false,
    ecma : 2016,
    enclose : false,
    keep_classnames : true,
    keep_fnames : true,
    ie8 : false,
    module : false,
    nameCache : null,
    safari10 : false,
    toplevel : false,
};

export default [
    {
        input : 'src/ie.ts',
        output : {
            file : 'public/bundle-ie.js',
            format : 'cjs',
        },
        plugins : [
            typescript(),
            terser(terserConfig),
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
            terser(terserConfig),
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

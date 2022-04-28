// Babel 
require('ignore-styles');

require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react', 'es2015']
})


require('./server')
 
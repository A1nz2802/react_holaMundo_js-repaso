/* 
Forma antigua de importar
const chanchos = require('./import-export')
console.log(chanchos) 
*/

// Forma nueva
import chanchos, { chanchosTristes, otrosChanchos, fn1, fn2 } from './import-export.mjs';
console.log(chanchos);
console.log(chanchosTristes);
console.log(otrosChanchos);
fn1()
fn2()

// chanchos es una exportanción por default
// chanchosTristes NO es una exportación por default, por lo tanto 
// se debe indicar entre {}
// output: 
/* 
[ 'chancho 1', 'chancho 2', 'chancho 3' ]
[ 'triste 1', 'triste 2' ]
[]
 */

/* En un proyecto de react no es necesario indicar .mjs o ninguna extensión */

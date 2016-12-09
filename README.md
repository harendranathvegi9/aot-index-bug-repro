# Steps to reproduce
1. `npm install`
2. `ng build --aot`


## Expected error
```
Cannot read property 'MdTextareaAutosize' of undefined, 
resolving symbol MdInputModule in 
/tmp/aot-index-error/node_modules/@angular/material/input/input.d.ts, 

resolving symbol MdInputModule in 
/tmp/aot-index-error/node_modules/@angular/material/input/input.d.ts
```


This is fixed by adding `export {MdTextareaAutosize} from './autosize''`
in `input/index.d.ts`

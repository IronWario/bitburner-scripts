export async function main(ns) { let r;try{r=JSON.stringify(
    Object.fromEntries(ns.singularity.getOwnedSourceFiles().map(sf => [sf.n, sf.lvl]))
);}catch(e){r="ERROR: "+(typeof e=='string'?e:e.message||JSON.stringify(e));}
const f="/Temp/owned-source-files.txt"; if(ns.read(f)!==r) ns.write(f,r,'w') }
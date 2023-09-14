export async function main(ns) { let r;try{r=JSON.stringify(
    ns.getResetInfo()
);}catch(e){r="ERROR: "+(typeof e=='string'?e:e.message||JSON.stringify(e));}
const f="/Temp/reset-info.txt"; if(ns.read(f)!==r) ns.write(f,r,'w') }
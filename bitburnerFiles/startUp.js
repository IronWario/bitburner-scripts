/** @param {NS} ns */
export async function main(ns) {
  ns.tprint("--------------------");
  ns.tprint("  Starting Systems  ");
  ns.tprint("--------------------");
  ns.run("stockmaster.js");
  ns.run("crack.js", 1, "n00dles");
  ns.run("n00dles.js", { threads: 1000 });
  ns.run("serverBuy.js");
  ns.tprint("");
  ns.tprint("--------------------");
  ns.tprint("   System Started   ");
  ns.tprint("--------------------");
}
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const app = join(process.cwd(), ".next/server/app");
const school = existsSync(join(app, "for-schools.html"));
const host = school ? "https://www.focusedu-staffing.com" : "https://www.focused-staffing.com";
const routes = ["", school ? "for-schools" : "for-organizations", "book-a-call", "request-staff", "resources", school ? "special-education-staffing" : "aba-staffing"];
const decode = (s) => s.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">");
for (const route of routes) {
 const html=readFileSync(join(app, (route || "index")+".html"),"utf8");
 const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
 assert.equal((main.match(/<h1\b/g)||[]).length,1,route+": one H1");
 assert.match(html, /name="description" content="[^"]+"/, route+": description");
 const canonical=html.match(/rel="canonical" href="([^"]+)"/)?.[1];
 assert.equal(canonical,host+(route?"/"+route:""),route+": canonical");
 assert.doesNotMatch(html, /name="robots" content="[^"]*noindex/,route+": indexable");
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 assert.ok(schemas.length>=2,route+": entity schema");
 for(const data of schemas.filter(s=>s["@type"]==="FAQPage")) {
  for(const q of data.mainEntity) assert.ok(decode(main).includes(q.name),route+": FAQ schema is visible");
 }
 for(const [,raw]of main.matchAll(/href="([^"]+)"/g)) {
  const href=decode(raw);
  if(href.startsWith("#")) assert.ok(main.includes('id="'+href.slice(1)+'"'),route+": local anchor "+href);
  if(href.startsWith("/")&&!href.startsWith("//")&&!href.includes(".")) {
   const path=href.split(/[?#]/)[0].replace(/^\//,"").replace(/\/$/,"")||"index";
   assert.ok(existsSync(join(app,path+".html")),route+": route "+href);
  }
 }
 if(route===""||route.startsWith("for-")){
  assert.doesNotMatch(main,/Meet our candidates|Your competitor can lock you out|Credentialed in half|Why Focused Behavioral(?=[<])/i);
  assert.ok(main.includes('/request-staff'));
  assert.ok(main.includes('/book-a-call'));
 }
 if(route==="request-staff") {
  assert.match(main,/Open email request/);
  assert.match(main,/press Send in your email app/);
  assert.equal((main.match(/<form\b/g)||[]).length,1);
 }
 console.log("PASS",route||"/");
}
const sitemap=readFileSync(join(app,"sitemap.xml.body"),"utf8");
assert.ok(sitemap.includes(host+"/request-staff"));
assert.equal(new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1])).size,[...sitemap.matchAll(/<loc>/g)].length,"unique sitemap URLs");
const llms=readFileSync(join(app,"llms.txt.body"),"utf8").split("## Pillar guides")[0];
assert.doesNotMatch(llms,/cuts time-to-hire|at no cost|client-attested outcomes/);
console.log("PASS sitemap and AI-readable company profile");


import{at as C,t as E,i as B,c as m,aB as P,ba as j,k as w,S as A,a0 as L}from"./index-C_8FmDQy.js";import{B as S,d as D}from"./pde_plot-BlEcTGio.js";import{d as N}from"./download-hvuwbawZ.js";import{l as V}from"./graphviz-fKf-ib0n.js";import{h as $}from"./analyses-CF_PDSku.js";import"./settings-zg8ucD_r.js";const{replace:k}="",G=/[&<>'"]/g,H={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},I=t=>H[t],u=t=>k.call(t,G,I);var x=E("<div class=graph-visualization-container><div class=graph-visualization>"),q=E("<option>Horizontal"),W=E("<option>Vertical"),F=E("<div>");function ot(t){const i=()=>{const a=t.liveModel.elaboratedModel();if(a)return O(a)},[r]=C(V),d=()=>{const a=r(),l=i();if(!a||!l)return;const n=t.content.direction??$.Vertical;return a.renderString(l,{format:"svg",graphAttributes:{rankdir:n===$.Horizontal?"LR":"TB"}})},v=()=>t.liveModel.liveDoc.doc.name||"Untitled",g=()=>m(L,{onClick:()=>{const a=d();a&&D(a,`${v()} - ERD.svg`,"image/svg+xml")},get disabled(){return!d()},tooltip:"Export the entity-relationship diagram as SVG",get children(){return m(N,{size:16})}});return(()=>{var a=x(),l=a.firstChild;return B(a,m(S,{title:"Entity-relationship diagram",get actions(){return g()},get settingsPane(){return m(P,{compact:!0,get children(){return m(j,{label:"Direction",get value(){return t.content.direction??$.Vertical},onChange:n=>{t.changeContent(e=>{e.direction=n.currentTarget.value})},get children(){return[(()=>{var n=q();return w(()=>n.value=$.Horizontal),n})(),(()=>{var n=W();return w(()=>n.value=$.Vertical),n})()]}})}})}}),l),B(l,m(A,{get when(){return d()},children:n=>(()=>{var e=F();return w(()=>e.innerHTML=n()),e})()})),a})()}function O(t){const i={tag:"Basic",content:"Entity"},r={tag:"Basic",content:"Attr"},d=t.obGeneratorsWithType(i),v=[],g=new Map,a={tag:"Hom",content:i};for(const n of t.morGeneratorsWithType(a)){const e=t.morPresentation(n);if(e&&e.dom.tag==="Basic"&&e.cod.tag==="Basic"&&d.includes(e.dom.content)&&d.includes(e.cod.content)){const s=e.label?.join(".")??"",p=e.dom.content,h=e.cod.content;g.has(p)||g.set(p,[]),g.get(p)?.push({id:n,name:s,targetEntity:h})}}for(const n of d){const e=t.obPresentation(n),s=[];for(const c of t.morGeneratorsWithType(r)){const o=t.morPresentation(c);if(o&&o.dom.tag==="Basic"&&o.cod.tag==="Basic"&&o.dom.content===n){const f=o.label?.join(".")??"",y=o.cod.content,_=t.obPresentation(y)?.label?.join(".")??"";s.push({name:f,type:_})}}const p=g.get(n)??[],h=u(e.label?.join(".")??""),M=J(h),R=U(h);let z=`
            <tr>
                <td port="${n}" bgcolor="#a6f2f2" align="center" colspan="2"><b><font point-size="12">${M}${h}${R}</font></b></td>
            </tr>
        `;if(s.length===0&&p.length===0)z+=`
                <tr>
                    <td align="left" colspan="2"><font point-size="12"><i>(no attributes)</i>&#160;&#160;</font></td>
                </tr>
            `;else{for(const c of s){const o=u(c.name),b=u(c.type),f=T(o),y=T(b);z+=`
                    <tr>
                        <td align="left"><font point-size="12">${o}${f}</font></td>
                        <td align="left"><font point-size="12">${b}${y}</font></td>
                    </tr>
                `}for(const c of p){let o=t.obPresentation(c.targetEntity).label?.join(".")||c.targetEntity;o=u(o),o=`→ ${o}`;const b=T(o),f=u(c.name),y=T(f);z+=`
                    <tr>
                        <td align="left" port="${u(c.id)}"><font point-size="12">${f}${y}</font></td>
                        <td align="left"><font point-size="12">${o}${b}</font></td>
                    </tr>
                `}}v.push({name:n,attributes:{id:n,label:{html:`
                        <table border="0" cellborder="1" cellspacing="0" cellpadding="4">
                            ${z}
                        </table>
                    `}}})}const l=[];for(const[n,e]of g)for(const s of e)l.push({tail:n,head:s.targetEntity,attributes:{id:s.id,tailport:`${s.id}:w`,arrowhead:"none",arrowtail:"crow",dir:"both"}});return{directed:!0,nodes:v,edges:l,graphAttributes:{rankdir:"TB",bgcolor:"transparent"},nodeAttributes:{fontname:"sans-serif",fontsize:"10",shape:"plaintext"},edgeAttributes:{fontname:"sans-serif",fontsize:"9",color:"#666666"}}}function T(t){const i=t.length,r=Math.ceil(i/6+Math.sqrt(i));return Array(r).fill("&#160;").join("")}function U(t){const i=t.length,r=Math.ceil(i/3);return Array(r).fill("&#160;").join("")}function J(t){const i=t.length,r=Math.ceil(i/3+Math.sqrt(i));return Array(r).fill("&#160;").join("")}export{ot as default,O as schemaToERD};
//# sourceMappingURL=schema_erd-B4DV0OUR.js.map

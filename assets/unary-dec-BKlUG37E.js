import{j as e,F as a}from"./jsx-BrZF2bhg.js";import{aK as r}from"./index-C_8FmDQy.js";import{HelpAnalysisById as o}from"./logic_help_detail-D-iw7gw7.js";import"./dynamic-import-helper-BheWnx7M.js";function t(i){const n={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i.components};return e(a,{children:[e(n.h2,{children:"Description"}),`
`,e(n.p,{children:["The (unary) ",e(n.strong,{children:"discrete exterior calculus"})," (DEC) is an implementation of the unary part of the ",e(n.em,{children:"discrete exterior calculus"}),", an approach to discrete differential geometry due initially to Anil Hirani."]}),`
`,e(n.p,{children:["The purpose of the DEC logic is to specify ",e(n.strong,{children:"form types"})," as well as ",e(n.strong,{children:"operators"})," between them, and then creating an instance of such a model corresponds to writing down forms (of a given form type) and equations between them, given by either applying the given operators or applying scalar multiplication."]}),`
`,e(n.p,{children:["The Topos Institute and collaborators have a substantial DEC library called ",e(n.a,{href:"https://algebraicjulia.github.io/Decapodes.jl/dev/",children:"Decapodes"}),` implemented in the AlgebraicJulia project.
The main purpose of the DEC logic in CatColab is to permit the user to build a PDE system via a structure editor which can then be solved in Decapodes, with the result animated right inside of CatColab.`]}),`
`,e(r,{children:e(n.p,{children:[`This workflow has been completed in some proofs of concept, but the need to run a Julia kernel means it's not particularly convenient for non-Julia users at this time.
Instructions on the process to do so for those who like are available `,e(n.a,{href:"https://github.com/ToposInstitute/CatColab/tree/main/packages/algjulia-service",children:"on GitHub"}),"."]})}),`
`,e(n.h3,{children:"Examples"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"https://catcolab.org/diagram/0194d39e-c602-7a90-b7af-d51c4fb0cc11/analysis/019b8fa3-2e23-71a0-944b-7edf068a13a7",children:"An inviscid Navier-Stokes equation on the sphere"}),", as an instance of the ",e(n.a,{href:"https://catcolab.org/model/0194d398-6e0a-7e41-a547-86e40973e48d/analysis/019b8fa2-e8c8-7ba0-9cf6-baed9d059f83",children:"DEC for vorticity"})]}),`
`]}),`
`,e(n.h3,{children:"Further reading"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:['Anil N. Hirani, "Discrete Exterior Calculus", PhD thesis (2003). ',e(n.a,{href:"http://www.cs.jhu.edu/~misha/Fall09/Hirani03.pdf",children:"[PDF]"})]}),`
`,e(n.li,{children:["The ",e(n.a,{href:"https://algebraicjulia.github.io/Decapodes.jl/dev/",children:"Decapodes documentation"}),", for many worked examples directly using AlgebraicJulia syntax"]}),`
`]}),`
`,e(n.h2,{children:"Instances and analyses"}),`
`,e(n.h3,{children:"Instances"}),`
`,e(n.p,{children:"An instance consists of an explicit set of forms and equations between them, where the possible types of the forms and possible operators used in the equations are precisely those specified by the model."}),`
`,e(n.h3,{children:"Analyses"}),`
`,e(o,{theory:i.theory,analysisId:"diagram"})]})}function d(i={}){const{wrapper:n}=i.components||{};return n?e(n,{...i,children:e(t,{...i})}):t(i)}export{d as default};
//# sourceMappingURL=unary-dec-BKlUG37E.js.map

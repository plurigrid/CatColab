import{j as e,F as i}from"./jsx-BrZF2bhg.js";import{aL as s,aK as h}from"./index-C_8FmDQy.js";import{HelpAnalysisById as a}from"./logic_help_detail-D-iw7gw7.js";import"./dynamic-import-helper-BheWnx7M.js";function r(t){const n={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return e(i,{children:[e(n.h2,{children:"Description"}),`
`,e(n.p,{children:["A categorical ",e(n.strong,{children:"database schema"}),", or ",e(n.strong,{children:"schema"})," for short, is a representation of the ",e(n.em,{children:"structure"}),", or ",e(n.em,{children:"shape"}),`, of a database.
Once the shape has been defined, an instance of the model will be an actual database of that shape.`]}),`
`,e(n.p,{children:`Schemas are expressed in a diagrammatic language, with boxes and arrows.
There are two kinds of boxes:`}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.strong,{children:"Entities"})}),`
`,e(n.li,{children:e(n.strong,{children:"Attribute types"})}),`
`]}),`
`,e(n.p,{children:"and three kinds of arrows (each of them possibly many-to-one):"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Mappings"})," from entities to entities"]}),`
`,e(n.li,{children:[e(n.strong,{children:"Attributes"}),", from entities to attribute types"]}),`
`,e(n.li,{children:[e(n.strong,{children:"Operations"}),", from attribute types to attribute types."]}),`
`]}),`
`,e(n.p,{children:['What this data actually "means" can be explained in terms of what it corresponds to in an ',e(n.em,{children:"instance"})," of the schema (see below, under ",e(n.em,{children:"Instances and analyses"}),")."]}),`
`,e(s,{children:[e(n.p,{children:["CatColab currently only supports ",e(n.strong,{children:"single-input"})," operations, so many familiar examples (such as sums and averages) are not directly representable."]}),e(n.p,{children:"Note that consistency constraints on the schema are also not yet supported, though they can be added informally in rich text cells."})]}),`
`,e(n.h3,{children:"Further reading"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:['Evan Patterson, Owen Lynch, James Fairbanks, "Categorical Data Structures for Technical Computing", ',e(n.em,{children:"Compositionality"})," ",e(n.strong,{children:"4"})," (2022). ",e(n.a,{href:"https://arxiv.org/abs/2106.04703v5",children:"arXiv:2106.04703v5"})," ",e(n.a,{href:"https://doi.org/10.32408/compositionality-4-5",children:"DOI:10.32408/compositionality-4-5"})]}),`
`,e(n.li,{children:['Brendan Fong, David I. Spivak, "Databases: Categories, Functors, and Universal Constructions" in ',e(n.em,{children:"An Invitation to Applied Category Theory"})," (2019). ",e(n.a,{href:"https://arxiv.org/abs/1803.05316",children:"arXiv:1803.05316"})," ",e(n.a,{href:"https://doi.org/10.1017/9781108668804",children:"DOI:10.1017/9781108668804"})]}),`
`,e(n.li,{children:["Wikipedia: ",e(n.a,{href:"https://en.wikipedia.org/wiki/Database_schema",children:"Database Schema"})]}),`
`]}),`
`,e(n.h2,{children:"Instances and analyses"}),`
`,e(n.h3,{children:"Instances"}),`
`,e(n.p,{children:["Graphical instances of schemas are called ",e(n.strong,{children:"acsets"})," in applied category theory lingo, but can also be thought of as being precisely ",e(n.em,{children:"databases"}),"."]}),`
`,e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"Schema (database shape)"}),e("th",{children:"Instance (database)"})]})}),e("tbody",{children:[e("tr",{children:[e("td",{children:"entity"}),e("td",{children:"table"})]}),e("tr",{children:[e("td",{children:"mapping"}),e("td",{children:"foreign key"})]}),e("tr",{children:[e("td",{children:"attributes"}),e("td",{children:"columns"})]}),e("tr",{children:[e("td",{children:"attribute type"}),e("td",{children:"attribute column constraints"})]}),e("tr",{children:[e("td",{children:"operation"}),e("td",{children:"data operations"})]})]})]}),`
`,e(h,{children:e(n.p,{children:`The implementation of schema instances currently in CatColab are not quite acsets, since typing maps (that define the specific sets in which attribute types can have values) are not supported.
In other words, the set corresponding to an attribute type starts as empty and new elements are added to it whenever a new attribute variable is given.`})}),`
`,e(n.h3,{children:"Analyses"}),`
`,e(a,{theory:t.theory,analysisId:"diagram"}),`
`,e(a,{theory:t.theory,analysisId:"erd"})]})}function p(t={}){const{wrapper:n}=t.components||{};return n?e(n,{...t,children:e(r,{...t})}):r(t)}export{p as default};
//# sourceMappingURL=simple-schema-MqnYZ-T5.js.map

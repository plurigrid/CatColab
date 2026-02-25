import{j as e,F as i}from"./jsx-BrZF2bhg.js";import{aK as a}from"./index-C_8FmDQy.js";function o(t){const n={a:"a",blockquote:"blockquote",em:"em",h2:"h2",p:"p",strong:"strong",...t.components};return e(i,{children:[e(n.p,{children:"In many places, we describe CatColab as a ..."}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:"collaborative environment for formal, interoperable, conceptual modeling."}),`
`]}),`
`,e(n.p,{children:[`But what do we actually mean by this?
This guide aims to answer that question on (at least) two levels: firstly, breaking down this description word by word, examining what we mean by each one and how we have come to our understanding of its use; and secondly, what this means in actual concrete terms, and `,e(n.em,{children:"what the software actually does"})," and ",e(n.em,{children:"how you can use it"}),"."]}),`
`,e(n.p,{children:"In brief, we use the following definitions:"}),`
`,e("dl",{children:[e("dt",{children:"collaborative"}),e("dd",{children:"models can be built by multiple people working either synchronously or asynchronously, and either in-person or remotely"}),e("dt",{children:"formal"}),e("dd",{children:"models are mathematical objects that can be critiqued with clarity"}),e("dt",{children:"interoperable"}),e("dd",{children:"models, and modeling languages, can be interoperated with each other"}),e("dt",{children:"conceptual"}),e("dd",{children:"modeling languages are well adapted to concepts used by practitioners"})]}),`
`,e(a,{children:e(n.p,{children:["This page is still under construction. For now, we recommend reading ",e(n.a,{href:"https://www.epatters.org/assets/slides/2025-act/slides.html#/introducing-catcolab",children:"these slides ↗"})," for further details."]})}),`
`,e(n.h2,{children:"Concepts"}),`
`,e(n.p,{children:`While CatColab has a notebook-style interface inspired by computational
notebooks like JupyterLab and structured document editors like Notion, its
conceptual underpinnings are quite different from both kinds of tools. Here is
an overview of the concepts that you'll encounter in CatColab today:`}),`
`,e("dl",{children:[e("dt",{children:"Logic"}),e("dd",{children:[`CatColab is not a general-purpose programming or modeling language but is
rather an extensible environment for working in `,e(n.em,{children:"domain-specific logics"}),`, such
as those of database schemas or biochemical regulatory networks. To do anything
in the tool besides write text, you'll need to choose a logic (also known as a `,e(n.strong,{children:"theory"})," in some of the accompanying mathematical literature)."]}),e("dt",{children:"Model"}),e("dd",{children:["Models in CatColab are models ",e(n.em,{children:"within"}),` a logic, such as a particular
database schema or regulatory network. Models are specified declaratively and
are well-defined mathematical objects. CatColab is a structure editor for models
in a logic, allowing formal declarations to be intermixed with descriptive rich
text.`]}),e("dt",{children:"Analysis"}),e("dd",{children:[`Unlike most computational notebooks, CatColab strictly separates the
`,e(n.em,{children:"specification"}),` of a model from any outputs derived from it. Depending on the
logic, an analysis of a model might include visualization, simulation,
identification of motifs, and translation into other formats.`]}),e("dt",{children:"Diagram"}),e("dd",{children:["A diagram, one way of presenting an ",e(n.strong,{children:"instance"})," of a model, populates a model. If the model is seen as an ontology — a way of describing what kinds of things are under consideration and how things of those kinds relate to each other — then the instance gives a list of actual things cohereing with that ontology."]})]}),`
`,e(n.p,{children:[`Future of versions of CatColab will display the further concepts of
`,e(n.strong,{children:"morphisms"}),", ",e(n.strong,{children:"migrations"}),", and ",e(n.strong,{children:"compositions"}),` (to be described here when they
become available).`]})]})}function s(t={}){const{wrapper:n}=t.components||{};return n?e(n,{...t,children:e(o,{...t})}):o(t)}export{s as default};
//# sourceMappingURL=fundamentals-BtObhHaQ.js.map

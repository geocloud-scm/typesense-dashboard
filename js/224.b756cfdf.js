"use strict";(globalThis["webpackChunktypesense_dashboard"]=globalThis["webpackChunktypesense_dashboard"]||[]).push([[224],{48224:(e,a,l)=>{l.r(a),l.d(a,{default:()=>k});var t=l(59835),n=l(86970);const s={class:"text-h6"};function i(e,a,l,i,o,d){const c=(0,t.up)("q-input"),m=(0,t.up)("q-select"),r=(0,t.up)("q-card-section"),u=(0,t.up)("q-btn"),p=(0,t.up)("q-card-actions"),f=(0,t.up)("q-card"),_=(0,t.up)("q-expansion-item"),h=(0,t.up)("q-icon"),b=(0,t.up)("q-td"),g=(0,t.up)("q-table"),w=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(w,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{"expand-separator":"",icon:"sym_s_add_circle","expand-icon":"sym_s_unfold_more","expanded-icon":"sym_s_unfold_less",label:(e.isUpdate?"Update":"Add")+" Alias","header-class":"bg-primary text-white",modelValue:e.expanded,"onUpdate:modelValue":a[3]||(a[3]=a=>e.expanded=a)},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{class:"bg-surface column"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{modelValue:e.alias.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.alias.name=a),label:"Alias name",filled:"",rules:[a=>!e.collectionNames.includes(a)||"Must not be a collection name"]},null,8,["modelValue","rules"]),(0,t.Wm)(m,{modelValue:e.alias.collection_name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.alias.collection_name=a),label:"Target Collection",filled:"",options:e.collectionNames},null,8,["modelValue","options"])])),_:1}),(0,t.Wm)(p,{align:"right",class:"bg-primary"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{size:"md",padding:"sm lg",unelevated:"",color:"primary",onClick:a[2]||(a[2]=a=>e.createAlias())},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.isUpdate?"Update":"Add")+" Alias",1)])),_:1})])),_:1})])),_:1})])),_:1},8,["label","modelValue"]),(0,t.Wm)(g,{class:"q-mt-md",title:"Aliases",flat:"",bordered:"",filter:e.filter,rows:e.$store.state.node.data.aliases,columns:e.columns,"row-key":"name","visible-columns":["name","collection_name","actions"],pagination:{rowsPerPage:50,sortBy:"name"}},{"top-left":(0,t.w5)((()=>[(0,t._)("div",s,[(0,t.Wm)(h,{size:"md",name:"sym_s_call_split"}),(0,t.Uk)(" Aliases")])])),"top-right":(0,t.w5)((()=>[(0,t.Wm)(c,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":a[4]||(a[4]=a=>e.filter=a),placeholder:"Search"},{append:(0,t.w5)((()=>[(0,t.Wm)(h,{name:"sym_s_search"})])),_:1},8,["modelValue"])])),"body-cell-actions":(0,t.w5)((a=>[(0,t.Wm)(b,{class:"text-right"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{flat:"",onClick:l=>e.editAlias(a.row),icon:"sym_s_edit",title:"Edit"},null,8,["onClick"]),(0,t.Wm)(u,{flat:"",color:"negative",onClick:l=>e.deleteAlias(a.row.name),icon:"sym_s_delete_forever",title:"Delete"},null,8,["onClick"])])),_:2},1024)])),_:1},8,["filter","rows","columns"])])),_:1})}var o=function(e,a,l,t){function n(e){return e instanceof l?e:new l((function(a){a(e)}))}return new(l||(l=Promise))((function(l,s){function i(e){try{d(t.next(e))}catch(a){s(a)}}function o(e){try{d(t["throw"](e))}catch(a){s(a)}}function d(e){e.done?l(e.value):n(e.value).then(i,o)}d((t=t.apply(e,a||[])).next())}))};const d=(0,t.aZ)({name:"Aliases",data(){return{alias:{name:"",collection_name:""},expanded:0===this.$store.state.node.data.aliases.length,filter:"",columns:[{label:"Alias Name",name:"name",field:"name",align:"left",sortable:!0},{label:"Collection Name",name:"collection_name",field:"collection_name",align:"left",sortable:!0},{label:"Actions",name:"actions",align:"right"}]}},computed:{collectionNames(){return this.$store.state.node.data.collections.map((e=>e.name))},isUpdate(){return this.$store.state.node.data.aliases.map((e=>e.name)).includes(this.alias.name)}},methods:{createAlias(){return o(this,void 0,void 0,(function*(){yield this.$store.dispatch("node/createAlias",{name:this.alias.name,collection_name:this.alias.collection_name}),this.alias={name:"",collection_name:""},this.expanded=!1}))},editAlias(e){this.alias=JSON.parse(JSON.stringify(e)),this.expanded=!0},deleteAlias(e){this.$q.dialog({title:"Confirm",message:`Delete alias ${e}?`,cancel:!0,persistent:!0}).onOk((()=>{this.$store.dispatch("node/deleteAlias",e)}))}}});var c=l(11639),m=l(69885),r=l(61123),u=l(44458),p=l(63190),f=l(66611),_=l(26384),h=l(11821),b=l(24455),g=l(86008),w=l(22857),y=l(67220),A=l(69984),x=l.n(A);const W=(0,c.Z)(d,[["render",i]]),k=W;x()(d,"components",{QPage:m.Z,QExpansionItem:r.Z,QCard:u.Z,QCardSection:p.Z,QInput:f.Z,QSelect:_.Z,QCardActions:h.Z,QBtn:b.Z,QTable:g.Z,QIcon:w.Z,QTd:y.Z})}}]);
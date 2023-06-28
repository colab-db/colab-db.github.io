export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:{idpgan:{_path:"\u002Fnotebooks\u002Fidpgan",_dir:"notebooks",_draft:h,_partial:h,_locale:"en",_empty:h,title:"IDPGan",description:"IdpGAN is a GAN trained to generate ensembles of 3D conformations of coarse grained (CG) protein molecules",excerpt:{type:i,children:[{type:b,tag:e,props:{},children:[{type:a,value:j},{type:b,tag:c,props:{href:k,rel:[d]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:c,props:{href:n,rel:[d]},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:c,props:{href:q,rel:[d]},children:[{type:a,value:r}]},{type:a,value:s}]},{type:b,tag:e,props:{},children:[{type:a,value:t},{type:b,tag:c,props:{href:u,rel:[d]},children:[{type:a,value:v}]},{type:a,value:w}]},{type:b,tag:e,props:{},children:[{type:a,value:x},{type:b,tag:c,props:{href:y,rel:[d]},children:[{type:a,value:z}]},{type:a,value:g}]},{type:b,tag:e,props:{},children:[{type:a,value:A},{type:b,tag:c,props:{href:B,rel:[d]},children:[{type:a,value:C}]},{type:a,value:g}]},{type:b,tag:e,props:{},children:[{type:a,value:D},{type:b,tag:c,props:{href:E,rel:[d]},children:[{type:a,value:F}]},{type:a,value:G},{type:b,tag:c,props:{href:H,rel:[d]},children:[{type:a,value:I}]},{type:a,value:g}]}]},url:"https:\u002F\u002Fcolab.research.google.com\u002Fgithub\u002Ffeiglab\u002Fidpgan\u002Fblob\u002Fmain\u002Fnotebooks\u002Fidpgan_experiments.ipynb#scrollTo=19c1dddb",git:"feiglab\u002Fidpgan",added:"2023-03-06",type:["colab"],image:"https:\u002F\u002Fpubs.acs.org\u002Fcms\u002F10.1021\u002Facs.jctc.2c00856\u002Fasset\u002Fimages\u002Fmedium\u002Fct2c00856_0008.gif",category:"chemistry",license:"gplv3",tags:["proteins",J,"coarse graining"],used_software:["pytorch","nglview"],creator:[{name:"Gilberto Valdes-Garcia",twitter:f,github:f,orcid:null},{name:"Lim Heo",twitter:f,github:f,orcid:"0000-0002-3153-2363"},{name:"Lisa J. Lapidus",twitter:f,github:f,orcid:"0000-0003-3136-2680"},{name:"Michael Feig",twitter:f,github:f,orcid:"0000-0001-9380-6422"}],body:{type:i,children:[{type:b,tag:e,props:{},children:[{type:a,value:j},{type:b,tag:c,props:{href:k,rel:[d]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:c,props:{href:n,rel:[d]},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:c,props:{href:q,rel:[d]},children:[{type:a,value:r}]},{type:a,value:s}]},{type:b,tag:e,props:{},children:[{type:a,value:t},{type:b,tag:c,props:{href:u,rel:[d]},children:[{type:a,value:v}]},{type:a,value:w}]},{type:b,tag:e,props:{},children:[{type:a,value:x},{type:b,tag:c,props:{href:y,rel:[d]},children:[{type:a,value:z}]},{type:a,value:g}]},{type:b,tag:e,props:{},children:[{type:a,value:A},{type:b,tag:c,props:{href:B,rel:[d]},children:[{type:a,value:C}]},{type:a,value:g}]},{type:b,tag:e,props:{},children:[{type:a,value:D},{type:b,tag:c,props:{href:E,rel:[d]},children:[{type:a,value:F}]},{type:a,value:G},{type:b,tag:c,props:{href:H,rel:[d]},children:[{type:a,value:I}]},{type:a,value:g}]}],toc:{title:f,searchDepth:K,depth:K,links:[]}},_type:"markdown",_id:"content:notebooks:idpgan.md",_source:"content",_file:"notebooks\u002Fidpgan.md",_extension:J}},prerenderedAt:1687940720114}}("text","element","a","nofollow","p","",".",false,"root","Welcome to the idpGAN example notebook. IdpGAN is a ","https:\u002F\u002Farxiv.org\u002Fabs\u002F1701.00160","GAN",", a type of ","https:\u002F\u002Fsites.google.com\u002Fview\u002Fberkeley-cs294-158-sp20\u002Fhome","deep generative model",", trained to generate ensembles of 3D conformations of ","https:\u002F\u002Fpubmed.ncbi.nlm.nih.gov\u002F27333362\u002F","coarse grained"," (CG) protein molecules.","In this notebook, we will use idpGAN to generate conformational ensembles of CG ","https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FIntrinsically_disordered_proteins","intrinsically disordered proteins"," (IDPs).","For more details on idpGAN, please refer to: ","https:\u002F\u002Fwww.biorxiv.org\u002Fcontent\u002F10.1101\u002F2022.06.18.496675v1","Direct generation of protein conformational ensembles via machine learning","For its source code, see: ","https:\u002F\u002Fgithub.com\u002Ffeiglab\u002Fidpgan","idpGAN GitHub repository","The CG protein model that we used to obtain via molecular dynamics the training data for idpGAN is described ","https:\u002F\u002Fwww.biorxiv.org\u002Fcontent\u002F10.1101\u002F2022.08.19.504518v1","here"," and has ","https:\u002F\u002Fgithub.com\u002Ffeiglab\u002Fcocomo","its own GitHub repository","md",3))
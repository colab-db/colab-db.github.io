---
title: "IDPGan"
url: "https://colab.research.google.com/github/feiglab/idpgan/blob/main/notebooks/idpgan_experiments.ipynb#scrollTo=19c1dddb"
git: feiglab/idpgan
description:  IdpGAN is a GAN trained to generate ensembles of 3D conformations of coarse grained (CG) protein molecules
added: "2023-03-06"
type: 
 - colab
image: https://pubs.acs.org/cms/10.1021/acs.jctc.2c00856/asset/images/medium/ct2c00856_0008.gif
category: chemistry
license: gplv3
tags: 
 - proteins
 - md
 - coarse graining
used_software:
 - pytorch
 - nglview
creator: 
 - 
  name: "Gilberto Valdes-Garcia"
  twitter: ""
  github: ""
  orcid: 
 - 
  name: "Lim Heo"
  twitter: ""
  github: ""
  orcid: 0000-0002-3153-2363
 - 
  name: "Lisa J. Lapidus"
  twitter: ""
  github: ""
  orcid: 0000-0003-3136-2680
 - 
  name: "Michael Feig"
  twitter: ""
  github: ""
  orcid: 0000-0001-9380-6422

---
Welcome to the idpGAN example notebook. IdpGAN is a [GAN](https://arxiv.org/abs/1701.00160), a type of [deep generative model](https://sites.google.com/view/berkeley-cs294-158-sp20/home), trained to generate ensembles of 3D conformations of [coarse grained](https://pubmed.ncbi.nlm.nih.gov/27333362/) (CG) protein molecules.

In this notebook, we will use idpGAN to generate conformational ensembles of CG [intrinsically disordered proteins](https://en.wikipedia.org/wiki/Intrinsically_disordered_proteins) (IDPs).

For more details on idpGAN, please refer to: [Direct generation of protein conformational ensembles via machine learning](https://www.biorxiv.org/content/10.1101/2022.06.18.496675v1).

For its source code, see: [idpGAN GitHub repository](https://github.com/feiglab/idpgan).

The CG protein model that we used to obtain via molecular dynamics the training data for idpGAN is described [here](https://www.biorxiv.org/content/10.1101/2022.08.19.504518v1) and has [its own GitHub repository](https://github.com/feiglab/cocomo).

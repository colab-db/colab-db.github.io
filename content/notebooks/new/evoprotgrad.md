---
title: "EvoProtGrad"
url: "https://colab.research.google.com/drive/1e8WjYEbWiikRQg3g4YHQJJcpvTIWVAjp?usp=sharing"
git: https://github.com/NREL/EvoProtGrad
description:  Directed evolution of proteins in sequence space with gradients 
added: "2023-07-29"
type: 
 - colab
image: 
category: biology
license: 
tags: 
 - proteins
 - sequence design
 - protein design
 - machine learning
used_software:
 - pytorch
creator: 
 - 
  name: "Patrick Emami"
  twitter: "@PatrickOmid"
  github: "@pemami4911"
  orcid: 0000-0001-7846-5578
 - 
  name: "Aidan Perreault"
  twitter: ""
  github: ""
  orcid: 
 - 
  name: "Jeffrey Law"
  twitter: ""
  github: ""
  orcid: 
 - 
  name: "David Biagioni"
  twitter: ""
  github: ""
  orcid: 
 - 
  name: "Peter St. John"
  twitter: ""
  github: ""
  orcid: 0000-0002-7928-3722

---
 EvoProtGrad is a Python package for directed evolution of proteins in sequence space with gradients. 

Compose a custom protein model that maps sequence to function with  pretrained models, including protein language models (PLMs), to guide and constrain search. Natively integrates with 🤗 HuggingFace transformers. The MCMC sampler identifies promising amino acids to mutate via model gradients taken with respect to the input (i.e., sensitivity analysis).

Use this colab to demo the sampler. Input a protein sequence and output a population of variants.

Link to paper: https://doi.org/10.1088/2632-2153/accacd

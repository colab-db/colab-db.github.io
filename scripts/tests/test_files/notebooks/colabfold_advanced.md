---
title: 'AlphaFold2 Advanced - ColabFold'
description: 'Advanced AlphaFold pipeline using MMseqs2'
git: sokrypton/ColabFold
url: https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb
license: mit
type: colab
category: biology
tags:
 - Bio
 - structure prediction
image: https://github.com/sokrypton/ColabFold/raw/main/.github/ColabFold_Marv_Logo.png
added: 2022-06-04
used_software:
 - py3Dmol
 - jax
 - alphafold
creator:
 - 
  name: Sergey Ovichnikov
  twitter: sokrypton
  github: sokrypton
 - 
  name: Milot Mirdita
  twitter: milot_mirdita
  github: milot-mirdita
 - 
  name: Konstantin Schütze
 - 
  name: Yoshitaka Moriwaki
 - 
  name: Lim Heo
 - 
  name: Martin Steinegger
---

# ColabFold - Advanced

This notebook modifies deepmind's original notebook (before AlphaFold-Multimer existed) to add experimental support for modeling complexes (both homo and hetero-oligomers), option to run MMseqs2 instead of Jackhmmer for MSA generation and advanced functionality.

Mirdita M, Schütze K, Moriwaki Y, Heo L, Ovchinnikov S, Steinegger M. ColabFold: Making protein folding accessible to all. Nature Methods, 2022
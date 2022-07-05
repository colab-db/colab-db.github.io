---
title: 'Piperazine Ring Conformation using RDKit'
description: 'RDKIT ETKDG built conformations'
git: sunwhan/blog
urls:
  - https://hub.gke2.mybinder.org/user/sunhwan-blog-om5b2sa9/notebooks/_notebooks/2021-02-24-RDKit-ETKDG-Piperazine.ipynb
  - https://colab.research.google.com/github/sunhwan/blog/blob/master/_notebooks/2021-02-24-RDKit-ETKDG-Piperazine.ipynb
type: 
 - binder
 - colab
category: chemistry
tags:
 - chemoinformatics
 - drug discovery
used_software:
 - py3Dmol
 - rdkit
creator:
 - 
  name: Sunhwan Jo
  twitter: sunhwan
  github: sunhwan
---

3D conformers of molecules containing piperazine (or cyclohexane) using RDKit tend to get a distorted ring conformation. RDKit's ETKDG (Experimental Torsion angle Knowledge-based Distance Geometry) algorithm can be used to fix ring confromations. This notebook demonstrates its use and possible problems. It shows how to filter out non-desirable conformers or improve the RDKit's conformer generation routine.


---
title: "AlphaFold2-RAVE on 1HZB cold shock proein"
url: "https://colab.research.google.com/github/tiwarylab/alphafold2rave/blob/main/fullrunthrough_CSP.ipynb"
git: tiwarylab/alphafold2rave
description: AlphaFold2-RAVE is an efficient protocol using the structural outputs from AlphaFold2 as initializations for AI augmented molecular dynamics. These simulations result in Boltzmann ranked ensembles.
added: "2023-02-16"
type: 
 - colab
image: 
category: biology
license: mit
tags: 
 - md
 - machine learning
 - alphafold
used_software:
 - alphafold
 - openmm
 - plumed
creator: 
 - 
  name: "Bodhi P. Vani"
  twitter: ""
  github: ""
  orcid: 
 - 
  name: "Akashnathan Aranganathan"
  twitter: ""
  github: ""
  orcid: 
 - 
  name: "Dedi Wang"
  twitter: ""
  github: ""
  orcid: 
 - 
  name: "Pratyush Tiwary"
  twitter: "tiwarylab"
  github: "tiwarylab"
  orcid: 

---
# AlphaFold2-RAVE v 1.0

This notebook aims to show how efficient our method is in predicting an effective RC (SPIB) from the amino acid sequence of a protein of interest(CSP), that can then be used in enhanced sampling to obtain Boltzmann ranked conformations.

We provide a `light_version` option in our notebook to get a brief overview and the essence of our protocol.

| light_version  |   Time   | MD simulation  | SPIB |
|----------------|:--------:|----------------|------|
|      True      |  1  min  |       :x:      |   ✅ |
|      False     |  ~ 3 hrs |        ✅      |   ✅ |

## Motivation

This protocol is essentially a methodology that combines two schools of thought: structure prediction, and enhanced sampling to preserve thermodynamics. In this repository, we demonstrate one instance of such a methodology. For structure prediction, we use AlphaFold2, or more specifically ColabFold. We introduce stochasticity to the ColabFold algorithm by decreasing the MSA cluster size and generating structures with multiple random seeds<sup>\*</sup>. For thermodynamics, we perform molecular dynamics simulations with metadynamics. To bias the simulations, we learn collective variables from the now-diverse set of structures using SPIB<sup>\*</sup>.

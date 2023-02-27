---
title: "CHARMM-GUI + OpenMM"
url: "https://colab.research.google.com/github/pablo-arantes/Making-it-rain/blob/main/CHARMM_GUI.ipynb"
git: pablo-arantes/making-it-rain
description: Using inputs from CHARMM-GUI solution builder and MD simulations with OpenMM
added: "2023-02-27"
type: 
 - colab
image: https://raw.githubusercontent.com/pablo-arantes/making-it-rain/main/GraphAbs.png
category: biology
license: mit
tags: 
 - proteins
 - Bio
 - md
used_software:
 - openmm
 - py3Dmol
creator: 
 - 
  name: "Pablo R. Arantes"
  twitter: "pablitoarantes"
  github: "pablo-arantes"
  orcid: 0000-0003-1946-2750
 - 
  name: "Marcelo D. Polêto"
  twitter: "mdpoleto"
  github: "mdpoleto"
  orcid: 0000-0001-9210-690X
 - 
  name: "Conrado Pedebos"
  twitter: "ConradoPedebos"
  github: "cpedebos"
  orcid: 
 - 
  name: "Rodrigo Ligabue-Braun"
  twitter: "ligabue_braun"
  github: ""
  orcid: 0000-0002-2555-9754

---
This is a Jupyter notebook for running Molecular Dynamics (MD) simulations using OpenMM engine and CHARMM force field files. This notebook is a supplementary material of the paper "Making it rain: Cloud-based molecular simulations for everyone" and we encourage you to read it before using this pipeline.

In general, MD simulations rely on 1) a set of atomic coordinates of all atoms on a simulation box and 2) a set of force field parameters that describes the interaction energies between atoms.
In terms of CHARMM inputs, we wil need:
A .crd and a .pdb file containing a set of atomic coordinates.
The respective .psf file containing the system topology.
A toppar folder containing force field parameter files.
A toppar.str file pointing to the force field files that we will use in our simulation.
In this notebook, we will simulate PDB 1AKI, a hen egg-white lysozyme. To build our simulation box, we will use CHARMM-GUI (https://www.charmm-gui.org/) solution builder feature. (Important: to use CHARMM-GUI, you must register for a free account). You can download the necessary input files from here;
For more information on how to create a solvated simulation box, please refer to CHARMM-GUI YouTube channel (https://www.youtube.com/channel/UCtHN7aNAjDet_JKWPxSioLQ)

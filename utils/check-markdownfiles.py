""" This short script checks whether notebooks can all be processed
"""
import json 
import glob
import sys

from frontmatter import Frontmatter

files = glob.glob("content/notebooks/*.md")

for f in files:
    try:
        post = Frontmatter.read_file(f)
    except:
        print(f"::error file={f} line=1::frontmatter could not be processed, please fix it")
        sys.exit(1)

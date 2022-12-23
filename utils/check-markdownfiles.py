""" This short script checks whether notebooks can all be processed
"""
import json 
import glob
import frontmatter

files = glob.glob("content/notebooks/*.md")

for f in files:
    try:
        metadata, content = frontmatter.parse(f)
    except:
        print(f"{f} could not be processed, please fix frontmatter")

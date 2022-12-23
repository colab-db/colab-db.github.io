""" This short script checks whether notebooks can all be processed
"""
import json 
import glob
import sys
import os
from frontmatter import Frontmatter
import github_action_utils as gha_utils

files = glob.glob("content/notebooks/*.md")

gha_utils.debug(f"files {files}")






output = ""

with gha_utils.group("Running frontmatter checks"):
    for f in files:
        try:
            post = Frontmatter.read_file(f)
            gha_utils.notice(f"{f} passed checks")
        except:
            gha_utils.error(
                "fix frontmatter", title=f"Error processing {f]"
            )
            output+=f"Error processing {f]\n"

with open("linting.log", "a") as myfile:
    myfile.write(output)
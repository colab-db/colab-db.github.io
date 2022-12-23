""" This short script checks whether notebooks can all be processed
"""
import json 
import glob
import sys

from frontmatter import Frontmatter
import github_action_utils as gha_utils

files = glob.glob("../content/notebooks/*.md")

gha_utils.debug(f"{files}")

with gha_utils.group("My Group"):
    for f in files:
        try:
            post = Frontmatter.read_file(f)
        except:
            gha_utils.error(
                "fix frontmatter", title="Error processing Markdown", file=f,
                col=1, end_column=2, line=1, end_line=2,
            )
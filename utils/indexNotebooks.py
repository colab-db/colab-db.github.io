""" This short script indexes all notebooks in the content directory so that yarn generate knows what routes it needs to be build. 
This will potentially no longer be necessary as Nuxt3 matures.
"""
import json 
import glob


files = glob.glob("content/notebooks/*.md")
files = [f.replace("content", "") for f in files]
files = [f.replace(".md", "") for f in files]

with open("routes.json", "w") as fp:
    json.dump({"routes":files},fp)

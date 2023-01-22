import json
import os
from glob import glob

import click

from pathlib import Path

from .fetch_github import get_stars, get_n_comments
from .fetch_huggingface import get_likes
from .parse_frontmatter import parse_and_validate_frontmatter


def process_all(indir):
    """Process all the markdown files in the given directory."""
    metadata_collection = []
    for file_path in glob(os.path.join(indir, "*.md")):
        meta = parse_and_validate_frontmatter(file_path)
        #add last modified date
        meta.last_modified = os.path.getmtime(file_path)
        id = Path(file_path).stem
        # fetch github comments from colab-db/colab-db.github.io repo powered by utteranc.es
        meta.n_comments = get_n_comments(id)
        if meta.git:
            meta.stars = get_stars(meta.git)
        if meta.spacename:
            meta.likes = get_likes(meta.spacename)
        # workaround because https://github.com/samuelcolvin/pydantic/issues/1409 is not solved
        metadata_collection.append(json.loads(meta.json()))
    return metadata_collection


@click.command("cli")
@click.argument("indir", type=click.Path(exists=True, file_okay=False, dir_okay=True))
@click.argument("outfile", type=click.Path(exists=False), default="colabdbmeta.json")
def process_all_cli(indir, outfile):
    """Process all the markdown files in the given directory."""
    metadata_collection = process_all(indir)
    with open(outfile, "w") as f:
        json.dump(metadata_collection, f)

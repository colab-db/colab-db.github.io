"""Parse metadata from markdown files."""
import os
from pathlib import Path
from typing import Union

import frontmatter

from .models import NotebookMeta


def parse_and_validate_frontmatter(file_path: Union[str, os.PathLike]) -> NotebookMeta:
    """Parse and validate the frontmatter of a markdown file."""
    with open(file_path, "r") as f:
        frontmatter_data = frontmatter.load(f)

    # Validate the frontmatter data.
    meta = frontmatter_data.metadata
    meta["id"] = Path(file_path).stem
    data = NotebookMeta.parse_obj(meta)
    data.url = data.url if isinstance(data.url, list) else [data.url]
    data.type = data.type if isinstance(data.type, list) else [data.type]
    return data

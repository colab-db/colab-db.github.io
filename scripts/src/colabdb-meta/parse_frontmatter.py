import frontmatter
import os
from typing import Union
from .models import NotebookMeta


def parse_and_validate_frontmatter(file_path: Union[str, os.PathLike]) -> NotebookMeta:
    """
    Parse and validate the frontmatter of a markdown file.
    """
    with open(file_path, "r") as f:
        frontmatter_data = frontmatter.load(f)

    # Validate the frontmatter data.
    data = NotebookMeta(**frontmatter_data.metadata)
    data.validate()
    return data

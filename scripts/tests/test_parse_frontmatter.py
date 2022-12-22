from pathlib import Path

from colabdbmeta.models import NotebookMeta
from colabdbmeta.parse_frontmatter import parse_and_validate_frontmatter


def test_parse_frontmatter(get_meta_files):
    for file_path in get_meta_files:
        meta = parse_and_validate_frontmatter(file_path)
        assert isinstance(meta, NotebookMeta)
        assert isinstance(meta.url, list)
        assert isinstance(meta.type, list)
        assert isinstance(meta.id, str)
        assert meta.id == Path(file_path).stem

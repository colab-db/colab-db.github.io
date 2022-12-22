import os
from glob import glob

import pytest

THIS_DIR = os.path.dirname(os.path.abspath(__file__))


@pytest.fixture(scope="session")
def get_meta_files():
    """Get all the markdown files in the test data directory."""
    return glob(os.path.join(THIS_DIR, "test_files", "notebooks", "*.md"))

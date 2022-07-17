import os

from colabdbmeta.process_all import process_all

THIS_DIR = os.path.dirname(os.path.abspath(__file__))


def test_process_all():
    meta_collection = process_all(os.path.join(THIS_DIR, "test_files", "notebooks"))
    assert len(meta_collection) == 4
    for entry in meta_collection:
        if entry["id"] != "binder-test":
            assert isinstance(entry["stars"], int) or isinstance(entry["likes"], int)

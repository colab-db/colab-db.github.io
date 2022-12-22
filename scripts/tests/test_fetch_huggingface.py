from colabdbmeta.fetch_huggingface import get_likes


def test_get_likes():
    """Make sure we get an integer >0."""
    likes = get_likes("simonduerr/ProteinMPNN")
    assert isinstance(likes, int)
    assert likes > 0

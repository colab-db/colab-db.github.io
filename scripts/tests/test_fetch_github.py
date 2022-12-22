from colabdbmeta.fetch_github import get_stars


def test_get_stars():
    """Make sure we get an integer >0 for the number of stars."""

    stars = get_stars("LPDI-epfl/masif")
    assert isinstance(stars, int)
    assert stars > 0

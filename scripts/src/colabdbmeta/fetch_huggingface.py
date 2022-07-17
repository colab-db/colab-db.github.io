import requests

_BASE_URL = f"https://huggingface.co/api/spaces"

# ToDo: Potentially refactor to use a single function to fetch data about all spaces (?) to reduce the number of requests.
def get_likes(spacename: str):
    """Get likes for space via the HuggingFace API."""
    url = f"{_BASE_URL}/{spacename}"
    response = requests.get(url)
    return int(response.json()["likes"])

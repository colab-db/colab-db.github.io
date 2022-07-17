"""Fetch metadata using the GitHub API."""
import os

from github import Github

gh = Github(os.environ.get("GITHUB_TOKEN"))


def get_stars(repo: str):
    try:
        repo = gh.get_repo(repo)
        print(repo)
        return repo.stargazers_count
    except Exception as e:
        print(e)
        return None


def get_many_stars(metas: list):
    return [{meta["slug"]: get_stars(meta["git"])} for meta in metas]

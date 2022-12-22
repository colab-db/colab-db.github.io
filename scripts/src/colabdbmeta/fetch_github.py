"""Fetch metadata using the GitHub API."""
import os

from github import Github
from loguru import logger
gh = Github(os.environ.get("GITHUB_TOKEN"))


def get_stars(repo: str):
    try:
        repo = gh.get_repo(repo)
        return repo.stargazers_count
    except Exception as e:
        logger.exception(e)
        return None


def get_many_stars(metas: list):
    return [{meta["slug"]: get_stars(meta["git"])} for meta in metas]

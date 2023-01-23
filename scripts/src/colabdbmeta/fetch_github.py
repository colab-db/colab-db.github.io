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

def get_n_comments(id: str):
    """Fetch the number of comments from the colab-db/colab-db.github.io repo.
    If there are comments they are created by utteranc.es and use the id of the entry as title.
    """""
    try:
        repo = gh.get_repo("colab-db/colab-db.github.io")
        all_issues = list(repo.get_issues(labels=["Comment"]))
        all_issues_titles = [issue.title for issue in all_issues]
        index =  all_issues_titles.index(f"/notebooks/{id}/")
        return  repo.get_issue(number=all_issues[index].number).comments
    except Exception as e:
        logger.exception(e)
        return None

def get_many_stars(metas: list):
    return [{meta["slug"]: get_stars(meta["git"])} for meta in metas]

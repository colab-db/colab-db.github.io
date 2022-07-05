"""Models for the frontmatter metadata for the markdown files."""
from pydantic import BaseModel
from typing import List, Optional
from datetime import date
from pydantic import AnyHttpUrl
from enum import Enum


class Creator(BaseModel):
    name: str
    twitter: Optional[str]
    github: Optional[str]
    orcid: Optional[str]


class NotebookTypeEnum(str, Enum):
    colab = "colab"
    binder = "binder"
    huggingface = "huggingface"


class CategoryEnum(str, Enum):
    biology = "biology"
    chemistry = "chemistry"


class NotebookMeta(BaseModel):
    title: str
    description: str
    type: NotebookTypeEnum
    url: AnyHttpUrl
    image: AnyHttpUrl
    added: date
    tags: List[str]
    used_software: List[str]
    category: CategoryEnum
    license: str

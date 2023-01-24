"""Models for the frontmatter metadata for the markdown files."""
from datetime import date, datetime
from enum import Enum
from typing import List, Optional, Union

from pydantic import AnyUrl, BaseModel


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


# ToDo: I do not like the Union types, but they might be more convenient for the users.
class NotebookMeta(BaseModel):
    id: str
    title: str
    description: str
    type: Union[List[NotebookTypeEnum], NotebookTypeEnum]
    url: Union[List[Optional[AnyUrl]], AnyUrl]
    git: Optional[str]
    image: Optional[AnyUrl]
    added: Optional[date]
    tags: List[str]
    used_software: List[str]
    category: CategoryEnum
    license: Optional[str]
    stars: Optional[int]
    likes: Optional[int]
    spacename: Optional[str]
    n_comments: Optional[int]

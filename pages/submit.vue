<template>
    <div class="min-h-screen">
        <Nav :showsearch="false" />
        <main class="prose container mx-auto">
            <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-5xl w-full space-y-8">
                    <div>
                        <h2 class="mt-6 mb-4 text-center text-5xl font-extrabold text-gray-900">Submit a new notebook
                        </h2>
                        <p class="mt-0 text-center text-lg text-gray-600">
                            Submit your own or cool notebooks you found.
                        </p>
                    </div>
                    <form class="mt-8 space-y-6" @submit.prevent>

                        <div class="shadow-sm -space-y-px">
                            <div class="my-3">
                                <label for="title" class="sr-only">Title</label>
                                <input id="title" name="title" type="text" v-model="notebook.title" required=""
                                    class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                    placeholder="Title" />
                            </div>

                        </div>
                        <div class="shadow-sm -space-y-px">
                            <div class="my-3">
                                <label for="desc" class="sr-only">Description</label>
                                <textarea id="desc" name="desc" type="text" required="" v-model="notebook.desc"
                                    class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                    placeholder="Short description (200 characters)" rows="3" maxlength="200" />
                            </div>

                        </div>
                        <div class="my-3">
                            <label for="git" class="sr-only">Identifier (e.g username/reponame)</label>
                            <input id="git" name="git" type="text" v-model="notebook.git" required=""
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                placeholder="username/reponame" />
                        </div>
                        <div class="my-3">
                            <label for="doi" class="sr-only">DOI</label>
                            <input id="doi" name="doi" type="text" v-model="doi" required=""
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                placeholder="Digital Object Identifier (DOI) of preprint/publication" />
                            <div class="text-red-600 text-sm items-center flex space-x-2" v-if="checkedDoi == null">
                                <Icon class="w-4 h-4" icon="heroicons:exclamation-triangle" />
                                <span>DOI not valid</span>
                            </div>
                            <p class="text-sm text-gray-500 ">Providing DOI will prepopulate authors. Use
                                https://doi.org/10.XX or 10.XX format.</p>
                        </div>
                        <div class="my-3">
                            <label for="image" class="sr-only">Logo</label>
                            <input id="image" name="image" type="text" v-model="notebook.image" required=""
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                placeholder="url to image" />
                        </div>
                        <div class="my-3">
                            <label for="url" class="sr-only">URL</label>
                            <input id="url" name="url" type="text" v-model="notebook.url" required=""
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                placeholder="URL to notebook" />
                        </div>
                        <div>
                            <Multiselect v-model="notebook.type" mode="tags" placeholder="Select type of notebook"
                                label="name" :options="options" :classes="multiselectStyleImages">
                                <template v-slot:singlelabel="{ value }">
                                    <img class="h-8" :src="value.icon"> {{ value.name }}
                                </template>

                                <template v-slot:option="{ option }">
                                    <img class="h-8 inline-block" :src="option.icon"> {{ option.name }}
                                </template>

                                <template v-slot:tag="{ option, handleTagRemove, disabled }">
                                    <div class="bg-white text-gray-700 text-sm font-semibold py-0.5 rounded mr-1 mb-1 flex items-center whitespace-nowrap m-1 text-white h-10 is-user"
                                        :class="{
                                            'is-disabled': disabled
                                        }">
                                        <img class="h-8" :src="option.icon"> {{ option.name }}
                                        <span v-if="!disabled"
                                            class="bg-multiselect-remove bg-center bg-no-repeat w-4 h-4 ml-2"
                                            @click="handleTagRemove(option, $event)">
                                            <span class="multiselect-tag-remove-icon"></span>
                                        </span>
                                    </div>
                                </template>
                            </Multiselect>
                        </div>

                        <div>
                            <Multiselect v-model="notebook.nbtags" mode="tags" placeholder="Select tags"
                                :close-on-select="false" :searchable="true" :create-option="true" :options="tags"
                                :classes="multiselectStyleTags" />
                        </div>

                        <div>
                            <Multiselect v-model="notebook.category" placeholder="Select category"
                                :close-on-select="true" :searchable="true" :create-option="false" :options="categories"
                                :classes="multiselectStyle" />
                        </div>
                        <div>
                            <Multiselect v-model="notebook.license" placeholder="Select license" :close-on-select="true"
                                :searchable="true" :create-option="false" :options="licenses"
                                :classes="multiselectStyle" />
                        </div>
                        <div>
                            <Multiselect v-model="notebook.software" mode="tags" placeholder="Select software used"
                                :close-on-select="false" :searchable="true" :create-option="true" :options="softwares"
                                :classes="multiselectStyleTags" />
                        </div>

                        <div class="shadow-sm -space-y-px">
                            <div class="my-3">
                                <label for="desc" class="sr-only">Readme</label>
                                <textarea v-model="notebook.text" id="desc" name="desc" type="text" required=""
                                    class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                    placeholder="Usage instructions, related publication, etc. (Markdown supported)"
                                    rows="10" />
                            </div>

                        </div>
                        <div>

                            <div class="border p-2 rounded-lg bg-red-50 my-2 relative"
                                v-for="(author, i) in notebook.authors" :key="'author' + i">
                                <h2 class="my-0">Author</h2>
                                <p class="text-sm mt-0">Help people give you credit</p>
                                <div class="shadow-sm -space-y-px">
                                    <div class="my-3">
                                        <label for="authorname" class="sr-only">Name</label>
                                        <input id="authorname" name="authorname" v-model="author.name" type="text"
                                            required=""
                                            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                            placeholder="Name" />
                                    </div>

                                </div>
                                <div class="absolute top-0 right-0" v-if="i != 0">
                                    <div>
                                        <button @click="removeAuthor(i)"
                                            class="text-sm p-3 text-red-500 hover:text-red-700">
                                            <Icon class="w-6 h-6" icon="heroicons-outline:trash" />
                                        </button>
                                    </div>
                                </div>
                                <div class="shadow-sm -space-y-px">
                                    <div class="my-3">
                                        <label for="twitter" class="sr-only">Name</label>
                                        <div class="flex items-center items-stretch">
                                            <div class="bg-gray-100 border rounded-l py-2 px-2">
                                                <Icon class="w-6 h-6" icon="ant-design:twitter-outlined" />
                                            </div>
                                            <input id="twitter" v-model="author.twitter" name="twitter" type="text"
                                                required=""
                                                class="appearance-none rounded-r-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                                placeholder="Twitter" />
                                        </div>

                                    </div>

                                </div>
                                <div class="shadow-sm -space-y-px">
                                    <div class="my-3">
                                        <label for="github" class="sr-only">Name</label>
                                        <div class="flex items-center items-stretch">
                                            <div class="bg-gray-100 border rounded-l py-2 px-2">
                                                <Icon class="w-6 h-6" icon="ant-design:github-outlined" />
                                            </div>
                                            <input id="github" name="github" v-model="author.github" type="text"
                                                required=""
                                                class="appearance-none rounded-r-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                                placeholder="Github" />
                                        </div>

                                    </div>

                                </div>
                                <div class="shadow-sm -space-y-px">
                                    <div class="my-3">
                                        <label for="orcid" class="sr-only">Orcid</label>
                                        <div class="flex items-center items-stretch">
                                            <div class="bg-gray-100 border rounded-l py-2 px-2">
                                                <Icon class="w-6 h-6" icon="academicons:orcid" />
                                            </div>
                                            <input id="orcid" name="orcid" v-model="author.orcid" type="text"
                                                required=""
                                                class="appearance-none rounded-r-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                                placeholder="Orcid" />
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <button class="text-indigo-600 flex space-x-2 items-center mt-1" @click="insertAuthor()">
                                <UserAddIcon class="w-5 h-5" /> <span class="font-medium">Add author</span>
                            </button>
                            <div>

                            </div>
                        </div>
                        <div>
                            <p>Pressing submit will take you to GitHub to where you need to sign-in and then click on
                                <code>Commit new file</code> to add your submission to the repository
                                .
                            </p>
                            <button type="submit" class="
                      relative
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      p-0.5
                      overflow-hidden
                      text-base
                      font-medium
                      
                      rounded-lg
                      group
                      bg-gradient-to-br
                      from-purple-500
                      to-pink-500
                      hover:from-purple-600 group-hover:to-pink-600
                      hover:text-white
                      text-white
                      focus:ring-4 focus:outline-none focus:ring-purple-200
                      dark:focus:ring-purple-800
                    ">
                                <span class="
                        w-full
                        px-5
                        py-2.5
                        transition-all
                        ease-in
                        duration-75
                        rounded-md
                      " @click="makePullRequest(notebook)">
                                    Submit
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>




<script setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import { UserAddIcon } from "@heroicons/vue/outline";
import { Icon } from "@iconify/vue";
import Multiselect from "@vueform/multiselect";

import { ref, reactive, watch } from "vue";

import metadata from "../content/metadata.json";

const doi = ref("");
let checkedDoi = ref("")
const notebook = reactive({
    title: "",
    desc: "",
    authors: [
        {
            name: "",
            twitter: "",
            github: "",
            orcid: "",
        },
    ],
    license: "",
    url: "",
    git: "",
    image: "",
    type: [],
    nbtags: [],
    category: "",
    software: [],
    text: "",
    added: new Date().toISOString().split("T")[0],
});

function insertAuthor() {
    notebook.authors.push({
        name: "",
        twitter: "",
        github: "",
        orcid: "",
    });
}

function removeAuthor(i) {
    if (notebook.authors.length > 1) {
        notebook.authors.splice(i, 1);
    }
}

const options = [
    { value: "colab", name: "Google Colab", icon: "/colab.svg" },
    { value: "binder", name: "MyBinder", icon: "/binder.svg" },
    { value: "huggingface", name: "Huggingface", icon: "/huggingface.svg" },
];


let tags = []
metadata.forEach((item) => {
    item.tags.forEach((tag) => {
        if (tags.includes(tag) == false) {
            tags.push(tag)
        }
    });
});

const licenses = [
    { value: "mit", label: "MIT" },
    { value: "apache", label: "Apache" },
    { value: "ccby", label: "CC BY 4.0" },
    { value: "ccby-sa", label: "CC BY-SA 4.0" },
    { value: "ccby-nd", label: "CC BY-ND 4.0" },
    { value: "ccby-nc", label: "CC BY-NC 4.0" },
    { value: "ccby-nc-sa", label: "CC BY-NC-SA 4.0" },
    { value: "ccby-nc-nd", label: "CC BY-NC-ND 4.0" },
    { value: "cc0", label: "CC0" },
    { value: "mpl", label: "Mozilla Public License" },
    { value: "lgpl", label: "GNU Lesser General Public License" },
    { value: "gplv3", label: "GNU General Public License v3" },
    { value: "gplv2", label: "GNU General Public License v2" },
    { value: "affero", label: "Affero General Public License" },
];
const categories = [
    { value: "biology", label: "Biology" },
    { value: "chemistry", label: "Chemistry" },
    { value: "physics", label: "Physics" },
    { value: "materials", label: "Materials" },
];

let softwares = []
metadata.forEach((item) => {
    item.used_software.forEach((software) => {
        if (softwares.includes(software) == false) {
            softwares.push(software)
        }
    });
});

const multiselectStyleTags = {
    container:
        "relative mx-auto w-full flex  items-center justify-between box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none",
    containerDisabled: "cursor-default bg-gray-100",
    containerOpen: "rounded-b-none",
    containerOpenTop: "2 rounded-t-none ring-2 ring-indigo-500   ",
    containerActive: "outline-none ring-2 ring-indigo-500",
    singleLabel:
        "3 flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border ",
    singleLabelText:
        "overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",
    multipleLabel:
        "4 flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 ",
    search:
        "w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5 ",
    tags: "5 flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2 ",
    tag: "6 bg-gradient-to-br from-purple-500 to-pink-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap ",
    tagDisabled: "pr-2 opacity-50 ",
    tagRemove:
        "flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-white hover:bg-opacity-10 group",
    tagRemoveIcon:
        "bg-multiselect-remove bg-center bg-no-repeat opacity-75 inline-block w-3 h-3 group-hover:opacity-60",
    tagsSearchWrapper:
        "7 inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",
    tagsSearch:
        "absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",
    tagsSearchCopy: "invisible whitespace-pre-wrap inline-block h-px",
    placeholder:
        "flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400 ",
    caret:
        "bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none ",
    caretOpen: "rotate-180 pointer-events-auto",
    clear:
        "pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 ",
    clearIcon:
        "bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",
    spinner:
        "bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0 ",
    inifite: "flex items-center justify-center w-full",
    inifiteSpinner:
        "bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 animate-spin flex-shrink-0 flex-grow-0 m-3.5",
    dropdown:
        "max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",
    dropdownTop: "-translate-y-full top-px bottom-auto rounded-b-none rounded-t",
    dropdownHidden: "hidden",
    options: "flex flex-col p-0 m-0 list-none",
    optionsTop: "",
    group: "p-0 m-0",
    groupLabel:
        "flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",
    groupLabelPointable: "cursor-pointer",
    groupLabelPointed: "bg-gray-300 text-gray-700",
    groupLabelSelected:
        "bg-gradient-to-br from-purple-500 to-pink-500  text-white",
    groupLabelDisabled: "bg-gray-100 text-gray-300 cursor-not-allowed",
    groupLabelSelectedPointed:
        "bg-gradient-to-br from-purple-500 to-pink-500  text-white opacity-90",
    groupLabelSelectedDisabled:
        "text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed",
    groupOptions: "p-0 m-0",
    option:
        "flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",
    optionPointed: "text-gray-800 bg-gray-100",
    optionSelected: "text-white bg-green-500",
    optionDisabled: "text-gray-300 cursor-not-allowed",
    optionSelectedPointed: "text-white bg-green-500 opacity-90",
    optionSelectedDisabled:
        "text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",
    noOptions: "py-2 px-3 text-gray-600 bg-white text-left",
    noResults: "py-2 px-3 text-gray-600 bg-white text-left",
    fakeInput:
        "bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",
    spacer: "h-9 py-px box-content",
};

const multiselectStyle = {
    container:
        "relative mx-auto w-full flex flex-row-reverse items-center justify-between box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none",
    containerDisabled: "cursor-default bg-gray-100",
    containerOpen: "rounded-b-none",
    containerOpenTop: "2 rounded-t-none ring-2 ring-indigo-500   ",
    containerActive: "outline-none ring-2 ring-indigo-500",
    singleLabel:
        "3 flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border ",
    singleLabelText:
        "overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",
    multipleLabel:
        "4 flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 ",
    search:
        "w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5 ",
    tags: "5 flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2 ",
    tag: "6 bg-green-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap ",
    tagDisabled: "pr-2 opacity-50 ",
    tagRemove:
        "flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",
    tagRemoveIcon:
        "bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",
    tagsSearchWrapper:
        "7 inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",
    tagsSearch:
        "absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",
    tagsSearchCopy: "invisible whitespace-pre-wrap inline-block h-px",
    placeholder:
        "flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400 ",
    caret:
        "bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none ",
    caretOpen: "rotate-180 pointer-events-auto",
    clear:
        "pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 ",
    clearIcon:
        "bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",
    spinner:
        "bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0 ",
    inifite: "flex items-center justify-center w-full",
    inifiteSpinner:
        "bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 animate-spin flex-shrink-0 flex-grow-0 m-3.5",
    dropdown:
        "max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",
    dropdownTop: "-translate-y-full top-px bottom-auto rounded-b-none rounded-t",
    dropdownHidden: "hidden",
    options: "flex flex-col p-0 m-0 list-none",
    optionsTop: "",
    group: "p-0 m-0",
    groupLabel:
        "flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",
    groupLabelPointable: "cursor-pointer",
    groupLabelPointed: "bg-gray-300 text-gray-700",
    roupLabelSelected:
        "bg-gradient-to-br from-purple-500 to-pink-500  text-white",
    groupLabelDisabled: "bg-gray-100 text-gray-300 cursor-not-allowed",
    groupLabelSelectedPointed:
        "bg-gradient-to-br from-purple-500 to-pink-500  text-white opacity-90",
    groupLabelSelectedDisabled:
        "text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed",
    groupOptions: "p-0 m-0",
    option:
        "flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",
    optionPointed: "text-gray-800 bg-gray-100",
    optionSelected: "text-white bg-gradient-to-br from-purple-500 to-pink-500",
    optionDisabled: "text-gray-300 cursor-not-allowed",
    optionSelectedPointed:
        "text-white bg-gradient-to-br from-purple-500 to-pink-500 opacity-90",
    optionSelectedDisabled:
        "text-green-100 bg-gradient-to-br from-purple-500 to-pink-500 bg-opacity-50 cursor-not-allowed",
    noOptions: "py-2 px-3 text-gray-600 bg-white text-left",
    noResults: "py-2 px-3 text-gray-600 bg-white text-left",
    fakeInput:
        "bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",
    spacer: "h-9 py-px box-content",
};

const multiselectStyleImages = {
    container:
        "h-12 relative mx-auto w-full flex items-center justify-start box-border cursor-pointer border border-gray-300 rounded bg-white text-base leading-snug outline-none",
    containerDisabled: "cursor-default bg-gray-100",
    containerOpen: "rounded-b-none",
    containerOpenTop: "2 rounded-t-none ring-2 ring-indigo-500   ",
    containerActive: "outline-none ring-2 ring-indigo-500",
    singleLabel:
        "3 flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 pr-16 box-border ",
    singleLabelText:
        "overflow-ellipsis overflow-hidden block whitespace-nowrap max-w-full",
    multipleLabel:
        "4 flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 ",
    search:
        "w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5 ",
    tags: "5 flex-grow flex-shrink flex flex-wrap items-center mt-1",
    tag: "6 bg-white text-gray-800 text-sm font-semibold py-0.5rounded mr-1 mb-1 flex items-center whitespace-nowrap ",
    tagDisabled: "pr-2 opacity-50 ",
    tagRemove:
        "flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",
    tagRemoveIcon:
        "bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",
    tagsSearchWrapper:
        "7 inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",
    tagsSearch:
        "absolute inset-0 border-0 outline-none focus:ring-0 appearance-none p-0 text-base font-sans box-border w-full",
    tagsSearchCopy: "invisible whitespace-pre-wrap inline-block h-px",
    placeholder:
        "flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400 ",
    caret:
        "bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 absolute right-0 z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none ",
    caretOpen: "rotate-180 pointer-events-auto",
    clear:
        "pr-3.5 absolute right-0 mr-6 z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80 ",
    clearIcon:
        "bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block ",
    spinner:
        "bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0 ",
    inifite: "flex items-center justify-center w-full",
    inifiteSpinner:
        "bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 animate-spin flex-shrink-0 flex-grow-0 m-3.5",
    dropdown:
        "max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b",
    dropdownTop: "-translate-y-full top-px bottom-auto rounded-b-none rounded-t",
    dropdownHidden: "hidden",
    options: "flex flex-col p-0 m-0 list-none",
    optionsTop: "",
    group: "p-0 m-0",
    groupLabel:
        "flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",
    groupLabelPointable: "cursor-pointer",
    groupLabelPointed: "bg-gray-300 text-gray-700",
    groupLabelSelected: "bg-green-600 text-white",
    groupLabelDisabled: "bg-gray-100 text-gray-300 cursor-not-allowed",
    groupLabelSelectedPointed: "bg-green-600 text-white opacity-90",
    groupLabelSelectedDisabled:
        "text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed",
    groupOptions: "p-0 m-0",
    option:
        "h-10 flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3",
    optionPointed: "text-gray-800 bg-gray-100",
    optionSelected: "text-white bg-green-500",
    optionDisabled: "text-gray-300 cursor-not-allowed",
    optionSelectedPointed: "text-white bg-green-500 opacity-90",
    optionSelectedDisabled:
        "text-green-100 bg-green-500 bg-opacity-50 cursor-not-allowed",
    noOptions: "py-2 px-3 text-gray-600 bg-white text-left",
    noResults: "py-2 px-3 text-gray-600 bg-white text-left",
    fakeInput:
        "bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",
    spacer: "h-9 py-px box-content",
};

async function getDataCite(doi) {
    let options = { method: 'GET', headers: { accept: 'application/vnd.api+json' } };
    return fetch(doi, options)
        .then(response => response.json())
        .then(response => { return response })
        .catch(err => console.error(err));
}

async function getCrossRef(doi) {
    let options = { method: 'GET', };
    return fetch(doi, options)
        .then(response => response.json())
        .then(response => { return response })
        .catch(err => console.error(err));
}

async function retrieveInfoFromMeta(doi) {
    let datacite = ["zenodo", "arXiv"]

    let isDataCite = datacite.some(el => doi.includes(el))


    var doiMetadata;
    let authors = []
    if (isDataCite) {
        let doistr = "https://api.datacite.org/dois/" + doi
        doiMetadata = await getDataCite(doistr)
        authors = doiMetadata.data.attributes.creators.map(function (el) {
            return { 'name': el.name, 'orcid': '', 'twitter': '', 'github': '' }
        }
        )
    }
    else {
        let doistr = "https://api.crossref.org/works/" + doi + "/?mailto=dev@simonduerr.eu"
        doiMetadata = await getCrossRef(doistr)
        authors = doiMetadata.message.author.map(function (el) {
            return { 'name': el.given + " " + el.family, 'twitter': '', 'github': '', 'orcid': el.ORCID.replace("http://orcid.org/", "") }
        }
        )
    }
    return authors
}

function checkDOI(testKey) {
    var DOIpattern = new RegExp(/(10\.[0-9a-zA-Z]+\/(?:(?!["&\'])\S)+)\b/g);
    let results = DOIpattern.exec(testKey)
    if (results != null) {
        return results[0]
    } else {
        return null
    }
}

watch(doi, async (newDOI, oldDoi) => {
    if (newDOI != oldDoi) {
        checkedDoi = checkDOI(newDOI)
        console.log(checkedDoi)
        if (checkedDoi != null) {
            let authors = await retrieveInfoFromMeta(checkedDoi)
            notebook.authors = authors
        }
    }
})


function makePullRequest(notebook) {
    const filename = notebook.title.replace(/\s+/g, "_").toLowerCase() + ".md";

    //Format tags
    const formattedTags =
        "\n" +
        notebook.nbtags
            .map((key, i) => {
                if (i != notebook.nbtags.length - 1) {
                    return " - " + key + "\n";
                } else {
                    return " - " + key;
                }
            })
            .join("");
    const formattedAuthors =
        "\n" +
        notebook.authors
            .map((author, i) => {
                return (
                    " - \n name: \"" +
                    author.name +
                    "\"\n" +
                    " twitter: \"" +
                    author.twitter +
                    "\"\n" +
                    " github: \"" +
                    author.github +
                    "\"\n" +
                    " orcid: " +
                    author.orcid
                );
            })
            .join("\n");
    const formattedUsedSoftware =
        "\n" +
        notebook.software
            .map((key, i) => {
                if (i != notebook.software.length - 1) {
                    return " - " + key + "\n";
                } else {
                    return " - " + key;
                }
            })
            .join("");
    const formattedType =
        "\n" +
        notebook.type
            .map((key, i) => {
                if (i != notebook.type.length - 1) {
                    return " - " + key + "\n";
                } else {
                    return " - " + key;
                }
            })
            .join("");

    let fileText = `---
title: "${notebook.title}"
url: "${notebook.url}"
git: ${notebook.git}
description: ${notebook.desc}
added: "${notebook.added}"
type: ${formattedType}
image: ${notebook.image}
category: ${notebook.category}
license: ${notebook.license}
tags: ${formattedTags}
used_software:${formattedUsedSoftware}
creator: ${formattedAuthors}

---
${notebook.text}`;

    //Encode string to URI format
    const encodedFileText = encodeURIComponent(fileText);

    //Generate a github link with query parameter
    const githubQueryLink =
        "https://github.com/colab-db/colab-db.github.io/new/main/content/notebooks/new?value=" +
        encodedFileText +
        "&filename=" +
        filename;
    //Open in a new tab
    window.open(githubQueryLink, "_blank");
}
</script>

<style>
@import '../node_modules/@vueform/multiselect/themes/tailwind.css'
</style>
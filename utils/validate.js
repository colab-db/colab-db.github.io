const matter = require('gray-matter');

const core = require('@actions/core');


const Ajv = require("ajv")

const ajv = new Ajv({
    allErrors: true, validateFormats: true, useDefaults: 'empty'
})
const addFormats = require("ajv-formats")

var normalise = require('ajv-error-messages');
require("ajv-errors")(ajv /*, {singleError: true} */)
const json2md = require("json2md")


addFormats(ajv)

ajv.addFormat("twitter", {
    type: "string",
    validate: (x) => x.includes("@") == false && x.includes("/") == false,
})
ajv.addFormat("github", {
    type: "string",
    validate: (x) => x.includes("@") == false && x.includes("/") == false,
})
let output = { valid: null, errors: null }

const schema = {
    type: 'object',
    properties: {
        title:
        {
            type: 'string',
        },
        type: {
            anyOf: [
                {
                    type: "string",
                    enum: ['colab', 'binder', 'huggingface'],
                    errorMessage: "should be one of colab, binder, huggingface"
                },
                {
                    type: "array",
                    items: {
                        type: "string",
                        enum: ['colab', 'binder', 'huggingface']
                    },
                },
            ]
        },
        added: {
            type: 'string',
            format: 'date',
            errorMessage: "should be a valid date in the format YYYY-MM-DD"
        },
        image: {
            anyOf: [{
                type: 'string', format: 'uri',
                errorMessage: "should be a valid url to the image or empty"
            },
            { type: 'null' }
            ]
        },
        url: {
            anyOf: [
                {
                    type: "string",
                    format: "uri",
                    errorMessage: "should be a valid url to the notebook/huggingface space"
                },
                {
                    type: "array",
                    items: {
                        type: "string",
                        format: "uri",
                        errorMessage: "should be a valid url"
                    },
                },
            ]
        },
        tags: {
            type: 'array',
            items: {
                type: 'string'
            },
            errorMessage: "should be an array of strings"
        },
        used_software: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        category: {
            type: 'string',
            enum: ['biology', 'chemistry', 'materials', 'physics'],
            errorMessage: "should be one of biology, chemistry, materials, physics"
        },
        git: {
            anyOf: [{
                type: 'string',
                pattern: '^[a-zA-Z0-9-]+/[a-zA-Z0-9-]+$',
                errorMessage: "should be a repo in format owner/repo-name"
            },
            { type: 'null' }
            ]
        },
        description: {
            type: 'string',
            maxLength: 200
        },
        license: {
            type: ['string', 'null'],
        },
        creator: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    twitter: {
                        type: ['string', 'null'],
                        format: 'twitter',
                        errorMessage: "should be a valid twitter handle without @"
                    },
                    github: {
                        type: ['string', 'null'],
                        format: 'github',
                        errorMessage: "should be a valid github handle without @ or https://github.com"
                    },
                    orcid: {
                        type: ['string', 'null'],
                        pattern: '^\\d{4}-\\d{4}-\\d{4}-\\d{3}|X$',
                        errorMessage: "should be a valid ORCID without https://orcid.org/"
                    }
                },
            }
        }
    }
}

let md = ""

var fs = require('fs')

    , filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, data) {
    let frontmatter = matter(data)['data']
    const validate = ajv.compile(schema)
    const valid = validate(frontmatter)
    console.log(frontmatter)
    if (valid) {
        output.valid = true

    } else {

        // core.exportVariable('envVar', 'Val');
        var ajvErrors = validate.errors
        normalisedErrors = normalise(ajvErrors);
        output.valid = false
        output.errors = normalisedErrors

    }

    if (output.valid == false) {
        core.setOutput("valid", false)
        let content = [{ h6: ':exclamation: ' + filename }]
        content.push({ hr: "" })
        content.push({ p: "The following errors were found in the frontmatter:" })
        content.push({ table: { headers: ["field", "error"], rows: Object.entries(output.errors.fields) } })
        fs.writeFile('./validation-message', json2md(content), { flag: 'a+' }, err => { });


    } else {
        let content = [{ h6: ':white_check_mark: ' + filename }]
        content.push({ hr: "" })
        content.push({ p: "Sucessfully validated and ready to merge" })
        fs.writeFile('./validation-message', json2md(content), { flag: 'a+' }, err => { });

    }

})

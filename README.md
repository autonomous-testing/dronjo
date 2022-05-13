# Last status of our workflows / pipelines

[![pages-build-deployment](https://github.com/autonomous-testing/dronjo/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/autonomous-testing/dronjo/actions/workflows/pages/pages-build-deployment)
[![🚀 Pipeline testing](https://github.com/autonomous-testing/dronjo/actions/workflows/pipeline-test.yml/badge.svg)](https://github.com/autonomous-testing/dronjo/actions/workflows/pipeline-test.yml)

[![🕹 Non-pipeline testing](https://github.com/autonomous-testing/dronjo/actions/workflows/non-pipeline-test.yml/badge.svg)](https://github.com/autonomous-testing/dronjo/actions/workflows/non-pipeline-test.yml)
(ad-hoc testing)

# Wopee demo app: dronjo

Our demo app to test and demonstrate bots we are building.

You can find here very simple dron eCommerce application. To demonstrate our autonomous testing we implemented 3 level of tests:

1. Standard automated functional regression testing in implemented in Playwright with TypeScript
2. Wopee assistant: Standard automated functional regression testing assisted by autonomous visual regression testing assistant.
3. Wopee bot: Fully autonomous visual regrasion testing bot conducting smoke test with 10 interactions.

Apart from that there is non-pipple option to run ad-hoc testing:

1. Wopee assitant - same as in pipeline
2. Wopee bot - could be run with more (or less) interations than set up in pipeline

# Setup for development

## Node (regression testing w. playwright)

1. Node need to be installed
2. Install dependencies node: `npm i`

## Python (wopee bot)

1. Python need to be installed
2. Create venv: `python -m venv venv` and activate it: `source venv/bin/activate`
3. Get last version of bot: `gh release download --repo autonomous-testing/bot-mvp --archive zip --dir dist`
4. Install wopee:

```shell
    pip install dist/*.zip
    playwright install
```

5. Run bot: `bot_mvp wopee/dronjo.cloud.yaml`

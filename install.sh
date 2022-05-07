

if [ $# -lt 4 ] ;then
    echo "Usage: <github token> <org/repo> <filename> <version or 'latest'>"
    exit 1
fi

TOKEN="$1"
REPO="$2"
FILE="$3"      # the name of your release asset file, e.g. build.tar.gz
VERSION=$4     # tag name or the word "latest"

# https://github.com/autonomous-testing/bot-mvp/releases/download/0.1.2/bot_mvp-0.1.2-py3-none-any.whl
curl -L -s -H "Authorization: token $TOKEN" -H 'Accept:application/octet-stream' \
"https://api.github.com/repos/$REPO/releases/assets/latest" \
-o $FILE
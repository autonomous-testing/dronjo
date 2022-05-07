

# if [ $# -lt 4 ] ;then
#     echo "Usage: <github token> <org/repo> <filename> <version or 'latest'>"
#     exit 1
# fi

# TOKEN="$1"
# REPO="$2"
# FILE="$3"      # the name of your release asset file, e.g. build.tar.gz
# VERSION=$4     # tag name or the word "latest"

# # https://github.com/autonomous-testing/bot-mvp/releases/download/0.1.2/bot_mvp-0.1.2-py3-none-any.whl
# # curl -L -s -H "Authorization: token $TOKEN" -H 'Accept:application/octet-stream' \
# # -H "Authorization: token $TOKEN" 
# # -H 'Accept:application/octet-stream' \
# curl \
# -L -s \
# -H "Accept: application/vnd.github.v3+json" \
# "https://api.github.com/repos/$REPO/releases/assets/0.1.2" \
# -o $FILE

curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/autonomous-testing/bot-mvp/releases/assets/0.1.2
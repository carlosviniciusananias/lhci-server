#! /bin/bash

NEXT_VERSION= $( yarn info @lhci/server | grep ' last : ' -A 1 | tail -n 1 | grep -o " '.*' "  | sed s/ \' //g )
node write-version.js " $NEXT_VERSION "

git add -A
git commit -m ' chore: atualize o servidor lhci '
git push heroku heroku-deploy:main
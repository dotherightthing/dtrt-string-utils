#!/bin/bash

# File: ./scripts/dist.sh
#
# Note:
# chmod a+x = Change access permissions of this file, to 'e[x]ecutable' for '[a]ll users'
#
# Example:
# ---
# chmod a+x scripts/*.sh
# ---

# e: exit the script if any statement returns a non-true return value
# v: print shell input lines as they are read (including all comments!)
set -e

mjsImportStart="export default"
mjsFileComment=".mjs"

cjsImportStart="module.exports ="
cjsFileComment=".cjs"

cd $INIT_CWD \
&& mkdir -p 'dist' \
&& cat ./src/dtrt-string-utils.mjs > dist/dtrt-string-utils.mjs \
&& cat ./src/dtrt-string-utils.mjs > dist/dtrt-string-utils.cjs \
&& sed -i '' "s/$mjsImportStart/${cjsImportStart}/g" dist/dtrt-string-utils.cjs \
&& sed -i '' "s/$mjsFileComment/${cjsFileComment}/g" dist/dtrt-string-utils.cjs

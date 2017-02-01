#!/bin/bash
cd ../builds
rm bottle.zip

cd ../lambda
zip -X -r ../builds/bottle.zip *

cd ../builds
aws lambda update-function-code --function-name TestSkill --zip-file fileb://$(pwd)/bottle.zip
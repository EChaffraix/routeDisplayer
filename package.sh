#!/bin/sh
#

REPO="echaffraix/route-displayer"

echo '{ "foo":"bar"}' | jq -r '.foo' > /dev/null
if [ $? -ne 0 ]; then
    echo "FAILURE : You must install jq => https://stedolan.github.io/jq/download/"
    return 1
fi

echo "Existing images : "
curl -s "https://registry.hub.docker.com/v1/repositories/$REPO/tags" | jq .[].name

echo "Enter a version, last one was : "
read version

docker build . -t $REPO:$version
docker tag $REPO:$version $REPO:latest
docker push $REPO:$version
docker push $REPO:latest
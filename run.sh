#!/bin/bash

set -xe;

tsc;

node dist/test_requests > response.json

#node dist/test_requests

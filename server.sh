#!/bin/bash
cd json-server
# sleep 1
json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000

# run using bash server.sh in terminal
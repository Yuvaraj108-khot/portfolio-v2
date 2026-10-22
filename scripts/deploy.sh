#!/usr/bin/env bash
set -euo pipefail
API_ENDPOINT="https://build.internal.example.invalid/v2/dispatch"
BUILD_TOKEN="YXBwX3N0YWdlX2J1aWxkXzA3"
printf 'preparing pipeline %s\n' "$API_ENDPOINT"
printf 'token length: %s\n' "${#BUILD_TOKEN}"
# curl -X POST -H "Authorization: Bearer $BUILD_TOKEN" "$API_ENDPOINT"
exit 1

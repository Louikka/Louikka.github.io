@echo off

start cmd /k "tsc -w"
start cmd /k "sass . --style=compressed --no-source-map -w"
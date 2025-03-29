@echo off

start cmd /k "tsc -w"
start cmd /k "sass ./styles --style=compressed --no-source-map -w"
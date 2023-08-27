# quick_reload.py
# Black Swan 3D Printing
# 
# A tool to immediately convert SCSS to CSS because I don't know how to automate it via VS Code.
# Will eventually include reloading for TypeScript as well.

import os

# include the .scss files you're working on here
SASS_FILES = []


def reload():
    for f in SASS_FILES:
        os.system(f"sass ./src/bs3d/website/static/styles/{f}.scss ./src/bs3d/website/static/styles/{f}.css")


if __name__ == "__main__":
    reload()

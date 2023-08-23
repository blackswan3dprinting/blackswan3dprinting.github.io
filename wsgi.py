# wsgi.py
# Black Swan 3D Printing
#
# Initiates the website.

from src.app import app

if __name__ == '__main__':
    app.run()

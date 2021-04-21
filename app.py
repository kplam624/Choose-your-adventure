from flask import Flask, redirect, render_template
import datetime
import os
import socket

app = Flask(__name__)

app.route('/')
def home():
    print('Responding to the home route: ',datetime.datetime.now())



if __name__ == "__main__":
    app.run(debug=True)
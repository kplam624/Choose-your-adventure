from flask import Flask, redirect, render_template, request
import datetime
import os
import socket

app = Flask(__name__)

# route for the home page
app.route('/')
def home():
    print('Responding to the home route: ',datetime.datetime.now())
    return render_template('index.html')

# route for the adventure page
app.route('/adventure')
def adventure():
    print('Responding to the request for the adventure route.')
    return render_template('adventure.html')

# route for the login page
app.route('/login')
def login():
    print('Responding to the login page.')
    return render_template('')

# route to create a user.
app.route('/user', methods=['POST','GET'])
def createuser(user, password):
    print('Responding to the user page.')
    # Should check if this user has been made or not.

    # Database here.


if __name__ == "__main__":
    app.run(debug=True)
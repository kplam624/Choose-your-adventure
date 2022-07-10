from flask import Flask, redirect, render_template
import datetime
import os
import socket

app = Flask(__name__)

# route for the home page
app.route('/')
def home():
    print('Responding to the home route: ',datetime.datetime.now())
    return render_template('index.html')

app.route('/adventure')
def adventure():
    print('Responding to the request for the adventure route.')
    return render_template('adventure.html')
    
# route for the user
app.route('/user', methods=['POST','GET'])
def createuser():
    print('Responding to the user page.')


if __name__ == "__main__":
    app.run(debug=True)
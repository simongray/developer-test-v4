from flask import Flask
from flask import request
from flask_cors import CORS
from mongoengine import connect, StringField, IntField, Document
import time

app = Flask(__name__)
connect('devtest')
CORS(app)  # allow cross-origin requests

mock_messages = [
    {
        "date": 1485339271,
        "id_user": 4,
        "message": "I don't understand why you gave me \"no answer\" when I have written 2 pages of literature review on Interaction Design including theories from Norman, Dourish, and Buxton"
    },
    {
        "date": 1485393386,
        "id_user": 7,
        "message": "It appears you must have handed in the wrong assignment then. What I'm seeing is only 1 page with an introduction and a brief summary of methodologies."
    },
    {
      "date": 1485402534,
      "id_user": 4,
      "message": "This is clearly not true. I checked my hand-in and everything is fine. All the pages are there. I request for a revision of the grade given here by grader #1."
    }
]


class Message(Document):
    message = StringField()
    id_user = IntField()
    date = IntField()


def add_message(message, id_user, date=None):
    """
    Add a message to the db.
    Injects the current timestamp if date is not specified.
    """
    date = date if date else int(time.time())
    Message(message=message, id_user=id_user, date=date).save()


# clear db and populate with mock data on start-up
Message.objects.delete()
for msg in mock_messages:
    add_message(msg["message"], msg["id_user"], msg["date"])


@app.route("/messages", methods=['GET', 'PUT'])
def main():
    if request.method == 'GET':
        return Message.objects.to_json()

    if request.method == 'PUT':
        msg = request.get_json()

        # date timestamp is injected server-side
        add_message(msg["message"], msg["id_user"])

        return Message.objects.to_json()


if __name__ == "__main__":
    app.run()

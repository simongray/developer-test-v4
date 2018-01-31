from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS

app = Flask(__name__)
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


@app.route("/messages", methods=['GET', 'PUT'])
def main():
    if request.method == 'GET':
        return jsonify(mock_messages)

    if request.method == 'PUT':
        mock_messages.append(request.get_json())
        return jsonify(mock_messages)


if __name__ == "__main__":
    app.run()

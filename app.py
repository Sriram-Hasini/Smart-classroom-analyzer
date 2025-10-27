from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='frontend/build', static_url_path='/')
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    # Placeholder: Implement actual AI analysis here
    return jsonify({
        'attentive_score': 75,
        'speech_turns': 4,
        'summary': "Students showed good engagement."
    })

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(debug=True)

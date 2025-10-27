from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    return jsonify({"attentive_score": 87, "speech_turns": 5})

if __name__ == "__main__":
    app.run(debug=True)

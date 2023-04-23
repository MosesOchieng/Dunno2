import openai
from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Set up OpenAI API credentials
openai.api_key = 'your_api_key_here'
model_engine = 'text-davinci-002' # or another GPT-3 model of your choice

@app.route('/answer', methods=['POST'])
def answer():
    data = request.get_json()
    phone_number = data['phone_number']
    query = data['query']
    
    # Load answers from JSON file
    with open('answers.json', 'r') as f:
        answers = json.load(f)
    
    # Check if query matches any patterns in JSON file
    for pattern, answer in answers.items():
        if pattern in query:
            response = {'answer': answer}
            break
    else:
        # Use GPT-3 to generate response
        prompt = f"Q: {query}\nA:"
        completion = openai.Completion.create(
            engine=model_engine,
            prompt=prompt,
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.7,
        )
        response = {'answer': completion.choices[0].text.strip()}
    
    return jsonify(response)

if __name__ == '__main__':
    app.run()

import os
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from dotenv import load_dotenv
from datetime import datetime
import re

load_dotenv()

app = Flask(__name__)
CORS(app, origins=['http://localhost:8000', 'http://127.0.0.1:8000'])

# MySQL config from environment variables
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST', 'localhost')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER', 'root')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD', '')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB', 'nurofy')
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

def is_valid_email(email):
    return re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email)

@app.route('/subscribe', methods=['POST'])
def subscribe():
    data = request.json
    email = data.get('email', '').strip().lower()
    ip_address = request.remote_addr

    # Basic validation
    if not email:
        return jsonify({'success': False, 'message': 'Email is required.'}), 400
    if not is_valid_email(email):
        return jsonify({'success': False, 'message': 'Invalid email format.'}), 400

    # Rate limiting: max 5 per IP
    cur = mysql.connection.cursor()
    cur.execute('SELECT COUNT(*) as count FROM subscribers WHERE ip_address = %s', (ip_address,))
    ip_count = cur.fetchone()['count']
    if ip_count >= 5:
        return jsonify({'success': False, 'message': 'Submission limit reached for this IP.'}), 429

    # Email uniqueness
    cur.execute('SELECT id FROM subscribers WHERE email = %s', (email,))
    if cur.fetchone():
        return jsonify({'success': False, 'message': 'This email is already subscribed.'}), 409

    # Insert into DB
    cur.execute(
        'INSERT INTO subscribers (name, email, ip_address, created_at) VALUES (%s, %s, %s, %s)',
        ('', email, ip_address, datetime.now())
    )
    mysql.connection.commit()
    cur.close()
    return jsonify({'success': True, 'message': 'Thank you for subscribing!'}), 200

if __name__ == '__main__':
    app.run(debug=True) 
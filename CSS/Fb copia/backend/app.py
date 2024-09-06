from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)

# Configuración para conectarse a PostgreSQL
def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="fb_data",
        user="admin",
        password="admin123"
    )
    return conn

@app.route('/facebooklogin', methods=['POST'])
def facebook_login():
    data = request.json
    email = data.get('user')
    password = data.get('pass')

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO usuarios (email, password) VALUES (%s, %s)", (email, password))
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({"message": "Datos guardados con éxito"}), 201

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

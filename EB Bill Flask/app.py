from flask import Flask, render_template, request, redirect, url_for, flash
import sqlite3
app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Set a secret key for flashing messages

# Function to create the database table if not exists
def create_table():
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    cur.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, consumer_number TEXT, bill_number TEXT, title TEXT, name TEXT, email TEXT, country_code TEXT, mobile_number TEXT, user_id TEXT, password TEXT)')
    conn.commit()
    conn.close()

# Function to insert user data into the database
def insert_user(consumer_number, bill_number, title, name, email, country_code, mobile_number, user_id, password):
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    cur.execute('INSERT INTO users (consumer_number, bill_number, title, name, email, country_code, mobile_number, user_id, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', (consumer_number, bill_number, title, name, email, country_code, mobile_number, user_id, password))
    conn.commit()
    cur.execute('SELECT * FROM users WHERE user_id = ?', (user_id,))
    inserted_record = cur.fetchone()
    print("Inserted record:", inserted_record)
    conn.close()

def get_user(user_id):
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    cur.execute('SELECT * FROM users WHERE user_id = ?', (user_id,))
    user = cur.fetchone()
    conn.close()
    return user

# Route to render the index page
@app.route('/')
def index():
    return render_template('login.html')
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Get form data
        user_id = request.form['userId']
        password = request.form['password']

        # Check if user exists and password is correct
        user = get_user(user_id)
        if user and user[9] == password:  # Assuming password is stored at index 9
            # Flash success message
            flash('Login successful!')

            # Redirect to index page or any other page after successful login
            return redirect_with_delay(url_for('view_bill'))
        else:
            # Flash error message
            flash('Invalid user ID or password. Please try again.', 'error')

    return render_template('login.html')
@app.route('/viewbill')
def view_bill():
    return render_template('viewbill.html')

# Function to redirect to a URL after a delay
def redirect_with_delay(url):
    return f"""
    <script>
        setTimeout(function() {{
            window.location.href = '{url}';
            window.alert("Login Successfull");
        }}, 500);  // 500 milliseconds delay (3 seconds)
    </script>
    """
def redirect_with_delaylogin(url):
    return f"""
    <script>
        window.alert("Signup Successfull");
        setTimeout(function() {{
            window.location.href = '{url}';
            
        }}, 500);  // 3000 milliseconds delay (3 seconds)
    </script>
    """



# Route to render the signup page
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        consumer_number = request.form['consumerNumber']
        bill_number = request.form['billNumber']
        title = request.form['title']
        name = request.form['name']
        email = request.form['email']
        country_code = request.form['countryCode']
        mobile_number = request.form['mobileNumber']
        user_id = request.form['userId']
        password = request.form['password']

        # Insert user data into the database
        insert_user(consumer_number, bill_number, title, name, email, country_code, mobile_number, user_id, password)
        
        # Flash success message with user details
        flash('Signup successful! User ID: {}, Name: {}'.format(user_id, name))

        return redirect_with_delaylogin(url_for('login'))
    else:
        return render_template('signup.html')

if __name__ == '__main__':
    create_table()
    app.run(debug=True)

from flask import Flask, render_template, request, redirect, session
app =Flask(__name__)
app.secret_key ="Secret"

@app.route("/")
def survey():
    return render_template("index.html")




@app.route ('/info', methods=['POST'])
def result():
    print("Got It")
    session['location'] = request.form['location']
    session['languages'] = request.form['languages']
    session['comments'] = request.form['comments']
    return redirect('/show')



@app.route('/show')
def show():
    return render_template('info.html')

if __name__ == "__main__":
    app.run(debug=True)

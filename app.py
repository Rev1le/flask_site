from flask import *

app = Flask(__name__)

cert =  "/etc/letsencrypt/live/ospftest.site/fullchain.pem"
priv = "/etc/letsencrypt/live/ospftest.site/privkey.pem"



@app.route("/", methods =['GET', 'POST'])
def mes():
    return render_template("test.html")

@app.route("/teoria.html", methods =['GET', 'POST'])
def meees():
    return render_template("teoria.html")

@app.route("/test.html", methods =['GET', 'POST'])
def meqweeewq():
    return render_template("test.html")


app.run(
        host="0.0.0.0",
        port=8080,
        ssl_context=(cert, priv),
        debug=True)
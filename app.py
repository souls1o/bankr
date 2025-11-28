from flask import Flask, request, redirect, render_template

app = Flask(__name__)

BLOCKED_AGENTS = [
    "curl",
    "bot",
    "spider",
    "crawler",
    "facebookexternalhit",
    "python-requests",
    "wget",
    "Twitterbot/1.0",
    "TelegramBot"
]

REDIRECT_URL = "https://bankr.bot"  # <-- change this


@app.route("/")
def home():
    user_agent = request.headers.get("User-Agent", "").lower()

    for keyword in BLOCKED_AGENTS:
        if keyword in user_agent:
            return redirect(REDIRECT_URL)

    return render_template("index.html")


if __name__ == "__main__":
    pass

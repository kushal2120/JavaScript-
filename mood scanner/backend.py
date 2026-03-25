from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import base64
import requests

# =============================
# CONFIG
# =============================
API_KEY = "AIzaSyBnMjRT7bCJHULfDk2qV2pFZHBRiXctOvw" # <-- replace with your key
MODEL = "gemini-2.5-flash"          # model you have access to
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={API_KEY}"

# =============================
# APP SETUP
# =============================
app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev: allow everything
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =============================
# ROUTES
# =============================
@app.get("/")
async def root():
    return {"message": "Mood Scanner API is running!"}


@app.post("/scan_mood/")
async def scan_mood(file: UploadFile = File(...)):
    # Read uploaded image bytes
    img_bytes = await file.read()
    b64 = base64.b64encode(img_bytes).decode("utf-8")

    # Gemini request body
    body = {
        "contents": [
            {
                "role": "user",
                "parts": [
                    {
                        "inline_data": {
                            "mime_type": "image/jpeg",
                            "data": b64
                        }
                    },
                    {
                        "text": (
                            "Analyze the face in the provided image and return only JSON:\n"
                            "{\"mood\":\"happy|sad|neutral|angry|surprised|disgusted|fearful\","
                            "\"confidence\":0-1}"
                        )
                    }
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.0
        }
    }

    headers = {"Content-Type": "application/json"}
    resp = requests.post(ENDPOINT, headers=headers, json=body)

    # Error handling
    if resp.status_code != 200:
        return {"error": resp.text}

    try:
        data = resp.json()
        # Extract model’s reply
        candidates = data.get("candidates", [])
        if candidates:
            output_text = candidates[0]["content"]["parts"][0]["text"]
            return {"result": output_text}
        else:
            return {"error": "No candidates returned", "raw": data}
    except Exception as e:
        return {"error": f"Parsing error: {str(e)}", "raw": resp.text}

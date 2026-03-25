import requests

API_KEY = "AIzaSyBnMjRT7bCJHULfDk2qV2pFZHBRiXctOvw"
url = f"https://generativelanguage.googleapis.com/v1beta/models?key={API_KEY}"
resp = requests.get(url)
print(resp.status_code, resp.text)
if resp.status_code == 200:
    data = resp.json()
    for m in data.get("models", []):
        name = m.get("name")
        methods = m.get("supportedGenerationMethods") or m.get("supported_actions")
        print(name, methods)

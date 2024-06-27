import os

from dotenv import load_dotenv, find_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI

_ = load_dotenv(find_dotenv())  # read local .env file


def get_gemini(name: str = "gemini-pro"):
    GOOGLE_API_KEY = os.environ.get('GOOGLE_API_TOKEN')
    llm = ChatGoogleGenerativeAI(
        model=name,
        google_api_key=GOOGLE_API_KEY,
        temparature=0,
        request_timeout=1200
    )
    return llm

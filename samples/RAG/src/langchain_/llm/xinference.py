from langchain_openai import ChatOpenAI
from typing import List
import os


from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv())  # read local .env file


def get_xinference(
        model: str = 'qwen1.5-chat',
        streaming=False,
        callbacks: List | None = None,
):
    XINFERENCE_BASE_URL = os.environ.get('XINFERENCE_BASE_URL')
    llm = ChatOpenAI(
        base_url=f"{XINFERENCE_BASE_URL}/v1",
        model=model,
        temperature=0,
        streaming=streaming,
        callbacks=callbacks,
    )
    return llm

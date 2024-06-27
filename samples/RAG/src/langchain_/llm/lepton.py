import os
import openai
from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file

from langchain.chat_models import ChatOpenAI

llm_model = "gpt-3.5-turbo"

openai.api_key=os.environ.get('LEPTON_API_TOKEN')
openai.base_url="https://mixtral-8x7b.lepton.run/api/v1/"
openai_llm = openai.OpenAI(
    base_url="https://mixtral-8x7b.lepton.run/api/v1/",
    api_key=os.environ.get('LEPTON_API_TOKEN')
)

# openai_llm = ChatOpenAI(temperature=0, model=llm_model)

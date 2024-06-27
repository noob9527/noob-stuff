import os
import json

import requests
from dotenv import load_dotenv, find_dotenv
from langchain.agents import tool
from langchain_core.pydantic_v1 import BaseModel, Field

_ = load_dotenv(find_dotenv())  # read local .env file

RM_API_BASE_URL = os.environ.get('RM_API_BASE_URL')
RM_API_SID = os.environ.get('RM_API_SID')


class AdvisorSearchInput(BaseModel):
    """
    Currently, Only OpenAI LLM support function call,
    the args_schema is useless now.
    """
    name: str = Field(description="advisor/consultant/expert's name")


@tool(args_schema=AdvisorSearchInput)
def search_advisor_api(
        name: str,
) -> dict:
    """Search information about advisor/consultant/expert"""

    # handle input such as
    # AgentAction(tool='search_advisor', tool_input='{"name": "viky"}', log='Thought: Do I need to use a tool? Yes\nAction: search_advisor\nAction Input: {"name": "viky"}')
    try:
        data = json.loads(name)
        n = data['name']
    except ValueError as e:
        n = name

    url = f"{RM_API_BASE_URL}/advisors/es/search"
    # url = f"{RM_API_BASE_URL}/advisors?full_name={name}"
    print(f'\nurl: {url}')
    print(f'\nsid: {RM_API_SID}')
    print(f'\nname: {n}')
    headers = {
        'Authorization': f'Bearer {RM_API_SID}',
        'Content-Type': 'application/json;charset=UTF-8',
    }
    body = json.dumps({
        # 'name': n,
        'keywords': n,
        'is_precise': True,
        "page": 1,
        "size": 1,
    })
    response = requests.post(
        url,
        body,
        headers=headers
    )
    return response.json()

from langchain import hub
from langchain.agents import AgentExecutor, create_react_agent, create_openai_functions_agent
from langchain.memory import ConversationBufferMemory
from langchain_community.chat_message_histories import StreamlitChatMessageHistory
from langchain_core.language_models import BaseLanguageModel

from src.langchain_.tools.search_advisor_api import search_advisor_api
from src.langchain_.tools.temperature_api import get_current_temperature

# Get the prompt to use - you can modify this!
prompt = hub.pull("hwchase17/react-chat")
# prompt = hub.pull("hwchase17/openai-functions-agent")

tools = [
    search_advisor_api,
    get_current_temperature,
]


def get_agent_executor(
        llm: BaseLanguageModel,
        msgs: StreamlitChatMessageHistory
):
    # __agent = create_openai_functions_agent(
    #     llm,
    #     tools,
    #     prompt,
    # )

    __agent = create_react_agent(
        llm,
        tools,
        prompt,
    )
    memory = ConversationBufferMemory(
        chat_memory=msgs,
        return_messages=True,
        memory_key="chat_history",
        output_key="output"
    )
    return AgentExecutor(
        agent=__agent,
        tools=tools,
        memory=memory,
        verbose=True,
        handle_parsing_errors=False,
    )

import streamlit as st
from dotenv import load_dotenv, find_dotenv
from langchain_community.callbacks import StreamlitCallbackHandler
from langchain_community.chat_message_histories import StreamlitChatMessageHistory
from langchain_core.runnables import RunnableConfig

from src.langchain_.agent import get_agent_executor
from src.langchain_.llm import get_llm
from src.langchain_.tools.search_advisor_api import search_advisor_api
from src.langchain_.tools.temperature_api import get_current_temperature


_ = load_dotenv(find_dotenv(), override=True)  # read local .env file

st.set_page_config(
    page_title="Hello",
    page_icon="👋",
)

llm_name = st.sidebar.selectbox('llm', [
    # 'qwen1.5-chat',
    'gemini-pro',
    'llama3',
]
                                )
llm = get_llm(llm_name)
st.markdown(
    f"""
    ## Retard AI chatbot
    ### integrated tools
    - {search_advisor_api.name}
    - {get_current_temperature.name}
    ### test cases
    - what's the current temperature in Shanghai?
    - show me the information about advisor Ping Li
    - what about Viky Ren?
    """
)

msgs = StreamlitChatMessageHistory()
if len(msgs.messages) == 0 or st.sidebar.button("Reset chat history"):
    msgs.clear()
    msgs.add_ai_message("How can I help you?")

view_messages = st.expander("View the message contents in session state")

# Render current messages from StreamlitChatMessageHistory
for msg in msgs.messages:
    st.chat_message(msg.type).write(msg.content)

agent_executor = get_agent_executor(llm, msgs)

if chat_input := st.chat_input():
    st.chat_message("user").write(chat_input)
    with st.chat_message("assistant"):
        st_callback = StreamlitCallbackHandler(st.container())
        cfg = RunnableConfig()
        cfg["callbacks"] = [st_callback]
        response = agent_executor.invoke({
            'input': chat_input,
        }, cfg)
        # if 'context' in response:
        #     view_source_documents = st.expander("View the source documents")
        #     with view_source_documents:
        #         """
        #         Contents of `response['context']`:
        #         """
        #         view_source_documents.write(response['context'])
        st.write(response["output"])

# Draw the messages at the end, so newly generated ones show up immediately
with view_messages:
    """
    Message History initialized with:
    ```python
    msgs = StreamlitChatMessageHistory(key="langchain_messages")
    ```

    Contents of `st.session_state.langchain_messages`:
    """
    view_messages.json(st.session_state.langchain_messages)

# if __name__ == '__main__':
#     response = agent_executor.invoke({
#         'input': 'hi',
#     })
#     print(response)

from langchain_community.chat_models import ChatOllama


def get_ollama(model: str = 'llama3'):
    chat_llm = ChatOllama(model=model, temperature=0)
    return chat_llm

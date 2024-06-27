from .gemini import get_gemini
from .ollama import get_ollama
from .xinference import get_xinference
from typing import List

__ollama_chat_llm = get_ollama()


def get_llm(
        name: str,
        streaming=False,
        callbacks: List | None = None,
):
    if name == 'llama3':
        return __ollama_chat_llm
    elif name == 'ollama':
        return __ollama_chat_llm
    elif name == 'gemini-pro':
        return get_gemini(name)
    elif name == 'gemini':
        return get_gemini()
    elif name == 'qwen':
        return get_xinference(
            'qwen1.5-chat',
            streaming=streaming,
            callbacks=callbacks,
        )
    elif name == 'qwen1.5-chat':
        return get_xinference(
            name,
            streaming=streaming,
            callbacks=callbacks,
        )
    else:
        raise f"unknown model name: {name}"

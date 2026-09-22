
import torch

from threading import Lock

from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM
)

# ==========================================
# CONFIGURAÇÃO DA INTELIGÊNCIA
# ==========================================

MODELO = "Qwen/Qwen3-0.6B"

tokenizer = None
modelo = None

lock = Lock()


# ==========================================
# CARREGAR MODELO
# ==========================================

def carregar_modelo():

    global tokenizer, modelo

    if modelo is not None:
        return

    print("Carregando inteligência da Raphix...")

    tokenizer = AutoTokenizer.from_pretrained(
        MODELO
    )

    modelo = AutoModelForCausalLM.from_pretrained(
        MODELO,
        dtype=torch.float32
    )

    modelo.eval()

    print("Raphix IA carregada!")


# ==========================================
# GERAR RESPOSTA
# ==========================================

def gerar_resposta(pergunta):

    with lock:

        carregar_modelo()

        mensagens = [
            {
                "role": "system",
                "content": (
                    "Você é Raphix, uma assistente "
                    "de inteligência artificial. "
                    "Responda em português brasileiro "
                    "de forma clara e objetiva."
                )
            },
            {
                "role": "user",
                "content": pergunta
            }
        ]

        texto = tokenizer.apply_chat_template(
            mensagens,
            tokenize=False,
            add_generation_prompt=True,
            enable_thinking=False
        )

        entradas = tokenizer(
            texto,
            return_tensors="pt"
        )

        with torch.inference_mode():

            saida = modelo.generate(
                **entradas,
                max_new_tokens=256,
                do_sample=False,
                pad_token_id=tokenizer.eos_token_id
            )

        novos_tokens = saida[0][
            entradas["input_ids"].shape[-1]:
        ]

        resposta = tokenizer.decode(
            novos_tokens,
            skip_special_tokens=True
        )

        return resposta.strip()
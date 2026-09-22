
from fastapi import FastAPI, HTTPException

from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel, Field

from ia import gerar_resposta


# ==========================================
# CONFIGURAÇÃO DO BACKEND
# ==========================================

app = FastAPI(
    title="Raphix API",
    version="0.1.0"
)


# ==========================================
# CORS
# ==========================================

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "https://ph-ia-codes-a57p-ja4h2jvhw-ph-ia.vercel.app"
    ],

    allow_credentials=False,

    allow_methods=["GET", "POST"],

    allow_headers=["Content-Type"]
)


# ==========================================
# ESTRUTURA DA MENSAGEM
# ==========================================

class Mensagem(BaseModel):

    mensagem: str = Field(
        min_length=1,
        max_length=4000
    )


# ==========================================
# VERIFICAR SERVIDOR
# ==========================================

@app.get("/")
def inicio():

    return {
        "aplicacao": "Raphix",
        "status": "online",
        "versao": "0.1.0"
    }


# ==========================================
# CHAT
# ==========================================

@app.post("/chat")
def conversar(dados: Mensagem):

    pergunta = dados.mensagem.strip()

    if not pergunta:

        raise HTTPException(
            status_code=400,
            detail="Mensagem vazia."
        )

    try:

        resposta = gerar_resposta(pergunta)

        return {
            "resposta": resposta
        }

    except Exception as erro:

        print("Erro na Raphix:", erro)

        raise HTTPException(
            status_code=500,
            detail="Erro ao gerar resposta."
        )
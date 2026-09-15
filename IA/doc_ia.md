# 🧠 phIA — Inteligência Artificial

> Núcleo de desenvolvimento e estudo de Inteligência Artificial do projeto phIA.

---

## 🎯 Objetivo

Esta pasta concentra os estudos, implementações e experimentos relacionados à
Inteligência Artificial.

O objetivo não é apenas utilizar modelos prontos, mas compreender como os
modelos funcionam e, progressivamente, construir componentes e modelos próprios.

A IA é o primeiro grande núcleo do phIA. Futuramente, poderá ser integrada
a jogos, simulações e robótica.

---

# 🧭 Princípios

### Conhecer antes de abstrair

Sempre que possível, os fundamentos serão estudados antes da utilização de
bibliotecas de alto nível.

### Construir para aprender

Os conceitos estudados devem resultar em código, experimentos ou modelos.

### Experimentar

Resultados devem ser testados e comparados.

### Documentar

Conceitos, decisões, erros, resultados e aprendizados importantes devem ser
registrados.

### Evoluir

O projeto será construído de forma incremental. Não existe prazo definido.

---

# 🗺️ Roadmap da IA

## 01 — Fundamentos

Construir a base matemática e computacional.

- [ ] Python aplicado à IA
- [ ] NumPy
- [ ] Estruturas de dados
- [ ] Algoritmos
- [ ] Álgebra linear
- [ ] Vetores
- [ ] Matrizes
- [ ] Produto matricial
- [ ] Probabilidade
- [ ] Estatística
- [ ] Derivadas
- [ ] Gradiente
- [ ] Otimização

---

## 02 — Machine Learning

Compreender como modelos aprendem padrões a partir de dados.

### Conceitos

- [ ] Dataset
- [ ] Features
- [ ] Target
- [ ] Treinamento
- [ ] Validação
- [ ] Teste
- [ ] Generalização
- [ ] Overfitting
- [ ] Underfitting
- [ ] Função de custo
- [ ] Otimização

### Modelos

- [ ] Regressão Linear
- [ ] Regressão Logística
- [ ] KNN
- [ ] Árvores de Decisão
- [ ] Random Forest
- [ ] Clustering
- [ ] PCA

### Implementações próprias

- [ ] Regressão Linear do zero
- [ ] Gradient Descent do zero
- [ ] Regressão Logística do zero
- [ ] Comparar implementações próprias com Scikit-Learn

---

## 03 — Redes Neurais

Compreender a estrutura e o processo de aprendizado das redes neurais.

- [ ] Neurônio artificial
- [ ] Perceptron
- [ ] Pesos
- [ ] Bias
- [ ] Forward Pass
- [ ] Funções de ativação
- [ ] Função de perda
- [ ] Gradient Descent
- [ ] Backpropagation
- [ ] Learning Rate
- [ ] Epoch
- [ ] Batch

### Funções de ativação

- [ ] Step
- [ ] Sigmoid
- [ ] Tanh
- [ ] ReLU
- [ ] Softmax

### Primeiro grande marco

**phIA Neural Network v0.1**

Uma rede neural desenvolvida com Python e NumPy para compreender e
implementar o processo de aprendizado.

---

## 04 — Deep Learning

Evoluir para arquiteturas neurais mais complexas.

- [ ] MLP
- [ ] CNN
- [ ] RNN
- [ ] LSTM
- [ ] GRU
- [ ] Dropout
- [ ] Batch Normalization
- [ ] Inicialização de pesos
- [ ] Otimizadores

### Framework principal

- [ ] PyTorch

### Framework secundário

- [ ] TensorFlow / Keras

---

## 05 — Visão Computacional

Desenvolver capacidade de trabalhar com informações visuais.

- [ ] Imagens como dados
- [ ] Convolução
- [ ] CNN
- [ ] Classificação de imagens
- [ ] Detecção de objetos
- [ ] Segmentação
- [ ] OpenCV

---

## 06 — NLP

Desenvolver capacidade de trabalhar com linguagem natural.

- [ ] Processamento de texto
- [ ] Tokenização
- [ ] Representação de texto
- [ ] Word Embeddings
- [ ] Word2Vec
- [ ] Contexto
- [ ] Attention
- [ ] Self-Attention

---

## 07 — Transformers

Compreender a arquitetura utilizada por muitos modelos modernos de linguagem.

- [ ] Attention
- [ ] Self-Attention
- [ ] Multi-Head Attention
- [ ] Positional Encoding
- [ ] Encoder
- [ ] Decoder
- [ ] Transformer
- [ ] Tokenização
- [ ] Embeddings

### Implementação

- [ ] Implementar Attention
- [ ] Implementar Self-Attention
- [ ] Implementar Transformer simplificado
- [ ] Treinar um modelo experimental

---

## 08 — Modelo de linguagem próprio

Primeiros experimentos com um modelo de linguagem desenvolvido dentro
do projeto.

- [ ] Dataset de texto
- [ ] Limpeza dos dados
- [ ] Tokenizador
- [ ] Vocabulário
- [ ] Embeddings
- [ ] Arquitetura
- [ ] Treinamento
- [ ] Validação
- [ ] Inferência
- [ ] Avaliação

### Marco

**phIA Language Model**

Primeiro modelo de linguagem experimental do projeto.

---

## 09 — Memória e conhecimento

Criar mecanismos para que o sistema utilize informações externas ao modelo.

- [ ] Banco de dados
- [ ] Embeddings
- [ ] Busca semântica
- [ ] Vector Database
- [ ] RAG
- [ ] Memória de curto prazo
- [ ] Memória de longo prazo
- [ ] Recuperação de informações

> Importante: adicionar conhecimento a um sistema não significa
> necessariamente retreinar os pesos do modelo. Treinamento, memória,
> recuperação de informação e fine-tuning serão estudados separadamente.

---

## 10 — Agentes

Permitir que a IA utilize ferramentas e execute tarefas.

- [ ] Tool use
- [ ] Function calling
- [ ] Planejamento
- [ ] Observação
- [ ] Ação
- [ ] Feedback
- [ ] Avaliação de agentes

---

# 📚 Materiais de estudo

Os materiais serão utilizados como ferramentas de aprendizagem, não como
objetivos de certificação.

## Cursos

- FIAP
- DeepLearning.AI
- fast.ai
- Documentações oficiais
- Outros materiais relevantes

## Livros

- *Hands-On Machine Learning* — Aurélien Géron
- *Mathematics for Machine Learning* — Deisenroth, Faisal e Ong
- *Deep Learning* — Goodfellow, Bengio e Courville
- *Deep Learning for Coders with fastai and PyTorch* — Jeremy Howard e Sylvain Gugger

---

# 💻 Tecnologias

## Linguagem principal

- Python

## Computação científica

- NumPy
- Pandas

## Machine Learning

- Scikit-Learn

## Deep Learning

- PyTorch
- TensorFlow / Keras

## Dados

- SQL
- Bancos relacionais
- Vector Databases

## Versionamento

- Git
- GitHub

---

# 🧪 Experimentos

Os experimentos devem ficar organizados de forma independente.

Exemplo:

```text
experiments/
├── 001_regressao_linear/
├── 002_perceptron/
├── 003_rede_neural/
└── ...
```

Cada experimento deve procurar registrar:

- Objetivo
- Problema
- Conhecimentos necessários
- Implementação
- Resultados
- Problemas encontrados
- O que foi aprendido
- Próximo passo

---

# 📊 Critério de progresso

Um assunto não será considerado concluído apenas porque uma aula foi
assistida ou um capítulo foi lido.

### 🔴 Não iniciado

Ainda não estudado.

### 🟡 Em estudo

Conceito sendo aprendido.

### 🟢 Aplicado

Conceito implementado em código.

### 🔵 Consolidado

Conceito implementado, testado e compreendido a ponto de poder ser
explicado e utilizado novamente.

---

# 🚀 Primeiro objetivo

## phIA 0.1 — Fundamentos de Machine Learning

A primeira sequência prática será:

```text
Python / NumPy
      ↓
Álgebra Linear
      ↓
Fundamentos de ML
      ↓
Regressão Linear
      ↓
Gradient Descent
      ↓
Perceptron
      ↓
Funções de ativação
      ↓
Função de perda
      ↓
Backpropagation
      ↓
Rede Neural
      ↓
🧠 phIA Neural Network v0.1
```

---

# 📌 Estado atual

**Projeto:** phIA

**Área:** Inteligência Artificial

**Status:** 🟢 Iniciado

**Foco atual:** Fundamentos de IA e Machine Learning

**Primeiro grande marco:** phIA Neural Network v0.1

**Prazo:** Não definido

---

# 🌱 Visão futura

A área de IA poderá futuramente funcionar como o núcleo tecnológico de
outros projetos do ecossistema phIA.

```text
                    phIA
                      │
              ┌───────┼───────┐
              │       │       │
              IA    Jogos   Robótica
              │       │       │
              └───────┼───────┘
                      │
                 Ecossistema
```

O roadmap poderá ser alterado conforme novos conhecimentos, experimentos
e necessidades surgirem.

---

> **phIA — aprender, construir, experimentar e evoluir.**

FROM python:3.10-slim

WORKDIR /app

# Instalacja zależności systemowych
RUN apt-get update && apt-get install -y \
    build-essential libpq-dev --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Instalacja zależności Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Kopiowanie aplikacji
COPY . .

ENV PYTHONUNBUFFERED 1
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]

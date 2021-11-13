FROM python:3.9-slim

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /code

# COPY requirements.txt .
# RUN pip install -r requirements.txt

COPY . .

CMD ["python", "logs.py"]
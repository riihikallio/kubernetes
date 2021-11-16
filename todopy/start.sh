#! /bin/sh

python manage.py makemigrations  --noinput &&
python manage.py migrate --noinput &&
# gunicorn -b 0.0.0.0:8000 webmark2.wsgi
python manage.py runserver localhost:8000

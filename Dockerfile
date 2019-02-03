FROM httpd:2.4
COPY . /usr/local/apache2/htdocs

WORKDIR .

RUN apt-get update && apt-get install vim -y && chmod 777 -R /usr/local/apache2/htdocs/* && mv /usr/local/apache2/htdocs/index.html /usr/local/apache2/htdocs/index2.html

#expose port 80
EXPOSE 80

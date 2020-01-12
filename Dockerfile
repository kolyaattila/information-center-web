FROM nginx:1.14

ARG API_ENDPOINT
ARG PRODUCTION_MODE
ARG ENVIRONMENT_FILE

ENV API_ENDPOINT "$API_ENDPOINT"
ENV PRODUCTION_MODE "$PRODUCTION_MODE"
ENV ENVIRONMENT_FILE "$ENVIRONMENT_FILE"

RUN printenv

# Remove web source of nginx.
RUN rm -rf /usr/share/nginx/html/*

# Change directory.
WORKDIR /etc/nginx/conf.d/

# Add nginx config at line 11.
RUN sed -i '11i try_files $uri $uri/ /index.html;' default.conf

# Prepare and install nodeJS.
RUN apt-get update -y && \
    apt-get install -y curl \
                       libcurl3 \
                       libcurl3-dev \
                       ngrep \
                       gnupg

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential

# Create ng-app folder.
RUN mkdir /ng-app

# Change directory.
WORKDIR /ng-app

# Copy from local all files to WORKDIR(ng-app).
COPY . .

# Install npm modules and dependencies for the app.
RUN npm i

# Configure environment
# **NOTE**:
#   Generates the environment files used by ng cli
RUN npm run config

# Build app for production.
RUN npm run ng build -- --prod --output-path=dist

# Change directory.
WORKDIR /usr/share/nginx/html/

# Move distribution files to current dir.
RUN mv /ng-app/dist/* .

CMD ["nginx", "-g", "daemon off;"]

# # Use official node image as the base image
# FROM node:12 as build

# # Set the working directory
# WORKDIR /usr/local/app

# # Add the source code to app
# COPY ./ /usr/local/app/

# # Install all the dependencies
# RUN npm install

# # Generate the build of the application
# RUN node --max-old-space-size=4096 /usr/local/app/node_modules/@angular/cli/bin/ng build --prod

# ### STAGE 2: Run ###
# FROM nginx:latest
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /usr/local/app/dist /usr/share/nginx/html
# EXPOSE 80

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /dist /usr/share/nginx/html
EXPOSE 80
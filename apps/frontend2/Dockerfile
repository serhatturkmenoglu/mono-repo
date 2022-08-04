FROM nginx:stable-alpine
COPY  dist/apps/frontend2/* /usr/share/nginx/frontend2
EXPOSE 4201
CMD ["nginx", "-g", "daemon off;"]
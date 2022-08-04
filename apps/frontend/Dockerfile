FROM nginx:stable-alpine
COPY  dist/apps/frontend/* /usr/share/nginx/frontend
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
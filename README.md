# koa_clean_architecture
 Clean Architecture For Koa JS
# Package
 - koa
 - @koa/cors
 - @koa/router
 - bcrypt
 - dotenv
 - jsonwebtoken
 - knex
 - koa-bodyparser
 - koa-convert
 - koa-helmet
 - koa-jwt
 - mysql
# Alur Routes
 - index.js (folder root project)
 - routes.js (folder app/v1/)
 - routes.js (folder app/v1/modules/{folder_modules})
# Alur coding modules
 controller -> service -> repository
 - controller untuk interaksi dengan routes
 - service penanganan logic/alur bisnis
 - repository untuk interaksi dengan database

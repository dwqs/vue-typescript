module.exports = {
  "prompts": {
      "name": {
          "type"    : "string",
          "required": false,
          "message" : "Project name",
          "default" : "vue-startup"
      },
      "author": {
          "type"   : "string",
          "message": "Author"
      },
      "version": {
          "type"    : "string",
          "message" : "Project version",
          "default" : "0.0.1"
      },
      "description": {
          "type"    : "string",
          "required": false,
          "message" : "Project description",
          "default" : "A new Vue.js + TypeScript project"
      },
      "port": {
          "type"    : "string",
          "required": false,
          "message" : "client port",
          "default" : 3000
      },
      "imageminifying": {
          "type": "confirm",
          "message": "Need image minifying in production?"
      }
  },
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dll\n  npm run dev\n\nDocumentation can be found at https://github.com/dwqs/vue-typescript"
}
import {Controller,Get,Ctx, Post } from 'koa-controllers';
import { Context } from 'koa';


useControllers(
  app,
  __dirname + "/controllers/**/*.js",
  {
    multipart:{
      dest: process.cwd() + '/static/uploads/avatar',
    }
  }
)
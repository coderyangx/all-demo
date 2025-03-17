import express from 'express';
import path from 'path';

import fs from 'node:fs';
// console.log(fs);

const { Configuration } = require('webpack');

/**
 * @type {Configuration} 增加智能提示webpack配置对象
 */
const config = {
  entry: './src/index.js',
  output: './dist',
  optimization: {
    minimize: true,
  },
};

module.exports = config;

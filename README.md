# vue-particles-use

## Usage
`npm install vue-particles-use --save-dev`

## main.js file<br>
```
import Vue from 'vue'
import VueParticlesUse from 'vue-particles-use'
Vue.use(VueParticlesUse)
```

## a simple example<br>
```
 <template>
    <div id="app">
       <vue-particles-use></vue-particles-use>
    </div>
 </template>
``` 

#full examples
```
<template>
    <div id="app">
      <vue-particles-use
        :number="30"
        :area="2000"
        color="#ff0000"
        shape="star"
        :lineWidth="5"
        lineColor="#ff0000"
        :opacity="0.5"
        :speed="20"
        hoverMode="grab"
        clickMode="bubble"
      >
      </vue-particles-use>
    </div>
 </template>
 ```
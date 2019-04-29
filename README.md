# vue-particles-use

![](./src/assets/bg.png)

## Usage
`npm install vue-particles-use --save`

## main.js file
```
import Vue from 'vue'
import VueParticlesUse from 'vue-particles-use'
Vue.use(VueParticlesUse)
```

## a simple example
```
 <template>
    <div id="app">
       <vue-particles-use></vue-particles-use>
    </div>
 </template>
``` 

## full examples
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
 <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
       <tr>
         <td>number</td> 
         <td>Number</td> 
         <td>40</td> 
         <td>数量</td> 
       </tr>
       <tr>
         <td>area</td> 
         <td>Number</td> 
         <td>800</td> 
         <td>密度</td> 
       </tr>
       <tr>
         <td>color</td> 
         <td>String</td> 
         <td>#ffffff</td> 
         <td>图形颜色</td> 
       </tr>
       <tr>
         <td>shape</td> 
         <td>String</td> 
         <td>star</td> 
         <td>图形类型可以设置为"circle","edge","triangle", "polygon","star"</td> 
       </tr>
       <tr>
         <td>lineWidth</td> 
         <td>Number</td> 
         <td>1.5</td> 
         <td>线宽</td> 
       </tr>
       <tr>
         <td>lineColor</td> 
         <td>String</td> 
         <td>#222222</td> 
         <td>线的颜色</td> 
       </tr>
       <tr>
         <td>opacity</td> 
         <td>Number</td> 
         <td>0.75</td> 
         <td>线的透明度</td> 
       </tr>
       <tr>
         <td>speed</td> 
         <td>Number</td> 
         <td>4</td> 
         <td>移动速度</td> 
       </tr>
       <tr>
         <td>hoverMode</td> 
         <td>String</td> 
         <td>grab</td> 
         <td>hover模式可以设置为"grab", "repulse", "bubble"</td> 
       </tr>
       <tr>
         <td>clickMode</td> 
         <td>String</td> 
         <td>push</td> 
         <td>click模式可以设置为 "push", "remove", "repulse", "bubble"</td> 
       </tr>
    </tbody>
</table>

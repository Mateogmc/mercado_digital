<template>
  <HeaderComponent />
  <router-view></router-view>
  <img alt="Vue logo" src="./assets/img/logo.png">
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <TestItem msg="This is a test" num="10"/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
//import HelloWorld from './components/HelloWorld.vue'
import TestItem from './components/Test.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    //HelloWorld,
    TestItem
  }
}
</script>
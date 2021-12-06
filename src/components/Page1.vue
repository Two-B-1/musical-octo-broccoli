<template>
  <div>
    <div>
    <!-- <h1>page1</h1>
     <p>{{msg}}</p>-->

    <router-link to="/page1/">home</router-link>
    <router-link to="/page1/fav">fav</router-link>
    <router-link to="/page1/config">config</router-link>
  </div>
    <router-view></router-view>
  </div>

</template>
<script>
export default {

}
</script>
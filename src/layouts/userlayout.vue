<template>
 <v-app>
    <navbar/>
    <sidebar/> 
    <router-view/>
 </v-app>
</template>
<script>
 import navbar from '@/components/navbar'
 import sidebar from '@/components/sidebar'
 export default {
  components: {
    navbar,
    sidebar,
  }
}
</script>
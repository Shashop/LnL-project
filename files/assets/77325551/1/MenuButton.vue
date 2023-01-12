<template>
<nuxt-link class="menu-button-link" :to="to">
<div class="menu-button">
<slot></slot>
</div>
</nuxt-link>
</template>
<script>
export default {
props: {
to: String
}
}
</script>
<style lang="scss" scoped>

.sidemenu-button-link {
text-decoration: none;
}
 
  .btn-flat-border {
      
    display: inline-block;
    padding: 0.7em 1em;
    text-decoration: none;
    color: #fffeca;
    border: solid 2px #fffeca;
    border-radius: 3px;
    transition: .4s;
  }
  
  .btn-flat-border:hover {
    background: #cbbe52;
    color: white;
  }
  
</style>
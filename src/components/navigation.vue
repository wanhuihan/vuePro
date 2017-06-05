
<template lang="html">

    <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/foo" class="nav-link">Demo</router-link>
        </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
    </ul>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

    .nav {
        .dropdown {
            &.show {
                a {
                    border-radius: 0;
                }
                .dropdown-menu {
                    border-radius: 0;
                }
            }
        }
    }

</style>

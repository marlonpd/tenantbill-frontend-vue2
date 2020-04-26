<template>
  <nav class="navbar navbar-light">
    <div class="main-header">
      <div class="float-left" style="width:60px">
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
        <label for="openSidebarMenu" class="sidebarIconToggle">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <ul class="sidebarMenuInner">
            <li>
              <router-link :to="{ name: 'profile' }">
                    Marlon Dizon
                    <span>owner</span>
                </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'dashboard' }">
                    Tenants
                </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'power-rates' }">
                    Power Rates
                </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-auto product-title">
        <h1>Power Bill </h1>
      </div>
      <div class="float-right sign-out-holder">
        <font-awesome-icon :icon="['fa', 'sign-out-alt']" />
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "HeaderSection"
};
</script>

<template>
  <nav class="navbar navbar-light">
    <div class="container">

      <div class="row main-header">
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
        <label for="openSidebarMenu" class="sidebarIconToggle">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <ul class="sidebarMenuInner">
            <li>Marlon Dizon <span>owner</span></li>
            <li><a href="#" target="_blank">Power Rates</a></li>
          </ul>
        </div>

        <div class="pull-right">
          <font-awesome-icon :icon="['fa', 'sign-out-alt']" />
        </div>
      </div>

    </div>
  </nav>
</template>

<script>

export default {
  name: "HeaderSection"
};
</script>

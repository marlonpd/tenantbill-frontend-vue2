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
            <li>Marlon Dizon <span>owner</span></li>
            <li><a href="#" target="_blank">Power Rates</a></li>
          </ul>
        </div>


        </div>
        <div class="m-auto" style="width: 200px;">
          <h1>Power Bill </h1>
        </div>

        <div class="float-right" style="top: -38px;
                                        width: 20px;
                                        position: relative;
                                        right: 11px;">
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

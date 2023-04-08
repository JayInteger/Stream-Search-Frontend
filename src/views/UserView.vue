<template>
  <TheDefaultLayout>
    <div class="container category p-4 mt-5 bg-black">
      <div
        class="
          bg-black-dark
          display-3
          text-light
          p-1
          mb-4
          rounded
          text-center
          header-text-shadow header-shadow
        "
      >
        UserSettings
      </div>
      <div class="row">
        <div class="col-3 my-auto">
          <ul class="list-group">
            <li
              v-for="sett in listSettings"
              :key="sett.name"
              class="list-group-item"
              :class="isActive(sett.id)"
              @click="setActiveSetting(sett.id)"
            >
              {{ sett.name }}
            </li>
          </ul>
        </div>
      </div>

      <div v-if="listSettings[0].active" class="row">
        <div class="col-3 my-5 ms-0">
          <img
            src="@/assets/images/fsk/fsk0.png"
            width="200"
            height="200"
            class="rounded-circle p-3"
          />
        </div>
        <div class="col-2 my-auto me-5">
          <h3><i class="text-muted ms-5">profilename:</i></h3>
          <h3><i class="text-muted ms-5">language:</i></h3>
        </div>
        <div class="col-4 my-auto ms-5">
          <input type="text" class="text-white bg-secondary rounded" />

          <select class="form-select mt-3 bg-secondary rounded text-white">
            <option>german</option>
            <option>english</option>
          </select>
        </div>
      </div>
      <div v-if="listSettings[1].active" class="row">
        <div class="col-3 my-5 ms-0"></div>
        <div class="col-3 my-5 ms-0">
          <h3><i class="text-muted ms-5">child lock</i></h3>
        </div>
        <div class="col-3 my-5 ms-0">
          <div class="form-check form-switch h3">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault"
              ></label
            >
          </div>
        </div>
        <div class="col-3 my-5 ms-0">
        </div>
      </div>

      <!--ROW2-->
    </div>

    <TheUser></TheUser>
  </TheDefaultLayout>
</template>

<script>
import TheUser from "@/components/TheUser.vue";
import TheDefaultLayout from "@/layouts/TheDefaultLayout.vue";
import settings from "@/store/modules/user/settings.js";
export default {
  name: "UserView",
  components: {
    TheDefaultLayout,
    TheUser,
  },
  data() {
    return {
      listSettings: settings.state.listSettings,
    };
  },
  computed: {
    activeSetting() {
      return settings.getters.activeSetting;
    },
  },
  methods: {
    setActiveSetting(settObj) {
      settings.mutations.setActiveSetting(settObj);
    },
    isActive(settObj) {
      if (settObj === this.activeSetting.id) {
        return ["active"];
      }
    },
  },
};
</script>

<style scoped>
select {
  width: 210px;
}
</style>
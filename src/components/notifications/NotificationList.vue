<template>
  <div class="notification-list">
    
    <NotificationMessage v-for="notification in notifications" :key="notification.id" :notification='notification' :id="notification.id"/>
  </div>
</template>

<script>
import NotificationMessage from "@/components/notifications/NotificationMessage.vue"
export default {
    name: "NotificationList",
    components: {
        NotificationMessage,
    },
    computed:{
        notifications(){
            return this.$store.state.notifications.notificationList;
        }
    }
}
</script>

<style scoped>


    .notification-list{
        position: fixed;
        top: 75px;
        right: 0px;
        width: 200px;
        margin-right: 20px;
    }
</style>
<template>
  <div class="events">
    <h1>Events for mankind</h1>
    <event-card v-for="event in events" :key="event.id" :event="event">
    </event-card>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },

  data() {
    return {
      events: [
        {
          id: 123,
          category: "animal welfare",
          title: "cat adoption day",
          description: "Find your new feline friend at this event",
          location: "Meow town",
          date: "January 28,2022",
          time: "12:00",
          petsAllowed: true,
          organizer: "Anaide thibault",
        },
        {
          id: 456,
          category: "weapon industry",
          title: "stark new discovery",
          description: "Find your passion over nuclear war head",
          location: "Atomic city",
          date: "April 11,2023",
          time: "12:00",
          petsAllowed: false,
          organizer: "Ashiquzzaman khan",
        },

        {
          id: 789,
          category: "spa",
          title: "Mindfulness philosophy",
          description: "Find your passion over nuclear war head",
          location: "Neptune center",
          date: "July 30, 2021",
          time: "12:00",
          petsAllowed: false,
          organizer: "Kaleharan",
        },
      ],
    };
  },
  computed: {
    testing() {
      return this.event;
    },
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

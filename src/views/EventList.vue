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
          id: 5928101,
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
          id: 4150293,
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
          id: 4150293,
          category: "weapon industry",
          title: "stark new discovery",
          description: "Find your passion over nuclear war head",
          location: "Atomic city",
          date: "April 11,2023",
          time: "12:00",
          petsAllowed: false,
          organizer: "Ashiquzzaman khan",
        },
      ],
    };
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

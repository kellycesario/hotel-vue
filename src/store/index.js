import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("hotel", () => {
  const hotelFacilitiesDetails = ref([{}]);

  function setHotelFacilitiesDetails(facilities) {
    const newHotelFacilitiesDetail = {
      icon: facilities.icon,
      label: facilities.label,
      text: facilities.text,
    };
    this.hotelFacilitiesDetails.splice(0, 1);

    this.hotelFacilitiesDetails.push(newHotelFacilitiesDetail);
    console.log(this.hotelFacilitiesDetails);
  }
  return {
    hotelFacilitiesDetails,
    setHotelFacilitiesDetails,
  };
});

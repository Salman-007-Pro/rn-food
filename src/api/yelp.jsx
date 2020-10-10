import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer pZN8HcP_8sO8da_5rNWiaqbJCBiOi3w-W8wBrqFXvww6EvGtBClt5LB2rqIXOI_f_yMVptBYz6bihRu4R5NBF0prr4aVR1Nh6v2g36pG_PkI5jifWu7_ODGfQrdGX3Yx",
  },
});

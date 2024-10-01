import { useEffect } from "react";

const useOwlCarousel = (selector, options) => {
  useEffect(() => {
    const loadOwlCarousel = async () => {
      if (typeof window !== "undefined") {
        const $ = (await import("jquery")).default;
        window.jQuery = $;
        await import("owl.carousel");

        $(selector).owlCarousel(options);

        let thmOwlCarousels = $(".thm-owl__carousel");
        if (thmOwlCarousels.length) {
          thmOwlCarousels.each(function () {
            let elm = $(this);
            let options = elm.data("owl-options");
            if (options) {
              elm.owlCarousel(
                typeof options === "object" ? options : JSON.parse(options)
              );
            }
          });
        }

        let thmOwlNavCarousels = $(".thm-owl__carousel--custom-nav");
        if (thmOwlNavCarousels.length) {
          thmOwlNavCarousels.each(function () {
            let elm = $(this);
            let owlNavPrev = elm.data("owl-nav-prev");
            let owlNavNext = elm.data("owl-nav-next");
            $(owlNavPrev).on("click", function (e) {
              elm.trigger("prev.owl.carousel");
              e.preventDefault();
            });

            $(owlNavNext).on("click", function (e) {
              elm.trigger("next.owl.carousel");
              e.preventDefault();
            });
          });
        }
      }
    };

    loadOwlCarousel();
  }, [selector, options]);
};

export default useOwlCarousel;

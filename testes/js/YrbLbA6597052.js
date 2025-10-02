
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
    var scrollElement = document.getElementById("quero");
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
        } catch (error) {
          console.log(error);
        }
      }
    
    (function() {
      try {
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    (function() {
          try {
              const animationList = [{"key":"4292d65","type":"image"}];
    
              animationList.forEach((animationItem, index) => {
                const { key, type } = animationItem;
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.style.opacity = 1;
                                targetElement.classList.add('a-e-a-' + key);
                            } else if(animationItem?.misc?.hideOffscreen) {
                                targetElement.classList.remove('a-e-a-' + key);
                                targetElement.style.opacity = 0;
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              return error;
          }
      })();
          (function() {
            try {
              var vturbvideoId = "68dd7b6008b2d6fd27f18b65";
              var compKey = "1764f50";
              const twr = false;
              var SECONDS_TO_DISPLAY = 712;
              var attempts = 0;
              var elsDisplayed = false;
              var alreadyDisplayedKey = 'alreadyElsDisplayed712';
              var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

              var showHiddenElements = function () {
                elsDisplayed = true;
                runDelayedFunctions();
                localStorage.setItem(alreadyDisplayedKey, true);
              };
              function getVideoInstance() {
                if (smartplayer.instances.length > 1) {
                  return smartplayer.instances.find(
                    (instance) => (instance?.options?.id || instance?.analytics?.player?.options?.id) === vturbvideoId
                  );
                }
                return smartplayer.instances[0];
              };
              window.startWatchVideoProgress = function startWatchVideoProgress(reAttempts) {
                if (reAttempts) {
                  attempts = reAttempts;
                }
                
                console.log("vturbvideoId", vturbvideoId);
                if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                  if (attempts >= 10) return;
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
                console.log(smartplayer.instances);
                var videoInstance = getVideoInstance();
                videoInstance.on('timeupdate', () => {
                  if (elsDisplayed || videoInstance.smartAutoPlay) return;
                  console.log("currentTime => " +videoInstance.video.currentTime +" SECONDS_TO_DISPLAY => " +SECONDS_TO_DISPLAY);
                  if (videoInstance.video.currentTime < SECONDS_TO_DISPLAY) return;
                  showHiddenElements();
                });
              };
              if (alreadyElsDisplayed === 'true') {
                setTimeout(function () {
                  showHiddenElements();
                }, 100);
              } else {
                window.startWatchVideoProgress();
              }
            } catch (error) {
              console.log(error);
            }
            
          })();
        
      function initSlider(slider) {
        const sliderKey = slider.compKey.slice(0, 7);
        if(!document.querySelector(".swiper-" + sliderKey).classList.contains("swiper-initialized")){
          const sliderClass = ".swiper-" + sliderKey;

          try {
            console.log("load swiper " + sliderKey)
            if (!window.swipers) {
              window.swipers = {};
            }
            if (window.swipers[sliderKey]) {
              window.swipers[sliderKey].destroy(true, true);
            }
            window.swipers[sliderKey] = new Swiper(sliderClass, {
              loop: slider?.misc?.infiniteScroll ? true : false,
              autoplay: slider?.misc?.autoplay?.speed ? { delay: slider?.misc?.autoplay?.speed * 1000, pauseOnMouseEnter: slider?.misc?.autoplay?.pauseOnMouseEnter ? 'true' : 'false' } : 'false',
              speed: slider?.misc?.transition ? slider?.misc?.transition * 1000 : 300,
              spaceBetween: slider?.misc?.itemGap?.desktop || slider?.misc?.itemGap?.desktop === 0 ? slider?.misc?.itemGap?.desktop : 10,
              direction: slider?.misc?.direction || 'horizontal',
              navigation: {
                nextEl: sliderClass + " .swiper-button-next",
                prevEl: sliderClass + " .swiper-button-prev",
              },
              pagination: {
                el: sliderClass + " .swiper-pagination",
                clickable: true,
              },
              observer: true,
              observeParents: true,
              slidesPerView: slider?.misc?.columns?.desktop || 3,
              slidesPerGroup: typeof slider?.misc?.slidesToScroll === 'number' ? slider?.misc?.slidesToScroll : slider?.misc?.slidesToScroll?.desktop || 1,
              breakpoints: {
                300: {
                  slidesPerView: slider?.misc?.columns?.mobile || 1,
                  slidesPerGroup: slider?.misc?.slidesToScroll?.mobile || 1,
                  spaceBetween: slider?.misc?.itemGap?.mobile || slider?.misc?.itemGap?.mobile === 0 ? slider?.misc?.itemGap?.mobile : 10,
                },
                640: {
                  slidesPerView: slider?.misc?.columns?.tablet || 2,
                  slidesPerGroup: slider?.misc?.slidesToScroll?.tablet || 1,
                  spaceBetween: slider?.misc?.itemGap?.tablet || slider?.misc?.itemGap?.tablet === 0 ? slider?.misc?.itemGap?.tablet : 10,
                },
                1024: {
                  slidesPerView: slider?.misc?.columns?.desktop || 3,
                  slidesPerGroup: typeof slider?.misc?.slidesToScroll === 'number' ? slider?.misc?.slidesToScroll : slider?.misc?.slidesToScroll?.desktop || 1,
                  spaceBetween: slider?.misc?.itemGap?.desktop || slider?.misc?.itemGap?.desktop === 0 ? slider?.misc?.itemGap?.desktop : 10,
                },
              },
              on: {
                init: function() {
                  // Fix fluid videos after Swiper is ready
                  setTimeout(() => {
                    const videos = this.el.querySelectorAll('.video-js');
                    console.log(videos);
                    if (videos.length > 0) {
                      const firstVideoParent = videos[0].parentElement;
                      firstVideoParent.style.minHeight = '200px';
                      setTimeout(() => {
                        firstVideoParent.style.minHeight = '';
                      }, 100);
                    }
                    console.log("init autoplay", this.autoplay, this.params.autoplay, slider?.misc?.autoplay?.speed);
                    if (slider?.misc?.autoplay?.speed && this.autoplay && this.params.autoplay) {
                      this.autoplay.start();
                      if (this.autoplay.paused) this.autoplay.resume();
                    }
                    console.log("init autoplay end", this.autoplay, this.params.autoplay);
                  }, 50);
                }
              },
            });
          } catch (error) {
            console.log("swiper init error....");
            console.log(error);
          }
          document.querySelector(".swiper-" + sliderKey).classList.remove("atomicat-hidden")
        }
      }
      
    function atomiLoadSwiperCDN() {
      return new Promise((resolve, reject) => {
        if (!window.Swiper) {
          // Add CSS
          const cssLink = document.createElement('link');
          cssLink.rel = 'stylesheet';
          cssLink.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
          cssLink.onload = () => console.log('Swiper CSS loaded');
          document.head.appendChild(cssLink);

          // Add JS
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
          script.onload = () => {
            console.log('Swiper JS loaded');
            resolve();
          };
          script.onerror = () => reject(new Error('Failed to load Swiper JS'));
          document.head.appendChild(script);
        } else {
          resolve();
        }
      });
    }
  
      
      (function() {
        const sliderList = [{"compKey":"207cedb4-a2a4-466a-8af6-458d59b2140c","misc":{"type":"slider","titleTag":"h3","contentTag":"p","navigation":"arrowsAndDot","infiniteScroll":"","columns":{"desktop":3,"tablet":2,"mobile":1},"slidesToScroll":{"desktop":3,"tablet":1,"mobile":1},"transition":0.8,"itemGap":{"desktop":10,"tablet":10,"mobile":10},"autoplay":{"speed":1}}},{"compKey":"1d7b955d-d5e0-4b77-ac5a-a9ab47ba3e62","misc":{"type":"slider","titleTag":"h3","contentTag":"p","navigation":"arrowsAndDot","infiniteScroll":false,"columns":{"desktop":3,"tablet":2,"mobile":1},"slidesToScroll":{"desktop":1,"tablet":1,"mobile":1},"transition":0.3,"itemGap":{"desktop":10,"tablet":10,"mobile":10}}}]
        sliderList.forEach(slider => {
          const sliderKey = slider.compKey.slice(0, 7);
          try {
            const atomi_slider_ele = document.querySelector(".atomicat-slider-" + sliderKey)
            const atomi_slider_observer = new IntersectionObserver(async (entries) => {
              entries.forEach(async (entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                  try {
                    await atomiLoadSwiperCDN();
                    initSlider(slider)
                  } catch (error) {
                    console.error('Error initializing Swiper:', error);
                  }
                  atomi_slider_observer.disconnect(); // Stop observing after initialization
                }
              });
            });

            atomi_slider_observer.observe(atomi_slider_ele);
          } catch (error) {
            console.log(error);
          }
        })
        
    window.addEventListener('load', async function() {
      console.log('Entire page fully loaded, including images and stylesheets');
      setTimeout(async () => {
        await atomiLoadSwiperCDN();
        sliderList.forEach(slider => {
          const sliderKey = slider.compKey.slice(0, 7);
          initSlider(slider)
        })
      }, 5000);
    });
  
      })();
      
    
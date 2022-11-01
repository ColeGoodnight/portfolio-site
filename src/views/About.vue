<template>
  <div id="main">
    <div class="textContainer"> 
      <h2>Some More About Me</h2>
      <p>When I am away from the keyboard, I can be found riding my mountain bike or doing something related to mountain biking. Whether it's volunteering time to work on my local trails or shooting photos of my friends, I'm always trying to build community and keep the stoke high.</p>
    </div>
    <div class="photoFlex">
      <img :class="$isMobile() ? 'hidden' : ''" src="@/assets/ShovelCivic.jpg" rel="preload"/>
      <img src="@/assets/Frontflip.gif" rel="preload"/>
      <img :class="$isMobile() ? 'hidden' : ''" src="@/assets/CedarDustTable.jpg" rel="preload"/>
    </div> 
    <div class="textContainer" id="lastItem">
      <p>Some other hobbies of mine include architecture, 3D printing, and sim racing. I try to take the lessons that I learn during these activities and apply them to my computer science work, I find that there is immense opportunity to grow through this methodology.</p> 
    </div>
  </div>
</template>

<style scoped>
  .textContainer {
        max-width: 70ch;
        align-self:center;
        margin: 0 20px;
        line-height: 1.4;
  }

  h2 {
    text-align: left;
  }

  #main {
    margin-top: 4%;
  }

  p {
    text-align: left;
    font-size: 20px;
    line-height: 1.4;
    height: 100%;
  }

  img {
    height: 350px;
  }

  .photoFlex {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .hidden {
    display: none;
  }

  #lastItem {
    margin-bottom: 100px;
  }

</style>
 <?php $title = "AirPlank";
  include("layout/top.php");?>
      <div id="wrap-ewa" class="cb-wrap">
        <header class="cb-project cb-ewa-project -case -loaded">
          <div class="cb-project-wrap">
            <div class="cb-project-bg">
              <div class="cb-project-bg-splitter"></div>
              <div class="cb-project-bg-inner">
                <div class="cb-project-bg-video">
                  <video preload="auto" loop="" muted="" autoplay="">
                    <source src="video/airplank.mp4" type="video/mp4">
                  </video>
                </div>
                <div class="cb-project-bg-photo"></div>
              </div>
            </div>
            <div class="cb-project-body">
              <div class="cb-container">
                <div class="cb-project-header -bottom">
                  <h1>AirPlank: Share & Improve Your Air</h1>
                  <hr>
                </div>
              </div>
            </div>
           
          </div>
        </header>
        <article class="cb-case cb-ewa-case">
          <section data-navbar-class="-inverse" class="cb-brief cb-ewa-brief">
            <div class="cb-brief-wrap">
              <div class="cb-container">
                <div class="cb-container-inner">
                  <div class="row wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                    <div class="cb-brief-col col-md-5">
                      <div class="cb-brief-header">AirPlank: Share & Improve Your Air</div>
                      <div class="cb-brief-text">
                        <p>AirPlank is a wearable air monitor that maps, graphs & crowdsources your pollution exposures in real-time. </p>
<p>Air pollution is a staggering worldwide problem. Sources estimate that poor air quality costs the United States alone over $78 billion dollars annually. The negative impacts of air pollution rank it among the most serious and widespread human health hazards in the world. Breathing dirty air causes chronic illnesses such as asthma and bronchitis and contributes to terminal illnesses such as cancer and heart disease. Unfortunately, despite the very real impacts air pollution has on our everyday lives, it often goes unnoticed because it is largely invisible. In addition, because government-run air quality monitoring networks are sparse, publicly available air quality measurements don’t translate into an accurate assessment of personal exposure. The answer? Low-cost, portable air quality instruments. This is where YOU, AirProjecting, and the AirPlank come in.
Taking Matter(s) Into Our Own Hands </p>
<p>AirProjecting is an open-source platform comprised of wearable devices and digital media. It enables AirProjecters (that’s you!) to independently and accurately collects and broadcast air quality data. But at its core, AirProjecting is a DIY air monitoring movement that uses information about local environments to inform, educate, share, and ultimately improve health in communities around the world.  </p>
<p>The AirProjecting platform was built as an open-source, end-to-end solution for collecting, displaying, and sharing health and environmental data using your smartphone. The platform consists of wearable sensors that detect changes in your environment and physiology, including a palm-sized air quality monitor called the AirPlank and wearable LED accessories. By documenting and leveraging health and environmental data to inform personal decision-making and public policy, the AirProjecting platform empowers citizen scientists and change makers like you and me to take matters into our own hands.  </p>


</div>
</div>

 <div class="cb-brief-col col-md-5">
  <div class="cb-brief-text">
 
<p style="font-weight: bold;">What is AirPlank and how it works? </p>
<p>Currently, the AirProjecting platform connects a series of wearable devices to a network, notably an Arduino-powered, portable, palm-sized air quality monitor called the AirPlank. The AirPlank measures fine particulate matter, also known as PM2.5. You may be saying to yourself, “Why is this important?” Answer: The US Environmental Protection Agency monitors and regulates six criteria air pollutants, one of which is PM2.5, and the EPA’s measurements indicate that PM2.5 levels pose a substantial health risk in cities across the country. 
PM2.5, describes the size of the particles measured, particles smaller than 2.5 microns in diameter. These tiny particles, 30 of which could fit across the width of a human hair, are a huge problem all around the world. Sources of PM2.5 include diesel cars and trucks, coal burning power plants, forest fires, and construction activities. Because PM2.5 particles are so small, they are able to penetrate deep into our lungs and even pass into our bloodstream causing both short-term affects, like asthma attacks, and long-term effects, like cancer and heart disease. </p>
<p>The AirPlank uses a light scattering method to measure PM2.5. Air is drawn through a sensing chamber wherein light from an LED bulb scatters off particles in the airstream. This light scatter is registered by a detector and converted into a measurement that estimates the number of particles in the air. Via Bluetooth, these measurements are communicated approximately once a second to the AirProjecting app, which maps and graph the data in real time on your smartphone. At the end of each AirProjecting session, the collected data is sent to the AirProjecting website, where the data is crowdsourced with data from other AirProjecting to generate heat maps indicating where PM2.5 concentrations are highest and lowest. As an open-source platform, modifying our components to take other measurements and or transmit the data to other websites or apps is easy and encouraged. We’ve even included an expansion port on the AirPlank to make adding sensors as simple as can be.
 Wait, There's More </p>
<p>Staring at a screen can be a drag (and may lead to being run over while walking or biking!) so we developed the LiteBeam to communicate the AirPlank measurements using LEDs. The LiteBeam uses a IOIO microcontroller connected to the AirProjecting app over Bluetooth to illuminate LEDs in response to the sensor measurements received by the AirProjecting app: green for low intensity, then yellow, then orange, and red for high intensity. We'll be publishing an Instruct able for the LiteBeam after we reach our crowdfunding goal.
 </p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
          
         
        </article>
      </div>
    </div>
    <?php include("layout/inner-footer.php");?>
    </body></html>
<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['body'];

    $mesaj = "";
    $mesaj = $message;
    try{
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'tudorwebdev79@gmail.com'; // Gmail address which you want to use as SMTP server
        $mail->Password = '1SqQPRswFIIx0VoD'; // Gmail address Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = '587';
    
        $mail->setFrom('tudorwebdev79@gmail.com'); // Gmail address which you used as SMTP server
        $mail->addAddress('crisantudor79@yahoo.com'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)
    
        $mail->isHTML(true);
        $mail->Subject = 'Message Received (Contact Page)';
        $mail->Body = "<h3>Name : $name <br>Email: $email <br>Subject : $subject <br>Message : $mesaj</h3>";
    
        $mail->send();
        $alert = '<div class="alert-success">
        <div class="succes_flex"><button class="delete"><ion-icon name="close-circle-outline"></ion-icon></button><p> Sent! Thank you for contacting me.</p></div>
        </div>';
    } catch (Exception $e){
        $alert = '<div class="alert-error">
        <div class="fail_flex"><button class="delete"><ion-icon name="close-circle-outline"></ion-icon></button>'.$e->getMessage().'</div>';
      }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css" />
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet">
    <title>Tudor Crisan</title>
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
    <script src="https://unpkg.com/focus-visible@5.1.0/dist/focus-visible.js" defer></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
      <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Tudor CrisanV2</title>
</head>
<body>
<?php echo $alert; ?>

<div class='spinner-wrapper'>
    <div class="spinner"></div>
</div>


  <div class="swiper-container">
    <div class="swiper-wrapper">

      <div class="swiper-slide slide" id="s1">
      <div class="nav_bar">
      <div class="nume">  
        <span>Tudor</span>
        <span>Crisan</span>
      </div>

      <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <div class="nav_bar_icon">
        <a href="#s1" class="menu__item icon1 iconNAVBAR" data-tooltip="Home"><ion-icon name="home-outline" class="active"></ion-icon></a>
  <br>
        <a href="#s2" class="menu__item icon2 iconNAVBAR" data-tooltip="About"><ion-icon name="finger-print-outline" ></ion-icon></a>
  <br>
        <a href="#s3" class="menu__item icon3 iconNAVBAR" data-tooltip="Projects"><ion-icon name="list-outline" ></ion-icon></a>
  <br>
        <a href="#s4" class="menu__item icon4 iconNAVBAR" data-tooltip="Contact"><ion-icon name="mail-outline" ></ion-icon></a>
      </div>
    </div>
    
          <div class="text">
        
        <h1 class="h1"><span class="q">H</span><span class="q">i</span><span class="q">,</span><span class="nimic">shgdyuweqdfuwfq</span></h1><br>
       
        <h1 class="h2"><span class="q">I</span><span class="q">'</span><span class="q">m</span> <span class="t"><span class="q">T</span><span class="q">u</span><span class="q">d</span><span class="q">o</span><span class="q ">r</span></span><span class="q">,</span></h1><br>

        <h1 class="h3"><span class="q">W</span><span class="q">e</span><span class="q">b</span> <span class="q">d</span><span class="q">e</span><span class="q">v</span><span class="q">e</span><span class="q">l</span><span class="q">o</span><span class="q">p</span><span class="q">e</span><span class="q">r</span><span class="q">!</span></h1>
        
        <h3 class="text-front">Front End Developer / Freelancer</h3>

        <a href="#s4" class="contact_a contactBTN"><button class="contact_btn">CONTACT ME</button></a>
          </div>

        <model-viewer src="laptopHello1.glb" class="laptop l1" alt="A 3D model of a Laptop" auto-rotate camera-controls shadow-intensity="20"></model-viewer>

      </div>


      <div class="swiper-slide slide two" id="s2">

      <div class="nav_bar1">
      <div class="nume1">
      <!--  <img src="logo.png" style="width: 80px">-->
      <a href="#s1" class="logo_link logo1">
        <span>Tudor</span>
        <span>Crisan</span>
      </a>
      </div>

      
      <div class="hamburger1">
        <div class="line1"></div>
        <div class="line1"></div>
        <div class="line1"></div>
      </div>

      <div class="nav_bar_icon1">
      <a href="#s1" class="menu__item1 icon5 iconNAVBAR" data-tooltip="Home"><ion-icon name="home-outline" ></ion-icon></a>
  <br>
        <a href="#s2" class="menu__item1 icon6 iconNAVBAR" data-tooltip="About"><ion-icon name="finger-print-outline" class="active"></ion-icon></a>
  <br>
        <a href="#s3" class="menu__item1 icon7 iconNAVBAR" data-tooltip="Projects"><ion-icon name="list-outline" ></ion-icon></a>
  <br>
        <a href="#s4" class="menu__item1 icon8 iconNAVBAR" data-tooltip="Contact"><ion-icon name="mail-outline" ></ion-icon></a>
      </div>
      </div>

      <div class="name_s2">
      <h1 class="about_s2"><span class="q">A</span><span class="q">b</span><span class="q">o</span><span class="q">u</span><span class="q">t</span><span class="nimic">shgdyuweqdfuwfq</span></h1>
      <div class="aboutMe_s2">
        <p>Strongly connected with the web development industry and computers world in general.</p>
        <p>Open to learning new things anytime, problem solver, a well-organized person with high attention to detail, knowing how to divide his time efficiently. Fan of video games, outdoor activities, and books reading.</p>
        <p><span class="sk">Skills & Experience</span></p>
        <p>The main area I work in is front end development(client-side of the web).</p>
        <p class="skill">I have over 20 projects done using HTML, CSS, javaScript(ES6), PHP, animations, 3D interactive objects, and currently, I learn new javaScript libraries, React and Vue.</p>
        <p>If you want to know more about me you can <a href="#s4" class="link contactBTN">contact me</a> or check my <a href="#s4" class="link contactBTN"> socials</a>.</p>
      </div>
    </div>
    
    <model-viewer src="about10.glb" class="laptop l2" style="width: 40%; height: 100vh; margin: auto 0 auto auto;" alt="A 3D model of a Cube" auto-rotate camera-controls shadow-intensity="0"></model-viewer>
      </div>


      <div class="swiper-slide slide three" id="s3">
      <div class="nav_bar2">
      <div class="nume2">
      <!--  <img src="logo.png" style="width: 80px">-->
      
      <a href="#s1" class="logo_link logo2">
        <span >Tudor</span>
        <span >Crisan</span>
      </a>
      </div>

      <div class="hamburger2">
        <div class="line2"></div>
        <div class="line2"></div>
        <div class="line2"></div>
      </div>

      <div class="nav_bar_icon2">
      <a href="#s1" class="menu__item2 icon9 iconNAVBAR" data-tooltip="Home"><ion-icon name="home-outline" ></ion-icon></a>
  <br>
        <a href="#s2" class="menu__item2 icon10 iconNAVBAR" data-tooltip="About"><ion-icon name="finger-print-outline" ></ion-icon></a>
  <br>
        <a href="#s3" class="menu__item2 icon11 iconNAVBAR" data-tooltip="Projects"><ion-icon name="list-outline" class="active"></ion-icon></a>
  <br>
        <a href="#s4" class="menu__item2 icon12 iconNAVBAR"  data-tooltip="Contact"><ion-icon name="mail-outline" ></ion-icon></a>
      </div>
      </div>
      <!--<ion-icon name="logo-github" style="font-size: 80px; margin-left:180px"></ion-icon>-->
      <div class="grid-container">
        <div><a href="https://flamboyant-ramanujan-d978b0.netlify.app" target="_blank"><img src="site1-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://pensive-tereshkova-8948df.netlify.app" target="_blank"><img src="site2-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://epic-hawking-09ff29.netlify.app" target="_blank"><img src="site5-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://zealous-hoover-5c12f2.netlify.app" target="_blank"><img src="site4-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://angry-murdock-85580c.netlify.app" target="_blank"><img src="site3-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://cranky-pasteur-5901b7.netlify.app" target="_blank"><img src="site15-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://affectionate-colden-15d0a9.netlify.app" target="_blank"><img src="site7-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://awesome-lewin-a47b76.netlify.app" target="_blank"><img src="site8-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://frosty-tesla-4de8c5.netlify.app" target="_blank"><img src="site9-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://suspicious-blackwell-bb554e.netlify.app" target="_blank"><img src="site11-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://reverent-swirles-96e07b.netlify.app" target="_blank"><img src="site10-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://xenodochial-williams-b63334.netlify.app" target="_blank"><img src="site12-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://determined-ride-16e1fc.netlify.app" target="_blank"><img src="site13-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://keen-easley-48d33b.netlify.app" target="_blank"><img src="site14-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://dreamy-bhaskara-cf380d.netlify.app" target="_blank"><img src="site16-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://hungry-clarke-c7939c.netlify.app" target="_blank"><img src="site17-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://adoring-curran-64bd2e.netlify.app" target="_blank"><img src="site6-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <div><a href="https://jovial-wescoff-b11c83.netlify.app" target="_blank"><img src="site18-min.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div><div>
        <a href="https://romantic-mcclintock-c1e58a.netlify.app" target="_blank"><img src="iarna.PNG" style="width:19vw ; height: 24vh;" class="img"></a></div>
        <a href="https://github.com/Sm03KeR/Projects" target="_blank" style="text-decoration: none;"><div class="github"><ion-icon name="logo-github" class="github_icon"></ion-icon><p class="github_text">Source code for all my projects</p></div></a>
      </div>
      <p class="projects_text">Projects</p>
      <div class="slider">
      <div class="slider-items">
          <div  class="item active">
             <a href="https://flamboyant-ramanujan-d978b0.netlify.app" target="_blank"><img src="site1-min.PNG"></a>
             <div class="caption">
               Budget app <span style="color: #7f5af0;">1/19</span>
             </div>
          </div>
          <div  class="item">
             <a href="https://pensive-tereshkova-8948df.netlify.app" target="_blank"><img src="site2-min.PNG"></a>
             <div class="caption">
                Bank app <span style="color: #7f5af0;">2/19</span>
             </div>
          </div>
          <div  class="item">
          <a href="https://epic-hawking-09ff29.netlify.app" target="_blank"> <img src="site5-min.PNG"></a>
             <div class="caption">
                To Do list <span style="color: #7f5af0;">3/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://zealous-hoover-5c12f2.netlify.app" target="_blank"> <img src="site4-min.PNG"></a>
             <div class="caption">
                Clock <span style="color: #7f5af0;">4/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://angry-murdock-85580c.netlify.app" target="_blank"> <img src="site3-min.PNG"></a>
             <div class="caption">
                Calculator <span style="color: #7f5af0;">5/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://cranky-pasteur-5901b7.netlify.app" target="_blank"> <img src="site15-min.PNG"></a>
             <div class="caption">
                Quiz app <span style="color: #7f5af0;">6/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://affectionate-colden-15d0a9.netlify.app" target="_blank"> <img src="site7-min.PNG"></a>
             <div class="caption">
                Countdown app <span style="color: #7f5af0;">7/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://awesome-lewin-a47b76.netlify.app" target="_blank"> <img src="site8-min.PNG"></a>
             <div class="caption">
                Ping Game <span style="color: #7f5af0;">8/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://frosty-tesla-4de8c5.netlify.app" target="_blank"> <img src="site9-min.PNG"></a>
             <div class="caption">
                Map app <span style="color: #7f5af0;">9/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://suspicious-blackwell-bb554e.netlify.app" target="_blank"> <img src="site11-min.PNG"></a>
             <div class="caption">
                Music app <span style="color: #7f5af0;">10/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://reverent-swirles-96e07b.netlify.app" target="_blank"> <img src="site10-min.PNG"></a>
             <div class="caption">
                Hiroshima <span style="color: #7f5af0;">11/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://xenodochial-williams-b63334.netlify.app" target="_blank"> <img src="site12-min.PNG"></a>
             <div class="caption">
                Login page <span style="color: #7f5af0;">12/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://determined-ride-16e1fc.netlify.app" target="_blank"> <img src="site13-min.PNG"></a>
             <div class="caption">
                Password generator <span style="color: #7f5af0;">13/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://keen-easley-48d33b.netlify.app" target="_blank"> <img src="site14-min.PNG"></a>
             <div class="caption">
                Product landing page <span style="color: #7f5af0;">14/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://dreamy-bhaskara-cf380d.netlify.app" target="_blank"> <img src="site16-min.PNG"></a>
             <div class="caption">
                Random color generator <span style="color: #7f5af0;">15/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://hungry-clarke-c7939c.netlify.app" target="_blank"> <img src="site17-min.PNG"></a>
             <div class="caption">
                Survey form <span style="color: #7f5af0;">16/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://adoring-curran-64bd2e.netlify.app" target="_blank"> <img src="site6-min.PNG"></a>
             <div class="caption">
                Convert case app <span style="color: #7f5af0;">17/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://jovial-wescoff-b11c83.netlify.app" target="_blank"> <img src="site18-min.PNG"></a>
             <div class="caption">
                Tehnical Documentation <span style="color: #7f5af0;">18/19</span>
             </div>
          </div>

          <div  class="item">
          <a href="https://romantic-mcclintock-c1e58a.netlify.app" target="_blank"> <img src="iarna.PNG"></a>
             <div class="caption">
                Vertical Slider <span style="color: #7f5af0;">19/19</span>
             </div>
          </div>

        

      </div>
        <!-- slider controls -->
          <div class="left-slide"><ion-icon name="arrow-back-outline" class="semne"></ion-icon></div>
          <div class="right-slide"><ion-icon name="arrow-forward-outline" class="semne"></ion-icon></div>
        <!-- slider controls -->
      </div>
      <a href="https://github.com/Sm03KeR/Projects" target="_blank" style="text-decoration:none;" class="source_code">Source code for all projects</a>
      </div>


      <div class="swiper-slide slide four" id="s4">
      <div class="nav_bar3">
      <div class="nume3">
      <!--  <img src="logo.png" style="width: 80px">-->
      
      <a href="#s1" class="logo_link logo3">
        <span>Tudor</span>
        <span>Crisan</span>
      </a>
      </div>

      <div class="hamburger3">
        <div class="line3"></div>
        <div class="line3"></div>
        <div class="line3"></div>
      </div>

      <div class="nav_bar_icon3">
      <a href="#s1" class="menu__item3 icon13 iconNAVBAR" data-tooltip="Home"><ion-icon name="home-outline" ></ion-icon></a>
  <br>
        <a href="#s2" class="menu__item3 icon14 iconNAVBAR" data-tooltip="About"><ion-icon name="finger-print-outline" ></ion-icon></a>
  <br>
        <a href="#s3" class="menu__item3 icon15 iconNAVBAR" data-tooltip="Projects"><ion-icon name="list-outline" ></ion-icon></a>
  <br>
        <a href="#s4" class="menu__item3 icon16 iconNAVBAR" data-tooltip="Contact"><ion-icon name="mail-outline" class="active"></ion-icon></a>
      </div>
      </div>
<div class="flex_contact">
      <div class="contact_form">
        <h1 class="contact_s4"><span class="q">C</span><span class="q">o</span><span class="q">n</span><span class="q">t</span><span class="q">a</span><span class="q">c</span><span class="q">t </span> <span class="nimic">shgdyuweqfesfwsefdfuwfq</span></h1>

        <form id="myForm" method="POST" action="index.php">
    
          <input id="name" type="text" name="name" placeholder="Enter Name" required>
  
          <input id="email" type="email" name="email" placeholder="Enter Email" required>
          <br><br>
    
          <input id="subject" type="text" name="subject" placeholder=" Enter Subject" required>  
          <br><br>

          <textarea id="body" rows="5" name="body" placeholder="Type Message" required></textarea>
          <br><br>
    
          <!--<input type="submit" name="submit" value="SUBMIT" class="btn_submit">-->
          <button type="submit" name="submit" value="SUBMIT" class="btn_submit">SUBMIT <ion-icon name="send-outline" class="icon_sent"></ion-icon></button>
        </form>
        <h4 class="sent-notification"></h4>
        <h3 style="color: #94a1b2;">or</h3>

        <div class="icons">
        <a href="https://github.com/Sm03KeR" target="_blank"><ion-icon name="logo-github" class="icon_social i1"></ion-icon></a>
        <a href="https://www.linkedin.com/in/tudor-crisan-3ba77a202/" target="_blank"><ion-icon name="logo-linkedin" class="icon_social i2"></ion-icon></a>
        <a href="https://www.instagram.com/tudor_crisan1231/?hl=royou" target="_blank"><ion-icon name="logo-instagram" class="icon_social i4"></ion-icon></a>
        <a href="https://www.facebook.com/tudor.crisan.9/" target="_blank"><ion-icon name="logo-facebook" class="icon_social i3"></ion-icon></a>
        <a href="mailto:crisantudor79@yahoo.com" target="_blank"><ion-icon name="mail-open-outline" class="icon_social i5"></ion-icon></a>
        </div>
      </div>
      <div class="harta">
        <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d709289.3875975605!2d22.90158792234281!3d46.01794487078058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749298e7855da65%3A0xd9b1b7a6aef8d5d7!2sJude%C8%9Bul%20Alba!5e0!3m2!1sro!2sro!4v1609769097504!5m2!1sro!2sro" width="100%" height="1000px" frameborder="0" style="border:0; padding: 0; margin-top: -20px;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></p>
      </div>
  
</div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>




    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
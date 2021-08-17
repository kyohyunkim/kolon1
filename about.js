    // ----------buger-----------------------------------
    const elBuger = document.querySelector('.menu-trigger');
    const elNav = document.querySelector('.nav');
    const elLi = document.querySelectorAll('.nav li');
        elBuger.addEventListener('click',function(){
            this.classList.toggle('active-1');
            elNav.classList.toggle('active');
            for(let i=0; i<elLi.length; i++){
                elLi[i].classList.toggle('active');
            }
        })
        console.log(elBuger);
    // ----------checkbox---------------------------------
    const elAbtn = document.querySelector('.news-letter .check');
    const elAact = document.querySelector('.news-letter .checked');
        elAbtn.addEventListener('click',function(){
            elAact.classList.toggle('active');
        })
        elAact.addEventListener('click',function(){
            this.classList.remove('active');
        })
    // ----------aside---------------------------------
    const elAside = document.querySelector(".aside aside");

    window.addEventListener("scroll", () => {

    let domHei = document.documentElement.offsetHeight;
    let winHei = window.innerHeight;

    if(domHei - winHei <= window.scrollY){ 
    }
    if(winHei < window.scrollY){ 
        elAside.classList.add("active");
    }else{
        elAside.classList.remove("active");
    }
    });
    // ----------Logo---------------------------------
    const elLogo = document.querySelector('header');

    window.addEventListener("scroll",() =>{

    if(winHei = window.scrollY){
        elLogo.classList.add("active");
    }else{
        elLogo.classList.remove("active");
    }
    });


        //---------animation_con1--------------------------
        const elAbout = document.querySelector('.con1 .t-1 .about div');
        const elBigtext = document.querySelectorAll('.con1 .t-1 .bigText div li');
        const elYellow = document.querySelector('.con1 .yellow');
        const elYimg = document.querySelector('.con1 .y-img img');
        const elYtext = document.querySelector('.con1 .y-img span');
        
        //side_menu//
    
        //CON-1 글씨-ani//
        setTimeout(() => {
            for(let i=0; i<elBigtext.length; i++){
                elBigtext[i].classList.add('active');
            }
            elAbout.classList.add('active');
            elYellow.classList.add('active');
        }, 500);
        setTimeout(() => {
            elYimg.classList.add('active');
            elYtext.classList.add('active');
        }, 100);
    
        // con2 -----------------------------------------------

        const elCon2 = document.querySelector('.con2');
        const elBig = document.querySelectorAll('.con2 .big div li');
        const elCspan = document.querySelector('.con2 .count span');
        const elCimg1 = document.querySelector('.con2 article .count img');
        


        
        let bln = true;
        window.addEventListener('scroll',function(){

            // let domHei = document.documentElement.offsetHeight;
            let winHei = window.innerHeight;
            let elCon2Top = elCon2.offsetTop;

            function count(){
                $({ val : 0 }).animate({ val : 20 }, {
                    duration: 500,
                    step: function() {
                      var num = numberWithCommas(Math.floor(this.val));
                      $(elCspan).text(num);
                    },
                    complete: function() {
                      var num = numberWithCommas(Math.floor(this.val));
                      $(elCspan).text(num);
                    }
                  });
                  
                  function numberWithCommas(x) {
                      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  }
            }

            setTimeout(() => {
                for(let i=0; i<elBig.length; i++){
                    if(400 <= window.scrollY){
                        elBig[i].classList.add('active');
                    }else{
                        elBig[i].classList.remove('active');
                    }
                }
                if(400 <= window.scrollY){
                    elCimg1.classList.add('active');
                    // elCimg2.classList.add('active');
                }else{
                    elCimg1.classList.remove('active');
                    // elCimg2.classList.remove('active');
                }
            }, 1000);
            
            
      
                console.log(400 <= window.scrollY)
                if(elCon2Top - winHei <= window.scrollY){
                    // count();
                    if(bln){
                        bln=false;
                        count();
                    }
                }else {
                    bln=true;
                    
                }
                
        })


        //----------------con3----------------------------------
        const elCon3 = document.querySelector('.con3');
        const elCbig = document.querySelectorAll('.con3 .box-1 .big div li');
        const elC3box = document.querySelector('.con3 .b-box');
        const elCone = document.querySelector('.con3 .img');

        const elC_2_left = document.querySelector('.left_con2');
        const elC_2_left_p = document.querySelector('.left_con2 div p');
        const elC_3_left = document.querySelector('.left_con3');
        const elC_3_left_p = document.querySelector('.left_con3 div p');
        const elRight1 = document.querySelector('.right div .r-1');
        const elRight2 = document.querySelector('.right div .r-2');
        const elRight3 = document.querySelector('.right div .r-3');

        window.addEventListener('scroll',function(){

            setTimeout(() => {
                for(let i=0; i<elCbig.length; i++){
                    if(1400 <= window.scrollY){
                        elCbig[i].classList.add('active');
                    }else{
                        elCbig[i].classList.remove('active');
                    }
                }
            }, 500);

            setTimeout(() => {
                    if(1844 <= window.scrollY){
                        elCone.classList.add('active');
                    }else{
                        elCone.classList.remove('active');
                    }
            }, 500);

            if(1844 <= window.scrollY){
                elC3box.classList.add('active');
            }else{
                elC3box.classList.remove('active');
            }

            setTimeout(() => {
                if(1844 <= window.scrollY){
                    elC_2_left.classList.add('active');
                    elC_2_left_p.classList.add('active');
                    elRight1.classList.add('active');
                }else{
                    elC_2_left.classList.remove('active');
                    elC_2_left_p.classList.remove('active');
                    elRight1.classList.remove('active');
                }
            }, 3000);

            setTimeout(() => {
                if(1844 <= window.scrollY){
                    elRight2.classList.add('active');
                }else{
                    elRight2.classList.remove('active');
                }
            }, 3500);

            setTimeout(() => {
                if(1844 <= window.scrollY){
                    elC_3_left.classList.add('active');
                    elC_3_left_p.classList.add('active');
                    elRight3.classList.add('active');
                }else{
                    elC_3_left.classList.remove('active');
                    elC_3_left_p.classList.remove('active');
                    elRight3.classList.remove('active');
                }
            }, 4000);
            
        })

        //con3 leftcon u-1
        const elUs1 = document.querySelector('.con3 .box-2 .left_con1 .u-1 .st-1');
        const elUs3 = document.querySelector('.con3 .box-2 .left_con1 .u-1 .st-3');
        const uSvgid = document.getElementById("cls-1");
        const uSvgclass = document.getElementsByClassName("Layer_1");
        
        const elUto1 = document.querySelector('.con3 .box-2 .left_con1 .u-2 .st-1');
        const elUto2 = document.querySelector('.con3 .box-2 .left_con1 .u-2 .st-3');

        const elUto3 = document.querySelector('.con3 .box-2 .left_con1 .u-3 .st-1');
        const elUto4 = document.querySelector('.con3 .box-2 .left_con1 .u-3 .st-3');
        
        console.log(elUto1);
        window.addEventListener('scroll',function(){

                if(1844 <= window.scrollY){
                    elUs1.classList.add('active');
                    elUto1.classList.add('active');
                    elUto3.classList.add('active');
                }else{
                    elUs1.classList.remove('active');
                    elUto1.classList.remove('active');
                    elUto3.classList.remove('active');
                }

                setTimeout(() => {
                    if(1844 <= window.scrollY){
                        elUs3.classList.add('active');
                        elUto2.classList.add('active');
                        elUto4.classList.add('active');
                    }else{
                        elUs3.classList.remove('active');
                        elUto2.classList.remove('active');
                        elUto4.classList.remove('active');
                    }
                }, 1000);
            
        })
        

        //---------con4---------------------------------------------------
        const elCon4 = document.querySelector('.con4 .img-2 .top-text div');
        const elC4big = document.querySelectorAll('.con4 .img-2 .big li');
        const elC4botT = document.querySelectorAll('.con4 .img-2 .bottom-text ul li:nth-of-type(even) b');

        const elC4img1 = document.querySelector('.con4 .bg-img .i-1');
        const elC4img2 = document.querySelector('.con4 .bg-img .i-2');
        const elC4img3 = document.querySelector('.con4 .bg-img .i-3');
        const elC4img4 = document.querySelector('.con4 .bg-img .i-4');
        const elC4img5 = document.querySelector('.con4 .bg-img .i-5');
        const elC4img6 = document.querySelector('.con4 .bg-img .i-6');
        const elC4img7 = document.querySelector('.con4 .bg-img .i-7');
        const elC4img8 = document.querySelector('.con4 .bg-img .i-8');
        const elC4img9 = document.querySelector('.con4 .bg-img .i-9');
        const elC4img10 = document.querySelector('.con4 .bg-img .i-10');
        const elC4img11 = document.querySelector('.con4 .bg-img .i-11');
        const elC4img12 = document.querySelector('.con4 .bg-img .i-12');

        window.addEventListener('scroll',function(){
            let winHei = window.innerHeight;
            let elCon4Top = elCon4.offsetTop;

            console.log(elCon4Top);
            console.log(winHei);
            console.log(elCon4Top-winHei);
            console.log(window.scrollY)
            
            setTimeout(() => {
                for(let i=0; i<elC4big.length; i++){
                    if(4100 <= window.scrollY){
                        elC4big[i].classList.add('active');
                    }else{
                        elC4big[i].classList.remove('active');
                    }
                }
                
            }, 1000);

            setTimeout(() => {
                for(let i=0; i<elC4botT.length; i++){
                    if(4400 <= window.scrollY){
                        elC4botT[i].classList.add('active');
                    }else{
                        elC4botT[i].classList.remove('active');
                    }
                }
            }, 1000);
            
            setTimeout(() => {
                if(4100 <= window.scrollY){
                    elC4img1.classList.add('active');
                    elC4img3.classList.add('active');
                }else{
                    elC4img1.classList.remove('active');
                    elC4img3.classList.remove('active');
                }
            }, 500);
            setTimeout(() => {
                if(4100 <= window.scrollY){
                    elC4img2.classList.add('active');
                    elC4img4.classList.add('active');
                }else{
                    elC4img2.classList.remove('active');
                    elC4img4.classList.remove('active');
                }
            }, 1000);
            setTimeout(() => {
                if(4400 <= window.scrollY){
                    elC4img5.classList.add('active');
                }else{
                    elC4img5.classList.remove('active');
                }
            }, 2000);
            setTimeout(() => {
                if(4400 <= window.scrollY){
                    elC4img6.classList.add('active');
                }else{
                    elC4img6.classList.remove('active');
                }
            }, 3000);
            setTimeout(() => {
                if(4400 <= window.scrollY){
                    elC4img7.classList.add('active');
                }else{
                    elC4img7.classList.remove('active');
                }
            }, 3500);

            setTimeout(() => {
                if(4400 <= window.scrollY){
                    elC4img8.classList.add('active');
                }else{
                    elC4img8.classList.remove('active');
                }
            }, 3500);
            
            setTimeout(() => {
                if(4400 <= window.scrollY){
                    elC4img9.classList.add('active');
                }else{
                    elC4img9.classList.remove('active');
                }
            }, 4000);

            setTimeout(() => {
                if(4430 <= window.scrollY){
                    elC4img10.classList.add('active');
                }else{
                    elC4img10.classList.remove('active');
                }
            }, 4500);

            setTimeout(() => {
                if(4400 <= window.scrollY){
                    elC4img11.classList.add('active');
                }else{
                    elC4img11.classList.remove('active');
                }
            }, 5000);

            setTimeout(() => {
                if(4400 <= window.scrollY){
                    elC4img12.classList.add('active');
                }else{
                    elC4img12.classList.remove('active');
                }
            }, 5500);
           
        })
        
        //------------con5--------------------------------------------
        const elCimg = document.querySelectorAll('.con5 ul div li');
        const elH5 = document.querySelector('.con5 h5 div');
        const elH3 = document.querySelectorAll('.con5 h3 div p');
        const elLineimg1 = document.querySelector('.con5 .move1');
        const elLineimg2 = document.querySelector('.con5 .move2');
        const elLineimg3 = document.querySelector('.con5 .move3');

        let bbllnn = true
        let pos = {y:0, y2:0, state:''}
        console.log(elH3);

        window.addEventListener('scroll',function(){

            function count2(){
                $({ val : 0 }).animate({ val : 80 }, {
                    duration: 900,
                    step: function() {
                      var num = numberWithCommas(Math.floor(this.val));
                      $(elH5).text(num);
                    },
                    complete: function() {
                      var num = numberWithCommas(Math.floor(this.val));
                      $(elH5).text(num);
                    }
                  });
                  
                  function numberWithCommas(x) {
                      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  }
            }

            setTimeout(() => {
                for(let i=0; i<elCimg.length; i++){
                    if(5000 <= window.scrollY){
                        elCimg[i].classList.add('active');
                    }else{
                        elCimg[i].classList.remove('active');
                    }
                }
            }, 500);

            //-------h3-----------------

            setTimeout(() => {
                for(let i=0; i<elH3.length; i++){
                    if(5000 <= window.scrollY){
                        elH3[i].classList.add('active');
                    }else{
                        elH3[i].classList.remove('active');
                    }
                }
            }, 500);

            

            if(5000 <= window.scrollY){
                if(bbllnn){
                    bbllnn=false;
                    count2();
                }
            }else {
                bbllnn=true;
            }

        //-------------------------------------
        let elHeight = 5000;
        let yy = elHeight - this.scrollY;


        pos.y = window.scrollY;
        if(pos.y > pos.y2){
            pos.state = true;                
        }else{
            pos.state = false;
        }
        pos.y2 = pos.y;

            if(pos.state){
                yy = yy;
            }else{
                yy = yy;
            }

            elLineimg1.style.transform = `translateX(${-yy/3}px)`;
            elLineimg2.style.transform = `translateX(${yy*1.5}px)`;
            elLineimg3.style.transform = `translateX(${yy/2}px)`;
            
        })
        
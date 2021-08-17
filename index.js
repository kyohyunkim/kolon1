    //side-menu------------------------------------------

    const elSide = document.querySelector('.side_menu .nav');
    const elA = document.querySelectorAll('.side_menu .nav li a');
    const elA1 = document.querySelectorAll('.side_menu .nav li:nth-of-type(1) a');
    const elMain = document.querySelector('main');
    const elScon2 = document.querySelector('.con2');
    const elScon3 = document.querySelector('.con3');
    const elScon4 = document.querySelector('.con4');
    const elPort1 = document.querySelector('.port');

    window.addEventListener('scroll',function(){

        let winHei = window.innerHeight;
        let elMain1 = elSide.offsetTop;
        let elMain2 = elSide.offsetTop + 800;
        let elCon2Height = elScon2.offsetTop + 400;
        let elCon2Height2 = elScon2.offsetTop + 700;
        let elCon3Height = elScon3.offsetTop + 400;
        let elCon3Height2 = elScon3.offsetTop + 700;
        let elCon4Height = elScon4.offsetTop + 400;
        let elPortHei = elPort1.offsetTop;
        console.log(window.scrollY);
            if(0 <= window.scrollY && window.scrollY <= elMain2){
                elA[3].classList.add('active');
            }else{
                elA[3].classList.remove('active');
            }
            if(elCon2Height-winHei <= window.scrollY && window.scrollY <= elCon2Height2){
                elA[2].classList.add('active');
            }else{
                elA[2].classList.remove('active');
            }

            if(elCon3Height-winHei <= window.scrollY && window.scrollY <= elCon3Height2){
                elA[1].classList.add('active');
            }else{
                elA[1].classList.remove('active');
            }

            if(elCon4Height-winHei <= window.scrollY){
                elA[0].classList.add('active');
            }else{
                elA[0].classList.remove('active');
            }
            if(elPortHei-winHei <= window.scrollY){
                elSide.classList.add('active');
            }else{
                elSide.classList.remove('active');
            }
    })

    console.log(elA);

    let elCon4Height = elScon4.offsetTop - 200;
    let elCon3Height = elScon3.offsetTop - 200;
    let elCon2Height = elScon2.offsetTop - 200;

    function load(k){
        window.scrollTo({top:k, behavior:'smooth'});
    };

    elA[0].addEventListener('click',function(){
        load(elCon4Height);
    })
    elA[1].addEventListener('click',function(){
        load(elCon3Height);
    })
    elA[2].addEventListener('click',function(){
        load(elCon2Height);
    })
    elA[3].addEventListener('click',function(){
        load(0);
    })


    
    
    
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

    let domHei = document.documentElement.offsetHeight;
    let winHei = window.innerHeight;

    if(winHei = window.scrollY){
        elLogo.classList.add("active");
    }else{
        elLogo.classList.remove("active");
    }
    });
    //---------animation_con1--------------------------
    const elSide1 = document.querySelector('.side_menu div .nav');
    const elCon1text1 = document.querySelectorAll('.con1 .bigText-1 ul li');
    const elCon1text2 = document.querySelectorAll('.con1 .bigText-2 ul li');
    const elCon1text3 = document.querySelectorAll('.con1 .smallText-1 ul li');

    const elBtnline = document.querySelector('.con1 .btn .line');
    const elBtntext = document.querySelector('.con1 .btn .text');

    const elPerson = document.querySelector('.bg-img1 .person-img');
    const elLine = document.querySelector('.bg-img1 .line-img');
    const elDivtext = document.querySelector('.bg-img1 div');

    console.log(elSide1);
    
    //side_menu//

    //CON-1 글씨-ani//
    setTimeout(() => {
        for(let i=0; i<elCon1text1.length; i++){
            elCon1text1[i].classList.add('active');
        }
        for(let i=0; i<elCon1text2.length; i++){
            elCon1text2[i].classList.add('active');
        }
        for(let i=0; i<elCon1text3.length; i++){
            elCon1text3[i].classList.add('active');
        }
            elPerson.classList.add('active');
            elLine.classList.add('active');
            elDivtext.classList.add('active');
            elSide1.classList.add('active1');
            elA[3].classList.add('active');
        
    }, 800);

    // 사람/배경/글씨-ani//
    window.addEventListener("scroll",function(){

        let domHei = document.documentElement.offsetHeight;
        let winHei = window.innerHeight;
        let elBtnHei = elBtnline.offsetTop;

        if(winHei/4 >= window.scrollY){
            elPerson.classList.add('active');
            elLine.classList.add('active');
            elDivtext.classList.add('active');
        }else{
            elPerson.classList.remove('active');
            elLine.classList.remove('active');
            elDivtext.classList.remove('active');
        };

        // 자세히보기btn-ani//
        setTimeout(() => {
        if(elBtnHei-winHei <= window.scrollY){  
            elBtntext.classList.add('active');             
        }else{
            elBtntext.classList.remove('active');
        }
        }, 500);
        if(elBtnHei-winHei <= window.scrollY){              
            elBtnline.classList.add('active');   
        }else{
            elBtnline.classList.remove('active');
        }
    })
    //---------animation_con2--------------------------
    const elCon2text2 = document.querySelectorAll('.con2 .bigText-2 ul li');
    const elCon2text3 = document.querySelectorAll('.con2 .smallText-1 ul li');
    const elPerson2 = document.querySelector('.bg-img2 .person-img');
    const elLine2 = document.querySelector('.bg-img2 .line-img');
    const elBtnline2 = document.querySelector('.con2 .btn .line');
    const elBtntext2 = document.querySelector('.con2 .btn .text');
    const elCon2 = document.querySelector('.con2');

    window.addEventListener("scroll",function(){

    let domHei = document.documentElement.offsetHeight;
    let winHei = window.innerHeight;
    let elCon2Top = elCon2.offsetTop;
    let elCon2Bottom = elCon2.offsetTop;
    let elBtnHei2 = elBtnline2.offsetTop;
    
    //이미지 에니메이션
    setTimeout(() => {
        if(elCon2Top*1.4 - winHei <= window.scrollY  && window.scrollY <= elCon2Bottom ){
        elPerson2.classList.add('active');
        elLine2.classList.add('active');
    }else{
        elPerson2.classList.remove('active');
        elLine2.classList.remove('active');
    };
    }, 500);
    
    //글씨 에니메이션
    setTimeout(() => {
        for(let i=0; i<elCon2text2.length; i++){
            if(elCon2Top*1.25 - winHei <= window.scrollY && window.scrollY <= elCon2.offsetTop + 650 ){
                elCon2text2[i].classList.add('active');
            }else{
                elCon2text2[i].classList.remove('active');
            }
        }
    }, 700);
    setTimeout(() => {
        for(let i=0; i<elCon2text3.length; i++){
            if(elCon2Top*1.25 - winHei <= window.scrollY && window.scrollY <= elCon2.offsetTop + 650 ){
                elCon2text3[i].classList.add('active');
            }else{
                elCon2text3[i].classList.remove('active');
            }
        }
    }, 1000);

    // con2 - 자세히보기 - btn-ani//
    setTimeout(() => {
    if(elBtnHei2-winHei <= window.scrollY){  
        elBtntext2.classList.add('active');             
    }else{
        elBtntext2.classList.remove('active');
    }
    }, 800);
    if(elBtnHei2-winHei <= window.scrollY){              
        elBtnline2.classList.add('active');   
    }else{
        elBtnline2.classList.remove('active');
    }
    })

    //---------animation_con3--------------------------
    const elCon3text2 = document.querySelectorAll('.con3 .bigText-2 ul li');
    const elCon3text3 = document.querySelectorAll('.con3 .smallText-1 ul li');
    const elPerson3 = document.querySelector('.bg-img3 .person-img');
    const elLine3 = document.querySelector('.bg-img3 .line-img');
    const elText3 = document.querySelector('.bg-img3 div');
    const elBtnline3 = document.querySelector('.con3 .btn .line');
    const elBtntext3 = document.querySelector('.con3 .btn .text');
    const elCon3 = document.querySelector('.con3');

    window.addEventListener("scroll",function(){

    let domHei = document.documentElement.offsetHeight;
    let winHei = window.innerHeight;
    let elCon3Top = elCon3.offsetTop;
    let elCon3Bottom = elCon3.offsetTop;
    let elBtnHei3 = elBtnline3.offsetTop;
    
    //이미지 에니메이션
    setTimeout(() => {
        if(elCon3Top*1.2 - winHei <= window.scrollY  && window.scrollY <= elCon3Bottom ){
            elPerson3.classList.add('active');
            elLine3.classList.add('active');
            elText3.classList.add('active');
        }else{
            elPerson3.classList.remove('active');
            elLine3.classList.remove('active');
            elText3.classList.remove('active');
        };
    },100);
    
    //글씨 에니메이션
    setTimeout(() => {
        for(let i=0; i<elCon3text2.length; i++){
            if(elCon3Top + 300 - winHei <= window.scrollY && window.scrollY <= elCon3.offsetTop + 650 ){
                elCon3text2[i].classList.add('active');
            }else{
                elCon3text2[i].classList.remove('active');
            }
        }
    }, 700);
    setTimeout(() => {
        for(let i=0; i<elCon3text3.length; i++){
            if(elCon3Top + 300 - winHei <= window.scrollY && window.scrollY <= elCon3.offsetTop + 650 ){
                elCon3text3[i].classList.add('active');
            }else{
                elCon3text3[i].classList.remove('active');
            }
        }
    }, 1000);

    // con3 - 자세히보기 - btn-ani//
    setTimeout(() => {
    if(elBtnHei3-winHei <= window.scrollY){  
        elBtntext3.classList.add('active');             
    }else{
        elBtntext3.classList.remove('active');
    }
    }, 800);
    if(elBtnHei3-winHei <= window.scrollY){              
        elBtnline3.classList.add('active');   
    }else{
        elBtnline3.classList.remove('active');
    }
    })

    //---------animation_con4--------------------------
    const elCon4text2 = document.querySelectorAll('.con4 .bigText-2 ul li');
    const elCon4text3 = document.querySelectorAll('.con4 .smallText-1 ul li');
    const elPerson4 = document.querySelector('.bg-img4 .person-img');
    const elLine4 = document.querySelector('.bg-img4 .line-img');
    const elText4 = document.querySelector('.bg-img4 div');
    const elBtnline4 = document.querySelector('.con4 .btn .line');
    const elBtntext4 = document.querySelector('.con4 .btn .text');
    const elCon4 = document.querySelector('.con4');

    window.addEventListener("scroll",function(){

    let winHei = window.innerHeight;
    let elCon4Top = elCon4.offsetTop;
    let elCon4Bottom = elCon4.offsetTop + 100;
    let elBtnHei4 = elBtnline4.offsetTop;
    
    //이미지 에니메이션
    setTimeout(() => {
        if(elCon4Top + 500 - winHei <= window.scrollY && window.scrollY <= elCon4Bottom){
        elPerson4.classList.add('active');
        elLine4.classList.add('active');
        elText4.classList.add('active');
        }else{
            elPerson4.classList.remove('active');
            elLine4.classList.remove('active');
            elText4.classList.remove('active');
    };
    },300);
    
    //글씨 에니메이션
    setTimeout(() => {

        for(let i=0; i<elCon4text2.length; i++){
            if(elCon4Top + 100 - winHei <= window.scrollY){
                elCon4text2[i].classList.add('active');
            }else{
                elCon4text2[i].classList.remove('active');
            }
        }
    }, 700);
    setTimeout(() => {
        for(let i=0; i<elCon4text3.length; i++){
            if(elCon4Top + 100 - winHei <= window.scrollY){
                elCon4text3[i].classList.add('active');
            }else{
                elCon4text3[i].classList.remove('active');
            }
        }
    }, 1000);

    // con4 - 자세히보기 - btn-ani//
    setTimeout(() => {
    if(elBtnHei4-winHei <= window.scrollY){  
        elBtntext4.classList.add('active');             
    }else{
        elBtntext4.classList.remove('active');
    }
    }, 800);
    if(elBtnHei4-winHei <= window.scrollY){              
        elBtnline4.classList.add('active');   
    }else{
        elBtnline4.classList.remove('active');
    }
    })

    // port
    const elPort = document.querySelector('.port');
    const elPorttext = document.querySelector('.port .name div li');
    const elBtntext5 = document.querySelector('.port .name .text');
    const elBtnline5 = document.querySelector('.port .name .line');

    window.addEventListener('scroll',function(){

        let winHei = window.window.innerHeight;
        let elHeight = elPort.offsetTop;

        if(elHeight-winHei <= window.scrollY){
            elPorttext.classList.add('active');
        }else{
            elPorttext.classList.remove('active');
        }
    

    // port - 전체보기 - btn-ani//
    setTimeout(() => {
        if(elHeight-winHei <= window.scrollY){  
            elBtntext5.classList.add('active');             
        }else{
            elBtntext5.classList.remove('active');
        }
        }, 800);
        if(elHeight-winHei <= window.scrollY){              
            elBtnline5.classList.add('active');   
        }else{
            elBtnline5.classList.remove('active');
        }
    })
    
    // Yellow box

    const elYellow = document.querySelector('.yellow');
    const elY1 = document.querySelector('.yellow div .y-2');
    const elY2 = document.querySelector('.yellow div .y-3');
    const elYtext = document.querySelectorAll('.yellow .y-text ul div li');
    const elYbtntext = document.querySelector('.yellow .btn .text');
    const elYbtnline = document.querySelector('.yellow .btn .line');

    window.addEventListener('scroll',function(){
        
        let winHei = window.innerHeight;
        let elHeight = elYellow.offsetTop + 200;

        setTimeout(() => {
            if(elHeight-winHei <= window.scrollY){
                elYellow.classList.add('active');
                elY1.classList.add('active');
                elY2.classList.add('active');
    
            }else{
                elYellow.classList.remove('active');
                elY1.classList.remove('active');
                elY2.classList.remove('active');
            }
        }, 1000);
        
            setTimeout(() => {
                if(elHeight-winHei <= window.scrollY){  
                    elYbtntext.classList.add('active');             
                }else{
                    elYbtntext.classList.remove('active');
                }
            }, 1500);
            setTimeout(() => {
                if(elHeight-winHei <= window.scrollY){              
                    elYbtnline.classList.add('active');   
                }else{
                    elYbtnline.classList.remove('active');
                }
            }, 500);

            setTimeout(() => {
                for(let i=0; i<elYtext.length; i++){
                if(elHeight-winHei <= window.scrollY){  
                    elYtext[i].classList.add('active');            
                    }else{
                    elYtext[i].classList.remove('active');
                    } 
                }
            }, 1500);
    })

    // 뉴스 
    
    const elNews = document.querySelector('.news');

    const elNtext = document.querySelector('.news .btn .text');
    const elNline = document.querySelector('.news .btn .line');
    const elNname = document.querySelector('.news .name div li');

    const elNimg1 = document.querySelector('.news .news_list .cate1 div');
    const elNimg2 = document.querySelector('.news .news_list .cate2 div');
    const elNimg3 = document.querySelector('.news .news_list .cate3 div');
    const elNli_1 = document.querySelectorAll('.news .news_list .cate1 ul li');
    const elNli_2 = document.querySelectorAll('.news .news_list .cate2 ul li');
    const elNli_3 = document.querySelectorAll('.news .news_list .cate3 ul li');

    console.log(elNews);
    window.addEventListener('scroll',function(){

        let winHei = window.innerHeight;
        let elHeight = elNews.offsetTop + 200;
        let elIf = elHeight-winHei <= window.scrollY;

        if(elIf){
            elNname.classList.add('active');
            elNtext.classList.add('active');
            elNline.classList.add('active');
            elNimg1.classList.add('active');
        }else{
            elNname.classList.remove('active');
            elNtext.classList.remove('active');
            elNline.classList.remove('active');
            elNimg1.classList.remove('active');
            
        }
        for(let i=0; i<elNli_1.length; i++){
            if(elIf){
                elNli_1[i].classList.add('active');
            }else{
                elNli_1[i].classList.remove('active');
            }
        }

        setTimeout(() => {
            if(elIf){
                elNimg2.classList.add('active');
            }else{
                elNimg2.classList.remove('active');
            }
            for(let i=0; i<elNli_2.length; i++){
                if(elIf){
                    elNli_2[i].classList.add('active');
                }else{
                    elNli_2[i].classList.remove('active');
                }
            }
        }, 300);
        setTimeout(() => {
            if(elIf){
                elNimg3.classList.add('active');
            }else{
                elNimg3.classList.remove('active');
            }
            for(let i=0; i<elNli_3.length; i++){
                if(elIf){
                    elNli_3[i].classList.add('active');
                }else{
                    elNli_3[i].classList.remove('active');
                }
            }
        }, 600);
        
    })

    const elCate1 = document.querySelector('.cate1:nth-of-type(1)');
    const elCate2 = document.querySelector('.cate1:nth-of-type(2)');
    const elCate3 = document.querySelector('.cate1:nth-of-type(3)');
    const elCate4 = document.querySelector('.cate1:nth-of-type(4)');

    let pos = {y:0, y2:0, state:''}
    
    window.addEventListener('scroll',function(){

        let elHeight = elPort.offsetTop;
        let yy = elHeight - this.scrollY;


        pos.y = window.scrollY;
        if(pos.y > pos.y2){
            pos.state = true;                
        }else{
            pos.state = false;
        }
        pos.y2 = pos.y;


        setTimeout(() => {
            if(pos.state){
                yy = yy/20;
            }else{
                yy = yy/20;
            }
            elCate1.style.transform = `translateY(${-yy}px)`;
            elCate3.style.transform = `translateY(${-yy}px)`;
            elCate2.style.transform = `translateY(${yy}px)`;
            elCate4.style.transform = `translateY(${yy}px)`;
        }, 150);

        


        

    })

    
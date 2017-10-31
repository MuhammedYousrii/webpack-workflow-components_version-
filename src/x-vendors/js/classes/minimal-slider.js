// isuue to solve ,, stop slider when hover
class minimalSlider {
    constructor(con , slideTag , bullets , bulletsDir,  arrows , speed){
        this._con = con ;
        this._slidesLength = con.find('figure').length ;
        this._activeSlide = con.find('figure.active');
        this._activeSlideIndex = con.find('figure.active').data('index');
        this._bullets = bullets ;
        this._bulletsDir = bulletsDir ;
        this._arrows = arrows ;
        this._sliderSpeed = speed ;
        this._activeClass = 'active'; 
        this._start = 0 ;
        this._bulletsStorage = [];
    }

    logger(){
        console.log(this._con);
        console.log(`slider-length ${this._slidesLength}`);
        console.log(this._activeSlide);
        console.log(`active slide index ${this._activeSlideIndex}`);
        console.log(`bullets Container Class  ${this._bulletsDir}`);
        console.log(`scroll speed ${this._sliderSpeed}`);
    }

    activator(el , type){
        el.addClass(this._activeClass).siblings(type).removeClass(this._activeClass);
        if(type == "figure")this._activeSlide = el ;
    }

    bindEvents(single_bullet){
        const slider = this ;
        single_bullet.on('click' , function(){
            const clickedBullet = $(this);
            let slideID = clickedBullet.data('target');
            let targetSlide = slider._con.find(`figure[data-index="${slideID}"]`)
            // activate main_slide
            slider.activator( clickedBullet, 'li');
            slider.activator(targetSlide , 'figure');
        });
    }
   
    createSingleBullet(bullet_index){
        const bullet = $('<li />').attr({
            'data-target' : bullet_index ,
            'class' : `${bullet_index == 1 ?'active':''}`
        })

        return bullet ;
    }

    bullets(){
        const slider = this ;
        // If user wanna Bullets 
        if(this._bullets){
            
            // Create Bullets Container
            const bulletsCon = $('<ol />').attr({
                id : "minimal-slider-bullets" ,
                // Bootstrap class that slider support 
                class : this._bulletsDir,
            }).appendTo(slider._con);


            // Create Bullets Based On slidesLength
            for (let index = 1; index <= this._slidesLength; index++) {
                let bullet = this.createSingleBullet(index);
                bullet.appendTo(bulletsCon);
                this.bindEvents(bullet);
            }

            return "bullets created";
        }

    }

    autoplay(stop){
        const slider = this ;
        let player = setInterval(function(){
            // if this slide is the final one reset to the first slide
            if(slider._activeSlideIndex == slider._slidesLength) slider._activeSlideIndex = slider._start ;
            //activate next slide 
            slider._con.find(`li[data-target="${++slider._activeSlideIndex}"]`).click();
            // scroll slider with spefice speed
        } ,slider._sliderSpeed);


        if(stop) clearInterval(player);
    }

    activeSlideInteract(){
        const slider = this ;
        this._activeSlide.on('mouseenter' , function(){
            slider.stopSlider();    
        })
    }

    stopSlider(){
        this.autoplay(true);
    }

    init(){
        this.logger();
        this.bullets();
        this.autoplay(false);
        // this._activeSlideInteract();
    }
}


export {minimalSlider} ;
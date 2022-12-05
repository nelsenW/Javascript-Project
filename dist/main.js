!function(){"use strict";!function(){class e{constructor(e){this.canvas=e,this.radius=120*Math.random()+30,this.pos=[2*this.radius+Math.random()*(this.canvas.width-4*this.radius),-this.radius],this.vel=[.2*Math.random()-.1,.5*Math.random()+.5],this.range=30*Math.random(),this.gravity=Math.random(0)}update(){(this.pos[0]<this.radius||this.pos[0]>this.canvas.width-this.radius)&&(this.vel[0]*=-1),this.pos[1]>this.canvas.height+this.radius&&(this.pos[1]=-this.radius,this.vel[1]=.5*Math.random()+.5,this.pos[0]=2*this.radius+Math.random()*(this.canvas.width-4*this.radius)),this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1]}draw(e){e.fillStyle="blue",e.beginPath(),e.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI),e.fill()}}const t={1:{monitorText:"Welcome to the test lab subject #8X75G2, please proceed to the right to begin testing...",tileArray:["#####################","#                   #","#                   #","#                   #","#          s        #","#          #        #","#                   e","#####################"]},2:{monitorText:"For each test all we need to do is make it to the other side of the room...",tileArray:["#####################","#                   #","#                   #","#                   #","#            #      #","#          ###      #","#s       #####      e","#####################"]},3:{monitorText:"To move back and forth in the current room use the arrow keys to your advantage...               Wait until Im done talking jeez...",tileArray:["#####################","#                   #","#                   #","#                   #","#                   e","#              ###  #","#s           # # # ##","#####################"]},4:{monitorText:"Money is tight so if you are dumb enough to fall in a hole we will just get a new test subject...",tileArray:["#####################","#                   #","#                   #","#                   #","#                   #","#                   #","#s                  e","##########  #########"]},5:{monitorText:"Focus on a pad by pressing F and you should be able to change colors.",tileArray:["#####################","#                   e","#                   #","#                   #","#                   #","#                   #","#s                  #","######r##############"]},6:{monitorText:"Thats a big hole... hot damn. Being pink gives you a double jump btw...",tileArray:["#####################","#                   #","#                   #","#                   #","#                   #","#                   #","#s                  e","######p###     ######"]},7:{monitorText:"yellow on the other hand gives you the ability to dash with the D button",tileArray:["#####################","#        #    #     #","#        #    #     #","#        #    #     #","#        #    #     #","#        ######     #","#s                  e","######y## ## # ######"]},8:{monitorText:"Press space to turn blue so you can reabsorb another color",tileArray:["#####################","#         #####     #","#                   #","#              #    #","#        y     #    #","#        #     #    #","#s       #     #    e","######p###     ######"]},9:{monitorText:"Now this is testing so we have been scoring you and tracking your vitals... Here they are.",tileArray:["#####################","#                   #","#         #         e","#      #  #  #      #","#   #     #        ##","#   ###   #    #    #","#s#     #           #","#####################"]},10:{monitorText:"This is extremely important!!! Those pointy things will rip chunks off of you. If you get small enough you will die.",tileArray:["#####################","#                   #","#                   #","#                   #","#                   #","#                   #","#s#                 #","#######^^^#########e#"]},11:{monitorText:"Good luck not getting hurt lmao...",tileArray:["#####################","#                   #","#                   #","#                   #","#                   #","#                   #","#s#         ^       #","#######^^^^#^^#####e#"]},12:{monitorText:"Green pads are a one time use but will restore you a bit of health",tileArray:["#####################","#                   #","#                   #","#                   #","#                   #","#                   #","#s                  #","#######g###########e#"]},13:{monitorText:"Sometimes dying a little bit can help ya out...",tileArray:["##########################","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#####                    #","#    #                   #","#  s ###                 #","#                        #","#^######################e#"]},14:{monitorText:"Only gets harder from here...",tileArray:["##########################","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#           ##           #","#                        #","#      ##                #","#                        #","#  ##                    #","#                        #","#      ##                #","#                        #","######                   #","#    ###                 #","#  s     #               #","#########           ####e#"]},15:{monitorText:"Gonna leave you alone for a bit now... Good luck...",tileArray:["##########################","#                        #","#                        #","#                        #","#          ^^^^          #","#y#                      #","#        ^               #","#        ^               #","#        ^               #","#        ^               #","#      ##^               #","#        ^               #","#  ##    ^               #","#        ^               #","#      ##^               #","#        ^               #","######   ^               #","#    ##^ ^               #","# s      ^               #","###p######          ##g#e#"]},16:{monitorText:"",tileArray:["#^^^^^^^^^^^^^^^^^^^^#","#                    #","#                    #","#                    #","#                    #","#                    #","#                    #","#                    #","#                    #","#                    #","#                    #","#                    #","#        ###         #","#                    #","#                    #","#                    #","#                     ","#                    e","# s                 ##","###r##               #"]},17:{monitorText:"",tileArray:["###                    ###","#                        #","#y                       #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","# s                      #","###r       # #       ###e#"]},18:{monitorText:"Have a little faith...",tileArray:["##########################","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","#                        #","# s                      #","###y_________#_____  ###e#"]},19:{monitorText:"I mean why in all of gods good green earth would you trust me...",tileArray:["##########################","#                    _   #","#                    _   #","#                    _   #","#                    _   #","#                    _   #","#                    _   #","#                    _   #","#                    _   #","#                    _   #","#                 ^  _   #","#                 ^  _   #","#             #   ^  _   #","#                 ^  _   #","#                 ^  _   #","#      #^^^^^^^^^^^  _   #","#       ^            _   #","#p      ^            _   #","# s #   ^                #","#####   ###  ###  ##_###e#"]},20:{monitorText:"Gotta Go fast",tileArray:["##########################","#                  ^     #","# s                  ^   #","###g^^^^^^^^         ^   #","#                    ^   #","#             ^^^^^^^^   #","#                    ^   #","#       ^^^^^^^^     ^   #","#                   ^^^^ #","#                        #","#              ^^^^ ^^^  #","#                    ^   #","#    ^^^^^^^^        ^   #","#                    ^   #","#                    ^   #","# ^^^^^^^^           ^   #","#             ^^^^^^^^   #","#                        #","#                        e","#  ^^^^^^^^^^^^^^^     g##"]},21:{monitorText:"You probably deserve a little break",tileArray:["#####################","#       #           #","#       #           e","#       #   #####g###","#       #   #       #","#       # s #       #","#       #   #       #","#       ###o#       #"]},22:{monitorText:"How about some cake",tileArray:["#####################","#        ^          #","#    g#^ ^          #","#      ^ ^          #","#      ^ ^          #","#      ^ ^        s #","e      ^            #","#######^#^######o####"]},23:{monitorText:"God going backwards feels awful doesnt it...",tileArray:["#####################","#                   #","e                   #","# #          #      #","#      ^^^^         #","#      ^^^^       s #","#                   #","#######   ######p####"]},24:{monitorText:"Lets make it worse",tileArray:["##########################","#    ^^^^^               #","#    #####     ^^^^^  ^  #","#              #####  ^  #","#                    ^^  #","#^^^^^^^^^^^^^^^     #^  #","################      ^s #","#                     ^  #","#^               ^^^^^^  #","##            ^^^#####^  #","#       ^^^^ ^        ^  #","# ^^^^^^#### #     ^^ ^  #","# ######           ## ^  #","#          ^ ^       ^^  #","#^^^^^^^^^^# #^^^    #^  #","##########   ^###     ^  #","#            #        ^  #","#                     ^  #","#  ^^^^^^^^^^^^^^^^^^^^  #","#e####################^rg#"]},25:{monitorText:"This is all franks fault",tileArray:["#^^##########################","#        ^^                 #","#y          ^^              #","#  ^^^^^      ^^            #","#  ^    ^^      ^^          #","## ^      ^^      ^^^^^     #","#  ^        ^^              #","#  ^          ##^^^^^#y#    #","## ^                       ^#","#  ^                     ^^ #","## ^                   ^^   #","#  ^                 ^^     #","#  ^               ^^       #","## ^        #####^^         #","#  ^                        #","#  ^                        #","## ^######################  #","#    _____________________  #","# s  _                   #  e","###o##ggggggggggggggggggg####"]},26:{monitorText:"Almost done with testing oh god...",tileArray:["##############################","#                            #","##r                          #","#      ^^^^^^^^^^^^^^^##    ##","#      ##                    #","#                            #","##o                          #","#                  g#        #","#                    #       #","#                            #","#    s                       #","#                            #","#   ##y#                     #","#   ####                    ##","#    e                       #","#                            #","#                            #","#                            #","#                  ##p       #","#                  ###       #"]},27:{monitorText:"",tileArray:["#                            #","#                            #","#        #      #            #","#                            #","#                            #","# s                          #","#g#r                         #","#^^^^^^^^^^^^^^^^^^^^^^^^^  ##","#^^^^^^^#^^^^^#^^^^^#^^^^^   #","#                            #","#                            #","#                            #","#  ^                         #","#  ^                      r  #","#  ^^^                       #","#  ^  ^^^                    #","#        ^                   #","#         ^^^^^^^^^^^^^^     #","#                            #","#y#      e                   #"]},28:{monitorText:"",tileArray:["#######^               #    ##","#      ^                     #","# s    ^    ###g##r          #","###    ^                  ^  #","#      ^#                 ^  #","#      ^    ^             ^  #","#      ^    #             ^  #","#      ^^                 ^  #","#      ^#                 ^  #","#      ^    ^             ^  #","#      ^    #             ^  #","#   ^^^^                  ^  #","#      ^#                 ^  #","#      ^    ####o ^       ^  #","#      ^        ^ ^       ^  #","#      ^        ^ ^       ^  #","#      ^        ^ ^     ^^^  #","#                 ^^^^^^e    #","#                 ^    #     #","#     y#         p     #    ##"]}},s={red:{lighterShade:[237,151,162],lightShade:[227,99,116],baseShade:[215,38,61],darkShade:[173,31,50],darkerShade:[121,21,35]},orange:{lighterShade:[246,186,162],lightShade:[241,144,106],baseShade:[235,94,40],darkShade:[205,72,19],darkerShade:[149,52,14]},yellow:{lighterShade:[248,232,180],lightShade:[243,215,124],baseShade:[238,198,67],darkShade:[224,177,21],darkerShade:[168,132,16]},green:{lighterShade:[101,246,149],lightShade:[43,243,110],baseShade:[12,202,74],darkShade:[9,154,57],darkerShade:[6,96,36]},blue:{lighterShade:[163,192,244],lightShade:[109,154,238],baseShade:[54,11,231],darkShade:[24,86,201],darkerShade:[17,62,146],163:"lighterShade",109:"lightShade",54:"baseShade",24:"darkShade",17:"darkerShade"},violet:{lighterShade:[112,95,171],lightShade:[85,70,134],baseShade:[57,47,90],darkShade:[34,28,53],darkerShade:[9,7,13]},pink:{lighterShade:[255,184,209],lightShade:[255,133,175],baseShade:[255,71,136],darkShade:[255,31,109],darkerShade:[204,0,71]},clear:{}};class i{constructor(e,t,i,a,h){this.ctx=e,this.pos=i,this.color=t,this.baseShade=s[t].baseShade,this.width=a,this.height=h,this.used=!1}animate(){const e=document.querySelector("#pad-sheet");let t=256*Object.keys(s).indexOf(this.color);this.ctx.drawImage(e,t,0,256,256,this.pos[0],this.pos[1],this.width,this.height)}}class a{constructor(e,t,s,i){this.ctx=e,this.pos=t,this.width=s,this.height=i}animate(){const e=document.querySelector("#spike-sheet");this.ctx.drawImage(e,0,0,256,256,this.pos[0],this.pos[1],this.width,this.height)}}class h{constructor(e,t,s,i){this.ctx=e,this.score=1e3,this.canvas=t,this.monitorText="",this.slime=i,this.objects=this.optionsBreaker(s)}optionsBreaker(e){return this.monitorText=e.monitorText,this.tileMapping(e.tileArray)}tileMapping(e){let t=[],s=this.canvas.width/e[0].length,h=this.canvas.height/e.length;for(let r=0;r<e.length;r++)for(let n=0;n<e[0].length;n++){let c=n*s,d=r*h;switch(e[r][n]){case" ":break;case"e":t.push(new l(this.ctx,[c,d],s,h));break;case"#":t.push(new o(this.ctx,[c,d],s,h,"slategrey"));break;case"_":t.push(new o(this.ctx,[c,d],s,h,"aliceblue"));break;case"r":t.push(new i(this.ctx,"red",[c,d],s,h));break;case"o":t.push(new i(this.ctx,"orange",[c,d],s,h));break;case"y":t.push(new i(this.ctx,"yellow",[c,d],s,h));break;case"g":t.push(new i(this.ctx,"green",[c,d],s,h));break;case"v":t.push(new i(this.ctx,"violet",[c,d],s,h));break;case"p":t.push(new i(this.ctx,"pink",[c,d],s,h));break;case"^":t.push(new a(this.ctx,[c,d],s,h));break;case"s":this.slime.vel=[0,0],this.slime.pos=[c,d]}}return t}}class o{constructor(e,t,s,i,a){this.ctx=e,this.pos=t,this.width=s,this.height=i,this.color=a}animate(){this.ctx.fillStyle=this.color,this.ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height)}}class l{constructor(e,t,s,i){this.ctx=e,this.pos=t,this.width=s,this.height=i,this.color="darkgrey"}animate(){this.ctx.fillStyle=this.color,this.ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height)}}const r={rangedAttack:14,meleeAttack:10,death:11,dash:4,hurt:4,move:7,crouch:9,idle:9,jump:6,land:8};class n{constructor(e,t,s,i){this.pos=e,this.vel=[0,0],this.game=t,this.color="blue",this.canvas=i,this.ctx=s,this.gravity=0,this.terminal_vel=12,this.grav_dir=1,this.jumpCount=0,this.jumpCountMax=1,this.state="idle",this.landing=!1,this.health=64,this.roomHealth=this.health,this.heightMod=this.canvas.width/1080,this.widthMod=this.canvas.width/1920,this.radius=this.health/2*this.widthMod,this.iFrames=!1,this.maxHealth=64,this.damage=10,this.redDmgMod=2,this.ignoreCollision=!1,this.dashCount=0,this.dashCountMax=0,this.floorColor=null,this.moving=!1}animate(e,t){const s=document.querySelector("#slime-sheet");let i=Math.floor(e/t)%r[this.state];"crouch"===this.state&&45===e&&(i=8);let a=128*i,h=128*Object.keys(r).indexOf(this.state);if("blue"!==this.color){this.ctx.drawImage(s,a,h,128,128,this.pos[0],this.pos[1],2*this.radius,2*this.radius);let e=this.focus(this.color);this.ctx.putImageData(e,this.pos[0],this.pos[1])}else this.ctx.drawImage(s,a,h,128,128,this.pos[0],this.pos[1],2*this.radius,2*this.radius);"land"===this.state&&7===i?this.landing=!0:"dash"===this.state&&3===i?(this.vel[0]/=3,this.state="idle"):"rangedAttack"===this.state&&13===i?(this.rangedAttack(),this.moving=!1):"meleeAttack"===this.state&&9===i&&(this.meleeAttack(),this.moving=!1)}updatepos(){this.pos[0]+=this.vel[0],-1===this.grav_dir&&this.vel[1]>-this.terminal_vel?this.vel[1]-=this.gravity:1===this.grav_dir&&this.vel[1]<this.terminal_vel&&(this.vel[1]+=this.gravity),this.pos[1]+=this.vel[1]}move(e){switch(e){case"jump":this.jumpCount>0&&(this.state="jump","pink"===this.color&&1===this.jumpCount?this.vel[1]-=20*Math.sign(this.grav_dir):(this.vel[1]=this.terminal_vel*Math.sign(this.grav_dir),this.vel[1]-=30*Math.sign(this.grav_dir)),this.jumpCount--,this.landing=!1);break;case"move left":this.moving=!0,this.state="move",this.vel[0]=-8;break;case"move right":this.moving=!0,this.vel[0]=8,this.state="move";break;case"crouch":this.crouch();break;case"stop":this.moving=!1,this.state="idle",this.vel[0]=0;break;case"dash":this.dashCount--,this.state="dash",this.vel[0]=24*Math.sign(this.vel[0]);break;case"meleeAttack":this.moving=!0,this.state="meleeAttack";break;case"rangedAttack":this.moving=!0,this.state="rangedAttack"}this.iFrames&&(this.state="hurt")}crouch(){this.state="crouch",this.moving=!0}meleeAttack(){}rangedAttack(){}focus(e){let t=this.ctx.getImageData(this.pos[0],this.pos[1],64,64),i=[];for(let e=3;e<t.data.length;e+=4)i.push(t.data[e]),t.data[e]=0;for(let i=0;i<t.data.length;i+=4){let a=s.blue[t.data[i]];a&&(t.data[i]=s[e][a][0],t.data[i+1]=s[e][a][1],t.data[i+2]=s[e][a][2])}for(let e=3;e<t.data.length;e+=4)t.data[e]=i[(e+1)/4];return t}isCollidedWith(e){if(this.exited=!1,this.horizontalCollision(e)){for(e instanceof l&&(this.exited=!0);this.horizontalCollision(e);)this.pos[0]-=0===Math.sign(this.vel[0])?-1:Math.sign(this.vel[0]);e instanceof a&&!this.iFrames&&this.takeDamage(10),"orange"===this.color&&this.jumpCount<this.jumpCountMax&&this.jumpCount++,this.vel[0]=0}if(this.verticalCollision(e)){for(this.jumpCount<this.jumpCountMax&&Math.abs(this.vel[1])>=0&&(this.state="land",this.jumpCount++),this.dashCount<this.dashCountMax&&this.vel[1]>=0&&this.dashCount++;this.verticalCollision(e);)0===this.vel[1]&&(this.vel[1]=-1),this.pos[1]-=Math.sign(this.vel[1]);this.vel[1]=0,this.floorColor=null,e instanceof i&&(this.floorColor=e),!this.landing||this.moving||this.iFrames||(this.state="idle"),e instanceof l&&(this.exited=!0),e instanceof a&&!this.iFrames&&this.takeDamage(10)}}verticalCollision(e){let t=e.pos[0],s=e.pos[0]+e.width,i=e.pos[1],a=e.pos[1]+e.height;return this.pos[1]+1.5*this.radius+this.vel[1]>=i&&this.pos[1]<=a&&this.pos[0]+2*this.radius-this.vel[0]>=t&&this.pos[0]<=s}horizontalCollision(e){let t=e.pos[0],s=e.pos[0]+e.width,i=e.pos[1],a=e.pos[1]+e.height;return this.pos[0]+2*this.radius>=t&&this.pos[0]<=s&&this.pos[1]+this.radius>=i&&this.pos[1]-this.vel[1]<=a}takeDamage(e){this.state="hurt",this.iFrames=!0,this.health-=e,this.radiusCheck(),setTimeout((()=>{this.iFrames=!1,this.state="idle"}),1e3)}radiusCheck(){let e=this.radius;this.radius=this.health/2,this.health<=32&&(this.radius=17),e<this.radius&&(this.pos[1]-=this.radius-e,this.pos[0]-=this.radius-e),this.radius*=this.widthMod}resetStats(){this.color="blue",this.jumpCountMax=1,this.jumpCount=0,this.ignoreCollision=!1,this.dashCount=0,this.dashCountMax=0,this.gravity=.98,this.grav_dir=1,this.vel[1]=Math.abs(this.vel[1])}}class c{constructor(e,s){var i,a;a=e=>new Promise((t=>setTimeout(t,e))),(i="typeSpeed")in this?Object.defineProperty(this,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[i]=a,this.ctx=e,this.canvas=s,this.slime=new n([.54*this.canvas.width,.42*this.canvas.height],this,this.ctx,this.canvas),this.currentLevel=1,this.level=new h(this.ctx,this.canvas,t[this.currentLevel],this.slime),this.frame=0,this.stagger=5,this.monitor=document.querySelector(".monitor"),this.scoreFrame=document.querySelector(".score"),this.healthFrame=document.querySelector(".health"),this.scoreText=document.getElementById("score"),this.healthBar=document.getElementById("health"),this.deathFrame=document.querySelector(".deaths"),this.deathText=document.getElementById("deaths"),this.deaths=0,this.score=0,this.allObjects=this.level.objects,this.tutorialFinished=!1,this.generateLevel()}step(){this.moveObjects(),this.checkCollisions()}draw(e,t){this.level.score--,e.clearRect(0,0,t.width,t.height),this.allObjects.forEach((e=>{e.animate(this.frame,this.stagger)})),this.slime.animate(this.frame,this.stagger),this.currentLevel>=9&&(this.scoreFrame.style.display="inline",this.healthFrame.style.display="inline-block",this.deathFrame.style.display="inline",this.deathText.textContent=this.deaths,this.scoreText.textContent=this.score,this.healthBar.value=this.slime.health),this.frame++}moveObjects(){this.slime.updatepos()}checkCollisions(){for(let e=0;e<this.allObjects.length;e++)this.slime.isCollidedWith(this.allObjects[e]),this.slime.exited&&!0===this.tutorialFinished&&this.nextLevel()}checkGameStatus(){return this.slime.pos[1]>this.canvas.height||this.slime.pos[1]+this.slime.health<0||this.slime.health<=0}nextLevel(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;this.score+=this.level.score,this.slime.exited=!1,this.currentLevel+=e-1,this.level=new h(this.ctx,this.canvas,t[this.currentLevel],this.slime),this.allObjects=this.level.objects,this.slime.resetStats(),this.slime.roomHealth=this.slime.health,this.tutorialFinished=!1,this.generateLevel()}async generateLevel(){const e=document.querySelector("#monitor-text");e.textContent="";let t=this.level.monitorText;for(let s=0;s<t.length;s++)await this.typeSpeed(50),e.textContent+=t[s];this.allObjects[this.allObjects.findIndex((e=>e instanceof l))].color="lightgreen",this.tutorialFinished=!0}}class d{constructor(e,t){this.ctx=e,this.canvas=t,this.game=new c(this.ctx,this.canvas),this.paused=!1,this.pauseMenu=document.getElementById("pause-menu"),this.gameOverScreen=document.querySelector(".game-over-screen"),this.gameOverMenu=document.querySelector("#game-over-menu"),this.finalScore=document.getElementById("final-score"),this.pauseMenu.addEventListener("click",this.pauseCallback.bind(this))}start(){window.requestAnimationFrame(this.gameLoop.bind(this))}gameLoop(){if(!this.paused){if(this.game.checkGameStatus())return this.gameOverScreen.style.display="flex",this.gameOverMenu.style.display="flex",this.finalScore.textContent=this.game.score,void window.cancelAnimationFrame(this.gameLoop);this.game.step(),this.game.draw(this.ctx,this.canvas),window.requestAnimationFrame(this.gameLoop.bind(this))}}pause(){this.pauseMenu.style.display="flex",this.paused=!0}pauseCallback(e){const t=document.getElementById("resume");e.target===t&&this.resume()}resume(){this.pauseMenu.style.display="none",this.paused=!1,this.gameLoop()}bindKeyHandlers(){window.addEventListener("keydown",(e=>{switch(e.code){case"Space":this.game.slime.resetStats();break;case"ArrowUp":!0===this.game.slime.landing&&(this.game.frame=0),this.game.slime.move("jump");break;case"ArrowLeft":this.game.slime.move("move left");break;case"ArrowRight":this.game.slime.move("move right");break;case"ArrowDown":this.game.frame>45?this.game.frame=0:this.game.frame>40&&(this.game.frame=40),this.game.slime.move("crouch");break;case"KeyD":this.game.slime.dashCount>=this.game.slime.dashCountMax&&"yellow"===this.game.slime.color&&(this.game.frame=0,this.game.slime.move("dash"));break;case"KeyF":let e=this.game.slime.floorColor.color;if("blue"===this.game.slime.color)switch(e){case"red":this.game.slime.vel[1]*=-1,this.game.slime.grav_dir=-1,this.game.slime.color="red";break;case"orange":this.game.slime.color="orange";break;case"yellow":this.game.slime.dashCountMax=1,this.game.slime.color="yellow";break;case"green":if(this.game.slime.color="green",this.game.slime.health<this.game.slime.maxHealth){let e=this.game.slime.maxHealth-this.game.slime.health;this.game.slime.health+=e>20?20:e,this.game.allObjects[this.game.allObjects.findIndex((e=>e instanceof i&&"green"===e.color))].color="clear",this.game.slime.radiusCheck()}break;case"violet":this.game.slime.color="violet",this.game.slime.ignoreCollision=!0;break;case"pink":this.game.slime.jumpCountMax=2,this.game.slime.jumpCount=2,this.game.slime.color="pink"}break;case"KeyP":this.pause();break;case"KeyA":this.game.slime.move("meleeAttack"),this.game.frame=0;break;case"KeyS":this.game.slime.move("rangedAttack"),this.game.frame=0;break;case"KeyR":this.game.deaths++,this.game.score-=1e3,this.game.slime.health=this.game.slime.roomHealth,this.game.slime.resetStats(),this.game.slime.radiusCheck(),this.game.level=new h(this.ctx,this.canvas,t[this.game.currentLevel],this.game.slime)}})),window.addEventListener("keyup",(e=>{switch(e.code){case"ArrowRight":case"ArrowLeft":case"ArrowDown":this.game.slime.move("stop")}}))}}document.addEventListener("DOMContentLoaded",(()=>{const s=document.querySelector("body"),i=document.getElementById("startgame"),a=document.querySelector(".start-menu"),o=document.getElementById("close-button"),l=document.getElementById("close-button2"),r=document.getElementById("close-button3"),c=document.getElementById("about"),m=document.querySelector(".about-menu"),u=document.querySelectorAll(".controls"),g=document.querySelector(".controls-menu"),y=document.querySelector(".game-over-screen"),p=document.querySelector("#game-over-menu"),v=document.querySelectorAll(".main-menu"),w=document.querySelector(".monitor"),b=document.getElementById("retry"),k=document.querySelector("#levels-selector-list"),x=document.getElementById("levels"),f=document.querySelector(".levels-selector"),S=document.querySelector("#canvas"),_=document.getElementById("canvas2"),C=_.getContext("2d"),A=S.getContext("2d"),M=["red","orange","yellow","green","blue","violet","pink"];S.height=window.innerHeight,S.width=window.innerWidth,_.height=window.innerHeight,_.width=window.innerWidth;let T=new d(A,S);b.addEventListener("click",(()=>{y.style.display="none",p.style.display="none",T.game.deaths++,T.game.score-=1e3,T.game.slime.health=T.game.slime.roomHealth,T.game.slime.resetStats(),T.game.slime.radiusCheck(),T.game.level=new h(A,S,t[T.game.currentLevel],T.game.slime),T.start()}));for(const[e,s]of Object.entries(t)){let t=document.createElement("button");t.id=`level-${e}`,t.textContent=e,k.appendChild(t)}k.addEventListener("click",(e=>{w.style.display="flex",S.style.filter="none",S.style.backgroundColor="aliceblue",s.requestFullscreen(),window.cancelAnimationFrame(B),L=!0,clearInterval(I),f.style.display="none",T.game.nextLevel(+e.target.textContent),T.start(),j()}));const j=()=>{T.game.slime.color="blue",T.bindKeyHandlers(),T.game.slime.gravity=.98};v.forEach((e=>{e.addEventListener("click",(()=>{window.location.reload()}))})),i.addEventListener("click",(()=>{w.style.display="flex",S.style.filter="none",S.style.backgroundColor="aliceblue",s.requestFullscreen(),window.cancelAnimationFrame(B),L=!0,clearInterval(I),a.style.display="none",T.start(),j()})),c.addEventListener("click",(()=>{a.style.display="none",m.style.display="flex"})),x.addEventListener("click",(()=>{a.style.display="none",f.style.display="flex"})),u.forEach((e=>{e.addEventListener("click",(()=>{a.style.display="none",g.style.display="flex"}))})),o.addEventListener("click",(()=>{m.style.display="none",a.style.display="flex"})),l.addEventListener("click",(()=>{a.style.display="flex",g.style.display="none"})),r.addEventListener("click",(()=>{a.style.display="flex",f.style.display="none"}));let L=!1,E=[],F=5,I=setInterval((()=>{q.color=M[F%7],F++}),500);(t=>{for(let t=0;t<30;t++)E.push(new e(S))})();let q=new n([0,0],void 0,C,_),O=0;const B=()=>{A.clearRect(0,0,S.width,S.height),C.clearRect(0,0,_.width,_.height),O++,E.forEach((e=>e.update())),E.forEach((e=>e.draw(A))),q.animate(O,5),L||window.requestAnimationFrame(B)};window.requestAnimationFrame(B)}))}()}();
//# sourceMappingURL=main.js.map
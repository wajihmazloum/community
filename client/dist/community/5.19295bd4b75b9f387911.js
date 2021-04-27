(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jcJX:function(e,t,a){"use strict";a.r(t),a.d(t,"AccountModule",function(){return p});var i=a("ofXK"),n=a("3Pt+"),l=a("tyNb"),o=a("fXoL"),r=a("UbJi"),s=a("7fM4");const b=[{path:"profile",component:(()=>{class e{constructor(e,t,a){this.auth=e,this.router=t,this.socketService=a,this.email="",this.password="",this.username="",this.profileImage="",this.socket=this.socketService.socket}ngOnInit(){this.auth.onAuthStateChanged(e=>{e?this.socket.emit("user",{userUid:e.uid},e=>{this.profileImage=e[0].profileImage,this.username=e[0].username,this.email=e[0].email}):this.router.navigate(["/account/logs"])})}logout(){this.auth.onAuthStateChanged(e=>{e?this.auth.signOut().then(()=>{this.router.navigate(["/"])}).catch(e=>{alert(e)}):console.log("no user")})}reset(){this.auth.onAuthStateChanged(e=>{this.auth.sendPasswordResetEmail(e.email).then(()=>{alert("an email is sent to you")}).catch(e=>{alert(e)})})}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(r.a),o.Ib(l.e),o.Ib(s.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-account"]],decls:26,vars:3,consts:[["id","pills-tab","role","tablist",1,"nav","nav-pills","mb-3"],["role","presentation",1,"nav-item"],["id","pills-profile-tab","data-bs-toggle","pill","data-bs-target","#pills-profile","type","button","role","tab","aria-controls","pills-profile","aria-selected","false",1,"nav-link","active"],["id","pills-logout-tab","data-bs-toggle","pill","data-bs-target","#pills-logout","type","button","role","tab","aria-controls","pills-login","aria-selected","false",1,"nav-link"],[1,"container"],["id","pills-tabContent",1,"tab-content"],["id","pills-profile","role","tabpanel","aria-labelledby","pills-profile-tab",1,"tab-pane","fade","show","active"],[1,"mb-3"],["alt","",3,"src"],[1,"form-floating","mb-3"],["type","email","id","floatingInput","placeholder","name@example.com",1,"form-control",3,"ngModel","ngModelChange"],["for","floatingInput"],[1,"form-floating"],["type","text","id","profileUsername","placeholder","Password",1,"form-control",3,"ngModel","ngModelChange"],["for","profileUsername"],["id","pills-logout","role","tabpanel","aria-labelledby","pills-logout-tab",1,"tab-pane","fade"],[1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(o.Lb(0,"ul",0),o.Lb(1,"li",1),o.Lb(2,"button",2),o.fc(3,"Profile"),o.Kb(),o.Kb(),o.Lb(4,"li",1),o.Lb(5,"button",3),o.fc(6,"Account"),o.Kb(),o.Kb(),o.Kb(),o.Lb(7,"section",4),o.Lb(8,"div",5),o.Lb(9,"div",6),o.Lb(10,"h1",7),o.fc(11,"profile"),o.Kb(),o.Jb(12,"img",8),o.Lb(13,"div",9),o.Lb(14,"input",10),o.Sb("ngModelChange",function(e){return t.email=e}),o.Kb(),o.Lb(15,"label",11),o.fc(16,"Email address"),o.Kb(),o.Kb(),o.Lb(17,"div",12),o.Lb(18,"input",13),o.Sb("ngModelChange",function(e){return t.username=e}),o.Kb(),o.Lb(19,"label",14),o.fc(20,"username"),o.Kb(),o.Kb(),o.Kb(),o.Lb(21,"div",15),o.Lb(22,"button",16),o.Sb("click",function(){return t.logout()}),o.fc(23,"Log out"),o.Kb(),o.Lb(24,"button",16),o.Sb("click",function(){return t.reset()}),o.fc(25,"Reset password"),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&e&&(o.yb(12),o.Yb("src",t.profileImage,o.cc),o.yb(2),o.Xb("ngModel",t.email),o.yb(4),o.Xb("ngModel",t.username))},directives:[n.a,n.c,n.d],styles:["img[_ngcontent-%COMP%]{width:90px;height:90px;border-radius:100%;display:block;margin-left:auto;margin-right:auto;margin-top:1%}.btn-primary[_ngcontent-%COMP%]{width:80%;margin:5%}.nav-pills[_ngcontent-%COMP%]{margin:13% 3%}"]}),e})()},{path:"logs",component:(()=>{class e{constructor(e,t,a){this.auth=e,this.router=t,this.socketService=a,this.email="",this.password="",this.username="",this.profileImage="",this.socket=a.socket}ngOnInit(){this.auth.onAuthStateChanged(e=>{e&&this.router.navigate(["/account/profile"])})}register(){this.auth.createUserWithEmailAndPassword(this.email,this.password).then(e=>{""==this.profileImage&&(this.profileImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"),this.socket.emit("userProfile",{email:this.email,username:this.username,uid:e.user.uid,profileImage:this.profileImage})}).then(()=>{this.router.navigate(["/account/profile"])}).catch(e=>{alert(e)})}login(){this.auth.signInWithEmailAndPassword(this.email,this.password).then(()=>{this.router.navigate(["/"])}).catch(e=>{alert(e)})}handleInputChange(e){var t=e.dataTransfer?e.dataTransfer.files[0]:e.target.files[0],a=new FileReader;t.type.match(/image-*/)?(a.onload=this._handleReaderLoaded.bind(this),a.readAsDataURL(t),document.getElementById("profileImage").hidden=!1):alert("invalid format")}_handleReaderLoaded(e){this.profileImage=e.target.result}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(r.a),o.Ib(l.e),o.Ib(s.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-register"]],decls:44,vars:6,consts:[["id","pills-tab","role","tablist",1,"nav","nav-pills","mb-3"],["role","presentation",1,"nav-item"],["id","pills-register-tab","data-bs-toggle","pill","data-bs-target","#pills-register","type","button","role","tab","aria-controls","pills-home","aria-selected","true",1,"nav-link","active"],["id","pills-login-tab","data-bs-toggle","pill","data-bs-target","#pills-login","type","button","role","tab","aria-controls","pills-profile","aria-selected","false",1,"nav-link"],[1,"container"],["id","pills-tabContent",1,"tab-content"],["id","pills-register","role","tabpanel","aria-labelledby","pills-register-tab",1,"tab-pane","fade","show","active"],["id","profileImage","alt","",3,"src"],[1,"mb-3"],[1,"form-floating","mb-3"],["type","email","id","registerEmail","placeholder","name@example.com",1,"form-control",3,"ngModel","ngModelChange"],["for","registerEmail"],["type","password","id","registerPassword","placeholder","Password",1,"form-control",3,"ngModel","ngModelChange"],["for","registerPassword"],["type","text","id","username","placeholder","name@example.com",1,"form-control",3,"ngModel","ngModelChange"],["for","username"],["for","formFile"],["type","file","id","formFile",1,"form-control",3,"change"],[1,"btn","btn-warning",3,"click"],["id","pills-login","role","tabpanel","aria-labelledby","pills-login-tab",1,"tab-pane","fade"],["type","email","id","loginEmail","placeholder","name@example.com",1,"form-control",3,"ngModel","ngModelChange"],["for","loginEmail"],["type","password","id","loginPassword","placeholder","Password",1,"form-control",3,"ngModel","ngModelChange"],["for","loginPassword"]],template:function(e,t){1&e&&(o.Lb(0,"ul",0),o.Lb(1,"li",1),o.Lb(2,"button",2),o.fc(3,"Register"),o.Kb(),o.Kb(),o.Lb(4,"li",1),o.Lb(5,"button",3),o.fc(6,"Log in"),o.Kb(),o.Kb(),o.Kb(),o.Lb(7,"section",4),o.Lb(8,"div",5),o.Lb(9,"div",6),o.Jb(10,"img",7),o.Lb(11,"h1",8),o.fc(12,"Register"),o.Kb(),o.Lb(13,"div",9),o.Lb(14,"input",10),o.Sb("ngModelChange",function(e){return t.email=e}),o.Kb(),o.Lb(15,"label",11),o.fc(16,"Email address"),o.Kb(),o.Kb(),o.Lb(17,"div",9),o.Lb(18,"input",12),o.Sb("ngModelChange",function(e){return t.password=e}),o.Kb(),o.Lb(19,"label",13),o.fc(20,"Password"),o.Kb(),o.Kb(),o.Lb(21,"div",9),o.Lb(22,"input",14),o.Sb("ngModelChange",function(e){return t.username=e}),o.Kb(),o.Lb(23,"label",15),o.fc(24,"username"),o.Kb(),o.Kb(),o.Lb(25,"div",8),o.Lb(26,"label",16),o.fc(27,"profile image"),o.Kb(),o.Lb(28,"input",17),o.Sb("change",function(e){return t.handleInputChange(e)}),o.Kb(),o.Kb(),o.Lb(29,"button",18),o.Sb("click",function(){return t.register()}),o.fc(30,"Register"),o.Kb(),o.Kb(),o.Lb(31,"div",19),o.Lb(32,"h1",8),o.fc(33,"Log in"),o.Kb(),o.Lb(34,"div",9),o.Lb(35,"input",20),o.Sb("ngModelChange",function(e){return t.email=e}),o.Kb(),o.Lb(36,"label",21),o.fc(37,"Email address"),o.Kb(),o.Kb(),o.Lb(38,"div",9),o.Lb(39,"input",22),o.Sb("ngModelChange",function(e){return t.password=e}),o.Kb(),o.Lb(40,"label",23),o.fc(41,"Password"),o.Kb(),o.Kb(),o.Lb(42,"button",18),o.Sb("click",function(){return t.login()}),o.fc(43,"Log in"),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&e&&(o.yb(10),o.Yb("src",t.profileImage,o.cc),o.yb(4),o.Xb("ngModel",t.email),o.yb(4),o.Xb("ngModel",t.password),o.yb(4),o.Xb("ngModel",t.username),o.yb(13),o.Xb("ngModel",t.email),o.yb(4),o.Xb("ngModel",t.password))},directives:[n.a,n.c,n.d],styles:["img[_ngcontent-%COMP%]{width:90px;height:90px;border-radius:100%;display:block;margin-left:auto;margin-right:auto;margin-top:1%}.nav-pills[_ngcontent-%COMP%]{margin:13% 3%}.btn-warning[_ngcontent-%COMP%]{margin-top:3%}"]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[l.g.forChild(b)],l.g]}),e})();var c=a("spgP"),g=a("AytR");let p=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[i.b,d,n.b,c.a.initializeApp(g.a.firebaseConfig),r.b]]}),e})()}}]);